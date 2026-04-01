'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Lock, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Login failed')
        setLoading(false)
        return
      }

      router.push('/admin/dashboard')
      router.refresh()
    } catch {
      setError('Something went wrong')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-sm p-12 shadow-xl border border-gray-100"
        >
          <div className="text-center mb-10">
            <h1 className="font-cormorant text-4xl md:text-5xl font-light mb-3 text-black">
              Admin Portal
            </h1>
            <div className="w-12 h-px bg-black mx-auto mb-4" />
            <p className="font-inter text-sm text-gray-600 tracking-wide">
              ASLOT & ASSOCIATES
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block font-inter text-xs uppercase tracking-wider text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-12 h-12 bg-gray-50 border-gray-200 focus:border-black focus:ring-black font-inter text-sm"
                  placeholder="admin@aslotwealth.in"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block font-inter text-xs uppercase tracking-wider text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pl-12 h-12 bg-gray-50 border-gray-200 focus:border-black focus:ring-black font-inter text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm font-inter text-sm"
              >
                {error}
              </motion.div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-black hover:bg-gray-900 text-white font-inter text-sm tracking-wider uppercase transition-colors"
            >
              {loading ? 'Authenticating...' : 'Login'}
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
