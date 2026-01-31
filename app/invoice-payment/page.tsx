"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function InvoicePaymentPage() {
  const [paymentData, setPaymentData] = useState({
    invoiceNumber: "",
    amount: "",
    clientName: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add payment processing logic here
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentData({
      ...paymentData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light mb-8"
          >
            Invoice Payment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-inter text-xl text-gray-600 max-w-2xl"
          >
            Make a secure payment for your invoice.
          </motion.p>
        </div>
      </section>

      {/* Payment Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          {!submitted ? (
            <div className="border border-gray-200 p-8 md:p-12">
              <h2 className="font-cormorant text-3xl font-medium mb-8">
                Payment Details
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="invoiceNumber" className="block font-inter text-sm mb-2">
                    Invoice Number *
                  </label>
                  <input
                    type="text"
                    id="invoiceNumber"
                    name="invoiceNumber"
                    required
                    value={paymentData.invoiceNumber}
                    onChange={handleChange}
                    placeholder="INV-2024-001"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none font-inter transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="amount" className="block font-inter text-sm mb-2">
                    Amount (₹) *
                  </label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    required
                    value={paymentData.amount}
                    onChange={handleChange}
                    placeholder="10000"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none font-inter transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="clientName" className="block font-inter text-sm mb-2">
                    Client Name *
                  </label>
                  <input
                    type="text"
                    id="clientName"
                    name="clientName"
                    required
                    value={paymentData.clientName}
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
                    value={paymentData.email}
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
                    value={paymentData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none font-inter transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-10 py-4 bg-black text-white font-inter text-sm tracking-wide hover:bg-gray-800 transition-colors"
                >
                  Proceed to Payment
                </button>

                <p className="font-inter text-xs text-gray-500 text-center">
                  Secure payment processing. Your information is encrypted and protected.
                </p>
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
                Payment Initiated
              </h2>
              <p className="font-inter text-gray-600 mb-8">
                You will be redirected to the payment gateway shortly.
              </p>
              <p className="font-inter text-sm text-gray-500">
                Invoice Number: {paymentData.invoiceNumber}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="font-cormorant text-2xl font-medium mb-8 text-center">
            Accepted Payment Methods
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["UPI", "Credit Card", "Debit Card", "Net Banking"].map((method) => (
              <div key={method} className="border border-gray-200 p-4 text-center">
                <p className="font-inter text-sm">{method}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-cormorant text-2xl font-medium mb-4">
            Need Help?
          </h2>
          <p className="font-inter text-gray-600 mb-6">
            If you have any questions about your invoice or payment, please contact us.
          </p>
          <a
            href="mailto:payments@aslotassociates.com"
            className="inline-block px-8 py-3 border border-black text-black font-inter text-sm tracking-wide hover:bg-black hover:text-white transition-colors"
          >
            Contact Support
          </a>
        </div>
      </section>
    </>
  );
}
