"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

      {/* Leadership Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <div className="aspect-[4/3] bg-gray-200 relative">
                {/* Placeholder for photo - replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-inter text-gray-400">Pragnesh Aslot & Ishan Aslot</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="font-cormorant text-3xl font-medium mb-4">Leadership</h2>
              <p className="font-inter text-gray-600 leading-relaxed">
                Led by Pragnesh Aslot and Ishan Aslot, our firm brings decades of combined experience in strategic finance, audit, and business advisory.
              </p>
            </div>
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
                At Aslot & Associates, we believe that sound financial outcomes are the result of clear thinking before compliance, not the other way around. Our philosophy is rooted in one principle: advisory must precede execution.
              </p>
              <p>
                In a rapidly evolving regulatory and business environment, businesses no longer need firms that merely process filings or complete statutory checklists. They need advisors who understand why a decision is being taken, how it impacts the business long-term, and what risks or opportunities it creates.
              </p>
              <p>
                Our role is to help management and promoters think through financial decisions with clarity—whether it involves audits, transactions, governance, capital allocation, or business structuring—before translating those decisions into compliant execution.
              </p>
            </div>
          </motion.div>

          {/* Long-Term Partnerships */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="font-cormorant text-3xl font-medium mb-6">
              Long-Term Partnerships Over One-Time Engagements
            </h3>
            <div className="space-y-4 font-inter text-gray-700 leading-relaxed">
              <p>
                We are not structured as a transaction-driven firm.
              </p>
              <p>
                Our focus is on long-term professional relationships, where we work closely with management teams over extended periods, understand the business deeply, and provide context-aware advice at critical stages of growth.
              </p>
              <p>
                This allows us to move beyond reactive problem-solving and instead act as a trusted financial partner throughout the business lifecycle.
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
                All key assignments at Aslot & Associates are partner-led.
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
                Aslot & Associates is supported by a 20-member professional team comprising chartered accountants, audit professionals, tax specialists, and finance executives with hands-on industry exposure.
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
                This allows us to deliver advisory outcomes without compromising on execution quality or timelines.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
