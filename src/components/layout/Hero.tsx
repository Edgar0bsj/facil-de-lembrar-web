"use client";
import Image from "next/image";
import React from "react";
import ScrollIndicator from "../scroll-Indicator/ScrollIndicator";

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = "Descubra o Mundo Mágico dos Brinquedos",
  subtitle = "Transforme a imaginação em aventura com nossos brinquedos educativos e divertidos",
  ctaText = "Explorar Brinquedos",
  backgroundImage,
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-6 sm:space-y-8">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            <span className="block animate-fade-in-down">
              {title.split(" ").map((word, index) => (
                <span
                  key={index}
                  className="inline-block animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {word}{" "}
                </span>
              ))}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <button className="w-full sm:w-auto bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50">
              {ctaText}
            </button>

            <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50">
              Saiba Mais
            </button>
          </div>

          {/* Features */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 sm:mt-16 animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            <div className="text-center">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 transform transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-3">🎨</div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  Criativo
                </h3>
                <p className="text-gray-200 text-sm">
                  Estimula a imaginação e criatividade
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 transform transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-3">🧠</div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  Educativo
                </h3>
                <p className="text-gray-200 text-sm">
                  Aprenda brincando de forma divertida
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 transform transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-3">🛡️</div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  Seguro
                </h3>
                <p className="text-gray-200 text-sm">
                  Materiais atóxicos e duráveis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />

      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;
