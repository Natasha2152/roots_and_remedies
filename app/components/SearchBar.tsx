"use client";

import { useState } from "react";

// Define types for different modules
type Aromatherapy = {
  id: number;
  name: string;
  essentialOil: string;
  uses: string;
  benefits: string;
  category: string;
  description: string;
  imageUrl: string;
  origin: string;
  rating: number | null;
  likes: number;
  symptoms: string;
  tags: string;
  usageIdeas: string;
  createdAt: Date;
  updatedAt: Date;
  moduleType: "aromatherapy";
};

type HerbalMedicine = {
  id: number;
  name: string;
  description: string;
  benefits: string;
  origin: string;
  category: string;
  imageUrl: string;
  rating: number | null;
  symptoms: string;
  tags: string;
  usageIdeas: string;
  createdAt: Date;
  updatedAt: Date;
  moduleType: "herbalmedicine";
};

type TraditionalHealing = {
  id: number;
  technique: string;
  culture: string;
  healingMethod: string;
  usageIdeas: string;
  benefits: string;
  description: string;
  imageUrl: string;
  rating: number | null;
  region: string;
  tags: string;
  createdAt: Date;
  updatedAt: Date;
  moduleType: "traditionalhealing";
};

type CombinedItem = (Aromatherapy | HerbalMedicine | TraditionalHealing) & {
  moduleType: "aromatherapy" | "herbalmedicine" | "traditionalhealing";
};

type Props = {
  data: CombinedItem[];
  moduleType: "aromatherapy" | "herbalmedicine" | "traditionalhealing";
};

export default function SearchBar({ data, moduleType }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<CombinedItem[]>(data);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchTerm(query);

    // Filter the data based on name/technique and symptoms
    const results = data.filter((item) => {
      const nameOrTechnique =
        "name" in item ? item.name : "technique" in item ? item.technique : "";
      const symptoms = "symptoms" in item ? item.symptoms : "";

      return (
        nameOrTechnique.toLowerCase().includes(query) ||
        symptoms?.toLowerCase().includes(query)
      );
    });

    setFilteredData(results);
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder={`Search ${moduleType}...`}
        value={searchTerm}
        onChange={handleSearch}
        className="w-full px-4 py-2 rounded-lg border border-[#D6E2D6] focus:outline-none focus:ring-2 focus:ring-[#A8D5BA] bg-[#F9FAF5] text-[#3A5743]"
      />

      {/* If there is a search term, show the filtered results */}
      {searchTerm && (
        <div className="mt-4 space-y-2">
          {filteredData.length === 0 ? (
            <p className="text-sm text-[#A07F7F]">No results found.</p>
          ) : (
            filteredData.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="p-3 rounded bg-[#F3F8F3] border border-[#E1EEE1] shadow-sm"
              >
                <p className="text-sm font-medium text-[#3A5743]">
                  {"name" in item ? item.name : item.technique}
                </p>
                {"symptoms" in item && item.symptoms && (
                  <p className="text-xs text-[#7A947A]">{item.symptoms}</p>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
