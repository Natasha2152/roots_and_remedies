import React from "react";

export default function HerbsPreview() {
  return (
    <section className="px-6 py-20 bg-[#F6F7F9] overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E0F7FA] via-[#F1F8E9] to-[#FFF3E0] opacity-40 z-0 animate-pulse" />
      <div className="relative z-10">
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-gray-800">
          Discover the Healing Power of Herbs
        </h2>

        <div className="flex flex-col items-center gap-12">

          {/* Peppermint Oil Card */}
          <div className="flex flex-col lg:flex-row items-center bg-[#e0f7e9] rounded-[60px_10px_60px_10px] shadow-xl p-6 max-w-4xl w-full animate-slideInLeft">
            <img
              src="https://i.pinimg.com/236x/df/1f/0c/df1f0cbbc29769c9e98d6f314ad4eb52.jpg"
              alt="Peppermint Oil"
              className="w-full max-w-[180px] rounded-3xl opacity-70"
            />
            <div className="lg:ml-8 mt-4 lg:mt-0 text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Peppermint Oil</h3>
              <p className="text-gray-700 text-sm mb-4">Aromatherapy for relaxation and headache relief.</p>
              <a
                href="https://www.google.com/search?q=Peppermint+Oil"
                target="_blank"
                rel="noreferrer"
                className="inline-block text-white bg-gradient-to-br from-[#66BB6A] to-[#4CAF50] py-2 px-4 rounded-full hover:scale-105 transition"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Lavender Oil Card */}
          <div className="flex flex-col lg:flex-row-reverse items-center bg-[#f0e4f8] rounded-[10px_60px_10px_60px] shadow-xl p-6 max-w-4xl w-full animate-slideInRight">
            <img
              src="https://i.pinimg.com/236x/52/5a/0a/525a0a98c7eb4394ba06b15d2bc6afa3.jpg"
              alt="Lavender Oil"
              className="w-full max-w-[180px] rounded-3xl opacity-70"
            />
            <div className="lg:mr-8 mt-4 lg:mt-0 text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Lavender Oil</h3>
              <p className="text-gray-700 text-sm mb-4">Promotes calmness and aids in sleep.</p>
              <a
                href="https://www.google.com/search?q=Lavender+Oil"
                target="_blank"
                rel="noreferrer"
                className="inline-block text-white bg-gradient-to-br from-[#66BB6A] to-[#4CAF50] py-2 px-4 rounded-full hover:scale-105 transition"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Ashwagandha Card */}
          <div className="flex flex-col lg:flex-row items-center bg-[#fff3e8] rounded-[60px_10px_60px_10px] shadow-xl p-6 max-w-4xl w-full animate-slideInLeft">
            <img
              src="https://i.pinimg.com/236x/9d/7c/ae/9d7caeda14081d944d8a1952889145e0.jpg"
              alt="Ashwagandha"
              className="w-full max-w-[180px] rounded-3xl opacity-70"
            />
            <div className="lg:ml-8 mt-4 lg:mt-0 text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Ashwagandha</h3>
              <p className="text-gray-700 text-sm mb-4">Herbal remedy for stress and fatigue.</p>
              <a
                href="https://www.google.com/search?q=Ashwagandha"
                target="_blank"
                rel="noreferrer"
                className="inline-block text-white bg-gradient-to-br from-[#66BB6A] to-[#4CAF50] py-2 px-4 rounded-full hover:scale-105 transition"
              >
                Learn More
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes slideInLeft {
            0% { opacity: 0; transform: translateX(-60px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInRight {
            0% { opacity: 0; transform: translateX(60px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .animate-slideInLeft {
            animation: slideInLeft 0.8s ease-out both;
          }
          .animate-slideInRight {
            animation: slideInRight 0.8s ease-out both;
          }
        `}
      </style>
    </section>
  );
}
