
import { useState, useEffect } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

interface WordPressPost {
  id: number
  title: { rendered: string }
  content: { rendered: string }
  excerpt: { rendered: string }
  date: string
  author: number
  featured_media: number
  slug: string
  status: string
}

interface WordPressConfig {
  apiUrl: string
  username: string
  password: string
}

export const useWordPress = () => {
  const [config, setConfig] = useState<WordPressConfig>(() => {
    const saved = localStorage.getItem('wp-config')
    return saved ? JSON.parse(saved) : { apiUrl: '', username: '', password: '' }
  })

  const queryClient = useQueryClient()

  const saveConfig = (newConfig: WordPressConfig) => {
    setConfig(newConfig)
    localStorage.setItem('wp-config', JSON.stringify(newConfig))
  }

  const fetchPosts = async (): Promise<WordPressPost[]> => {
    if (!config.apiUrl) return []
    
    const response = await fetch(`${config.apiUrl}/posts?per_page=20&_embed`, {
      headers: config.username && config.password ? {
        'Authorization': `Basic ${btoa(`${config.username}:${config.password}`)}`
      } : {}
    })
    
    if (!response.ok) {
      throw new Error('Erro ao buscar posts do WordPress')
    }
    
    return response.json()
  }

  const testConnection = async () => {
    try {
      const response = await fetch(`${config.apiUrl}/posts?per_page=1`)
      return response.ok
    } catch {
      return false
    }
  }

  const { data: posts, isLoading, error, refetch } = useQuery({
    queryKey: ['wordpress-posts', config.apiUrl],
    queryFn: fetchPosts,
    enabled: !!config.apiUrl,
  })

  const syncMutation = useMutation({
    mutationFn: fetchPosts,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wordpress-posts'] })
    },
  })

  return {
    posts: posts || [],
    isLoading,
    error,
    config,
    saveConfig,
    testConnection,
    syncPosts: () => syncMutation.mutate(),
    isSync: syncMutation.isPending,
  }
}
