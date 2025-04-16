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
    <section className="relative min-h-screen px-6 py-20 overflow-hidden">
      {/* Full Page Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.pinimg.com/236x/57/d5/9e/57d59e1a3dc10ba4ab5d71db981dcec0.jpg"
          alt="Page Background"
          className="w-full h-full object-cover opacity-11"
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10">
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
              className="min-h-[500px] bg-[rgba(232,220,202,0.5)] border border-[#DCE1DA] rounded-lg shadow p-5 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform"
            >
              <img
                src={item.imageUrl}
                alt={item.technique}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold text-[#4E6B4F]">{item.technique}</h3>
              <p className="text-sm text-gray-700 mt-1">{item.description}</p>
              <p className="text-sm text-[#7E8F7C] mt-2">Usage: {item.usageIdeas}</p>
              <p className="text-sm text-[#7E8F7C]">Culture: {item.culture}</p>
              <p className="text-xs text-[#B0B8A9] mt-1">
                Method: {item.healingMethod}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {item.tags.split(",").map((tag, idx) => (
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
      </div>
    </section>
  );
}
