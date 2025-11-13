import React from "react";

interface TestimonialProps {
  name?: string;
  role?: string;
  company?: string;
  content?: string;
  avatar?: string;
  rating?: number;
  featured?: boolean;
}

const Testimonial: React.FC<TestimonialProps> = ({
  name = "João Silva",
  role = "Pai do Cliente",
  company = "Cliente Satisfeito",
  content = "Os brinquedos alugados transformaram o fim de semana do meu filho! A qualidade é excepcional e o serviço de entrega foi super rápido. Recomendo a todos!",
  avatar,
  rating = 5,
  featured = false,
}) => {
  const defaultAvatar =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%236366f1'/%3E%3Ctext x='50' y='50' text-anchor='middle' dy='0.3em' fill='white' font-family='Arial' font-size='40' font-weight='bold'%3EJS%3C/text%3E%3C/svg%3E";

  return (
    <div
      className={`relative bg-white rounded-2xl shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
        featured ? "ring-2 ring-blue-500 ring-opacity-50" : ""
      }`}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute -top-4 -right-4 bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
          Destaque
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <img
            src={avatar || defaultAvatar}
            alt={name}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="mb-3">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
              {name}
            </h3>
            <div className="flex items-center space-x-2 text-sm sm:text-base text-gray-600">
              <span className="font-medium">{role}</span>
              {company && (
                <>
                  <span className="text-gray-400">•</span>
                  <span className="text-blue-600">{company}</span>
                </>
              )}
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill={star <= rating ? "#fbbf24" : "#e5e7eb"}
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.95 1.902l-1.07 3.292a1 1 0 00-.95.69l-2.89 2.1a1 1 0 00-.95-.69l-2.89-2.1a1 1 0 00-.95.69l-1.07-3.292a1 1 0 00.95-.69H7.537c-.969 0-1.371-1.24-.95-1.902l1.07-3.292a1 1 0 00-.95-.69l2.89-2.1a1 1 0 00.95.69z" />
              </svg>
            ))}
            <span className="text-xs sm:text-sm text-gray-500 ml-2">
              ({rating}.0)
            </span>
          </div>

          {/* Testimonial Content */}
          <blockquote className="text-gray-700 text-sm sm:text-base leading-relaxed italic">
            "{content}"
          </blockquote>
        </div>
      </div>

      {/* Quote Icon */}
      <div className="absolute top-4 right-4 text-blue-200 opacity-20">
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21H7c-1.103 0-2-.897-2-2s.897-2 2-2h7c1.103 0 2 .897 2 2s-.897 2-2 2-2zm-2.5-10c-.414 0-.789-.168-1.11-.446l-4 4.11c-.278-.258-.576-.397-.905-.447l-2.5 5.053c-.414.405-.789.4-1.11.446l4-4.111c.278-.258.576-.397.905-.447 2.5-5.053zm-1.789 2.5c-.414 0-.789-.168-1.11-.446l-4 4.11c-.278-.258-.576-.397-.905-.447l-2.5 5.053c-.414.405-.789.4-1.11.446l4-4.111c.278-.258.576-.397.905-.447 2.5-5.053z" />
        </svg>
      </div>
    </div>
  );
};

export default Testimonial;
