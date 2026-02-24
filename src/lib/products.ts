import { ENABLED_CATEGORIES } from '../config';

export interface Category {
  id: number;
  name: string;
}

export interface Product {
    id: number;
    name: string;
    slug?: string;
    category: Category; // Updated to use Category object
    price: number; // Updated to number
    product_description: string;
    funny_description: string;
    ingredients: string; // csv
    allergic_ingredients: string; // csv
    calories: number;
    discount: number;
    image: string;
    bestseller?: boolean;
    details?: string; // deprecated, mapped to product_description
}

export const cakes: Product[] = [
  {
    id: 1,
    name: 'Chocolate Truffle Dream',
    slug: 'chocolate-truffle-dream',
    details: 'Nosso best-seller absoluto. Quatro camadas de bolo de chocolate úmido, intercaladas com ganache de chocolate meio amargo e finalizadas com raspas de chocolate belga. Perfeito para os amantes de chocolate.',
    product_description: 'Nosso best-seller absoluto. Quatro camadas de bolo de chocolate úmido, intercaladas com ganache de chocolate meio amargo e finalizadas com raspas de chocolate belga.',
    funny_description: 'Camadas ricas de bolo de chocolate belga intercaladas com ganache aveludada. Provavelmente a oitava maravilha do mundo.',
    price: 180.00,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop',
    category: { id: 1, name: 'cakes' },
    ingredients: 'Chocolate Belga 70%, Creme de Leite Fresco, Manteiga Extra, Cacau em Pó Alcalino, Extrato de Baunilha',
    allergic_ingredients: 'Glúten, Leite, Ovos, Pode conter traços de nozes',
    calories: 450,
    discount: 0,
    bestseller: true
  },
  {
    id: 2,
    name: 'Vanilla Bean & Berries',
    slug: 'vanilla-bean-berries',
    details: 'Uma celebração de frescor. A massa leve de pão de ló é embebida em uma calda cítrica suave, recheada com um creme leve de mascarpone e muitas frutas vermelhas frescas selecionadas.',
    product_description: 'Uma celebração de frescor. A massa leve de pão de ló é embebida em uma calda cítrica suave, recheada com um creme leve.',
    funny_description: 'Bolo de baunilha leve e aerado com frutas vermelhas frescas e creme de mascarpone. Tão leve que você vai querer comer dois pedaços (ou três).',
    price: 165.00,
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=1000&auto=format&fit=crop',
    category: { id: 1, name: 'cakes' },
    ingredients: 'Fava de Baunilha de Madagascar, Morangos Frescos, Mirtilos, Framboesas, Queijo Mascarpone, Limão Siciliano',
    allergic_ingredients: 'Glúten, Leite, Ovos',
    calories: 380,
    discount: 0
  },
  {
    id: 3,
    name: 'Red Velvet Clássico',
    slug: 'red-velvet-classico',
    details: 'Aveludado, macio e com um equilíbrio perfeito entre o doce e o levemente ácido do cream cheese frosting. Uma receita de família aperfeiçoada para a sua mesa.',
    product_description: 'Aveludado, macio e com um equilíbrio perfeito entre o doce e o levemente ácido do cream cheese frosting.',
    funny_description: 'O tradicional red velvet com aquele toque suave de cacau e cobertura de cream cheese. Vermelho como o amor, doce como a vida.',
    price: 170.00,
    image: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?q=80&w=1000&auto=format&fit=crop',
    category: { id: 1, name: 'cakes' },
    ingredients: 'Cacau em Pó, Cream Cheese, Manteiga, Vinagre de Maçã, Corante Natural',
    allergic_ingredients: 'Glúten, Leite, Ovos',
    calories: 420,
    discount: 5,
    bestseller: true
  },
  {
    id: 4,
    name: 'Limão Siciliano & Mirtilo',
    slug: 'limao-siciliano-mirtilo',
    details: 'Burst de sabor! A massa leva raspas de limão e iogurte para garantir a umidade, com camadas de nossa compota caseira de mirtilos e cobertura de buttercream de limão.',
    product_description: 'Burst de sabor! A massa leva raspas de limão e iogurte para garantir a umidade, com camadas de nossa compota caseira.',
    funny_description: 'Refrescante e doce na medida certa. Massa de limão com recheio de compota de mirtilo. Se a vida te der limões, faça este bolo.',
    price: 155.00,
    image: 'https://images.unsplash.com/photo-1519340333755-56e9c1d04579?q=80&w=1000&auto=format&fit=crop',
    category: { id: 1, name: 'cakes' },
    ingredients: 'Limão Siciliano, Mirtilos Selvagens, Iogurte Natural, Manteiga, Açúcar de Confeiteiro',
    allergic_ingredients: 'Glúten, Leite, Ovos',
    calories: 360,
    discount: 0
  },
  {
    id: 5,
    name: 'Cenoura com Especiarias',
    slug: 'cenoura-com-especiarias',
    details: 'Não é apenas um bolo de cenoura. É uma experiência reconfortante, com especiarias quentes e a crocância das nozes, coberto com o melhor glacê de cream cheese.',
    product_description: 'Não é apenas um bolo de cenoura. É uma experiência reconfortante, com especiarias quentes e a crocância das nozes.',
    funny_description: 'Bolo de cenoura úmido, nozes e um toque de canela, coberto com glacê real. O coelho da Páscoa aprovaria este bolo o ano todo.',
    price: 145.00,
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=1000&auto=format&fit=crop',
    category: { id: 1, name: 'cakes' },
    ingredients: 'Cenouras Frescas, Nozes, Canela, Noz-moscada, Cream Cheese, Açúcar Mascavo',
    allergic_ingredients: 'Glúten, Leite, Ovos, Nozes',
    calories: 390,
    discount: 0
  },
  {
    id: 6,
    name: 'Confetti Celebration',
    slug: 'confetti-celebration',
    details: 'A alegria em forma de bolo. Massa fofinha de baunilha salpicada de cores vibrantes, perfeita para aniversários e momentos felizes. O sabor da infância, elevado.',
    product_description: 'A alegria em forma de bolo. Massa fofinha de baunilha salpicada de cores vibrantes, perfeita para momentos felizes.',
    funny_description: 'Para celebrar! Massa de baunilha colorida com confeitos e buttercream suave. Porque todo dia é dia de festa se você tiver bolo.',
    price: 160.00,
    image: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=1000&auto=format&fit=crop',
    category: { id: 1, name: 'cakes' },
    ingredients: 'Baunilha, Confeitos Coloridos, Manteiga, Claras de Ovo, Leite',
    allergic_ingredients: 'Glúten, Leite, Ovos',
    calories: 400,
    discount: 0
  },
];

