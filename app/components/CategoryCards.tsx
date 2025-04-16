import Link from 'next/link';
import React from 'react';

export default function CategoryCards() {
  return (
    <section className="py-16 px-6 bg-[#b9d8c0]">
      <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">Explore Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {/* Aromatherapy Card */}
        <div className="bg-[#F9E5E9] p-8 rounded-tl-[32px] rounded-br-[32px] shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl hover:opacity-90 relative">
          <div className="absolute inset-0 rounded-tl-[32px] rounded-br-[32px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573812461383-e5f8b759d12e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF5dXJ2ZWRhfGVufDB8fDB8fHww"
              alt="Aromatherapy"
              className="object-cover w-full h-full opacity-50"
            />
          </div>
          <div className="relative z-10 mb-6">
            <i className="fas fa-leaf text-[#F4A8C1] text-4xl"></i>
          </div>
          <h3 className="text-3xl font-bold text-black mb-4">Aromatherapy</h3>
          <p className="text-lg text-black mb-6">Essential oils and their mind-body benefits.</p>
          <div className="relative z-20">
            <Link href="/aromatherapy" className="text-[#ec608f] hover:underline text-lg">
              Learn More
            </Link>
          </div>
        </div>

        {/* Herbal Medicine Card */}
        <div className="bg-[#D1F7D8] p-8 rounded-tl-[32px] rounded-br-[32px] shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl hover:opacity-90 relative">
          <div className="absolute inset-0 rounded-tl-[32px] rounded-br-[32px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1514733670139-4d87a1941d55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXl1cnZlZGF8ZW58MHx8MHx8fDA%3D"
              alt="Herbal Medicine"
              className="object-cover w-full h-full opacity-50"
            />
          </div>
          <div className="relative z-10 mb-6">
            <i className="fas fa-palm-tree text-[#8BC34A] text-4xl"></i>
          </div>
          <h3 className="text-3xl font-bold text-black mb-4">Herbal Medicine</h3>
          <p className="text-lg text-black mb-6">Healing herbs and how to use them.</p>
          <div className="relative z-20">
            <Link href="/herbalmedicine" className="text-[#eb4188] hover:underline text-lg">
              Learn More
            </Link>
          </div>
        </div>

        {/* Traditional Healing Card */}
        <div className="bg-[#F7D3D7] p-8 rounded-tl-[32px] rounded-br-[32px] shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl hover:opacity-90 relative">
          <div className="absolute inset-0 rounded-tl-[32px] rounded-br-[32px] overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1682098137061-37ad1237ce57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXl1cnZlZGF8ZW58MHx8MHx8fDA%3D"
              alt="Traditional Healing"
              className="object-cover w-full h-full opacity-50"
            />
          </div>
          <div className="relative z-10 mb-6">
            <i className="fas fa-balance-scale text-[#F4A8C1] text-4xl"></i>
          </div>
          <h3 className="text-3xl font-bold text-black mb-4">Traditional Healing</h3>
          <p className="text-lg text-black mb-6">Cultural healing methods and practices.</p>
          <div className="relative z-20">
            <Link href="/traditionalhealing" className="text-[#d84475] hover:underline text-lg">
              Learn More
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
