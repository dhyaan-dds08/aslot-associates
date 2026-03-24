"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CTAFooter from "../Components/CTAFooter";

const insights = [
  {
    slug: "tax-bill-structurally-cheaper-fy-2025-26",
    title: "Your Tax Bill Just Got Structurally Cheaper.",
    subtitle: "Same Income. Same Regime. Significantly Less Tax.",
    date: "FY 2025-26",
    excerpt:
      "FY 2025-26 did not just expand the new tax regime \u2014 it repriced it. A person earning Rs. 25 lakhs and opting for the new regime in FY 2024-25 was paying roughly Rs. 4.68 lakhs in tax. The same person, same income, same regime in FY 2025-26 pays Rs. 3.43 lakhs.",
    tag: "Tax Advisory",
  },
];

export default function InsightsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light mb-8"
          >
            Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-inter text-xl text-gray-300 max-w-2xl"
          >
            Perspectives on tax, finance, and advisory from the Aslot & Associates team.
          </motion.p>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid gap-12">
            {insights.map((insight, index) => (
              <motion.article
                key={insight.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-200 p-8 md:p-12 hover:border-black transition-colors"
              >
                <Link href={`/insights/${insight.slug}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-inter text-xs tracking-widest uppercase text-[#3d5a80]">
                      {insight.tag}
                    </span>
                    <span className="text-gray-300">|</span>
                    <span className="font-inter text-xs text-gray-400">
                      {insight.date}
                    </span>
                  </div>
                  <h2 className="font-cormorant text-3xl md:text-4xl font-medium mb-2">
                    {insight.title}
                  </h2>
                  <p className="font-cormorant text-xl text-[#3d5a80] mb-6">
                    {insight.subtitle}
                  </p>
                  <p className="font-inter text-gray-600 leading-relaxed mb-6">
                    {insight.excerpt}
                  </p>
                  <span className="font-inter text-sm font-medium text-black">
                    Read More &rarr;
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <CTAFooter />
    </>
  );
}
