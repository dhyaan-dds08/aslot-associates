"use client";

import Link from "next/link";
import Footer from "./Footer";

export default function CTAFooter() {
  return (
    <>
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light mb-8">
            Looking for a finance partner who understands both strategy and
            execution?
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
      <Footer />
    </>
  );
}
