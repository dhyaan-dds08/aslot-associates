"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CTAFooter from "../Components/CTAFooter";

export default function AboutPage() {
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
            About Us
          </motion.h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-12">
              Our Story
            </h2>
            <div className="space-y-6 font-inter text-gray-700 leading-relaxed">
              <p>
                Aslot & Associates is built on a foundation that goes back over three decades.
              </p>
              <p>
                <strong>Pragnesh Aslot</strong> and <strong>Seema Aslot</strong>, both practicing advocates and taxation consultants, established the practice in 1989. Their approach was straightforward &mdash; serve every client with precision, solve problems thoroughly, and earn trust through consistent delivery. Over the years, they built deep expertise in tax planning, litigation support, and compliance advisory, becoming trusted advisors to a loyal and growing client base across Gujarat and Maharashtra.
              </p>
              <p>
                In 2017, <strong>Ishan Aslot</strong>, a qualified Chartered Accountant, joined the practice with a clear mandate to evolve the firm from a traditional taxation consultancy into a full-spectrum strategic finance and advisory practice. His focus on process efficiency, technology-driven workflows, and expanding the firm&apos;s advisory capabilities has driven steady, disciplined growth.
              </p>
              <p>
                Under his direction, the firm has added competencies in audit, transaction advisory, CFO-level finance support, and business structuring &mdash; while retaining the client-first, detail-oriented culture built over three decades.
              </p>
              <p>
                Today, Aslot & Associates operates with a <strong>20-member professional team</strong> serving clients across the globe, combining the depth of a legacy practice with the strategic orientation of a modern advisory firm.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-16 text-center">
            Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {/* Ishan Aslot */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="aspect-square bg-gray-200 relative overflow-hidden mb-6">
                <Image
                  src="/Ishan Aslot.jpg"
                  alt="Ishan Aslot"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <h3 className="font-cormorant text-2xl font-medium">Ishan Aslot</h3>

                <a
                  href="https://www.linkedin.com/in/ishan-aslot/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ishan Aslot LinkedIn"
                  className="flex items-center"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 hover:text-black transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>

              <p className="font-inter text-sm text-gray-500 mb-3">
                Chartered Accountant
              </p>
            </motion.div>

            {/* Pragnesh Aslot */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="aspect-square bg-gray-200 relative overflow-hidden mb-6">
                <Image
                  src="/Pragnesh Aslot.jpg"
                  alt="Pragnesh Aslot"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-cormorant text-2xl font-medium mb-1">Pragnesh Aslot</h3>
              <p className="font-inter text-sm text-gray-500">Advocate & Taxation Consultant</p>
            </motion.div>

            {/* Seema Aslot */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="aspect-square bg-gray-200 relative overflow-hidden mb-6">
                <Image
                  src="/Seema Aslot.jpg"
                  alt="Seema Aslot"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-cormorant text-2xl font-medium mb-1">Seema Aslot</h3>
              <p className="font-inter text-sm text-gray-500">Advocate & Taxation Consultant</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-16 text-center">
            Our Philosophy & Approach
          </h2>

          {/* Advisory Before Execution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="font-cormorant text-3xl font-medium mb-6">
              Advisory Before Execution
            </h3>
            <div className="space-y-4 font-inter text-gray-700 leading-relaxed">
              <p>
                At Aslot & Associates, we believe that sound financial outcomes are the result of <strong>clear thinking before compliance</strong>, not the other way around. Our philosophy is rooted in one principle: <strong>advisory must precede execution</strong>.
              </p>
              <p>
                In a rapidly evolving regulatory and business environment, businesses no longer need firms that merely process filings or complete statutory checklists. They need advisors who understand <strong>why a decision is being taken, how it impacts the business long-term, and what risks or opportunities it creates</strong>.
              </p>
              <p>
                Our role is to help management and promoters think through financial decisions with clarity&mdash;whether it involves audits, transactions, governance, capital allocation, or business structuring&mdash;before translating those decisions into compliant execution.
              </p>
            </div>
          </motion.div>

          {/* Built for Long-Term Engagement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="font-cormorant text-3xl font-medium mb-6">
              Built for Long-Term Engagement, Not One-Time Projects
            </h3>
            <div className="space-y-4 font-inter text-gray-700 leading-relaxed">
              <p>
                We don&apos;t operate as project consultants. Our engagements are structured to embed with your business from advisory through to implementation, compliance, and ongoing financial operations. When we advise on a strategy, we stay to execute it.
              </p>
              <p>
                Our focus is on <strong>long-term professional relationships</strong>, where we work closely with management teams over extended periods, understand the business deeply, and provide context-aware advice at critical stages of growth.
              </p>
              <p>
                This allows us to move beyond reactive problem-solving and instead act as a <strong>trusted financial partner</strong> throughout the business lifecycle.
              </p>
            </div>
          </motion.div>

          {/* Leadership & Team */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="font-cormorant text-3xl font-medium mb-6">
              Leadership & Team
            </h3>
            <div className="space-y-4 font-inter text-gray-700 leading-relaxed">
              <p>
                All key assignments at Aslot & Associates are <strong>partner-led</strong>.
              </p>
              <p>This ensures that clients receive:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black mt-2 mr-4 flex-shrink-0" />
                  <span>senior-level attention,</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black mt-2 mr-4 flex-shrink-0" />
                  <span>informed judgment,</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black mt-2 mr-4 flex-shrink-0" />
                  <span>consistency in advice, and</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black mt-2 mr-4 flex-shrink-0" />
                  <span>accountability at every stage of the engagement.</span>
                </li>
              </ul>
              <p>
                Our partners remain closely involved in advisory, audit, and transaction assignments, particularly where decisions have long-term financial or governance implications.
              </p>
            </div>
          </motion.div>

          {/* Team Built for Advisory */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-cormorant text-3xl font-medium mb-6">
              A Team Built for Advisory Depth and Execution Strength
            </h3>
            <div className="space-y-4 font-inter text-gray-700 leading-relaxed">
              <p>
                Aslot & Associates is supported by a <strong>20-member professional team</strong> comprising chartered accountants, audit professionals, tax specialists, and finance executives with hands-on industry exposure.
              </p>
              <p>The team structure is intentionally designed to balance:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black mt-2 mr-4 flex-shrink-0" />
                  <span>strategic advisory capability at the leadership level, and</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black mt-2 mr-4 flex-shrink-0" />
                  <span>strong execution capacity across compliance, audits, and financial operations.</span>
                </li>
              </ul>
              <p>
                This allows us to deliver advisory outcomes <strong>without compromising on execution quality or timelines</strong>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <CTAFooter />
    </>
  );
}
