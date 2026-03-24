"use client";

import { motion } from "framer-motion";
import CTAFooter from "../../Components/CTAFooter";

export default function InternalAuditGovernancePage() {
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
            Internal Audit & Governance Advisory
          </motion.h1>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="space-y-6 font-inter text-gray-700 leading-relaxed mb-16">
            <p>
              Internal audit in most organisations is treated as a post-facto exercise &mdash; a checklist completed after decisions are made and money is spent. That is documentation, not governance.
            </p>
            <p>
              We position internal audit as a forward-looking tool &mdash; identifying process gaps, control failures, and operational risk before they become financial losses.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="font-cormorant text-3xl font-medium mb-6 text-[#3d5a80]">Scope</h2>
            <ul className="space-y-3 font-inter text-gray-700 leading-relaxed">
              {[
                "Risk-based audit programmes focused on areas of highest financial and operational impact.",
                "Process mapping and control evaluation across finance, procurement, inventory, payroll, and revenue cycles.",
                "Transaction testing and forensic-level sampling where patterns suggest control breakdown.",
                "IT controls evaluation \u2014 ERP access management, data integrity, and system-level risks.",
                "Governance advisory for businesses transitioning from promoter-driven oversight to structured management.",
                "Compliance with internal audit requirements under the Companies Act, 2013.",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="w-2 h-2 bg-black mt-2 mr-4 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-cormorant text-3xl font-medium mb-6 text-[#3d5a80]">Engagement</h2>
            <p className="font-inter text-gray-700 leading-relaxed">
              Annual retainer with quarterly or half-yearly audit cycles. Every finding comes with risk ratings, root cause analysis, and actionable recommendations &mdash; presented directly to management or the audit committee, not buried in back-office files.
            </p>
          </div>
        </div>
      </section>
      <CTAFooter />
    </>
  );
}
