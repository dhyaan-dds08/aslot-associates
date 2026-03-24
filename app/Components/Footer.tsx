"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="relative w-72 sm:w-80 md:w-96 h-20 sm:h-24 -ml-6 lg:-ml-6">
              <Image
                src="/logo1.png"
                alt="Aslot & Associates"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="font-inter text-sm text-gray-500 leading-relaxed">
              Strategic Finance & Advisory
            </p>
            <p className="font-inter text-sm text-gray-500">
              Chartered Accountants
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.linkedin.com/in/ishan-aslot/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-black transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:ishan.aslot.ca@gmail.com"
                className="text-gray-400 hover:text-black transition-colors"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-inter text-sm font-medium tracking-wide uppercase mb-4 text-gray-800">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/#services", label: "Our Services" },
                { href: "/insights", label: "Insights" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-gray-500 hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-inter text-sm font-medium tracking-wide uppercase mb-4 text-gray-800">
              Contact
            </h4>
            <div className="space-y-3 font-inter text-sm text-gray-500">
              <p>
                <a href="mailto:ishan.aslot.ca@gmail.com" className="hover:text-black transition-colors">
                  ishan.aslot.ca@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+919099976099" className="hover:text-black transition-colors">
                  +91 9099976099
                </a>
              </p>
              <p className="leading-relaxed">
                9, Gr. Floor, West side, Vishwakarma Society
                b/h Vishwakarma temple, Nr. ITC Building,
                Majura Gate, Surat, Gujarat, India - 395002
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-6">
          <p className="font-inter text-xs text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Aslot & Associates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
