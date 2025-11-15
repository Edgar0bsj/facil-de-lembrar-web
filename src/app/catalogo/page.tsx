"use client";
import useComponents from "@/app/catalogo/index";

export default function Catalogo() {
  const { Components, Hooks } = useComponents();
  const { FeaturesSection, Footer, Navbar, ProductCard, LayoutProductCard } =
    Components;
  const { handleRent } = Hooks.useCatalogo();

  return (
    <>
      <Navbar />
      <LayoutProductCard
        title="Escolha a diversão da sua festa!"
        subTitle="Descubra nossos brinquedos infláveis, como toboágua e futebol de
              sabão, e torne seu evento inesquecível."
      >
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
      </LayoutProductCard>

      <FeaturesSection />
      <Footer />
    </>
  );
}
