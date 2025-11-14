"use client";
import Image from "next/image";
import gsap from "gsap";
import { useRef, useEffect } from "react";
/**
 * ============================================
 * TYPES
 * ============================================
 */
interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
}

/**
 * ============================================
 * HOOKS
 * ============================================
 */
function useHero() {
  const bgRef = useRef(null);

  useEffect(() => {
    gsap.to(bgRef.current, {
      scale: 1.2, // aumenta o zoom até 110%
      duration: 5, // tempo do zoom
      ease: "power1.inOut",
      repeat: -1, // infinito
      yoyo: true, // vai e volta
    });
  }, []);

  return { bgRef };
}

/**
 * ============================================
 * RENDER
 * ============================================
 */

export default function Hero({
  title = "Diversão que ninguém esquece!",
  subtitle = "Alugue brinquedos incríveis e transforme sua festa em uma experiência memorável.",
  ctaText = "Explorar Brinquedos",
}: HeroProps) {
  const { bgRef } = useHero();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <Image
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat object-cover object-center"
        src={"/assets/logo.png"}
        alt="..."
        fill
      />
      <div className="absolute inset-0  bg-opacity-40 bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-6 sm:space-y-8">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            <span className="block animate-fade-in-down">
              {title.split(".").map((word, index) => (
                <span
                  key={index}
                  className="inline-block animate-fade-in-up font-bold"
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
              Quem somos
            </button>
          </div>
        </div>
      </div>

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
}
