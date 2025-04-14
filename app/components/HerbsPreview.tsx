import React from "react";

export default function HerbsPreview() {
  return (
    <section className="px-6 py-20 bg-[#F6F7F9]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E0F7FA] via-[#F1F8E9] to-[#FFF3E0] opacity-40 z-0 animate-pulse" />
      <div className="relative z-10">
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-gray-800">
          Discover the Healing Power of Herbs
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          
          {/* Peppermint Card */}
          <div className="bg-gradient-to-br from-[#A8E6CF] via-[#E1F7D5] to-[#D7E8FF] p-6 rounded-3xl shadow-xl w-72 transition-all transform hover:scale-105 hover:shadow-2xl hover:opacity-90 duration-300 ease-in-out flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Peppermint Oil</h3>
              <p className="text-sm text-gray-700 mb-4">Aromatherapy for relaxation and headache relief.</p>
            </div>
            <button className="self-start text-white bg-gradient-to-br from-[#66BB6A] to-[#4CAF50] py-2 px-4 rounded-full hover:scale-105 transition-all ease-in-out">
              Learn More
            </button>
          </div>

          {/* Lavender Card */}
          <div className="bg-gradient-to-br from-[#D1C4E9] via-[#E4C4F2] to-[#F9E6FF] p-6 rounded-3xl shadow-xl w-72 transition-all transform hover:scale-105 hover:shadow-2xl hover:opacity-90 duration-300 ease-in-out flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Lavender Oil</h3>
              <p className="text-sm text-gray-700 mb-4">Promotes calmness and aids in sleep.</p>
            </div>
            <button className="self-start text-white bg-gradient-to-br from-[#66BB6A] to-[#4CAF50] py-2 px-4 rounded-full hover:scale-105 transition-all ease-in-out">
              Learn More
            </button>
          </div>

          {/* Ashwagandha Card */}
          <div className="bg-gradient-to-br from-[#FFD3B6] via-[#FBE2C8] to-[#F8D7D5] p-6 rounded-3xl shadow-xl w-72 transition-all transform hover:scale-105 hover:shadow-2xl hover:opacity-90 duration-300 ease-in-out flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Ashwagandha</h3>
              <p className="text-sm text-gray-700 mb-4">Herbal remedy for stress and fatigue.</p>
            </div>
            <button className="self-start text-white bg-gradient-to-br from-[#66BB6A] to-[#4CAF50] py-2 px-4 rounded-full hover:scale-105 transition-all ease-in-out">
              Learn More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

