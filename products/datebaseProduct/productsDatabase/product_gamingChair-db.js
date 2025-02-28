const products = [
  {
    id: 1,
    name: 'Cadeira Gamer Cougar Terminator, Preto, 3MTERNXB.0001',
    code: '99999',
    price: 5649.00,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'CADEIRA GAMER',
    description: 'COUGAR',
    link: '../../../pagesProduct/pageProduct/products/page_product_gamingChair.html?id=1',
    image_1: 'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/gamingChair_1_img_1_.jpeg',
    image_2: 'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/gamingChair_1_img_2_.jpeg',
    images: [
      'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/gamingChair_1_img_1_.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/gamingChair_1_img_2_.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/gamingChair_1_img_3_.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/gamingChair_1_img_4_.jpeg'
    ],
    detailedDescription: 'Carregando . . .'
  },
  {
    id: 2,
    name: 'Cadeira Gamer Mancer Tyr Pro Purple Edition, Espuma Moldada, Braco 4D, MCR-TRZ-PRP',
    code: '99999',
    price: 1259.00,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'CADEIRA GAMER',
    description: 'MANCER',
    link: '../../../pagesProduct/pageProduct/products/page_product_gamingChair.html?id=2',
    image_1: 'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/gamingChair_2_img_1_.jpeg',
    image_2: 'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/gamingChair_2_img_2_.jpeg',
    images: [
      'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/gamingChair_2_img_1_.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/gamingChair_2_img_2_.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/gamingChair_2_img_3_.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/gamingChair_2_img_4_.jpeg'
    ],
    detailedDescription: 'Carregando . . .'
  },
  {
    id: 3,
    name: 'Poltrona Gamer Cougar Ranger S Royal, Preto e Dourado, 3MRGSGLB.0001',
    code: '99999',
    price: 2119.00,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'CADEIRA GAMER',
    description: 'COUGAR',
    link: '../../../pagesProduct/pageProduct/products/page_product_gamingChair.html?id=3',
    image_1: 'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/gamingChair_3_img_1_.jpeg',
    image_2: 'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/gamingChair_3_img_2_.jpeg',
    images: [
      'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/gamingChair_3_img_1_.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/gamingChair_3_img_2_.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/gamingChair_3_img_3_.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/gamingChair_3_img_4_.jpeg'
    ],
    detailedDescription: 'Carregando . . .'
  },
  {
    id: 4,
    name: 'Poltrona Gamer Pichau AC50, Caramel, PG-PLNA-CML',
    code: '99999',
    price: 1299.00,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'CADEIRA GAMER',
    description: 'PICHAU',
    link: '../../../pagesProduct/pageProduct/products/page_product_gamingChair.html?id=4',
    image_1: 'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/gamingChair_4_img_1_.jpeg',
    image_2: 'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/gamingChair_4_img_2_.jpeg',
    images: [
      'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/gamingChair_4_img_1_.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/gamingChair_4_img_2_.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/gamingChair_4_img_3_.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/gamingChair_4_img_4_.jpeg'
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
