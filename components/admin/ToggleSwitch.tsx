'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff } from 'lucide-react'
import { BlogPost } from '@/types/blog'

interface TogglePostButtonProps {
  post: BlogPost
}

export default function TogglePostButton({ post }: TogglePostButtonProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleToggle = async () => {
    setLoading(true)

    try {
      const response = await fetch('/api/posts/toggle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          id: post.id, 
          active: !post.active 
        }),
      })

      if (response.ok) {
        router.refresh()
      }
    } catch (error) {
      console.error('Toggle error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleToggle}
      disabled={loading}
      className="flex items-center justify-center border border-black/20 p-2 hover:border-black hover:bg-black hover:text-white transition-colors disabled:opacity-50"
    >
      {loading ? (
        <span className="w-3.5 h-3.5 border border-current border-t-transparent animate-spin rounded-full" />
      ) : post.active ? (
        <EyeOff size={14} />
      ) : (
        <Eye size={14} />
      )}
    </button>
  )
}