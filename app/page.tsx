import CTACard from "@/components/CTA";
import Categories from "@/components/pages/Categories";
import Products from "@/components/pages/Products";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <CTACard/>
      <Categories/>
      <Products/>
    </main>
  );
}
