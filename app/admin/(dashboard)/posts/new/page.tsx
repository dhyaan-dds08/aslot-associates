

import PostForm from '@/components/admin/PostForm'

export default function NewPostPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-12">
        <div className="w-px h-10 bg-black mb-4" />
        <h1 className="font-cormorant text-5xl font-light text-black mb-2">Create New Post</h1>
        <p className="font-inter text-sm text-gray-500">Add a new blog post with images</p>
      </div>

      <PostForm />
    </div>
  )
}