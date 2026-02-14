"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import CTAFooter from "../Components/CTAFooter";

export default function WorkWithUsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedinUrl: "",
  });
  const [resume, setResume] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
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
            Build Your Career with
            <br />
            Aslot & Associates
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-inter text-xl text-gray-300 max-w-3xl"
          >
            We&apos;re always looking for talented individuals who share our commitment to excellence in finance and advisory.
          </motion.p>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          {!submitted ? (
            <div className="border border-gray-200 p-8 md:p-12">
              <h2 className="font-cormorant text-3xl font-medium mb-4">
                Apply Here
              </h2>
              <p className="font-inter text-gray-600 mb-8">
                Submit your application and we&apos;ll be in touch if there&apos;s a fit.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block font-inter text-sm mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none font-inter transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-inter text-sm mb-2">
                    Email Address *
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
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none font-inter transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="resume" className="block font-inter text-sm mb-2">
                    Resume *
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="resume"
                      className="flex items-center justify-between w-full px-4 py-3 border border-gray-300 hover:border-black cursor-pointer font-inter transition-colors"
                    >
                      <span className={`text-sm ${resume ? "text-black" : "text-gray-400"}`}>
                        {resume ? resume.name : "Upload your resume (PDF, DOC, DOCX)"}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                      </svg>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="linkedinUrl" className="block font-inter text-sm mb-2">
                    LinkedIn Profile
                    <span className="text-gray-400 ml-1">(optional)</span>
                  </label>
                  <input
                    type="url"
                    id="linkedinUrl"
                    name="linkedinUrl"
                    value={formData.linkedinUrl}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/yourprofile"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none font-inter transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-10 py-4 bg-black text-white font-inter text-sm tracking-wide hover:bg-gray-800 transition-colors"
                >
                  Submit Application
                </button>
              </form>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="border border-gray-200 p-12 text-center"
            >
              <div className="w-16 h-16 bg-black mx-auto mb-6" />
              <h2 className="font-cormorant text-3xl font-medium mb-4">
                Application Submitted
              </h2>
              <p className="font-inter text-gray-600 mb-2">
                Thank you, {formData.fullName}. We&apos;ve received your application.
              </p>
              <p className="font-inter text-sm text-gray-500">
                We&apos;ll review your profile and reach out if there&apos;s a match.
              </p>
            </motion.div>
          )}
        </div>
      </section>
       <CTAFooter />
    </>
  );
}
