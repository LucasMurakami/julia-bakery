import { ENABLED_CATEGORIES } from '../config';

export type Product = {
  id: string | number;
  slug?: string;
  name: string;
  description?: string;
  price?: string;
  image: string;
  category: 'cakes' | 'cookies' | 'mooncakes';
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
    description: 'Cookie festivo com sabor de bolo de aniversário.',
    price: 'R$ 12,00',
    ingredients: ['Farinha de Trigo', 'Manteiga', 'Açúcar', 'Confeitos coloridos', 'Essência de Baunilha'],
    allergens: ['Glúten', 'Leite', 'Ovos'],
    details: 'Uma festa a cada mordida! Massa amanteigada com sabor de bolo de aniversário, repleta de granulados coloridos que trazem alegria e crocância.'
  },
  { 
    id: 102, 
    name: 'Chocolate Chunk', 
    slug: 'chocolate-chunk', 
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop',
    category: 'cookies',
    description: 'Clássico cookie com pedaços generosos de chocolate.',
    price: 'R$ 14,00',
    ingredients: ['Farinha de Trigo', 'Manteiga', 'Açúcar Mascavo', 'Chocolate Meio Amargo', 'Ovos'],
    allergens: ['Glúten', 'Leite', 'Ovos', 'Soja'],
    details: 'O clássico que nunca sai de moda. Pedaços grandes e irregulares de chocolate nobre que derretem na boca, envoltos em uma massa crocante por fora e macia por dentro.'
  },
  { 
    id: 103, 
    name: "S'mores", 
    slug: 'smores', 
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=400&fit=crop',
    category: 'cookies',
    description: 'Uma delícia de acampamento em forma de cookie.',
    price: 'R$ 15,00',
    ingredients: ['Farinha de Trigo', 'Marshmallow', 'Chocolate', 'Nutella', 'Bolacha Maizena'],
    allergens: ['Glúten', 'Leite', 'Ovos', 'Avelã'],
    details: 'A inspiração vem das fogueiras americanas. Marshmallow tostado e puxa-puxa combinado com chocolate derretido e base crocante.'
  },
  { 
    id: 104, 
    name: 'Red Velvet', 
    slug: 'red-velvet', 
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=400&fit=crop',
    category: 'cookies',
    description: 'A elegância do bolo red velvet em um cookie macio com gotas de chocolate branco.',
    price: 'R$ 13,00',
    ingredients: ['Farinha de Trigo', 'Cacau em Pó', 'Chocolate Branco', 'Corante Vermelho', 'Manteiga'],
    allergens: ['Glúten', 'Leite', 'Ovos'],
    details: 'Vermelho vibrante e sabor sofisticado. O leve toque de cacau harmoniza perfeitamente com a doçura do chocolate branco.'
  },
  { 
    id: 105, 
    name: 'Macadâmia e Chocolate Branco', 
    slug: 'macadamia-white-chocolate', 
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=400&h=400&fit=crop',
    category: 'cookies',
    description: 'Combinação luxuosa de castanhas crocantes e chocolate branco cremoso.',
    price: 'R$ 16,00',
    ingredients: ['Farinha de Trigo', 'Macadâmia', 'Chocolate Branco', 'Manteiga', 'Açúcar'],
    allergens: ['Glúten', 'Leite', 'Ovos', 'Nozes'],
    details: 'Sofisticação pura. As macadâmias tostadas trazem uma crocância amanteigada que contrasta com a suavidade do chocolate branco de alta qualidade.'
  },
  { 
    id: 106, 
    name: 'Aveia e Passas', 
    slug: 'oatmeal-raisin', 
    image: 'https://images.unsplash.com/photo-1557089706-68d02dbda277?w=400&h=400&fit=crop',
    category: 'cookies',
    description: 'O reconfortante sabor caseiro com aveia tostada e passas suculentas.',
    price: 'R$ 11,00',
    ingredients: ['Aveia em Flocos', 'Uvas Passas', 'Canela', 'Açúcar Mascavo', 'Manteiga'],
    allergens: ['Glúten', 'Leite', 'Ovos'],
    details: 'Para quem ama tradição. A textura rústica da aveia combinada com o doce natural das passas e um toque quente de canela.'
  }
];


export const mooncakes: Product[] = [
  {
    id: 201,
    name: 'Lótus Dourado',
    slug: 'lotus-seed-paste',
    image: 'https://images.unsplash.com/photo-1632598380292-693246377265?q=80&w=1000&auto=format&fit=crop',
    category: 'mooncakes',
    description: 'Tradicional pasta de semente de lótus com gema de ovo salgada dupla.',
    price: 'R$ 45,00',
    ingredients: ['Semente de Lótus', 'Gema de Pato Salgada', 'Xarope Dourado', 'Óleo de Amendoim'],
    allergens: ['Glúten', 'Ovos', 'Amendoim'],
    details: 'A quintessência do Festival do Meio Outono. Uma pasta de lótus sedosa e rica envolve duas gemas de ovo de pato curadas, simbolizando a lua cheia.'
  },
  {
    id: 202,
    name: 'Feijão Vermelho & Matcha',
    slug: 'red-bean-matcha',
    image: 'https://images.unsplash.com/photo-1536553832049-7b3e80064f2d?q=80&w=1000&auto=format&fit=crop',
    category: 'mooncakes',
    description: 'Fusão delicada de pasta de feijão vermelho doce e massa de chá verde matcha.',
    price: 'R$ 42,00',
    ingredients: ['Feijão Azuki', 'Pó de Matcha Premium', 'Mel', 'Farinha de Trigo'],
    allergens: ['Glúten'],
    details: 'O equilíbrio perfeito entre o doce terroso do feijão azuki e o amargor aromático do matcha. Uma interpretação moderna de um clássico.'
  },
  {
    id: 203,
    name: 'Cinco Nozes (Wuren)',
    slug: 'five-nuts',
    image: 'https://images.unsplash.com/photo-1599307406981-229ca230537f?q=80&w=1000&auto=format&fit=crop',
    category: 'mooncakes',
    description: 'Uma mistura crocante de amêndoas, nozes, gergelim e melão de inverno.',
    price: 'R$ 48,00',
    ingredients: ['Amêndoas', 'Nozes', 'Sementes de Gergelim', 'Sementes de Abóbora', 'Melão de Inverno Cristalizado'],
    allergens: ['Glúten', 'Nozes', 'Gergelim'],
    details: 'Textura rica e sabor complexo. A variedade de nozes e sementes torradas oferece uma experiência crocante e satisfatória em cada mordida.'
  }
];

export const allProducts: Product[] = [
  ...(ENABLED_CATEGORIES.includes('cakes') ? cakes : []),
  ...(ENABLED_CATEGORIES.includes('cookies') ? cookies : []),
  ...(ENABLED_CATEGORIES.includes('mooncakes') ? mooncakes : [])
];

