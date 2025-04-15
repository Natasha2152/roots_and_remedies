import { getAllTraditionalHealing } from "../../lib/queries/traditionalhealing";
import SearchBar from "@/components/SearchBar";

type TraditionalHealing = {
    id: number;
    technique: string;
    culture: string;
    healingMethod: string;
    createdAt: Date;
    updatedAt: Date;
    usageIdeas: string;
    benefits: string;
    description: string;
    imageUrl: string;
    likes: number;
    rating: number | null;
    region: string;
    tags: string;
    moduleType: "traditionalhealing";
  };  

export default async function TraditionalHealingPage() {
  const rawData = await getAllTraditionalHealing();

  const data: TraditionalHealing[] = rawData.map((item) => ({
    ...item,
    moduleType: "traditionalhealing" as const,
  }));

  return (
    <section className="px-6 py-20 min-h-screen bg-gradient-to-b from-[#F9FAF6] to-[#FFF8F0]">
      <h2 className="text-3xl font-semibold text-center mb-10 text-[#4A5043]">
        Traditional Healing Practices
      </h2>

      <div className="max-w-4xl mx-auto mb-8">
        <SearchBar data={data} moduleType="traditionalhealing" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-[#E0E4DC] rounded-lg shadow p-5 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform"
          >
            <img
              src={item.imageUrl}
              alt={item.technique}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-[#4E6B4F]">{item.technique}</h3>
            <p className="text-sm text-gray-700 mt-1">{item.description}</p>
            <p className="text-sm text-[#7E8F7C] mt-2">Usage: {item.usageIdeas}</p>
            <p className="text-sm text-[#7E8F7C]">Culture: {item.culture}</p>
            <p className="text-xs text-[#B0B8A9] mt-1">
              Method: {item.healingMethod}
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              {item.tags.split(',').map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs bg-[#E9F5F0] text-[#3A5743] rounded-full"
                >
                  #{tag.trim()}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
