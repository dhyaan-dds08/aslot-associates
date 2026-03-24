"use client";

import { motion } from "framer-motion";
import CTAFooter from "../../Components/CTAFooter";

export default function WealthAdvisoryPage() {
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
            Wealth Advisory
          </motion.h1>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="space-y-6 font-inter text-gray-700 leading-relaxed mb-16">
            <p>
              For personal wealth management, portfolio advisory, and family office services, we operate through Aslot Wealth Advisors &mdash; a dedicated practice bringing the same discipline and structured thinking into personal finance.
            </p>
            <p>
              Investment planning, asset allocation, retirement planning, and intergenerational wealth transfer &mdash; with specialist attention separate from our corporate advisory and assurance practice.
            </p>
          </div>

          <a
            href="https://www.aslotwealth.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-black text-white font-inter text-sm tracking-wide hover:bg-gray-800 transition-colors"
          >
            Visit Aslot Wealth Advisors &rarr;
          </a>
        </div>
      </section>
      <CTAFooter />
    </>
  );
}
