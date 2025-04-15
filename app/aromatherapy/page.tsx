import { getAllAromatherapy } from "../../lib/queries/aromatherapy";
import SearchBar from "@/components/SearchBar";

// Define Aromatherapy type
export type Aromatherapy = {
  id: number;
  name: string;
  essentialOil: string;
  uses: string;
  createdAt: Date;
  updatedAt: Date;
  benefits: string;
  category: string;
  description: string;
  imageUrl: string;
  likes: number;
  origin: string;
  rating?: number | null;
  symptoms: string;
  tags: string;
  usageIdeas: string;
};

// Extend with moduleType
export type CombinedItem = Aromatherapy & {
  moduleType: "aromatherapy";
};

export default async function AromatherapyPage() {
  const rawData: Aromatherapy[] = await getAllAromatherapy();

  const data: CombinedItem[] = rawData.map((item) => ({
    ...item,
    moduleType: "aromatherapy",
  }));

  return (
    <section className="relative min-h-screen px-6 py-20 overflow-hidden">
      {/* Full Page Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.pinimg.com/736x/12/2b/96/122b96905b07877ff5312443304e8dfd.jpg"
          alt="Page Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20">
        <h2 className="text-3xl font-semibold text-center mb-10 text-[#5C3D2E]">
          Aromatherapy Remedies
        </h2>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <SearchBar data={data} moduleType="aromatherapy" />
        </div>

        {/* Card Container with Blurred Background */}
        <div
          className="relative rounded-lg shadow-md p-6"
          style={{ position: 'relative', zIndex: 1, overflow: 'hidden' }}
        >

          {/* Remedy Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 relative z-10">
            {data.map((item) => (
              <div
                key={item.id}
                className="bg-[#f8f2eb] border border-[#D8D1C6] rounded-xl shadow-lg p-6 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-56 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold text-[#5C3D2E] mb-2">{item.name}</h3>
                <p className="text-sm text-[#4A3F33] mb-1">{item.description}</p>
                <p className="text-sm text-[#6B5F4D] italic mb-2">
                  Helps with: {item.symptoms}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {item.tags.split(",").map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-[#D6CFC1] text-[#5B4F3B] rounded-full"
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
