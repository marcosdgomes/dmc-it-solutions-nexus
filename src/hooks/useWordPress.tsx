
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
  link: string
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
      alt_text: string
    }>
    'wp:term'?: Array<Array<{
      id: number
      name: string
      slug: string
    }>>
  }
}

interface WordPressConfig {
  apiUrl: string
  username: string
  password: string
  siteTitle?: string
  siteDescription?: string
}

export const useWordPress = () => {
  const [config, setConfig] = useState<WordPressConfig>(() => {
    const saved = localStorage.getItem('wp-config')
    return saved ? JSON.parse(saved) : { 
      apiUrl: '', 
      username: '', 
      password: '',
      siteTitle: 'DMC IT Solutions',
      siteDescription: 'Especialistas em DevOps, automações, infraestrutura em nuvem'
    }
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

  const fetchCategories = async (): Promise<Array<{id: number, name: string, slug: string}>> => {
    if (!config.apiUrl) return []
    
    try {
      const response = await fetch(`${config.apiUrl}/categories?per_page=100`, {
        headers: config.username && config.password ? {
          'Authorization': `Basic ${btoa(`${config.username}:${config.password}`)}`
        } : {}
      })
      
      if (!response.ok) {
        return []
      }
      
      return response.json()
    } catch {
      return []
    }
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

  const { data: categories } = useQuery({
    queryKey: ['wordpress-categories', config.apiUrl],
    queryFn: fetchCategories,
    enabled: !!config.apiUrl,
  })

  const syncMutation = useMutation({
    mutationFn: fetchPosts,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wordpress-posts'] })
      queryClient.invalidateQueries({ queryKey: ['wordpress-categories'] })
    },
  })

  return {
    posts: posts || [],
    categories: categories || [],
    isLoading,
    error,
    config,
    saveConfig,
    testConnection,
    syncPosts: () => syncMutation.mutate(),
    isSync: syncMutation.isPending,
  }
}
