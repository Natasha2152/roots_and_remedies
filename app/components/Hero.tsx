
"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative text-center py-20 px-4 overflow-hidden min-h-screen">
      {/* Transparent background image (not blurred) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1492552085122-36706c238263?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXl1cnZlZGF8ZW58MHx8MHx8fDA%3D"
          alt="Background"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Hero content with framer motion */}
      <div className="relative z-10 text-gray-800">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4 drop-shadow-lg"
        >
          Discover Nature’s Healing Touch
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-xl mx-auto text-lg opacity-90 drop-shadow-md"
        >
          Explore herbs, aromatherapy, and traditional healing techniques curated just for your wellness.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-[#8eecca] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#91C987] transition"
        >
          Explore Now
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center items-start p-1">
          <motion.div
            className="w-1 h-2 bg-gray-700 rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </div>
    </section>
  );
}

