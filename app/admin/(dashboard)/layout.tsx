import { redirect } from 'next/navigation'
import { checkAuth } from '@/lib/checkAuth'
import AdminNav from '@/components/admin/adminNav'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const admin = await checkAuth()

  if (!admin) {
    redirect('/admin/login')
  }

  return (
    <div className="min-h-screen bg-white">
      <AdminNav admin={admin} />
      <main className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        {children}
      </main>
    </div>
  )
}
