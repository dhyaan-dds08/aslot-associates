"use client";

import { motion } from "framer-motion";
import CTAFooter from "../../Components/CTAFooter";

export default function NRITaxationPage() {
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
            NRI Taxation & Cross-Border Compliance
          </motion.h1>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="space-y-6 font-inter text-gray-700 leading-relaxed mb-16">
            <p>
              Indian taxation for NRIs is a layered system &mdash; residential status rules, source-based taxation, DTAA provisions, FEMA regulations, and TDS obligations that interact in ways most general practitioners miss. Getting it wrong means penalties, FEMA contraventions, and blocked repatriation.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="font-cormorant text-3xl font-medium mb-6 text-[#3d5a80]">Scope</h2>
            <ul className="space-y-3 font-inter text-gray-700 leading-relaxed">
              {[
                "Residential status determination including deemed residency and RNOR classification.",
                "Income tax return preparation and filing with correct DTAA treaty application.",
                "Capital gains planning for property sales, share transfers, and mutual fund redemptions \u2014 with optimisation for indexation, exemptions under Sections 54/54F, and treaty relief.",
                "TDS compliance advisory and lower deduction certificate applications under Section 197.",
                "FEMA compliance for property transactions, repatriation of sale proceeds, and investment structuring.",
                "Coordination with overseas tax advisors for consistent cross-border filing positions.",
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
              Structured for remote delivery &mdash; digital communication, document sharing, and video consultations across time zones. Annual retainers for ongoing compliance or project-based for specific transactions like property sales or repatriation.
            </p>
          </div>
        </div>
      </section>
      <CTAFooter />
    </>
  );
}
