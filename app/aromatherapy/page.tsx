import { getAllAromatherapy } from "../../lib/queries/aromatherapy";
import SearchBar from "@/components/SearchBar";

// Define Aromatherapy type directly in the component file
export type Aromatherapy = {
  id: number;
  name: string;
  essentialOil: string;
  uses: string;
  createdAt: Date; // Reflecting Prisma's DateTime
  updatedAt: Date; // Reflecting Prisma's DateTime
  benefits: string;
  category: string;
  description: string;
  imageUrl: string;
  likes: number;
  origin: string;
  rating?: number | null;  // Optional, as per schema
  symptoms: string;
  tags: string;
  usageIdeas: string;
};

// Define CombinedItem type with the added moduleType field
export type CombinedItem = Aromatherapy & {
  moduleType: "aromatherapy"; // Adding moduleType to match your application's needs
};

export default async function AromatherapyPage() {
  // Fetching data server-side
  const rawData: Aromatherapy[] = await getAllAromatherapy();

  // Mapping raw data to include moduleType field
  const data: CombinedItem[] = rawData.map((item) => ({
    ...item,
    moduleType: "aromatherapy", // Add moduleType
  }));

  return (
    <section className="px-6 py-20 min-h-screen bg-gradient-to-b from-[#F1EFE3] to-[#D7E0D3]">
      <h2 className="text-3xl font-semibold text-center mb-10 text-[#5C3D2E]">Aromatherapy Remedies</h2>

      {/* Search Bar Component */}
      <SearchBar data={data} />

      {/* Displaying the fetched data */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {data.map((item) => (
          <div
          key={item.id}
          className="bg-[#faefe1] border border-[#D8D1C6] rounded-xl shadow-lg p-6 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          >

        
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-56 object-cover rounded-md mb-4" // Increased image height for better view
            />
            <h3 className="text-xl font-bold text-[#5C3D2E] mb-2">{item.name}</h3>
            <p className="text-sm text-[#4A3F33] mb-1">{item.description}</p>
            <p className="text-sm text-[#6B5F4D] italic mb-2">Helps with: {item.symptoms}</p>

            {/* Tags as pastel badges */}
            <div className="flex flex-wrap gap-2 mt-3">
              {item.tags.split(',').map((tag, idx) => (
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
    </section>
  );
}
