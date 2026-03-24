"use client";

import { motion } from "framer-motion";
import CTAFooter from "../../Components/CTAFooter";

export default function TransactionDealAdvisoryPage() {
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
            Transaction & Deal Advisory
          </motion.h1>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="space-y-6 font-inter text-gray-700 leading-relaxed mb-16">
            <p>
              Every transaction has a gap between what the deal looks like on paper and what it means financially. The real risk sits in working capital adjustments, contingent liabilities, tax exposures, and the assumptions buried in projections.
            </p>
            <p>
              We work across the full lifecycle of a transaction &mdash; from initial assessment through structuring, diligence, negotiation support, and post-deal integration.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="font-cormorant text-3xl font-medium mb-6 text-[#3d5a80]">Scope</h2>
            <ul className="space-y-3 font-inter text-gray-700 leading-relaxed">
              {[
                "Financial due diligence \u2014 quality of earnings, normalised EBITDA, working capital trends, and off-balance-sheet exposures.",
                "Tax due diligence \u2014 direct and indirect tax risks, pending litigations, and transfer pricing exposures.",
                "Business valuation under DCF, comparable transactions, and asset-based methodologies.",
                "Deal structuring \u2014 share purchase vs. asset purchase vs. slump sale vs. merger, with tax and regulatory analysis for each.",
                "Support on share purchase agreements, shareholder agreements, and financial covenants.",
                "Post-transaction integration \u2014 aligning accounting policies, MIS, and reporting across merged entities.",
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
              Project-based with defined scope and timelines. Partner-led &mdash; judgment calls in a deal are not delegated. We operate under strict confidentiality and work alongside legal counsel, bankers, and other advisors as the financial and tax anchor of the deal team.
            </p>
          </div>
        </div>
      </section>
      <CTAFooter />
    </>
  );
}
