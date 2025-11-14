import React from "react";
import Testimonial from "./Testimonial";

interface TestimonialData {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
  featured?: boolean;
}

const TestimonialsList: React.FC = () => {
  const testimonials: TestimonialData[] = [
    {
      id: "1",
      name: "Maria Santos",
      role: "Mãe do Cliente",
      company: "Cliente Feliz",
      content:
        "Meus filhos amam os brinquedos! A qualidade é incrível e o serviço de entrega é sempre pontual. Já alugamos 3 vezes e sempre ficamos satisfeitos.",
      rating: 5,
      featured: true,
    },
    {
      id: "2",
      name: "Pedro Costa",
      role: "Pai de Cliente",
      company: "Cliente Recorrente",
      content:
        "A variedade de brinquedos é excelente! Meus filhos nunca se cansam e sempre têm algo novo para brincar. O sistema de aluguel é muito prático.",
      rating: 5,
      avatar: undefined, // Will use default avatar
    },
    {
      id: "3",
      name: "Ana Oliveira",
      role: "Mãe do Cliente",
      company: "Cliente Premium",
      content:
        "Os brinquedos são seguros e educativos. Adorei a opção de poder trocar os brinquedos conforme meus filhos crescem. Recomendo!",
      rating: 4.5,
    },
    {
      id: "4",
      name: "Carlos Mendes",
      role: "Pai de Cliente",
      company: "Cliente Satisfeito",
      content:
        "Excelente custo-benefício! Alugamos brinquedos educativos por um preço muito acessível e a qualidade surpreende. Atendimento impecável.",
      rating: 5,
    },
    {
      id: "5",
      name: "Fernanda Lima",
      role: "Mãe do Cliente",
      company: "Cliente Fiel",
      content:
        "Meu filho pequeno adora os brinquedos sensoriais! São seguros e ajudam no desenvolvimento dele. A entrega é rápida e a embalagem é linda.",
      rating: 4.5,
    },
    {
      id: "6",
      name: "Ricardo Alves",
      role: "Pai de Cliente",
      company: "Novo Cliente",
      content:
        "Acabei de conhecer o serviço e já me apaixonei! A praticidade de alugar brinquedos em vez de comprar é genial. Meus filhos estão sempre felizes.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Depoimentos de Clientes
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Veja o que nossos clientes dizem sobre nossos brinquedos e serviços
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="transform transition-all duration-500"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
                opacity: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        div[style*="animation"] {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsList;
