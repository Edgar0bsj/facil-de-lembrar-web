import FeaturesSection from "@/components/features/FeaturesSection";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ProductCard from "@/components/productCard/ProductCard";
import useCatalogo from "@/hooks/UseCatalogo";
import LayoutProductCard from "@/components/productCard/LayoutProductCard";

export default function useComponents() {
  const catalogo = useCatalogo;

  return {
    Components: {
      FeaturesSection,
      Footer,
      Navbar,
      ProductCard,
      LayoutProductCard,
    },
    Hooks: {
      useCatalogo: catalogo,
    },
  };
}
