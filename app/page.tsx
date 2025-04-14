
import Hero from "./components/Hero";
import CategoryCards from "./components/CategoryCards";
import HerbsPreview from "./components/HerbsPreview";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#FFF8F0] text-gray-800">
      <Hero />
      <CategoryCards />
      <HerbsPreview />
      <Footer />
    </main>
  );
}

    
