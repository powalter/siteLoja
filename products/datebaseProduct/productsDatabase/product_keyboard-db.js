const products = [
  {
    id: 1,
    name: 'Teclado Mecânico Gamer 8BitDo C64 Edition, Wireless, Bluetooth, USB-C, ANSI, Switch Kailh Box White V2, 85HA03',
    code: '99999',
    price: 959.90,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'TECLADO',
    description: 'PC-GAMER',
    link: '../../../pagesProduct/pageProduct/products/page_product_keyboard.html?id=1',
    image_1: 'https://assets.onecompiler.app/42wu6ajnx/439j48rjp/keyboard_1_img_1.jpeg',
    image_2: 'https://assets.onecompiler.app/42wu6ajnx/439j48rjp/keyboard_1_img_2.jpeg',
    images: [
      'https://assets.onecompiler.app/42wu6ajnx/439j48rjp/keyboard_1_img_1.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/439j48rjp/keyboard_1_img_2.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/439j48rjp/keyboard_1_img_3.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/439j48rjp/keyboard_1_img_4.jpeg'
    ],
    detailedDescription: 'Carregando . . .'
  },
  {
    id: 2,
    name: 'Teclado Mecânico Gamer MCHOSE GX87, Wireless, Bluetooth, RGB, Switch Vintage White, ANSI, Layout 80%, Branco E Verde, MC-GX87-16',
    code: '99999',
    price: 1179.90,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'TECLADO',
    description: 'PC-GAMER',
    link: '../../../pagesProduct/pageProduct/products/page_product_keyboard.html?id=2',
    image_1: 'https://assets.onecompiler.app/42wu6ajnx/439j48rjp/keyboard_2_img_1.jpeg',
    image_2: 'https://assets.onecompiler.app/42wu6ajnx/439j48rjp/keyboard_2_img_2.jpeg',
    images: [
      'https://assets.onecompiler.app/42wu6ajnx/439j48rjp/keyboard_2_img_1.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/439j48rjp/keyboard_2_img_2.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/439j48rjp/keyboard_2_img_3.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/439j48rjp/keyboard_2_img_4.jpeg'
    ],
    detailedDescription: 'Carregando . . .'
  },
  {
    id: 3,
    name: 'Teclado Mecânico Gamer Montech MKey PRO 75 DB Darkness, RGB, Wireless, Bluetooth, Switch Gateron Brown, ANSI, 75%, Preto e Cinza',
    code: '99999',
    price: 829.90,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'TECLADO',
    description: 'PC-GAMER',
    link: '../../../pagesProduct/pageProduct/products/page_product_keyboard.html?id=3',
    image_1: 'https://assets.onecompiler.app/42wu6ajnx/439j48rjp/keyboard_3_img_1.jpeg',
    image_2: 'https://assets.onecompiler.app/42wu6ajnx/439j48rjp/keyboard_3_img_2.jpeg',
    images: [
      'https://assets.onecompiler.app/42wu6ajnx/439j48rjp/keyboard_3_img_1.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/439j48rjp/keyboard_3_img_2.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/439j48rjp/keyboard_3_img_3.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/439j48rjp/keyboard_3_img_4.jpeg'
    ],
    detailedDescription: 'Carregando . . .'
  },
  {
    id: 4,
    name: 'Teclado Gamer Mecânico Redragon Kama, RGB, Switch Blue, ABNT, Full-Size, Black, K578-RGB (PT-BLUE)',
    code: '99999',
    price: 389.90,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'TECLADO',
    description: 'PC-GAMER',
    link: '../../../pagesProduct/pageProduct/products/page_product_keyboard.html?id=4',
    image_1: 'https://assets.onecompiler.app/42wu6ajnx/439j48rjp/keyboard_4_img_1.jpeg',
    image_2: 'https://assets.onecompiler.app/42wu6ajnx/439j48rjp/keyboard_4_img_2.jpeg',
    images: [
      'https://assets.onecompiler.app/42wu6ajnx/439j48rjp/keyboard_4_img_1.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/439j48rjp/keyboard_4_img_2.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/439j48rjp/keyboard_4_img_3.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/439j48rjp/keyboard_4_img_4.jpeg'
    ],
    detailedDescription: 'Carregando . . .'
  },
];


// Função para formatar o preço
function formatPrice(price) {
  // Passo 1: Garantir que o número tenha 2 casas decimais
  let formattedPrice = price.toFixed(2); 

  // Passo 2: Substituir o ponto por vírgula
  formattedPrice = formattedPrice.replace('.', ',');

  // Passo 3: Adicionar o ponto como separador de milhar
  formattedPrice = formattedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return formattedPrice;
}


// Função para buscar um produto pelo ID
function getProductById(id) {
  return products.find(product => product.id === id);
}
