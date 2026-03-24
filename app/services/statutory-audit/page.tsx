"use client";

import { motion } from "framer-motion";
import CTAFooter from "../../Components/CTAFooter";

export default function StatutoryAuditPage() {
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
            Statutory Audit
          </motion.h1>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="space-y-6 font-inter text-gray-700 leading-relaxed mb-16">
            <p>
              Statutory audit is no longer a year-end formality. NFRA enforcement, CARO 2020, and updated Standards on Auditing have raised the bar on auditor judgment, reporting quality, and professional scepticism. A statutory audit now demands year-round engagement and genuine understanding of the business &mdash; not just its trial balance.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="font-cormorant text-3xl font-medium mb-6 text-[#3d5a80]">Scope</h2>
            <ul className="space-y-3 font-inter text-gray-700 leading-relaxed">
              {[
                "Risk-based audit planning tailored to your business model and industry.",
                "Evaluation of accounting policies for compliance with Ind AS or Indian GAAP.",
                "Testing of revenue recognition, inventory valuation, fixed asset capitalisation, provisions, and related party transactions.",
                "Assessment of internal financial controls over financial reporting under Section 143(3)(i).",
                "CARO 2020 reporting with substantive procedures.",
                "Evaluation of going concern, subsequent events, and contingent liabilities.",
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
              Engagement begins well before year-end &mdash; with early planning, risk identification, and interim audit work that reduces last-minute pressure and produces higher quality output. Partner-led from planning through sign-off. Management letter observations are detailed, specific, and discussed directly with the promoter or CFO.
            </p>
          </div>
        </div>
      </section>
      <CTAFooter />
    </>
  );
}
