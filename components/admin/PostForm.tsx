'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { uploadMultipleImages } from '@/lib/uploadImage'
import { X, Upload, Loader2 } from 'lucide-react'

interface PostFormProps {
  post?: {
    id: string
    title: string
    content: string
    images: string[] | null
    active: boolean
  }
}

export default function PostForm({ post }: PostFormProps) {
  const router = useRouter()
  const [title, setTitle] = useState(post?.title || '')
  const [content, setContent] = useState(post?.content || '')
  const [images, setImages] = useState<string[]>(post?.images || [])
  const [active, setActive] = useState(post?.active ?? true)
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    setUploading(true)
    setError('')

    try {
      const fileArray = Array.from(files)
      const uploadedUrls = await uploadMultipleImages(fileArray)
      setImages([...images, ...uploadedUrls])
    } catch (err) {
      console.error('Upload error:', err)
      setError('Failed to upload images. Please try again.')
    } finally {
      setUploading(false)
    }
  }

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!title.trim()) {
      setError('Title is required')
      return
    }
    
    if (!content.trim()) {
      setError('Content is required')
      return
    }

    setSaving(true)
    setError('')

    try {
      const endpoint = post ? '/api/posts/update' : '/api/posts/create'
      const body = post 
        ? { id: post.id, title, content, images, active }
        : { title, content, images, active }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to save post')
      }

      router.push('/admin/dashboard')
      router.refresh()
    } catch (err) {
      console.error('Save error:', err)
      setError(err instanceof Error ? err.message : 'Failed to save post')
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Title */}
      <div className="border border-black/10 p-6">
        <label htmlFor="title" className="block font-inter text-xs tracking-widest uppercase text-gray-700 mb-3">
          Title *
        </label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title..."
          required
          className="font-cormorant text-2xl font-light border-0 border-b border-black/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-black"
        />
      </div>

      {/* Content */}
      <div className="border border-black/10 p-6">
        <label htmlFor="content" className="block font-inter text-xs tracking-widest uppercase text-gray-700 mb-3">
          Content *
        </label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your post content..."
          required
          rows={12}
          className="font-inter text-sm border-0 rounded-none px-0 focus-visible:ring-0 resize-none"
        />
        <p className="font-inter text-xs text-gray-400 mt-2 border-t border-black/10 pt-2">
          {content.length} characters
        </p>
      </div>

      {/* Images */}
      <div className="border border-black/10 p-6">
        <label className="block font-inter text-xs tracking-widest uppercase text-gray-700 mb-4">
          Images
        </label>

        {/* Upload Button */}
        <div className="mb-6">
          <label className="cursor-pointer">
            <div className="border border-dashed border-black/30 hover:border-black p-10 text-center transition-colors">
              <Upload className="mx-auto mb-3 text-gray-400" size={32} />
              <p className="font-inter text-sm text-black mb-1">Click to upload images</p>
              <p className="font-inter text-xs text-gray-400">PNG, JPG, WEBP up to 10MB each</p>
            </div>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              disabled={uploading}
              className="hidden"
            />
          </label>
        </div>

        {/* Uploading State */}
        {uploading && (
          <div className="flex items-center justify-center gap-3 py-4 text-gray-600">
            <Loader2 className="animate-spin" size={18} />
            <span className="font-inter text-sm">Uploading images...</span>
          </div>
        )}

        {/* Image Preview Grid */}
        {images.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((url, index) => (
              <div
                key={index}
                className="relative group overflow-hidden bg-gray-100 aspect-square"
              >
                <img
                  src={url}
                  alt={`Upload ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-2 right-2 bg-black text-white p-1.5 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-800"
                >
                  <X size={14} />
                </button>
                <div className="absolute bottom-2 left-2 bg-black/70 text-white font-inter text-xs px-2 py-1">
                  Image {index + 1}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Active Toggle */}
      <div className="border border-black/10 p-6">
        <label className="flex items-center justify-between cursor-pointer">
          <div>
            <p className="font-inter text-xs tracking-widest uppercase text-gray-700 mb-1">
              Publish Status
            </p>
            <p className="font-inter text-xs text-gray-400">
              {active ? 'Post is visible to public' : 'Post is hidden from public'}
            </p>
          </div>
          <div className="relative">
            <input
              type="checkbox"
              checked={active}
              onChange={(e) => setActive(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-14 h-7 bg-gray-200 peer peer-checked:bg-black peer-checked:after:translate-x-7 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:border-gray-300 after:h-6 after:w-6 after:transition-all"></div>
          </div>
        </label>
      </div>

      {/* Error Message */}
      {error && (
        <div className="border border-black px-4 py-3 font-inter text-sm text-black bg-gray-50">
          {error}
        </div>
      )}

      {/* Submit Buttons */}
      <div className="flex gap-4">
        <button
          type="submit"
          disabled={saving || uploading}
          className="flex-1 flex items-center justify-center gap-2 font-inter text-xs tracking-widest uppercase bg-black text-white px-8 py-4 hover:bg-gray-900 transition-colors disabled:opacity-50"
        >
          {saving ? (
            <>
              <Loader2 className="animate-spin" size={16} />
              {post ? 'Updating...' : 'Creating...'}
            </>
          ) : (
            post ? 'Update Post' : 'Create Post'
          )}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/dashboard')}
          disabled={saving || uploading}
          className="font-inter text-xs tracking-widest uppercase border border-black px-8 py-4 text-black hover:bg-black hover:text-white transition-colors disabled:opacity-50"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}