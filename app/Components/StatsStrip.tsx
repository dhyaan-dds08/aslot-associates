"use client";

import { motion } from "framer-motion";

const stats = [
    { number: "35+", label: "Years of Practice" },
    { number: "1,000+", label: "Clients Served Annually" },
    { number: "200+", label: "Audits Delivered Annually" },
    { number: "150+", label: "Transactions & Restructuring Mandates Annually" },
    { number: "350+", label: "Litigation Matters Handled" },
];

export default function StatsStrip() {
    return (
        <section className="pt-16 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-14 gap-x-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center gap-3"
                        >
                            <span className="font-cormorant text-[3.25rem] md:text-[3.75rem] lg:text-[4rem] font-light text-black leading-none tracking-tight">
                                {stat.number}
                            </span>
                            <span className="font-inter text-[0.65rem] md:text-[0.7rem] text-gray-400 tracking-[0.12em] uppercase leading-relaxed max-w-[110px]">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
