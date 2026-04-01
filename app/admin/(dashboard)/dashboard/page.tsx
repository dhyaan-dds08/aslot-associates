import TogglePostButton from '@/components/admin/ToggleSwitch'
import DeletePostButton from '@/components/admin/DeletePostButton'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { BlogPost } from '@/types/blog'
import Link from 'next/link'
import { Plus, Edit } from 'lucide-react'

export default async function AdminDashboard() {
  const supabase = await createServerSupabaseClient(true)
  
  const { data: posts } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div>
      <div className="flex items-center justify-between mb-12">
        <div>
          <div className="w-px h-10 bg-black mb-4" />
          <h1 className="font-cormorant text-5xl font-light text-black">Blog Posts</h1>
        </div>
        <Link
          href="/admin/posts/new"
          className="flex items-center gap-2 font-inter text-xs tracking-widest uppercase bg-black text-white px-6 py-3 hover:bg-gray-900 transition-colors"
        >
          <Plus size={14} />
          New Post
        </Link>
      </div>

      {!posts || posts.length === 0 ? (
        <div className="border border-black/10 p-16 text-center">
          <p className="font-inter text-gray-500 mb-6">No posts yet. Create your first post.</p>
          <Link
            href="/admin/posts/new"
            className="inline-flex items-center gap-2 font-inter text-xs tracking-widest uppercase bg-black text-white px-6 py-3 hover:bg-gray-900 transition-colors"
          >
            <Plus size={14} />
            Create Post
          </Link>
        </div>
      ) : (
        <div className="space-y-px border-t border-black/10">
          {posts.map((post: BlogPost) => (
            <div
              key={post.id}
              className="border-b border-black/10 py-6 flex items-center gap-6"
            >
              {post.images && post.images.length > 0 && (
                <div className="w-20 h-20 overflow-hidden flex-shrink-0 bg-gray-100">
                  <img
                    src={post.images[0]}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="flex-1 min-w-0">
                <h3 className="font-cormorant text-2xl font-light text-black mb-1 truncate">
                  {post.title}
                </h3>
                <p className="font-inter text-sm text-gray-500 line-clamp-1">
                  {post.content.substring(0, 150)}...
                </p>
                <div className="flex items-center gap-4 mt-1">
                  <span className="font-inter text-xs text-gray-400">
                    {new Date(post.created_at).toLocaleDateString()}
                  </span>
                  {post.images && (
                    <span className="font-inter text-xs text-gray-400">{post.images.length} image(s)</span>
                  )}
                </div>
              </div>

              <div className="flex-shrink-0">
                {post.active ? (
                  <span className="font-inter text-xs tracking-widest uppercase border border-black px-3 py-1 text-black">
                    Active
                  </span>
                ) : (
                  <span className="font-inter text-xs tracking-widest uppercase border border-gray-300 px-3 py-1 text-gray-400">
                    Inactive
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <TogglePostButton post={post} />

                <Link
                  href={`/admin/posts/${post.id}`}
                  className="flex items-center justify-center border border-black/20 p-2 hover:border-black hover:bg-black hover:text-white transition-colors"
                >
                  <Edit size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}