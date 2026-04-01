"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Pages with black backgrounds
  const blackBackgroundPages = ["/", "/work-with-us"];
  const isBlackBackground = true;

  // Text color logic:
  // - Black background pages: white text when not scrolled, black text when scrolled
  // - White background pages: always black text
  const textColor = isBlackBackground && !scrolled ? "text-white" : "text-black";
  const textColorGray = isBlackBackground && !scrolled ? "text-gray-300" : "text-gray-600";
  const hoverTextColor = isBlackBackground && !scrolled ? "hover:text-white" : "hover:text-black";

  // Button colors
  const buttonBg = isBlackBackground && !scrolled ? "bg-white" : "bg-black";
  const buttonText = isBlackBackground && !scrolled ? "text-black" : "text-white";
  const buttonHover = isBlackBackground && !scrolled ? "hover:bg-gray-100" : "hover:bg-gray-800";

  // Hamburger menu color
  const hamburgerColor = isBlackBackground && !scrolled ? "bg-white" : "bg-black";

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/#services", label: "Our Services" },
    { href: "/blog", label: "Insights" },
    { href: "/work-with-us", label: "Work With Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center md:ml-0">
            <div className="relative w-72 sm:w-80 md:w-96 h-20 sm:h-24 -ml-2">
              <Image
                src="/logo1.png"
                alt="Aslot & Associates"
                fill
                className="object-contain object-left"
                style={{
                  filter: isBlackBackground && !scrolled ? 'invert(1)' : 'none',
                  transition: 'filter 0.3s ease'
                }}
                priority
              />
            </div>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-inter text-sm tracking-wide transition-colors ${pathname === link.href
                  ? `${textColor} font-medium`
                  : `${textColorGray} ${hoverTextColor}`
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden -mr-1"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 ${hamburgerColor} transition-all ${isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
              />
              <span
                className={`w-full h-0.5 ${hamburgerColor} transition-all ${isOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`w-full h-0.5 ${hamburgerColor} transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 font-inter text-sm ${pathname === link.href
                    ? "text-black font-medium bg-gray-50"
                    : "text-gray-600"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
