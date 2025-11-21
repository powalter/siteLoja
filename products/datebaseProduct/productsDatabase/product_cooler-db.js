const products = [
  {
    id: 1,
    name: 'Water Cooler Thermalright Frozen Guardian 360 White, 360mm, ARGB, Display LCD, Intel/AMD, Branco',
    code: '99999',
    price: 3059.00,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'COOLER',
    description: 'THERMALRIGHT',
    link: '../../../pagesProduct/pageProduct/products/page_product_cooler.html?id=1',
    image_1: '../../../../imagens/produtos/cooler/cooler_1_img_1.jpeg',
    image_2: '../../../../imagens/produtos/cooler/cooler_1_img_2.jpeg',
    images: [
      '../../../../imagens/produtos/cooler/cooler_1_img_1.jpeg',
      '../../../../imagens/produtos/cooler/cooler_1_img_2.jpeg',
      '../../../../imagens/produtos/cooler/cooler_1_img_3.jpeg',
      '../../../../imagens/produtos/cooler/cooler_1_img_4.jpeg'
    ],
    detailedDescription: 'Carregando . . .'
  },
  {
    id: 2,
    name: 'Water Cooler Corsair iCUE LINK H150i, 360mm, RGB, Intel-AMD, Preto, CW-9061003-WW',
    code: '99999',
    price: 1859.00,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'COOLER',
    description: 'CORSAIR',
    link: '../../../pagesProduct/pageProduct/products/page_product_cooler.html?id=2',
    image_1: '../../../../imagens/produtos/cooler/cooler_1_img_1.jpeg',
    image_2: '../../../../imagens/produtos/cooler/cooler_1_img_2.jpeg',
    images: [
      '../../../../imagens/produtos/cooler/cooler_1_img_1.jpeg',
      '../../../../imagens/produtos/cooler/cooler_1_img_2.jpeg',
      '../../../../imagens/produtos/cooler/cooler_1_img_3.jpeg',
      '../../../../imagens/produtos/cooler/cooler_1_img_4.jpeg'
    ],
    detailedDescription: 'Carregando . . .'
  },
  {
    id: 3,
    name: 'Water Cooler Asus Rog Strix LC III, 360mm, ARGB, Intel-AMD, Black, 90RC00T0-M0UAY0',
    code: '99999',
    price: 1829.00,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'COOLER',
    description: 'ASUS',
    link: '../../../pagesProduct/pageProduct/products/page_product_cooler.html?id=3',
    image_1: '../../../../imagens/produtos/cooler/cooler_1_img_1.jpeg',
    image_2: '../../../../imagens/produtos/cooler/cooler_1_img_2.jpeg',
    images: [
      '../../../../imagens/produtos/cooler/cooler_1_img_1.jpeg',
      '../../../../imagens/produtos/cooler/cooler_1_img_2.jpeg',
      '../../../../imagens/produtos/cooler/cooler_1_img_3.jpeg',
      '../../../../imagens/produtos/cooler/cooler_1_img_4.jpeg'
    ],
    detailedDescription: 'Carregando . . .'
  },
  {
    id: 4,
    name: 'Water Cooler Asus Rog Ryujin III, 240mm, ARGB, Display LCD, Intel-AMD, White, 90RC00K2-M0UAY0',
    code: '99999',
    price: 2359.00,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'COOLER',
    description: 'ASUS',
    link: '../../../pagesProduct/pageProduct/products/page_product_cooler.html?id=4',
    image_1: '../../../../imagens/produtos/cooler/cooler_1_img_1.jpeg',
    image_2: '../../../../imagens/produtos/cooler/cooler_1_img_2.jpeg',
    images: [
      '../../../../imagens/produtos/cooler/cooler_1_img_1.jpeg',
      '../../../../imagens/produtos/cooler/cooler_1_img_2.jpeg',
      '../../../../imagens/produtos/cooler/cooler_1_img_3.jpeg',
      '../../../../imagens/produtos/cooler/cooler_1_img_4.jpeg'
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

