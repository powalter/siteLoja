const products = [
  {
    id: 1,
    name: 'Mouse Gamer Redragon Swain, Wireless, 16.000 DPI, RGB, 9 Botões Programáveis, Preto, M915RGB-WL',
    code: '99999',
    price: 259.00,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'MOUSE',
    description: 'PC-GAMER',
    link: '../../../pagesProduct/pageProduct/products/page_product_mouse.html?id=1',
    image_1: 'https://assets.onecompiler.app/42wu6ajnx/439jsnfdb/mouse_1_img_1.jpeg',
    image_2: 'https://assets.onecompiler.app/42wu6ajnx/439jsnfdb/mouse_1_img_2.jpeg',
    images: [
      'https://assets.onecompiler.app/42wu6ajnx/439jsnfdb/mouse_1_img_1.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/439jsnfdb/mouse_1_img_2.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/439jsnfdb/mouse_1_img_3.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/439jsnfdb/mouse_1_img_4.jpeg'
    ],
    detailedDescription: 'Carregando . . .'
  },
  {
    id: 2,
    name: 'Mouse Gamer Redragon Centrophorus 2, 7200 DPI, 6 Botões Programáveis, RGB, White/Pink, M601WP-RGB',
    code: '99999',
    price: 5889.00,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'MOUSE',
    description: 'PC-GAMER',
    link: '../../../pagesProduct/pageProduct/products/page_product_mouse.html?id=2',
    image_1: 'https://assets.onecompiler.app/42wu6ajnx/439jsnfdb/mouse_2_img_1.jpeg',
    image_2: 'https://assets.onecompiler.app/42wu6ajnx/439jsnfdb/mouse_2_img_2.jpeg',
    images: [
      'https://assets.onecompiler.app/42wu6ajnx/439jsnfdb/mouse_2_img_1.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/439jsnfdb/mouse_2_img_2.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/439jsnfdb/mouse_2_img_3.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/439jsnfdb/mouse_2_img_4.jpeg'
    ],
    detailedDescription: 'Carregando . . .'
  },
  {
    id: 3,
    name: 'Mouse Gamer Redragon Storm Elite, 16000 DPI, 8 Botões Programáveis, Black, M988-RGB',
    code: '99999',
    price: 189.00,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'MOUSE',
    description: 'PC-GAMER',
    link: '../../../pagesProduct/pageProduct/products/page_product_mouse.html?id=3',
    image_1: 'https://assets.onecompiler.app/42wu6ajnx/439jsnfdb/mouse_3_img_1.jpeg',
    image_2: 'https://assets.onecompiler.app/42wu6ajnx/439jsnfdb/mouse_3_img_2.jpeg',
    images: [
      'https://assets.onecompiler.app/42wu6ajnx/439jsnfdb/mouse_3_img_1.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/439jsnfdb/mouse_3_img_2.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/439jsnfdb/mouse_3_img_3.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/439jsnfdb/mouse_3_img_4.jpeg'
    ],
    detailedDescription: 'Carregando . . .'
  },
  {
    id: 4,
    name: 'Mouse Gamer Redragon King Pro Lunar White, Wireless, Bluetooth, 26000 DPI, 7 Botões, Branco, M916W-PRO-1K',
    code: '99999',
    price: 299.00,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'MOUSE',
    description: 'PC-GAMER',
    link: '../../../pagesProduct/pageProduct/products/page_product_mouse.html?id=4',
    image_1: 'https://assets.onecompiler.app/42wu6ajnx/439jsnfdb/mouse_4_img_1.jpeg',
    image_2: 'https://assets.onecompiler.app/42wu6ajnx/439jsnfdb/mouse_4_img_2.jpeg',
    images: [
      'https://assets.onecompiler.app/42wu6ajnx/439jsnfdb/mouse_4_img_1.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/439jsnfdb/mouse_4_img_2.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/439jsnfdb/mouse_4_img_3.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/439jsnfdb/mouse_4_img_4.jpeg'
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
