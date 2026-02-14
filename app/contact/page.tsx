"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import CTAFooter from "../Components/CTAFooter";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Hi, my name is ${formData.name}.\n\n${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(
      `https://wa.me/919099976099?text=${encodedMessage}`,
      "_blank"
    );

    setSubmitted(true);
    setFormData({ name: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleQuickChat = () => {
    window.open(
      "https://wa.me/919099976099?text=Hi, I would like to schedule a consultation",
      "_blank"
    );
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
            className="font-inter text-xl text-gray-300 max-w-2xl"
          >
            Let&apos;s start a conversation about your business needs.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="md:col-span-2">
              <h2 className="font-cormorant text-3xl font-medium mb-8">
                Get In Touch
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-inter font-medium text-sm tracking-wide uppercase mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:ishan.aslot.ca@gmail.com"
                    className="font-inter text-gray-600 hover:text-black transition-colors"
                  >
                    ishan.aslot.ca@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="font-inter font-medium text-sm tracking-wide uppercase mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:+919099976099"
                    className="font-inter text-gray-600 hover:text-black transition-colors"
                  >
                    +91 9099976099
                  </a>
                </div>

                <div>
                  <h3 className="font-inter font-medium text-sm tracking-wide uppercase mb-2">
                    Office
                  </h3>
                  <p className="font-inter text-gray-600 leading-relaxed">
                    9, Gr. Floor, West side,
                    <br />
                    Vishwakarma Society b/h Vishwakarma temple,
                    <br />
                    Nr. ITC Building, Majura Gate,
                    <br />
                    Surat, Gujarat, India - 395002.
                  </p>
                </div>

                <div>
                  <h3 className="font-inter font-medium text-sm tracking-wide uppercase mb-2">
                    Office Hours
                  </h3>
                  <p className="font-inter text-gray-600">
                    Monday – Saturday: 10:30 AM to 7:00 PM
                  </p>
                </div>

                {/* Quick WhatsApp button */}
                <div className="pt-2">
                  <button
                    onClick={handleQuickChat}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-[#25D366] text-[#25D366] font-inter text-sm tracking-wide hover:bg-[#25D366] hover:text-white transition-colors"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Quick Consultation
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <div className="border border-gray-200 p-8 md:p-10">
                <h2 className="font-cormorant text-2xl font-medium mb-6">
                  Send us a message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-inter text-sm mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none font-inter transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-inter text-sm mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your business needs..."
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none font-inter transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-10 py-4 bg-[#25D366] text-white font-inter text-sm tracking-wide hover:bg-[#128C7E] transition-colors"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Send via WhatsApp
                  </button>

                  {submitted && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="font-inter text-sm text-green-600 text-center"
                    >
                      Redirecting to WhatsApp...
                    </motion.p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 py-16">
          <h2 className="font-cormorant text-2xl font-medium mb-6 text-center">
            Visit Our Office
          </h2>
          <div className="border border-gray-200 overflow-hidden" style={{ height: "400px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3720.2642259473105!2d72.81732347526084!3d21.18166008050618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDEwJzU0LjAiTiA3MsKwNDknMTEuNiJF!5e0!3m2!1sen!2sin!4v1762702185037!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </section>

      <CTAFooter />
    </>
  );
}
