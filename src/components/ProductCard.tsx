"use client";
import React, { useState } from "react";

interface ProductCardProps {
  id?: string;
  title?: string;
  description?: string;
  price?: number;
  image?: string;
  available?: boolean;
  onRent?: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id = "1",
  title = "Brinquedo Educativo",
  description = "Brinquedo colorido e seguro para crianças, estimulando criatividade e aprendizado",
  price = 15.9,
  image,
  available = true,
  onRent,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isRenting, setIsRenting] = useState(false);

  const handleRent = () => {
    setIsRenting(true);
    setTimeout(() => {
      setIsRenting(false);
      if (onRent) {
        onRent(id);
      }
    }, 1500);
  };

  const defaultImage =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Cg transform='translate(200,150)'%3E%3Ccircle r='40' fill='%236366f1'/%3E%3Ccircle r='30' fill='%23fbbf24'/%3E%3Ccircle r='20' fill='%2334d399'/%3E%3C/g%3E%3C/svg%3E";

  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl max-w-sm mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-100">
        <img
          src={image || defaultImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
        />

        {/* Availability Badge */}
        {!available && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Indisponível
          </div>
        )}

        {/* Hover Overlay */}
        {isHovered && available && (
          <div className="absolute inset-0 bg-blue-900 bg-opacity-20 flex items-center justify-center transition-opacity duration-300">
            <div className="text-white text-lg font-semibold">Ver Detalhes</div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        <div className="space-y-3">
          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 line-clamp-2 leading-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-600 line-clamp-3 leading-relaxed">
            {description}
          </p>

          {/* Price and Rating */}
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold text-blue-900">
                R$ {price.toFixed(2)}
              </div>
              <div className="text-xs sm:text-sm text-gray-500">por dia</div>
            </div>

            {/* Rating Stars */}
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill={star <= 4 ? "#fbbf24" : "#e5e7eb"}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.95 1.902l-1.07 3.292a1 1 0 00-.95.69l-2.89 2.1a1 1 0 00-.95-.69l-2.89-2.1a1 1 0 00-.95.69l-1.07-3.292a1 1 0 00.95-.69H7.537c-.969 0-1.371-1.24-.95-1.902l1.07-3.292a1 1 0 00-.95-.69l2.89-2.1a1 1 0 00.95.69z" />
                </svg>
              ))}
              <span className="text-xs sm:text-sm text-gray-500 ml-1">
                (4.5)
              </span>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              ✓ Seguro
            </span>
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              ✓ Educativo
            </span>
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              ✓ Divertido
            </span>
          </div>

          {/* Rent Button */}
          <button
            onClick={handleRent}
            disabled={!available || isRenting}
            className={`w-full py-3 px-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-offset-2 ${
              !available
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : isRenting
                ? "bg-orange-500 text-white cursor-wait"
                : "bg-blue-900 hover:bg-blue-800 text-white hover:scale-105 focus:ring-blue-500 shadow-md hover:shadow-lg"
            }`}
          >
            {isRenting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Alugando...
              </span>
            ) : !available ? (
              "Indisponível"
            ) : (
              "Alugar Agora"
            )}
          </button>
        </div>
      </div>

      {/* Success Animation */}
      {isRenting && (
        <div className="absolute inset-0 bg-green-500 bg-opacity-90 flex items-center justify-center z-10 rounded-xl">
          <div className="text-white text-center">
            <svg
              className="w-16 h-16 mx-auto mb-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 12.293a1 1 0 00-1.414 0l-2 2a1 1 0 001.414 1.414L8.586 11l1.293 1.293a1 1 0 001.414-1.414l-2-2a1 1 0 00-.586-.293z"
                clipRule="evenodd"
              />
            </svg>
            <div className="text-xl font-bold">Reservado!</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
