import { ENABLED_CATEGORIES } from '@/config';
import {
  type Category,
  //CATEGORY_CAKES,
  CATEGORY_COOKIES,
  CATEGORY_MOONCAKES,
} from '@/lib/category';
import mooncakeVanillaImg from '@/assets/mooncakes/AI/Mooncake-vanilla.webp';
import mooncakeMatchaImg from '@/assets/mooncakes/AI/Mooncake-matcha.webp';
import mooncakeChocolateImg from '@/assets/mooncakes/AI/Mooncake-chocolate.webp';
import mooncakeLemonImg from '@/assets/mooncakes/AI/Mooncake-lemon.webp';
import cookieChocolateImg from '@/assets/cookies/Chocolate_Cookies.webp';
import cookieStikadinhoImg from '@/assets/cookies/Stikadinho_Cookies.webp';
import cookieMmsImg from '@/assets/cookies/M&MS_Cookies.webp';

export type { Category };
export { allCategories } from '@/lib/category';

// ─── Product ──────────────────────────────────────────────────────────────────

export interface Product {
    id: number;
    name: string;
    slug?: string;
    /** One or more categories this product belongs to */
    categories: Category[];
    price: number;
    product_description: string;
    funny_description: string;
    ingredients: string;
    allergic_ingredients: string;
    calories: number;
    discount: number;
    image: string;
    bestseller?: boolean;
    details?: string;
}

// export const cakes: Product[] = [
//   {
//     id: 1,
//     name: 'Chocolate Truffle Dream',
//     slug: 'chocolate-truffle-dream',
//     details: 'Nosso best-seller absoluto. Quatro camadas de bolo de chocolate úmido, intercaladas com ganache de chocolate meio amargo e finalizadas com raspas de chocolate belga. Perfeito para os amantes de chocolate.',
//     product_description: 'Nosso best-seller absoluto. Quatro camadas de bolo de chocolate úmido, intercaladas com ganache de chocolate meio amargo e finalizadas com raspas de chocolate belga.',
//     funny_description: 'Camadas ricas de bolo de chocolate belga intercaladas com ganache aveludada. Provavelmente a oitava maravilha do mundo.',
//     price: 180.00,
//     image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop',
//     categories: [CATEGORY_CAKES],
//     ingredients: 'Chocolate Belga 70%, Creme de Leite Fresco, Manteiga Extra, Cacau em Pó Alcalino, Extrato de Baunilha',
//     allergic_ingredients: 'Glúten, Leite, Ovos, Pode conter traços de nozes',
//     calories: 450,
//     discount: 0,
//     bestseller: true
//   },
//   {
//     id: 2,
//     name: 'Vanilla Bean & Berries',
//     slug: 'vanilla-bean-berries',
//     details: 'Uma celebração de frescor. A massa leve de pão de ló é embebida em uma calda cítrica suave, recheada com um creme leve de mascarpone e muitas frutas vermelhas frescas selecionadas.',
//     product_description: 'Uma celebração de frescor. A massa leve de pão de ló é embebida em uma calda cítrica suave, recheada com um creme leve.',
//     funny_description: 'Bolo de baunilha leve e aerado com frutas vermelhas frescas e creme de mascarpone. Tão leve que você vai querer comer dois pedaços (ou três).',
//     price: 165.00,
//     image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=1000&auto=format&fit=crop',
//     categories: [CATEGORY_CAKES],
//     ingredients: 'Fava de Baunilha de Madagascar, Morangos Frescos, Mirtilos, Framboesas, Queijo Mascarpone, Limão Siciliano',
//     allergic_ingredients: 'Glúten, Leite, Ovos',
//     calories: 380,
//     discount: 0
//   },
//   {
//     id: 3,
//     name: 'Red Velvet Clássico',
//     slug: 'red-velvet-classico',
//     details: 'Aveludado, macio e com um equilíbrio perfeito entre o doce e o levemente ácido do cream cheese frosting. Uma receita de família aperfeiçoada para a sua mesa.',
//     product_description: 'Aveludado, macio e com um equilíbrio perfeito entre o doce e o levemente ácido do cream cheese frosting.',
//     funny_description: 'O tradicional red velvet com aquele toque suave de cacau e cobertura de cream cheese. Vermelho como o amor, doce como a vida.',
//     price: 170.00,
//     image: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?q=80&w=1000&auto=format&fit=crop',
//     categories: [CATEGORY_CAKES],
//     ingredients: 'Cacau em Pó, Cream Cheese, Manteiga, Vinagre de Maçã, Corante Natural',
//     allergic_ingredients: 'Glúten, Leite, Ovos',
//     calories: 420,
//     discount: 5,
//     bestseller: true
//   },
//   {
//     id: 4,
//     name: 'Limão Siciliano & Mirtilo',
//     slug: 'limao-siciliano-mirtilo',
//     details: 'Burst de sabor! A massa leva raspas de limão e iogurte para garantir a umidade, com camadas de nossa compota caseira de mirtilos e cobertura de buttercream de limão.',
//     product_description: 'Burst de sabor! A massa leva raspas de limão e iogurte para garantir a umidade, com camadas de nossa compota caseira.',
//     funny_description: 'Refrescante e doce na medida certa. Massa de limão com recheio de compota de mirtilo. Se a vida te der limões, faça este bolo.',
//     price: 155.00,
//     image: 'https://images.unsplash.com/photo-1519340333755-56e9c1d04579?q=80&w=1000&auto=format&fit=crop',
//     categories: [CATEGORY_CAKES],
//     ingredients: 'Limão Siciliano, Mirtilos Selvagens, Iogurte Natural, Manteiga, Açúcar de Confeiteiro',
//     allergic_ingredients: 'Glúten, Leite, Ovos',
//     calories: 360,
//     discount: 0
//   },
//   {
//     id: 5,
//     name: 'Cenoura com Especiarias',
//     slug: 'cenoura-com-especiarias',
//     details: 'Não é apenas um bolo de cenoura. É uma experiência reconfortante, com especiarias quentes e a crocância das nozes, coberto com o melhor glacê de cream cheese.',
//     product_description: 'Não é apenas um bolo de cenoura. É uma experiência reconfortante, com especiarias quentes e a crocância das nozes.',
//     funny_description: 'Bolo de cenoura úmido, nozes e um toque de canela, coberto com glacê real. O coelho da Páscoa aprovaria este bolo o ano todo.',
//     price: 145.00,
//     image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=1000&auto=format&fit=crop',
//     categories: [CATEGORY_CAKES],
//     ingredients: 'Cenouras Frescas, Nozes, Canela, Noz-moscada, Cream Cheese, Açúcar Mascavo',
//     allergic_ingredients: 'Glúten, Leite, Ovos, Nozes',
//     calories: 390,
//     discount: 0
//   },
//   {
//     id: 6,
//     name: 'Confetti Celebration',
//     slug: 'confetti-celebration',
//     details: 'A alegria em forma de bolo. Massa fofinha de baunilha salpicada de cores vibrantes, perfeita para aniversários e momentos felizes. O sabor da infância, elevado.',
//     product_description: 'A alegria em forma de bolo. Massa fofinha de baunilha salpicada de cores vibrantes, perfeita para momentos felizes.',
//     funny_description: 'Para celebrar! Massa de baunilha colorida com confeitos e buttercream suave. Porque todo dia é dia de festa se você tiver bolo.',
//     price: 160.00,
//     image: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=1000&auto=format&fit=crop',
//     categories: [CATEGORY_CAKES],
//     ingredients: 'Baunilha, Confeitos Coloridos, Manteiga, Claras de Ovo, Leite',
//     allergic_ingredients: 'Glúten, Leite, Ovos',
//     calories: 400,
//     discount: 0
//   },
// ];

