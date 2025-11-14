"use client";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import ProductDetails from "@/components/product/ProductDetails";
import { mockProduct } from "@/components/product/productMock/product";
import ProductCard from "@/components/ProductCard";
import TestimonialsList from "@/components/testimonials/TestimonialsList";

export default function Home() {
  const handleRent = (productId: string) => {
    console.log(`Produto ${productId} alugado!`);
  };

  return (
    <>
      <Navbar />
      {/* BRINQUEDOS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nossos Brinquedos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça nossa seleção especial de brinquedos educativos e
              divertidos
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            <ProductCard
              id="1"
              image="/assets/img/toboga.jpeg"
              title="Tobogã"
              description="Quebra-cabeça de madeira com números e letras, ajuda no aprendizado de forma divertida e interativa."
              price={750.0}
              onRent={handleRent}
            />

            <ProductCard
              id="4"
              title="Kit de Arte e Pintura"
              description="Kit completo com tintas atóxicas, pincéis e telas para despertar o artista interior da criança."
              price={42.3}
              onRent={handleRent}
            />
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <Footer />
    </>
  );
}
