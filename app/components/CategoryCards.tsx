import Link from 'next/link';
import React from 'react';

export default function CategoryCards() {
  return (
    <section className="py-16 px-6 bg-[#e6eff8]">
      <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">Explore Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {/* Aromatherapy Card */}
        <div className="bg-[#F9E5E9] p-8 rounded-[32px] shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl hover:opacity-90">
          <div className="mb-6">
            <i className="fas fa-leaf text-[#F4A8C1] text-4xl"></i>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Aromatherapy</h3>
          <p className="text-lg text-gray-600 mb-6">Essential oils and their mind-body benefits.</p>
          <Link href="/aromatherapy" className="text-[#F4A8C1] hover:underline text-lg font-medium">
            Learn More
          </Link>
        </div>

        {/* Herbal Medicine Card */}
        <div className="bg-[#D1F7D8] p-8 rounded-[32px] shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl hover:opacity-90">
          <div className="mb-6">
            <i className="fas fa-palm-tree text-[#8BC34A] text-4xl"></i>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Herbal Medicine</h3>
          <p className="text-lg text-gray-600 mb-6">Healing herbs and how to use them.</p>
          <Link href="/herbalmedicine" className="text-[#8BC34A] hover:underline text-lg font-medium">
            Learn More
          </Link>
        </div>

        {/* Traditional Healing Card */}
        <div className="bg-[#F7D3D7] p-8 rounded-[32px] shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl hover:opacity-90">
          <div className="mb-6">
            <i className="fas fa-balance-scale text-[#F4A8C1] text-4xl"></i>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Traditional Healing</h3>
          <p className="text-lg text-gray-600 mb-6">Cultural healing methods and practices.</p>
          <Link href="/traditionalhealing" className="text-[#F4A8C1] hover:underline text-lg font-medium">
            Learn More
          </Link>
        </div>

      </div>
    </section>
  );
}
