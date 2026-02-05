export type Product = {
  id: string | number;
  slug?: string;
  name: string;
  description?: string;
  price?: string;
  image: string;
  category: 'cakes' | 'cookies';
  ingredients?: string[];
  allergens?: string[];
  details?: string;
};

export const cakes: Product[] = [
  {
    id: 1,
    name: 'Chocolate Truffle Dream',
    description: 'Camadas ricas de bolo de chocolate belga intercaladas com ganache aveludada.',
    price: 'R$ 180,00',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop',
    category: 'cakes',
    ingredients: ['Chocolate Belga 70%', 'Creme de Leite Fresco', 'Manteiga Extra', 'Cacau em Pó Alcalino', 'Extrato de Baunilha'],
    allergens: ['Glúten', 'Leite', 'Ovos', 'Pode conter traços de nozes'],
    details: 'Nosso best-seller absoluto. Quatro camadas de bolo de chocolate úmido, intercaladas com ganache de chocolate meio amargo e finalizadas com raspas de chocolate belga. Perfeito para os amantes de chocolate.'
  },
  {
    id: 2,
    name: 'Vanilla Bean & Berries',
    description: 'Bolo de baunilha leve e aerado com frutas vermelhas frescas e creme de mascarpone.',
    price: 'R$ 165,00',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=1000&auto=format&fit=crop',
    category: 'cakes',
    ingredients: ['Fava de Baunilha de Madagascar', 'Morangos Frescos', 'Mirtilos', 'Framboesas', 'Queijo Mascarpone', 'Limão Siciliano'],
    allergens: ['Glúten', 'Leite', 'Ovos'],
    details: 'Uma celebração de frescor. A massa leve de pão de ló é embebida em uma calda cítrica suave, recheada com um creme leve de mascarpone e muitas frutas vermelhas frescas selecionadas.'
  },
  {
    id: 3,
    name: 'Red Velvet Clássico',
    description: 'O tradicional red velvet com aquele toque suave de cacau e cobertura de cream cheese.',
    price: 'R$ 170,00',
    image: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?q=80&w=1000&auto=format&fit=crop',
    category: 'cakes',
    ingredients: ['Cacau em Pó', 'Cream Cheese', 'Manteiga', 'Vinagre de Maçã', 'Corante Natural'],
    allergens: ['Glúten', 'Leite', 'Ovos'],
    details: 'Aveludado, macio e com um equilíbrio perfeito entre o doce e o levemente ácido do cream cheese frosting. Uma receita de família aperfeiçoada para a sua mesa.'
  },
  {
    id: 4,
    name: 'Limão Siciliano & Mirtilo',
    description: 'Refrescante e doce na medida certa. Massa de limão com recheio de compota de mirtilo.',
    price: 'R$ 155,00',
    image: 'https://images.unsplash.com/photo-1519340333755-56e9c1d04579?q=80&w=1000&auto=format&fit=crop',
    category: 'cakes',
    ingredients: ['Limão Siciliano', 'Mirtilos Selvagens', 'Iogurte Natural', 'Manteiga', 'Açúcar de Confeiteiro'],
    allergens: ['Glúten', 'Leite', 'Ovos'],
    details: 'Burst de sabor! A massa leva raspas de limão e iogurte para garantir a umidade, com camadas de nossa compota caseira de mirtilos e cobertura de buttercream de limão.'
  },
  {
    id: 5,
    name: 'Cenoura com Especiarias',
    description: 'Bolo de cenoura úmido, nozes e um toque de canela, coberto com glacê real.',
    price: 'R$ 145,00',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=1000&auto=format&fit=crop',
    category: 'cakes',
    ingredients: ['Cenouras Frescas', 'Nozes', 'Canela', 'Noz-moscada', 'Cream Cheese', 'Açúcar Mascavo'],
    allergens: ['Glúten', 'Leite', 'Ovos', 'Nozes'],
    details: 'Não é apenas um bolo de cenoura. É uma experiência reconfortante, com especiarias quentes e a crocância das nozes, coberto com o melhor glacê de cream cheese.'
  },
  {
    id: 6,
    name: 'Confetti Celebration',
    description: 'Para celebrar! Massa de baunilha colorida com confeitos e buttercream suave.',
    price: 'R$ 160,00',
    image: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=1000&auto=format&fit=crop',
    category: 'cakes',
    ingredients: ['Baunilha', 'Confeitos Coloridos', 'Manteiga', 'Claras de Ovo', 'Leite'],
    allergens: ['Glúten', 'Leite', 'Ovos'],
    details: 'A alegria em forma de bolo. Massa fofinha de baunilha salpicada de cores vibrantes, perfeita para aniversários e momentos felizes. O sabor da infância, elevado.'
  },
];

export const cookies: Product[] = [
  { 
    id: 101, 
    name: 'Aniversário', 
    slug: 'birthday', 
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop',
    category: 'cookies',
    description: 'Cookie festivo com sabor de bolo de aniversário.'
  },
  { 
    id: 102, 
    name: 'Chocolate', 
    slug: 'chocolate-chunk', 
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop',
    category: 'cookies',
    description: 'Clássico cookie com pedaços generosos de chocolate.'
  },
  { 
    id: 103, 
    name: "S'mores", 
    slug: 'smores', 
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=400&fit=crop',
    category: 'cookies',
    description: 'Uma delícia de acampamento em forma de cookie.'
  },
];

export const allProducts = [...cakes, ...cookies];
