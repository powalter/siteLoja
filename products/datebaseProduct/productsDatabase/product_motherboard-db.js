const products = [
  {
    id: 1,
    name: 'Placa Mãe Asus Rog Strix Z890-e Gaming Wifi 7 LGA 1851 4xDDR5 Chipset Z890 Atxv',
    code: '99999',
    price: 6390.99,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'Placa-Mãe',
    description: 'ASUS',
    link: '../../../pagesProduct/pageProduct/products/page_product_motherboard.html?id=1',
    image_1: '../../../../imagens/produtos/motherboard/motherboard_1_1.jpeg',
    image_2: '../../../../imagens/produtos/motherboard/motherboard_1_2.jpeg',
    images: [
      '../../../../imagens/produtos/motherboard/motherboard_1_1.jpeg',
      '../../../../imagens/produtos/motherboard/motherboard_1_2.jpeg',
      '../../../../imagens/produtos/motherboard/motherboard_1_3.jpeg',
      '../../../../imagens/produtos/motherboard/motherboard_1_4.jpeg'
    ],
    detailedDescription: 'Carregando . . .'
  },
  {
    id: 2,
    name: 'Placa-Mãe ASUS Pro WS WRX90E-SAGE SE, AMD sTR5, WRX90, DDR5, Preto - 90MB1FW0-M0EAY0',
    code: '99999',
    price: 9999.99,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'Placa-Mãe',
    description: 'ASUS',
    link: '../../../pagesProduct/pageProduct/products/page_product_motherboard.html?id=2',
    image_1: '../../../../imagens/produtos/motherboard/motherboard_2_1.jpeg',
    image_2: '../../../../imagens/produtos/motherboard/motherboard_2_2.jpeg',
    images: [
      '../../../../imagens/produtos/motherboard/motherboard_2_1.jpeg',
      '../../../../imagens/produtos/motherboard/motherboard_2_2.jpeg',
      '../../../../imagens/produtos/motherboard/motherboard_2_3.jpeg',
      '../../../../imagens/produtos/motherboard/motherboard_2_4.jpeg'
    ],
    detailedDescription: 'Carregando . . .'
  },
  {
    id: 3,
    name: 'Placa Mãe Gigabyte X870e Aorus Master Wifi7 Ddr5',
    code: '99999',
    price: 4949.00,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'Placa-Mãe',
    description: 'GIGABYTE',
    link: '../../../pagesProduct/pageProduct/products/page_product_motherboard.html?id=3',
    image_1: '../../../../imagens/produtos/motherboard/motherboard_3_1.jpeg',
    image_2: '../../../../imagens/produtos/motherboard/motherboard_3_2.jpeg',
    images: [
      '../../../../imagens/produtos/motherboard/motherboard_3_1.jpeg',
      '../../../../imagens/produtos/motherboard/motherboard_3_2.jpeg',
      '../../../../imagens/produtos/motherboard/motherboard_3_3.jpeg',
      '../../../../imagens/produtos/motherboard/motherboard_3_4.jpeg'
    ],
    detailedDescription: 'Carregando . . .'
  },
  {
    id: 4,
    name: 'Placa Mãe Gigabyte Trx50 Aero D Wifi 7 Amd Str5 E-atx Ddr5 M.2',
    code: '99999',
    price: 6990.90,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'Placa-Mãe',
    description: 'ASRock',
    link: '../../../pagesProduct/pageProduct/products/page_product_motherboard.html?id=4',
    image_1: '../../../../imagens/produtos/motherboard/motherboard_4_1.jpeg',
    image_2: '../../../../imagens/produtos/motherboard/motherboard_4_2.jpeg',
    images: [
      '../../../../imagens/produtos/motherboard/motherboard_4_1.jpeg',
      '../../../../imagens/produtos/motherboard/motherboard_4_2.jpeg',
      '../../../../imagens/produtos/motherboard/motherboard_4_3.jpeg',
      '../../../../imagens/produtos/motherboard/motherboard_4_4.jpeg'
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










