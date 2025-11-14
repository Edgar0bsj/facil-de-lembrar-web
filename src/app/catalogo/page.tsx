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
              description="Prepare-se para muita adrenalina e diversão! Nosso Tobogã inflável é a atração perfeita para transformar qualquer festa em um evento inesquecível. As crianças vão adorar escorregar e repetir a aventura quantas vezes quiserem, enquanto os adultos se divertem vendo a energia contagiante. Seguro, colorido e gigante, o Tobogã garante risadas e momentos marcantes que ninguém vai esquecer."
              price={999.0}
              onRent={handleRent}
            />

            <ProductCard
              id="2"
              image="/assets/img/fdesabao.jpeg"
              title="Futebol De Sabão"
              description="Diversão garantida e muitas risadas! O Futebol de Sabão é a atração perfeita para quem quer transformar a festa em um verdadeiro espetáculo de alegria. Imagine jogar futebol em um campo inflável cheio de espuma e sabão: escorregões, dribles engraçados e gols inesperados tornam cada partida única. Seguro, refrescante e irresistível, o Futebol de Sabão é ideal para animar crianças, jovens e adultos que adoram se divertir juntos."
              price={999.0}
              onRent={handleRent}
            />
            <ProductCard
              id="3"
              image="/assets/img/toboga-desabao.png"
              title="Futebol De Sabão + Tobogã"
              description="Diversão garantida e muitas risadas! O Futebol de Sabão é a atração perfeita para quem quer transformar a festa em um verdadeiro espetáculo de alegria. Imagine jogar futebol em um campo inflável cheio de espuma e sabão: escorregões, dribles engraçados e gols inesperados tornam cada partida única. Seguro, refrescante e irresistível, o Futebol de Sabão é ideal para animar crianças, jovens e adultos que adoram se divertir juntos."
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
