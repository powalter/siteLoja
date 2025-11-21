const products = [
  {
    id: 1,
    name: 'Fonte Asus ROG THOR 1600W Titanium, RGB, Full Modular, 80 Plus Titanium, ROG-THOR-1600T-GAMING',
    code: '99999',
    price: 5411.00,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'FONTE',
    description: 'ASUS',
    link: '../../../pagesProduct/pageProduct/products/page_product_font.html?id=1',
    image_1: '../../../../imagens/produtos/font/font_1_img_1.jpeg',
    image_2: '../../../../imagens/produtos/font/font_1_img_2.jpeg',
    images: [
      '../../../../imagens/produtos/font/font_1_img_1.jpeg',
      '../../../../imagens/produtos/font/font_1_img_2.jpeg',
      '../../../../imagens/produtos/font/font_1_img_3.jpeg',
      '../../../../imagens/produtos/font/font_1_img_4.jpeg'
    ],
    detailedDescription: 'Carregando . . .'
  },
  {
    id: 2,
    name: 'Fonte Seasonic Prime PX-1600, Full-Modular, 1600W, 80 Plus Platinum, Preta, SSR-1600PD2',
    code: '99999',
    price: 3399.00,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'FONTE',
    description: 'PRIME',
    link: '../../../pagesProduct/pageProduct/products/page_product_font.html?id=2',
    image_1: '../../../../imagens/produtos/font/font_2_img_1.jpeg',
    image_2: '../../../../imagens/produtos/font/font_2_img_2.jpeg',
    images: [
      '../../../../imagens/produtos/font/font_2_img_1.jpeg',
      '../../../../imagens/produtos/font/font_2_img_2.jpeg',
      '../../../../imagens/produtos/font/font_2_img_3.jpeg',
      '../../../../imagens/produtos/font/font_2_img_4.jpeg'
    ],
    detailedDescription: 'Carregando . . .'
  },
  {
    id: 3,
    name: 'Fonte Asus TUF Gaming White Edition, 1000W, Full-Modular, 80 Plus Gold, TUF-GAMING-1000G-WHITE',
    code: '99999',
    price: 1890.00,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'FONTE',
    description: 'ASUS',
    link: '../../../pagesProduct/pageProduct/products/page_product_font.html?id=3',
    image_1: '../../../../imagens/produtos/font/font_3_img_1.jpeg',
    image_2: '../../../../imagens/produtos/font/font_3_img_2.jpeg',
    images: [
      '../../../../imagens/produtos/font/font_3_img_1.jpeg',
      '../../../../imagens/produtos/font/font_3_img_2.jpeg',
      '../../../../imagens/produtos/font/font_3_img_3.jpeg',
      '../../../../imagens/produtos/font/font_3_img_4.jpeg'
    ],
    detailedDescription: 'Carregando . . .'
  },
  {
    id: 4,
    name: 'Fonte Asus Rog Loki White Edition, ARGB, Full-Modular, 850W, 80 Plus Platinum, Branca, 90YE00N2-B0BA00',
    code: '99999',
    price: 1649.00,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'FONTE',
    description: 'ASUS-ROG',
    link: '../../../pagesProduct/pageProduct/products/page_product_font.html?id=4',
    image_1: '../../../../imagens/produtos/font/font_4_img_1.jpeg',
    image_2: '../../../../imagens/produtos/font/font_4_img_2.jpeg',
    images: [
      '../../../../imagens/produtos/font/font_4_img_1.jpeg',
      '../../../../imagens/produtos/font/font_4_img_2.jpeg',
      '../../../../imagens/produtos/font/font_4_img_3.jpeg',
      '../../../../imagens/produtos/font/font_4_img_4.jpeg'
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

