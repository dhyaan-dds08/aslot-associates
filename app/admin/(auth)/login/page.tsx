'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Mail, Lock } from 'lucide-react'

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

      // router.push('/admin/dashboard')
      // router.refresh()
    } catch {
      setError('Something went wrong')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-cormorant text-4xl md:text-5xl font-medium text-white mb-3"
          >
            Admin Access
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-gray-400 text-sm tracking-wide"
          >
            ASLOT & ASSOCIATES
          </motion.p>
        </div>

        {/* Login Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white p-8 md:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block font-inter text-sm text-gray-700 mb-2 tracking-wide"
              >
                EMAIL ADDRESS
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 font-inter text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                  placeholder="admin@aslotwealth.in"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block font-inter text-sm text-gray-700 mb-2 tracking-wide"
              >
                PASSWORD
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 font-inter text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border-l-2 border-red-600 px-4 py-3"
              >
                <p className="font-inter text-sm text-red-800">{error}</p>
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white font-inter text-sm tracking-wide py-4 hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'AUTHENTICATING...' : 'LOGIN'}
            </button>
          </form>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-8 font-inter text-xs text-gray-500"
        >
          Secure access for authorized personnel only
        </motion.p>
      </motion.div>
    </div>
  )
}
