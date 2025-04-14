import React from "react";

export default function Hero() {
  return (
    <section className="relative text-center py-16 px-4 bg-gradient-to-br from-[#E2CFE1] to-[#7bcfb0]">
      {/* Lighter overlay to keep it pastel while maintaining readability */}
      <div className="absolute inset-0 bg-white opacity-60"></div>

      <div className="relative z-10 text-gray-800">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Discover Nature’s Healing Touch</h1>
        <p className="max-w-xl mx-auto text-lg opacity-90 drop-shadow-md">
          Explore herbs, aromatherapy, and traditional healing techniques curated just for your wellness.
        </p>
        <button className="mt-6 bg-[#8eecca] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#91C987] transition">
          Explore Now
        </button>
      </div>
    </section>
  );
}

