import React, { useState } from "react";

interface AddToCartButtonProps {
  productId: string;
  onAddToCart: (productId: string) => void;
  disabled?: boolean;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  productId,
  onAddToCart,
  disabled = false,
}) => {
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = async () => {
    if (disabled || isAdding) return;

    setIsAdding(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    onAddToCart(productId);
    setIsAdding(false);
    setIsAdded(true);

    // Reset success state after 3 seconds
    setTimeout(() => setIsAdded(false), 3000);
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled || isAdding}
      className={`
        w-full py-3 px-6 rounded-lg font-semibold text-white
        transition-all duration-300 transform relative overflow-hidden
        ${
          disabled
            ? "bg-gray-300 cursor-not-allowed"
            : isAdded
            ? "bg-green-500 hover:bg-green-600"
            : "bg-blue-600 hover:bg-blue-700 hover:scale-105 active:scale-95"
        }
      `}
    >
      <span
        className={`flex items-center justify-center transition-all duration-300 ${
          isAdding ? "opacity-0" : "opacity-100"
        }`}
      >
        {isAdded ? (
          <>
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Adicionado ao Carrinho!
          </>
        ) : (
          <>
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            Adicionar ao Carrinho
          </>
        )}
      </span>

      {/* Loading spinner */}
      {isAdding && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
        </div>
      )}

      {/* Ripple effect on click */}
      {!disabled && !isAdding && !isAdded && (
        <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></span>
      )}
    </button>
  );
};

export default AddToCartButton;
