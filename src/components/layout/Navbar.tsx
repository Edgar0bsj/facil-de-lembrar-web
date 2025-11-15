"use client";
import { useState, useEffect } from "react";

function useNavbar() {
  /**
   * ============================================
   * MENU EFFECT
   * ============================================
   */
  function handleMenuEffect() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
      if (isMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }

      return () => {
        document.body.style.overflow = "unset";
      };
    }, [isMenuOpen]);

    return { isMenuOpen, setIsMenuOpen };
  }
  /**
   * ============================================
   * LINK CLICK
   * ============================================
   */
  function handleLinkClick() {
    const { setIsMenuOpen } = handleMenuEffect();
    setIsMenuOpen(false);
  }
  /**
   * ============================================
   * RESERVATION
   * ============================================
   */
  function handleReservation() {
    const msg = "Olá! Quero reservar um brinquedo!";
    const whatsappNumber = "5521968968795";

    window.open(
      `https://wa.me/${encodeURIComponent(
        whatsappNumber
      )}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  }
  /**
   * ============================================
   * -------RETORNO-------
   * ============================================
   */
  return {
    utility: { handleLinkClick },
    handle: { handleMenuEffect, handleReservation },
  };
}
/**
 * ============================================
 * RENDER
 * ============================================
 */

export default function Navbar() {
  const { utility, handle } = useNavbar();
  const { handleLinkClick } = utility;
  const { handleReservation } = handle;
  const { isMenuOpen, setIsMenuOpen } = handle.handleMenuEffect();

  return (
    <>
      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav className="relative bg-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="shrink-0">
              <span className="text-2xl font-bold text-blue-900">
                {""}
                <img
                  className="rounded-xl"
                  src="/assets/img/logo.png"
                  alt="..."
                />
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {/* <a
                href="#inicio"
                className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:text-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                onClick={handleLinkClick}
              >
                Início
              </a> */}

              {/* CTA Button */}
              <button
                onClick={handleReservation}
                type="button"
                className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md hover:shadow-lg"
              >
                Reservar Agora
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {/* Hamburger Icon */}
                <div className="w-6 h-6 relative">
                  <span
                    className={`absolute block h-0.5 w-6 transform transition-all duration-300 ease-in-out bg-current ${
                      isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                    }`}
                  />
                  <span
                    className={`absolute block h-0.5 w-6 transform transition-all duration-300 ease-in-out bg-current ${
                      isMenuOpen ? "opacity-0" : "translate-y-0"
                    }`}
                  />
                  <span
                    className={`absolute block h-0.5 w-6 transform transition-all duration-300 ease-in-out bg-current ${
                      isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {/* <a
                href="#inicio"
                className="text-gray-700 hover:text-blue-900 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 focus:outline-none focus:text-blue-900 focus:bg-gray-50"
                onClick={handleLinkClick}
              >
                Início
              </a> */}

              {/* Mobile CTA Button */}
              <div className="pt-4 pb-2">
                <button
                  onClick={handleReservation}
                  type="button"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg text-base font-medium transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md hover:shadow-lg"
                >
                  Reservar Agora
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
