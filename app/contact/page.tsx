"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import CTAFooter from "../Components/CTAFooter";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light mb-8"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-inter text-xl text-gray-600 max-w-2xl"
          >
            Let&apos;s start a conversation about your business needs.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="md:col-span-2">
              <h2 className="font-cormorant text-3xl font-medium mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-inter font-medium mb-2">Email</h3>
                  <a href="mailto:ishan.aslot.ca@gmail.com" className="font-inter text-gray-600 hover:text-black transition-colors">
                    ishan.aslot.ca@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="font-inter font-medium mb-2">Phone</h3>
                  <a href="tel:+919099976099" className="font-inter text-gray-600 hover:text-black transition-colors">
                    +91 9099976099
                  </a>
                </div>

                <div>
                  <h3 className="font-inter font-medium mb-2">Office</h3>
                  <p className="font-inter text-gray-600">
                    9, Gr. Floor, West side, Vishwakarma Society b/h Vishwakarma temple,<br /> Nr. ITC Building, Majura Gate, <br />Surat, <br />Gujarat,<br /> India - 395002.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-inter text-sm mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none font-inter transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-inter text-sm mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none font-inter transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-inter text-sm mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none font-inter transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block font-inter text-sm mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none font-inter transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-inter text-sm mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none font-inter transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-10 py-4 bg-black text-white font-inter text-sm tracking-wide hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>

                {submitted && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-inter text-green-600"
                  >
                    Thank you for your message. We&apos;ll be in touch soon.
                  </motion.p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Additional Info Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-cormorant text-3xl md:text-4xl font-light mb-6">
            Let&apos;s Build Something Together
          </h2>
          <p className="font-inter text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Whether you&apos;re looking for strategic advisory, audit services, or transaction support, we&apos;re here to help your business thrive.
          </p>
        </div>
      </section>
       <CTAFooter />
    </>
  );
}