export const cookies: Product[] = [
  { 
    id: 101, 
    name: 'Cookies com gotas de chocolate', 
    slug: 'standard-cookie', 
    image: cookieChocolateImg.src,
    categories: [CATEGORY_COOKIES],
    details: 'O clássico infalível agora com gotas generosas de chocolate. Massa amanteigada, crocante por fora e macia por dentro, com pedacinhos que derretem a cada mordida.',
    product_description: 'Massa amanteigada com gotas de chocolate, crocante por fora e macia por dentro, com sabor reconfortante e envolvente.',
    funny_description: 'O cookie que todos conhecem e amam, agora com chocolate em dobro. Simples, honesto e absolutamente irresistível.',
    price: 6.00,
    ingredients: 'Farinha de Trigo, Manteiga, Açúcar, Ovos, Gotas de Chocolate, Extrato de Baunilha, Sal',
    allergic_ingredients: 'Glúten, Leite, Ovos, Soja',
    calories: 260,
    discount: 0,
    bestseller: true
  },
  { 
    id: 102, 
    name: 'Cookies com Stikadinho', 
    slug: 'stikadinho-cookie', 
    image: cookieStikadinhoImg.src,
    categories: [CATEGORY_COOKIES],
    details: 'Cookie feito com massa de cacau, macio no centro e com bordas levemente crocantes. Um sabor intenso para quem ama chocolate.',
    product_description: 'Cookie feito com massa de cacau, textura macia e sabor marcante de chocolate.',
    funny_description: 'Quando o cacau chama, este cookie responde. Forte, macio e inesquecível.',
    price: 7.50,
    ingredients: 'Farinha de Trigo, Cacau em Pó, Manteiga, Açúcar Mascavo, Ovos, Chocolate em Pedaços, Sal',
    allergic_ingredients: 'Glúten, Leite, Ovos, Soja',
    calories: 280,
    discount: 0,
    bestseller: true
  },
  { 
    id: 103, 
    name: 'Cookies de M&Ms', 
    slug: 'mms-cookie', 
    image: cookieMmsImg.src,
    categories: [CATEGORY_COOKIES],
    details: 'Massa amanteigada com M&Ms crocantes e coloridos. Um cookie divertido e cheio de personalidade.',
    product_description: 'Cookie amanteigado com M&Ms crocantes que deixam cada mordida mais divertida.',
    funny_description: 'Colorido por fora, delicioso por dentro. Um cookie que faz todo mundo sorrir.',
    price: 7.00,
    ingredients: 'Farinha de Trigo, Manteiga, Açúcar, Ovos, M&Ms, Extrato de Baunilha, Sal',
    allergic_ingredients: 'Glúten, Leite, Ovos, Soja',
    calories: 290,
    discount: 0,
    bestseller: true
  },
];


