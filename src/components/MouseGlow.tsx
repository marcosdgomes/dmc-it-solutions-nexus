
import React, { useEffect, useRef } from 'react';

const MouseGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });
  const animationId = useRef<number>();
  const isMobile = useRef(false);

  useEffect(() => {
    // Check if device is mobile/touch
    isMobile.current = window.matchMedia('(max-width: 768px)').matches || 
                     'ontouchstart' in window;

    if (isMobile.current) {
      return; // Disable on mobile devices
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const glow = glowRef.current;
      
      if (!glow) return;

      // Enhanced glow for interactive elements
      if (target.matches('a, button, [role="button"], input, textarea, select')) {
        glow.style.background = `radial-gradient(circle 200px at center, 
          rgba(56, 88, 233, 0.25) 0%, 
          rgba(56, 88, 233, 0.15) 30%, 
          rgba(56, 88, 233, 0.08) 60%, 
          transparent 80%)`;
        glow.style.transform = `translate(-50%, -50%) scale(1.3)`;
      }
    };

    const handleMouseLeave = () => {
      const glow = glowRef.current;
      if (!glow) return;

      // Reset to default glow
      glow.style.background = `radial-gradient(circle 180px at center, 
        rgba(148, 163, 184, 0.15) 0%, 
        rgba(148, 163, 184, 0.08) 40%, 
        rgba(148, 163, 184, 0.04) 70%, 
        transparent 85%)`;
      glow.style.transform = `translate(-50%, -50%) scale(1)`;
    };

    const animate = () => {
      const glow = glowRef.current;
      if (!glow) return;

      // Smooth following with easing
      const ease = 0.12;
      currentPosition.current.x += (mousePosition.current.x - currentPosition.current.x) * ease;
      currentPosition.current.y += (mousePosition.current.y - currentPosition.current.y) * ease;

      glow.style.left = `${currentPosition.current.x}px`;
      glow.style.top = `${currentPosition.current.y}px`;

      animationId.current = requestAnimationFrame(animate);
    };

    // Initialize position
    currentPosition.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    // Start animation
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
    };
  }, []);

  // Don't render on mobile
  if (typeof window !== 'undefined' && 
      (window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window)) {
    return null;
  }

  return (
    <div
      ref={glowRef}
      className="fixed pointer-events-none z-50 w-0 h-0"
      style={{
        background: `radial-gradient(circle 180px at center, 
          rgba(148, 163, 184, 0.15) 0%, 
          rgba(148, 163, 184, 0.08) 40%, 
          rgba(148, 163, 184, 0.04) 70%, 
          transparent 85%)`,
        transform: 'translate(-50%, -50%)',
        transition: 'background 0.3s ease, transform 0.3s ease',
        mixBlendMode: 'screen',
        width: '360px',
        height: '360px',
        borderRadius: '50%',
        filter: 'blur(2px)',
      }}
    />
  );
};

export default MouseGlow;
