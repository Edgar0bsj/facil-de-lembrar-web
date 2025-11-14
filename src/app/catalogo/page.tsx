"use client";
import { useRouter } from "next/navigation";
import FeaturesSection from "@/components/features/FeaturesSection";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const router = useRouter();
  const handleRent = (productId: string) => {
    const message = "Olá! Quero reservar um brinquedo!";
    router.push(
      `https://wa.me/5521968968795?text=${encodeURIComponent(message)}`
    );
  };

  return (
    <>
      <Navbar />
      {/* BRINQUEDOS */}
      <section className="pt-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Escolha a diversão da sua festa!
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubra nossos brinquedos infláveis, como toboágua e futebol de
              sabão, e torne seu evento inesquecível.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            <ProductCard
              id="1"
              image="/assets/img/toboga.jpeg"
              title="Tobogã"
              description="é a atração perfeita para festas, eventos e comemorações. Transforme qualquer ocasião em uma aventura inesquecível!"
              price={999.0}
              onRent={handleRent}
            />

            <ProductCard
              id="2"
              image="/assets/img/fdesabao.jpeg"
              title="Futebol De Sabão"
              description="Transforme sua festa em um verdadeiro parque de diversões com o combo Futebol de Sabão, garante momentos inesquecíveis"
              price={999.0}
              onRent={handleRent}
            />
            <ProductCard
              id="3"
              image="/assets/img/toboga-desabao.png"
              title="Futebol De Sabão + Tobogã"
              description="Diversão escorregadia e competição animada no campo, seguidas de muita adrenalina na descida do tobogã um combo perfeito!"
              price={999.0}
              onRent={handleRent}
            />
          </div>
        </div>
      </section>
      <FeaturesSection />
      {/* FOOTER */}
      <Footer />
    </>
  );
}
