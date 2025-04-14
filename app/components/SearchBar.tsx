// components/SearchBar.tsx
"use client";

import { useState } from "react";

type Aromatherapy = {
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
  rating?: number;
  symptoms: string;
  tags: string;
  usageIdeas: string;
};

type Props = {
  data: Aromatherapy[];
};

export default function SearchBar({ data }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchTerm(query);

    const result = data.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.symptoms.toLowerCase().includes(query)
    );
    setFilteredData(result);
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search by name or symptoms..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
