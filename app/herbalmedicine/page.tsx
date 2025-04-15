import { getAllHerbalMedicine } from "../../lib/queries/herbalmedicine";
import SearchBar from "@/components/SearchBar";
type HerbalMedicine = {
  id: number;
  name: string;
  description: string;
  benefits: string;
  origin: string;
  category: string;
  imageUrl: string;
  likes: number;
  rating: number | null;
  symptoms: string;
  tags: string;
  usageIdeas: string;
  createdAt: Date;
  updatedAt: Date;
  moduleType: "herbalmedicine";
};
export default async function HerbalHealingPage() {
  const rawData = await getAllHerbalMedicine();
  const data: HerbalMedicine[] = rawData.map((item) => ({
    ...item,
    moduleType: "herbalmedicine" as const,
  }));
  return (
    <section className="relative min-h-screen px-6 py-20 overflow-hidden">
      {/* Full Page Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.pinimg.com/236x/84/2c/24/842c24292c285652eb009db596677b2f.jpg" // added image url
          alt="Page Background"
          className="w-full h-full object-cover opacity-12" // opacity of the overall image
        />
      </div>
      {/* Content Section */}
      <div className="relative z-20">
        <h2 className="text-3xl font-semibold text-center mb-10 text-[#3A5743]">
          Herbal Healing Remedies
        </h2>
        <div className="max-w-4xl mx-auto mb-8">
          <SearchBar data={data} moduleType="herbalmedicine" />
        </div>
        {/* Card Container with Blurred Background */}
        <div
          className="relative rounded-lg shadow-md p-6"
          style={{ position: 'relative', zIndex: 0.8, overflow: 'hidden' }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
  {data.map((item) => (
    <div
      key={item.id}
      className="bg-gradient-to-br from-[#d2f8dc] to-[#FDFDFB] border border-[#D8EBD9] rounded-lg shadow-sm p-5 hover:shadow-md hover:scale-105 transition-all duration-300 ease-in-out transform relative z-10"
    >
      <img
        src={item.imageUrl}
        alt={item.name}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-bold text-[#4E6B4F]">{item.name}</h3>
      <p className="text-sm text-gray-700 mt-1">{item.description}</p>
      <p className="text-sm text-[#7E8F7C] mt-2">
        Benefits: {item.benefits}
      </p>
      <p className="text-sm text-[#7E8F7C]">Usage: {item.usageIdeas}</p>
      <p className="text-xs text-[#A4B9A4] mt-1">Symptoms: {item.symptoms}</p>
      <p className="text-xs text-[#A4B9A4]">Origin: {item.origin}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        {item.tags.split(",").map((tag, idx) => (
          <span
            key={idx}
            className="px-2 py-1 text-xs bg-[#DFF3E7] text-[#3A5743] rounded-full"
          >
            #{tag.trim()}
          </span>
        ))}
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
}
