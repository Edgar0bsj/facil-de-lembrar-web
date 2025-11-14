"use client";
import Hero from "@/components/layout/Hero";

export default function Home() {
  const handleRent = (productId: string) => {
    console.log(`Produto ${productId} alugado!`);
  };

  return (
    <>
      <Hero />
    </>
  );
}
