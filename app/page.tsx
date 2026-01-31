"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  const [currentWord, setCurrentWord] = useState(0);
  const rotatingWords = ["governance", "audits", "transactions", "long-term financial decision-making"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const services = [
    "CFO & Strategic Finance Advisory",
    "Internal Audit & Governance Advisory",
    "Statutory Audit",
    "Transaction & Deal Advisory",
    "Startup & Business Advisory",
    "Investment & Capital Advisory",
  ];

  const executionServices = [
    "Accounting & Bookkeeping",
    "Income Tax & GST Compliance",
    "Annual Returns & Regulatory Filings",
    "Company / LLP Incorporation & Registrations",
  ];

  return (
    <>
      {/* Hero Section - Black Background */}
      <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 lg:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-cormorant text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight mb-8"
          >
            A strategic finance and advisory firm partnering with businesses on
            <br />
            <span className="inline-block relative">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ 
                    duration: 0.5,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                  className="font-medium"
                >
                  {rotatingWords[currentWord]}
                </motion.span>
              </AnimatePresence>
            </span>
            
          </motion.h1>

          {/* Progress dots indicator */}
          <div className="flex justify-center gap-2 mb-12">
            {rotatingWords.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentWord === index ? "bg-white scale-125" : "bg-white/30"
                }`}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-black font-inter text-sm tracking-wide hover:bg-gray-100 transition-colors"
            >
              Engage With Us
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 border border-white text-white font-inter text-sm tracking-wide hover:bg-white hover:text-black transition-colors"
            >
              Explore Our Advisory Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      {/* Services Section - Option with Numbers */}
      <section id="services" className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-center">
            Our Core Advisory Services
          </h2>
          <p className="font-inter text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Each engagement is partner-led and structured around long-term business outcomes.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="border border-gray-200 p-8 hover:border-black transition-colors h-full">
                  <div className="font-inter text-sm text-gray-400 mb-4">0{index + 1}</div>
                  <h3 className="font-cormorant text-2xl font-medium mb-3">{service}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="font-cormorant text-2xl md:text-3xl font-light text-center mb-4">
            Trusted By Businesses Across Sectors
          </h2>
          <p className="font-inter text-gray-600 text-center">
            Client logos coming soon
          </p>
        </div>
      </section>

      {/* Execution Support Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Execution & Compliance Support
          </h2>
          <p className="font-inter text-lg text-gray-700 mb-8 leading-relaxed">
            Alongside advisory, we provide reliable execution support to ensure decisions are implemented with precision. This includes:
          </p>

          <div className="space-y-4 mb-12">
            {executionServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <div className="w-2 h-2 bg-black mt-2 mr-4 flex-shrink-0" />
                <p className="font-inter text-gray-700">{service}</p>
              </motion.div>
            ))}
          </div>

          <p className="font-inter text-gray-600 leading-relaxed">
            Our execution work complements our advisory services and is delivered with the same emphasis on accuracy and timelines.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light mb-8">
            Looking for a finance partner who understands both strategy and execution?
          </h2>
          <p className="font-inter text-xl mb-12 text-gray-300">
            Let&apos;s start a conversation.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-black font-inter text-sm tracking-wide hover:bg-gray-100 transition-colors"
          >
            Engage With Aslot & Associates
          </Link>
        </div>
      </section>
    </>
  );
}