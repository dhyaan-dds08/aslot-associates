"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function ServicesCircle() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const circleRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  const services = [
    "CFO & Strategic Finance Advisory",
    "Internal Audit & Governance Advisory",
    "Statutory Audit",
    "Transaction & Deal Advisory",
    "Startup & Business Advisory",
    "Investment & Capital Advisory",
  ];

  // Circle is inset 20% on each side → center at 50%, radius = 30% of container
  const circleInset = 20;
  const circleRadius = 50 - circleInset; // 30% of container

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Vertical line + Title with stagger */}
        <div className="flex flex-col items-center mb-16 lg:mb-20">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-px h-16 bg-black origin-top"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light my-8 text-center tracking-wide"
          >
            OUR CORE ADVISORY SERVICES
          </motion.h2>
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-px h-16 bg-black origin-top"
          />
        </div>

        {/* Circle layout - Desktop */}
        <div className="hidden lg:block">
          <div className="relative w-full max-w-3xl mx-auto aspect-square">
            {/* Circle border */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{ rotate: circleRotate }}
              className={`absolute rounded-full border border-black/60`}
              // inset must match circleInset
              {...{ style: { inset: `${circleInset}%`, rotate: circleRotate } }}
            />

            {/* Center text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="text-center">
                <p className="font-cormorant text-3xl xl:text-4xl font-light tracking-wide">
                  THE
                </p>
                <p className="font-cormorant text-4xl xl:text-5xl font-medium tracking-wide">
                  ADVISORY
                </p>
              </div>
            </motion.div>

            {/* Service items positioned around the circle */}
            {services.map((service, index) => {
              const angle = (index * 360) / services.length - 90;
              const radian = (angle * Math.PI) / 180;

              // Dots sit exactly on the circle
              const dotX = 50 + circleRadius * Math.cos(radian);
              const dotY = 50 + circleRadius * Math.sin(radian);

              // Labels sit further out
              const labelRadius = circleRadius + 16;
              const labelX = 50 + labelRadius * Math.cos(radian);
              const labelY = 50 + labelRadius * Math.sin(radian);

              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="cursor-pointer"
                >
                  {/* Pulse ring on hover */}
                  <motion.div
                    className="absolute rounded-full border border-black/30 pointer-events-none"
                    style={{
                      left: `${dotX}%`,
                      top: `${dotY}%`,
                      translateX: "-50%",
                      translateY: "-50%",
                    }}
                    animate={{
                      width: isHovered ? 36 : 20,
                      height: isHovered ? 36 : 20,
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Dot on circle */}
                  <motion.div
                    className="absolute w-5 h-5 rounded-full border-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                    viewport={{ once: true }}
                    style={{
                      left: `${dotX}%`,
                      top: `${dotY}%`,
                      translateX: "-50%",
                      translateY: "-50%",
                    }}
                    animate={{
                      scale: isHovered ? 1.3 : 1,
                      backgroundColor: isHovered ? "#000000" : "#f9fafb",
                      borderColor: isHovered
                        ? "rgba(0,0,0,1)"
                        : "rgba(0,0,0,0.6)",
                    }}
                    transition={{ duration: 0.25 }}
                  />

                  {/* Label */}
                  <motion.div
                    className="absolute text-center w-48"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.15 }}
                    viewport={{ once: true }}
                    style={{
                      left: `${labelX}%`,
                      top: `${labelY}%`,
                      translateX: "-50%",
                      translateY: "-50%",
                    }}
                    animate={{
                      scale: isHovered ? 1.05 : 1,
                    }}
                  >
                    <span
                      className={`font-inter text-xs md:text-sm tracking-widest uppercase leading-relaxed transition-colors duration-300 ${
                        isHovered ? "text-black font-medium" : "text-gray-700"
                      }`}
                    >
                      {service}
                    </span>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet layout - vertical timeline */}
        <div className="lg:hidden">
          <div className="relative flex flex-col items-center">
            {/* Continuous vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-black/20 origin-top"
            />

            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative flex flex-col items-center py-6"
              >
                <motion.div
                  whileInView={{
                    scale: [0.5, 1.1, 1],
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12 + 0.2,
                    times: [0, 0.7, 1],
                  }}
                  viewport={{ once: true }}
                  className="relative z-10 w-12 h-12 rounded-full border-2 border-black/60 bg-gray-50 flex items-center justify-center"
                >
                  <span className="font-inter text-xs text-gray-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.12 + 0.35 }}
                  viewport={{ once: true }}
                  className="mt-3 text-center max-w-[250px]"
                >
                  <span className="font-inter text-sm tracking-widest uppercase text-gray-700 leading-relaxed">
                    {service}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-inter text-base text-gray-500 text-center max-w-2xl mx-auto mt-16 lg:mt-20"
        >
          Each engagement is partner-led and structured around long-term
          business outcomes.
        </motion.p>
      </div>
    </section>
  );
}