export const mooncakes: Product[] = [
  {
    id: 201,
    name: 'Mooncake Vanilla',
    slug: 'mooncake-vanilla',
    image: mooncakeVanillaImg.src,
    categories: [CATEGORY_MOONCAKES],
    details: 'Suave e aromático. Recheio cremoso de baunilha envolto em uma massa delicada, com o equilíbrio perfeito entre doçura e fragrância.',
    product_description: 'Suave e aromático. Recheio cremoso de baunilha envolto em uma massa delicada, com o equilíbrio perfeito entre doçura e fragrância.',
    funny_description: 'Quem disse que tradição não pode ter gosto de baunilha? Um mooncake para os que apreciam o clássico e o suave.',
    price: 40.00,
    ingredients: 'Fava de Baunilha, Leite Condensado, Farinha de Trigo, Xarope Dourado, Óleo',
    allergic_ingredients: 'Glúten, Leite, Ovos',
    calories: 420,
    discount: 0,
    bestseller: true
  },
  {
    id: 202,
    name: 'Mooncake Matcha',
    slug: 'mooncake-matcha',
    image: mooncakeMatchaImg.src,
    categories: [CATEGORY_MOONCAKES],
    details: 'O amargor aromático do matcha premium encontra uma massa suave e levemente adocicada. Uma interpretação moderna e elegante do mooncake tradicional.',
    product_description: 'O amargor aromático do matcha premium encontra uma massa suave e levemente adocicada.',
    funny_description: 'Para os amantes de chá verde, este mooncake é pura meditação em cada mordida. Zen garantido.',
    price: 42.00,
    ingredients: 'Pó de Matcha Premium, Pasta de Feijão Branco, Farinha de Trigo, Xarope Dourado',
    allergic_ingredients: 'Glúten',
    calories: 400,
    discount: 0,
    bestseller: true
  },
  {
    id: 203,
    name: 'Mooncake Chocolate',
    slug: 'mooncake-chocolate',
    image: mooncakeChocolateImg.src,
    categories: [CATEGORY_MOONCAKES],
    details: 'Uma fusão irresistível entre a tradição do mooncake e o prazer do chocolate belga. Recheio rico e intenso, com massa macia que derrete na boca.',
    product_description: 'Uma fusão irresistível entre a tradição do mooncake e o prazer do chocolate belga. Recheio rico e intenso.',
    funny_description: 'Chocolate belga dentro de um mooncake. A lua nunca foi tão deliciosa.',
    price: 44.00,
    ingredients: 'Chocolate Belga 70%, Cacau em Pó, Farinha de Trigo, Xarope Dourado, Manteiga',
    allergic_ingredients: 'Glúten, Leite, Ovos, Soja',
    calories: 480,
    discount: 0
  },
  {
    id: 204,
    name: 'Mooncake Lemon',
    slug: 'mooncake-lemon',
    image: mooncakeLemonImg.src,
    categories: [CATEGORY_MOONCAKES],
    details: 'Refrescante e vibrante. O curd de limão siciliano traz acidez e frescor ao recheio, contrastando perfeitamente com a massa dourada e levemente adocicada.',
    product_description: 'Refrescante e vibrante. O curd de limão siciliano traz acidez e frescor ao recheio.',
    funny_description: 'Um mooncake que parece um raio de sol. Azedo na medida certa, doce quando precisa ser.',
    price: 41.00,
    ingredients: 'Limão Siciliano, Curd de Limão, Farinha de Trigo, Xarope Dourado, Manteiga',
    allergic_ingredients: 'Glúten, Leite, Ovos',
    calories: 390,
    discount: 0
  },
];

export const allProducts: Product[] = [
  //...(ENABLED_CATEGORIES.includes('cakes') ? cakes : []),
  ...(ENABLED_CATEGORIES.includes('cookies') ? cookies : []),
  ...(ENABLED_CATEGORIES.includes('mooncakes') ? mooncakes : [])
];

