"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "We brought Aslot & Associates in for audit work, but the engagement quickly evolved. They restructured how we look at cash flows and brought a financial discipline to our operations that frankly didn\u2019t exist before. What I value most is that they don\u2019t just report numbers \u2014 they make us act on them.",
    name: "Kavin Shah",
    title: "Director, Venus Anachem Solutions Pvt Ltd",
  },
  {
    quote: "Taking a company through an IPO is not a simple compliance exercise \u2014 the restated financials alone require a level of precision and judgment that very few firms can deliver under pressure. Aslot & Associates handled the entire process end to end. Thorough, detail-oriented, and completely dependable when the timelines got tight.",
    name: "Vijay Yadav",
    title: "Managing Director, HP Telecom India Ltd",
  },
  {
    quote: "We have been working with Aslot & Associates for our statutory audit and have relied on them heavily for handling multiple tax litigations. They bring a calm, methodical approach to disputes \u2014 which matters when the stakes are high and the proceedings are complex. Solid professionals.",
    name: "Mavsang Chauhan",
    title: "Managing Director, Aakruti Infra Construction Pvt Ltd",
  },
  {
    quote: "From company incorporation to day-to-day financial management \u2014 Aslot & Associates has been involved at every stage. They set up our entire financial backbone and continue to run it. For a business that needed to move fast without getting its finances wrong, that kind of end-to-end reliability is hard to find.",
    name: "Nishant Painter",
    title: "Managing Director, Shivantra Solutions Pvt Ltd",
  },
  {
    quote: "As a startup, we needed more than an accountant \u2014 we needed someone who could think like a CFO. Aslot & Associates stepped into that role and gave us clarity on cash flows, burn management, and where to focus financially. They understand how startups operate, and they don\u2019t waste your time with things that don\u2019t matter yet.",
    name: "Ummang Shah",
    title: "Managing Director, Plus Nine One Mediatech Pvt Ltd",
  },
  {
    quote: "The EB-5 investment route involves a level of financial documentation and compliance that I honestly did not anticipate. Aslot & Associates guided me through every step \u2014 from structuring the source of funds to the final submission. Meticulous, patient, and always available when I had questions.",
    name: "Nisha Patel",
    title: "NRI Client",
  },
  {
    quote: "When I received a notice from the Income Tax department, I needed someone who could handle the situation with both technical knowledge and composure. Aslot & Associates took complete charge of the proceedings, represented my case thoroughly, and resolved it cleanly. I didn\u2019t have to lose sleep over it.",
    name: "Rikunj Patel",
    title: "",
  },
  {
    quote: "I was dealing with a complex tax matter that spanned multiple assessment years. Aslot & Associates managed the entire process \u2014 the documentation, the representations, the follow-ups \u2014 with a level of rigour that gave me complete confidence. They know the system inside out and it shows.",
    name: "Kiran Patel",
    title: "Partner, Rajvee Exports",
  },
  {
    quote: "Real estate audits are not straightforward \u2014 multiple projects, different stages of completion, revenue recognition complexities. Aslot & Associates has handled our audits across several projects and has consistently delivered on quality and timelines. They understand the sector and don\u2019t need hand-holding.",
    name: "Sharad Kakadia",
    title: "Managing Director, Vaishnodevi Reality Pvt Ltd",
  },
  {
    quote: "I was overseas when a tax litigation needed urgent attention, and separately, a property transaction required coordination with my family in India. Aslot & Associates handled both \u2014 managing the legal proceedings, coordinating with my relatives on the ground, and keeping me informed at every step. They made it possible for me to resolve complex matters in India without being physically present. That level of ownership is rare.",
    name: "Niraj Pandya",
    title: "NRI Client",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="font-cormorant text-4xl md:text-5xl font-light text-center mb-16"
        >
          What Our Clients Say
        </motion.h2>

        <div className="relative min-h-[280px] md:min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="font-cormorant text-xl md:text-2xl lg:text-[1.65rem] italic text-gray-700 leading-relaxed mb-8">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
              <p className="font-inter font-medium text-sm text-black">
                {testimonials[current].name}
              </p>
              {testimonials[current].title && (
                <p className="font-inter text-sm text-gray-500 mt-1">
                  {testimonials[current].title}
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                current === index ? "bg-black scale-125" : "bg-gray-300"
              }`}
              aria-label={`Testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
