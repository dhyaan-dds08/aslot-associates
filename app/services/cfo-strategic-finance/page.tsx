"use client";

import { motion } from "framer-motion";
import CTAFooter from "../../Components/CTAFooter";

export default function CFOStrategicFinancePage() {
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
            CFO & Strategic Finance Advisory
          </motion.h1>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="space-y-6 font-inter text-gray-700 leading-relaxed mb-16">
            <p>
              Financial decisions made without structure create problems that only surface later &mdash; misallocated capital, reactive cash flow management, and reporting that satisfies compliance but informs nothing.
            </p>
            <p>
              We function as your outsourced finance leadership &mdash; embedded with your team on a retainer basis, not as consultants who deliver a report and disappear.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="font-cormorant text-3xl font-medium mb-6 text-[#3d5a80]">Scope</h2>
            <ul className="space-y-3 font-inter text-gray-700 leading-relaxed">
              {[
                "Management Information Systems designed for decision-making, not just auditors.",
                "Cash flow forecasting and working capital optimisation.",
                "Financial modelling for expansion, capex, and new market entry.",
                "Budgeting and variance analysis tied to operational outcomes.",
                "Fundraise-readiness \u2014 data rooms, projections, and due diligence support.",
                "Board-level financial dashboards for promoters and investors.",
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
              Partner-led. Retainer-based with monthly or quarterly review cycles. For businesses approaching a fundraise or specific financial milestone, we also offer project-scoped engagements.
            </p>
          </div>
        </div>
      </section>
      <CTAFooter />
    </>
  );
}
