import Link from 'next/link'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'

export default function BlogPage() {
  const posts = [
    {
      id: 'tax-bill-2025-26',
      title: 'Your Tax Bill Just Got Structurally Cheaper',
      subtitle: 'Same Income. Same Regime. Significantly Less Tax.',
      excerpt: 'FY 2025-26 did not just expand the new tax regime — it repriced it. A person earning Rs. 25 lakhs and opting for the new regime in FY 2024-25 was paying roughly Rs. 4.68 lakhs in tax. The same person, same income, same regime in FY 2025-26 pays Rs. 3.43 lakhs.',
      date: '2026-04-01',
      readTime: 12,
      category: 'Tax Planning'
    }
  ]

  return (
    <>
      {/* Hero Section - Black */}
      <section className="pt-32 pb-16 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <Link
            href="/"
            className="inline-flex items-center font-inter text-sm tracking-wide text-white/70 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="mr-2" size={18} />
            Back to Home
          </Link>

          <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light mb-6">
            Insights & Expertise
          </h1>
          <p className="font-inter text-lg text-white/70 max-w-3xl">
            Discover our latest perspectives on tax planning, financial strategy, and market insights from Aslot & Associates
          </p>
        </div>
      </section>

      {/* Blog Grid - White */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group border border-gray-200 hover:border-black transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 font-inter text-xs uppercase tracking-wider text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <time>{new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}</time>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-2">
                      <Clock size={14} />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-gray-100 font-inter text-xs uppercase tracking-wide text-gray-700">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="font-cormorant text-2xl font-medium text-black mb-2 group-hover:text-gray-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="font-cormorant text-xl font-light text-gray-600 mb-4">
                    {post.subtitle}
                  </p>

                  <p className="font-inter text-sm text-gray-600 leading-relaxed line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>

                  <div className="inline-flex items-center gap-2 font-inter text-sm tracking-wide text-black group-hover:gap-3 transition-all">
                    Read Article →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