export const cookies: Product[] = [
  { 
    id: 101, 
    name: 'Aniversário', 
    slug: 'birthday', 
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop',
    category: { id: 2, name: 'cookies' },
    details: 'Uma festa a cada mordida! Massa amanteigada com sabor de bolo de aniversário, repleta de granulados coloridos que trazem alegria e crocância.',
    product_description: 'Uma festa a cada mordida! Massa amanteigada com sabor de bolo de aniversário, repleta de granulados coloridos.',
    funny_description: 'Cookie festivo com sabor de bolo de aniversário. O motivo perfeito para cantar parabéns qualquer dia.',
    price: 12.00,
    ingredients: 'Farinha de Trigo, Manteiga, Açúcar, Confeitos coloridos, Essência de Baunilha',
    allergic_ingredients: 'Glúten, Leite, Ovos',
    calories: 250,
    discount: 0
  },
  { 
    id: 102, 
    name: 'Chocolate Chunk', 
    slug: 'chocolate-chunk', 
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop',
    category: { id: 2, name: 'cookies' },
    details: 'O clássico que nunca sai de moda. Pedaços grandes e irregulares de chocolate nobre que derretem na boca, envoltos em uma massa crocante por fora e macia por dentro.',
    product_description: 'O clássico que nunca sai de moda. Pedaços grandes e irregulares de chocolate nobre que derretem na boca.',
    funny_description: 'Clássico cookie com pedaços generosos de chocolate. Mais chocolate do que massa, como deve ser.',
    price: 14.00,
    ingredients: 'Farinha de Trigo, Manteiga, Açúcar Mascavo, Chocolate Meio Amargo, Ovos',
    allergic_ingredients: 'Glúten, Leite, Ovos, Soja',
    calories: 280,
    discount: 0
  },
  { 
    id: 103, 
    name: "S'mores", 
    slug: 'smores', 
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=400&fit=crop',
    category: { id: 2, name: 'cookies' },
    details: 'A inspiração vem das fogueiras americanas. Marshmallow tostado e puxa-puxa combinado com chocolate derretido e base crocante.',
    product_description: 'A inspiração vem das fogueiras americanas. Marshmallow tostado e puxa-puxa combinado com chocolate derretido e base crocante.',
    funny_description: 'Uma delícia de acampamento em forma de cookie. Cuidado para não se queimar com tanta gostosura.',
    price: 15.00,
    ingredients: 'Farinha de Trigo, Marshmallow, Chocolate, Nutella, Bolacha Maizena',
    allergic_ingredients: 'Glúten, Leite, Ovos, Avelã',
    calories: 300,
    discount: 0
  },
  { 
    id: 104, 
    name: 'Red Velvet', 
    slug: 'red-velvet', 
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=400&fit=crop',
    category: { id: 2, name: 'cookies' },
    details: 'Vermelho vibrante e sabor sofisticado. O leve toque de cacau harmoniza perfeitamente com a doçura do chocolate branco.',
    product_description: 'Vermelho vibrante e sabor sofisticado. O leve toque de cacau harmoniza perfeitamente com a doçura do chocolate branco.',
    funny_description: 'A elegância do bolo red velvet em um cookie macio com gotas de chocolate branco. Chique, né?',
    price: 13.00,
    ingredients: 'Farinha de Trigo, Cacau em Pó, Chocolate Branco, Corante Vermelho, Manteiga',
    allergic_ingredients: 'Glúten, Leite, Ovos',
    calories: 270,
    discount: 0
  },
  { 
    id: 105, 
    name: 'Macadâmia e Chocolate Branco', 
    slug: 'macadamia-white-chocolate', 
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=400&h=400&fit=crop',
    category: { id: 2, name: 'cookies' },
    details: 'Sofisticação pura. As macadâmias tostadas trazem uma crocância amanteigada que contrasta com a suavidade do chocolate branco de alta qualidade.',
    product_description: 'Sofisticação pura. As macadâmias tostadas trazem uma crocância amanteigada que contrasta com a suavidade do chocolate branco.',
    funny_description: 'Combinação luxuosa de castanhas crocantes e chocolate branco cremoso. Porque você merece ser mimado.',
    price: 16.00,
    ingredients: 'Farinha de Trigo, Macadâmia, Chocolate Branco, Manteiga, Açúcar',
    allergic_ingredients: 'Glúten, Leite, Ovos, Nozes',
    calories: 290,
    discount: 0
  },
  { 
    id: 106, 
    name: 'Aveia e Passas', 
    slug: 'oatmeal-raisin', 
    image: 'https://images.unsplash.com/photo-1557089706-68d02dbda277?w=400&h=400&fit=crop',
    category: { id: 2, name: 'cookies' },
    details: 'Para quem ama tradição. A textura rústica da aveia combinada com o doce natural das passas e um toque quente de canela.',
    product_description: 'Para quem ama tradição. A textura rústica da aveia combinada com o doce natural das passas.',
    funny_description: 'O reconfortante sabor caseiro com aveia tostada e passas suculentas. O cookie que sua avó faria (se ela fosse uma chef famosa).',
    price: 11.00,
    ingredients: 'Aveia em Flocos, Uvas Passas, Canela, Açúcar Mascavo, Manteiga',
    allergic_ingredients: 'Glúten, Leite, Ovos',
    calories: 240,
    discount: 0
  }
];


