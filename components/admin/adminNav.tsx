'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { LogOut, Plus, LayoutDashboard } from 'lucide-react'

interface AdminNavProps {
  admin: {
    id: string
    email: string
  }
}

export default function AdminNav({ admin }: AdminNavProps) {
  const router = useRouter()

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <nav className="bg-black text-white border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-10">
            <Link href="/admin/dashboard" className="font-cormorant text-xl font-light tracking-widest uppercase">
              Aslot Admin
            </Link>
            <div className="flex gap-6">
              <Link
                href="/admin/dashboard"
                className="flex items-center gap-2 font-inter text-xs tracking-widest uppercase text-gray-400 hover:text-white transition-colors"
              >
                <LayoutDashboard size={14} />
                Dashboard
              </Link>
              <Link
                href="/admin/posts/new"
                className="flex items-center gap-2 font-inter text-xs tracking-widest uppercase text-gray-400 hover:text-white transition-colors"
              >
                <Plus size={14} />
                New Post
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <span className="font-inter text-xs text-gray-500">{admin.email}</span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 font-inter text-xs tracking-widest uppercase border border-white/30 px-4 py-2 text-white hover:bg-white hover:text-black transition-colors"
            >
              <LogOut size={14} />
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}