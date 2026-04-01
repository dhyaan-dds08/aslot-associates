"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import CTAFooter from "./Components/CTAFooter";
import ServicesCircle from "./Components/ServiceCircle";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

export default function HomePage() {
  const [currentWord, setCurrentWord] = useState(0);
  const rotatingWords = ["financial assurance", "strategic capital decisions", "transaction structuring", "risk governance"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const executionServices = [
    "Accounting & Bookkeeping",
    "Income Tax & GST Compliance",
    "Annual Returns & Regulatory Filings",
    "Company / LLP Incorporation & Registrations",
  ];

  return (
    <>
      {/* Hero Section - Black Background */}
      <section className="min-h-screen bg-black text-white flex items-center px-6 lg:px-12">
        <div className="max-w-6xl w-full mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight mb-8"
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
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                  className="font-medium"
                >
                  {rotatingWords[currentWord]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          {/* Progress dots indicator */}
          <div className="flex gap-2 mb-12">
            {rotatingWords.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentWord === index ? "bg-white scale-125" : "bg-white/30"
                  }`}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-black font-inter text-sm tracking-wide hover:bg-gray-100 transition-colors text-center"
            >
              Engage With Us
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 border border-white text-white font-inter text-sm tracking-wide hover:bg-white hover:text-black transition-colors text-center"
            >
              Explore Our Advisory Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesCircle />

      {/* Execution Support Section */}
      {/* <section className="py-0 lg:py-0 bg-white">
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
      </section> */}

      {/* Built for Long-Term Engagement */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="border-l-2 border-black pl-8 md:pl-12"
          >
            <h2 className="font-cormorant text-3xl md:text-4xl font-medium mb-6">
              Built for Long-Term Engagement, Not One-Time Projects
            </h2>
            <p className="font-inter text-lg text-gray-700 leading-relaxed">
              We don&apos;t operate as project consultants. Our engagements are structured to embed with your business from advisory through to implementation, compliance, and ongoing financial operations. When we advise on a strategy, we stay to execute it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Final CTA Section */}
      <CTAFooter />
    </>
  );
}
