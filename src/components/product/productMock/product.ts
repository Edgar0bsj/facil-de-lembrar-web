export interface Product {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  price: number;
  originalPrice?: number;
  images: string[];
  features: string[];
  specifications: {
    age: string;
    material: string;
    dimensions: string;
    weight: string;
    brand: string;
  };
  availability: boolean;
  rating: number;
  reviews: number;
  category: string;
  tags: string[];
}

export const mockProduct: Product = {
  id: "prod-001",
  title: "Kit de Blocos de Construção Premium",
  description: "Estimule a criatividade com 500 peças coloridas e seguras",
  longDescription:
    "Nosso Kit de Blocos de Construção Premium é perfeito para desenvolver habilidades motoras, criatividade e raciocínio lógico das crianças. Com 500 peças em diferentes cores e formatos, os pequenos podem criar infinitas possibilidades de construções, desde casas simples até estruturas complexas. Fabricado com plástico atóxico e resistente, é seguro para crianças a partir de 3 anos.",
  price: 89.9,
  originalPrice: 129.9,
  images: [
    "/api/placeholder/600/600",
    "/api/placeholder/600/600",
    "/api/placeholder/600/600",
  ],
  features: [
    "500 peças coloridas",
    "Livre de tóxicos",
    "Caixa de armazenamento inclusa",
    "Manual de instruções",
    "Certificado Inmetro",
  ],
  specifications: {
    age: "3 a 10 anos",
    material: "Plástico ABS atóxico",
    dimensions: "35x25x15cm",
    weight: "1.2kg",
    brand: "ToyStore Premium",
  },
  availability: true,
  rating: 4.8,
  reviews: 127,
  category: "Construção",
  tags: ["educativo", "criatividade", "motor"],
};

export const relatedProducts: Product[] = [
  {
    id: "prod-002",
    title: "Quebra-Cabeça 3D Animais",
    description: "150 peças com animais da floresta",
    price: 45.9,
    originalPrice: 59.9,
    images: ["/api/placeholder/300/300"],
    features: ["150 peças", "Madeira certificada", "Base de montagem"],
    specifications: {
      age: "5 a 12 anos",
      material: "Madeira MDF",
      dimensions: "30x20x5cm",
      weight: "800g",
      brand: "EcoToys",
    },
    availability: true,
    rating: 4.6,
    reviews: 89,
    category: "Quebra-Cabeça",
    tags: ["animais", "3d", "madeira"],
  },
  {
    id: "prod-003",
    title: "Kit de Ciência Infantil",
    description: "25 experimentos seguros e divertidos",
    price: 67.5,
    originalPrice: 89.9,
    images: ["/api/placeholder/300/300"],
    features: ["25 experimentos", "Manual ilustrado", "Seguro para crianças"],
    specifications: {
      age: "8 a 14 anos",
      material: "Vários materiais seguros",
      dimensions: "40x30x10cm",
      weight: "1.5kg",
      brand: "ScienceKids",
    },
    availability: true,
    rating: 4.9,
    reviews: 203,
    category: "Educacional",
    tags: ["ciência", "experimentos", "aprendizado"],
  },
];
