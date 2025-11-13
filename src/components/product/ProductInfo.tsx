import React from "react";
import { Product } from "./productMock/product";
import AddToCartButton from "./AddToCartButton";

interface ProductInfoProps {
  product: Product;
  onAddToCart: (productId: string) => void;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product, onAddToCart }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {product.category}
          </span>
          {product.availability ? (
            <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
              Em Estoque
            </span>
          ) : (
            <span className="text-sm font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full">
              Indisponível
            </span>
          )}
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {product.title}
        </h1>

        <p className="text-lg text-gray-600 mb-4">{product.description}</p>

        {/* Rating */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            {renderStars(product.rating)}
            <span className="ml-2 text-sm text-gray-600">{product.rating}</span>
          </div>
          <span className="text-sm text-gray-500">
            ({product.reviews} avaliações)
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-baseline space-x-3">
        <span className="text-4xl font-bold text-gray-900">
          {formatPrice(product.price)}
        </span>
        {product.originalPrice && (
          <span className="text-xl text-gray-500 line-through">
            {formatPrice(product.originalPrice)}
          </span>
        )}
        {product.originalPrice && (
          <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
          </span>
        )}
      </div>

      {/* Features */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Destaques do Produto
        </h3>
        <ul className="space-y-2">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Specifications */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Especificações
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-sm text-gray-500">Faixa Etária</span>
            <p className="font-medium text-gray-900">
              {product.specifications.age}
            </p>
          </div>
          <div>
            <span className="text-sm text-gray-500">Material</span>
            <p className="font-medium text-gray-900">
              {product.specifications.material}
            </p>
          </div>
          <div>
            <span className="text-sm text-gray-500">Dimensões</span>
            <p className="font-medium text-gray-900">
              {product.specifications.dimensions}
            </p>
          </div>
          <div>
            <span className="text-sm text-gray-500">Peso</span>
            <p className="font-medium text-gray-900">
              {product.specifications.weight}
            </p>
          </div>
        </div>
      </div>

      {/* Long Description */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Descrição Completa
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {product.longDescription}
        </p>
      </div>

      {/* Add to Cart Button */}
      <AddToCartButton
        productId={product.id}
        onAddToCart={onAddToCart}
        disabled={!product.availability}
      />

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {product.tags.map((tag, index) => (
          <span
            key={index}
            className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;
