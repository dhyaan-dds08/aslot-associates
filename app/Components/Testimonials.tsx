"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";


const testimonials = [
  {
    quote:
      "We initially brought Aslot & Associates in for audit work, but it quickly turned into much more. They helped us rethink our cash flow and brought a level of financial discipline we honestly didn't have before. What stood out the most is that they don't just show you numbers, they make sure you actually act on them.",
    name: "Kavin Shah",
    title: "Director, Venus Anachem Solutions Pvt Ltd",
  },
  {
    quote:
      "Taking a company through an IPO is intense, especially when it comes to restated financials. It needs precision and good judgment under pressure. Aslot & Associates handled everything end to end and were extremely reliable when timelines got tight. You always knew things were under control.",
    name: "Vijay Yadav",
    title: "Managing Director, HP Telecom India Ltd",
  },
  {
    quote:
      "We have been working with Aslot & Associates for audits and a number of tax matters. What I appreciate is how calm and structured they are, especially when things get complicated. When the stakes are high, that kind of approach really matters.",
    name: "Mavsang Chauhan",
    title: "Managing Director, Aakruti Infra Construction Pvt Ltd",
  },
  {
    quote:
      "From setting up the company to managing our day to day finances, they have been involved at every step. They built our entire financial setup and continue to run it smoothly. For a business that needed to move fast without making mistakes, that kind of support made a big difference.",
    name: "Nishant Painter",
    title: "Managing Director, Shivantra Solutions Pvt Ltd",
  },
  {
    quote:
      "As a startup, we didn't just need an accountant, we needed someone who could think like a CFO. Aslot & Associates stepped in exactly like that. They gave us clarity on cash flow, burn, and what really matters at our stage. They keep things practical and don't overcomplicate.",
    name: "Ummang Shah",
    title: "Managing Director, Plus Nine One Mediatech Pvt Ltd",
  },
  {
    quote:
      "I didn't realise how detailed the EB-5 process would be until I got into it. There was a lot to handle, especially around documentation and compliance. Aslot & Associates guided me through everything step by step. They were patient, thorough, and always available when I had questions.",
    name: "Nisha Patel",
    title: "NRI Client",
  },
  {
    quote:
      "When I received a notice from the Income Tax department, I was honestly quite stressed. Aslot & Associates took over completely, handled the process, represented my case, and got it resolved cleanly. I didn't have to worry through the whole thing.",
    name: "Rikunj Patel",
    title: "",
  },
  {
    quote:
      "I had a tax matter that stretched across multiple years and it was getting quite complicated. They handled everything, from documentation to follow ups, with a lot of attention to detail. It gave me a lot of confidence knowing they were on top of it.",
    name: "Kiran Patel",
    title: "Partner, Rajvee Exports",
  },
  {
    quote:
      "Real estate audits can get messy with multiple projects and different stages involved. Aslot & Associates have handled our audits across projects consistently well. They understand the space and you don't have to keep explaining things.",
    name: "Sharad Kakadia",
    title: "Managing Director, Vaishnodevi Reality Pvt Ltd",
  },
  {
    quote:
      "I was outside India when a tax issue came up, and at the same time there was a property transaction happening back home. Aslot & Associates managed both, coordinated with my family, handled the legal side, and kept me updated throughout. I could sort everything without being physically there, which was a huge relief.",
    name: "Niraj Pandya",
    title: "NRI Client",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setCurrent(swiper.realIndex);
  }, []);

  const goTo = (index: number) => {
    swiperInstance?.slideToLoop(index);
  };

  const prevSlide = () => {
    swiperInstance?.slidePrev();
  };

  const nextSlide = () => {
    swiperInstance?.slideNext();
  };

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

        <div className="relative flex items-center">
          {/* LEFT ARROW — hidden on mobile */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 md:-left-12 p-2 text-gray-400 hover:text-black transition z-10"
            aria-label="Previous"
          >
            <IoChevronBack size={28} />
          </button>

          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            speed={500}
            onSwiper={setSwiperInstance}
            onSlideChange={handleSlideChange}
            className="w-full"
            grabCursor={true}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center px-4 md:px-6 min-h-[280px] md:min-h-[220px] flex flex-col justify-center"
                >
                  <p className="font-cormorant text-xl md:text-2xl lg:text-[1.65rem] italic text-gray-700 leading-relaxed mb-8">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="font-inter font-medium text-sm text-black">
                    {t.name}
                  </p>
                  {t.title && (
                    <p className="font-inter text-sm text-gray-500 mt-1">
                      {t.title}
                    </p>
                  )}
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* RIGHT ARROW — hidden on mobile */}
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 md:-right-12 p-2 text-gray-400 hover:text-black transition z-10"
            aria-label="Next"
          >
            <IoChevronForward size={28} />
          </button>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${current === index ? "bg-black scale-125" : "bg-gray-300"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