export const mooncakes: Product[] = [
  {
    id: 201,
    name: 'Lótus Dourado',
    slug: 'lotus-seed-paste',
    image: 'https://images.unsplash.com/photo-1632598380292-693246377265?q=80&w=1000&auto=format&fit=crop',
    category: { id: 3, name: 'mooncakes' },
    details: 'A quintessência do Festival do Meio Outono. Uma pasta de lótus sedosa e rica envolve duas gemas de ovo de pato curadas, simbolizando a lua cheia.',
    product_description: 'A quintessência do Festival do Meio Outono. Uma pasta de lótus sedosa e rica envolve duas gemas de ovo de pato curadas.',
    funny_description: 'Tradicional pasta de semente de lótus com gema de ovo salgada dupla. Um clássico que você precisa respeitar.',
    price: 45.00,
    ingredients: 'Semente de Lótus, Gema de Pato Salgada, Xarope Dourado, Óleo de Amendoim',
    allergic_ingredients: 'Glúten, Ovos, Amendoim',
    calories: 500,
    discount: 0
  },
  {
    id: 202,
    name: 'Feijão Vermelho & Matcha',
    slug: 'red-bean-matcha',
    image: 'https://images.unsplash.com/photo-1536553832049-7b3e80064f2d?q=80&w=1000&auto=format&fit=crop',
    category: { id: 3, name: 'mooncakes' },
    details: 'O equilíbrio perfeito entre o doce terroso do feijão azuki e o amargor aromático do matcha. Uma interpretação moderna de um clássico.',
    product_description: 'O equilíbrio perfeito entre o doce terroso do feijão azuki e o amargor aromático do matcha.',
    funny_description: 'Fusão delicada de pasta de feijão vermelho doce e massa de chá verde matcha. Zen em forma de doce.',
    price: 42.00,
    ingredients: 'Feijão Azuki, Pó de Matcha Premium, Mel, Farinha de Trigo',
    allergic_ingredients: 'Glúten',
    calories: 450,
    discount: 10
  },
  {
    id: 203,
    name: 'Cinco Nozes (Wuren)',
    slug: 'five-nuts',
    image: 'https://images.unsplash.com/photo-1599307406981-229ca230537f?q=80&w=1000&auto=format&fit=crop',
    category: { id: 3, name: 'mooncakes' },
    details: 'Textura rica e sabor complexo. A variedade de nozes e sementes torradas oferece uma experiência crocante e satisfatória em cada mordida.',
    product_description: 'Textura rica e sabor complexo. A variedade de nozes e sementes torradas oferece uma experiência crocante e satisfatória em cada mordida.',
    funny_description: 'Uma mistura crocante de amêndoas, nozes, gergelim e melão de inverno. Croc croc irresistível.',
    price: 48.00,
    ingredients: 'Amêndoas, Nozes, Sementes de Gergelim, Sementes de Abóbora, Melão de Inverno Cristalizado',
    allergic_ingredients: 'Glúten, Nozes, Gergelim',
    calories: 520,
    discount: 0
  }
];

export const allProducts: Product[] = [
  ...(ENABLED_CATEGORIES.includes('cakes') ? cakes : []),
  ...(ENABLED_CATEGORIES.includes('cookies') ? cookies : []),
  ...(ENABLED_CATEGORIES.includes('mooncakes') ? mooncakes : [])
];

