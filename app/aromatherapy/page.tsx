import { getAllAromatherapy } from "../../lib/queries/aromatherapy"; 
// Corrected import

import SearchBar from "@/components/SearchBar";
// lib/queries/aromatherapy.ts
export type Aromatherapy = {
    id: number;
    name: string;
    essentialOil: string;
    uses: string;
    benefits: string;
    category: string;
    description: string;
    imageUrl: string;
    likes: number;
    origin: string;
    rating?: number;  // Change to `rating?: number` to allow undefined
    symptoms: string;
    tags: string;
    usageIdeas: string;
  };
  

export default async function AromatherapyPage() {
  // Fetching data server-side
  const data: Aromatherapy[] = await getAllAromatherapy();

  return (
    <section className="px-6 py-20 bg-[#F6F7F9] min-h-screen">
      <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">Aromatherapy Remedies</h2>

      {/* Search Bar Component */}
      <SearchBar data={data} />

      {/* Displaying the fetched data */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {data.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-md p-6">
            <img src={item.imageUrl} alt={item.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold text-gray-700 mb-2">{item.name}</h3>
            <p className="text-sm text-gray-600 mb-1">{item.description}</p>
            <p className="text-sm text-gray-500 italic">Helps with: {item.symptoms}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
