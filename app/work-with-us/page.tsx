"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function WorkWithUsPage() {
  const services = [
    {
      title: "CFO & Strategic Finance Advisory",
      description: "Strategic financial planning, forecasting, and decision support for growing businesses.",
    },
    {
      title: "Internal Audit & Governance Advisory",
      description: "Comprehensive internal control frameworks and governance best practices.",
    },
    {
      title: "Statutory Audit",
      description: "Independent assurance services with deep industry expertise.",
    },
    {
      title: "Transaction & Deal Advisory",
      description: "M&A support, due diligence, and transaction structuring guidance.",
    },
    {
      title: "Startup & Business Advisory",
      description: "Business planning, fundraising support, and early-stage advisory.",
    },
    {
      title: "Investment & Capital Advisory",
      description: "Capital allocation strategies and investment decision frameworks.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light mb-8"
          >
            Work With Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-inter text-xl text-gray-300 max-w-3xl"
          >
            Partner with us for strategic finance and advisory services that drive long-term business outcomes.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="font-cormorant text-3xl md:text-4xl font-light mb-16 text-center">
            Our Advisory Services
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="border-t border-black pt-6">
                  <h3 className="font-cormorant text-2xl font-medium mb-4">
                    {service.title}
                  </h3>
                  <p className="font-inter text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="font-cormorant text-3xl md:text-4xl font-light mb-12">
            How We Work
          </h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="font-cormorant text-2xl font-medium mb-4">
                Partner-Led Engagements
              </h3>
              <p className="font-inter text-gray-700 leading-relaxed">
                Every engagement is led by a partner who remains closely involved throughout the project lifecycle, ensuring consistency and accountability.
              </p>
            </div>

            <div>
              <h3 className="font-cormorant text-2xl font-medium mb-4">
                Long-Term Relationships
              </h3>
              <p className="font-inter text-gray-700 leading-relaxed">
                We focus on building lasting partnerships, working with management teams over extended periods to provide context-aware advice at critical junctures.
              </p>
            </div>

            <div>
              <h3 className="font-cormorant text-2xl font-medium mb-4">
                Advisory-First Approach
              </h3>
              <p className="font-inter text-gray-700 leading-relaxed">
                We prioritize strategic thinking and advisory before execution, helping you understand the &apos;why&apos; behind every financial decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light mb-8">
            Ready to get started?
          </h2>
          <p className="font-inter text-xl mb-12 text-gray-300">
            Let&apos;s discuss how we can support your business.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-black font-inter text-sm tracking-wide hover:bg-gray-100 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
