"use client";
import React, { useState } from "react";
import { Product } from "./productMock/product";
import ImageGallery from "./ImageGallery";
import ProductInfo from "./ProductInfo";
import ProductCard from "../productCard/ProductCard";

interface ProductDetailsProps {
  product: Product;
  relatedProducts?: Product[];
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [cartItems, setCartItems] = useState<string[]>([]);

  const handleAddToCart = (productId: string) => {
    setCartItems((prev) => [...prev, productId]);
    // Aqui você poderia adicionar uma notificação ou atualizar o estado global do carrinho
    console.log(`Produto ${productId} adicionado ao carrinho`);
  };

  const handleRentProduct = (productId: string) => {
    console.log(`Alugando produto ${productId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-500">
            <a href="/" className="hover:text-gray-700">
              Início
            </a>
            <span className="mx-2">/</span>
            <a href="/produtos" className="hover:text-gray-700">
              Produtos
            </a>
            <span className="mx-2">/</span>
            <a
              href={`/categorias/${product.category.toLowerCase()}`}
              className="hover:text-gray-700"
            >
              {product.category}
            </a>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.title}</span>
          </nav>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div className="lg:sticky lg:top-8 lg:h-fit">
            <ImageGallery images={product.images} title={product.title} />
          </div>

          {/* Product Information */}
          <div>
            <ProductInfo product={product} onAddToCart={handleAddToCart} />
          </div>
        </div>

        {/* Features Section */}
        <section className="mt-16 bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Qualidade Garantida
              </h3>
              <p className="text-gray-600">
                Todos os produtos passam por rigorosos testes de qualidade
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Preços Justos
              </h3>
              <p className="text-gray-600">
                As melhores condições de pagamento do mercado
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Entrega Rápida
              </h3>
              <p className="text-gray-600">
                Entrega em até 48 horas para todo o Brasil
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetails;
