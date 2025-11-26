const products = [
  {
    id: 1,
    name: 'Processador Amd Ryzen 9 9950X3D AM5 4,3ghz 5,7ghz Turbo 16 Cores 32 Threads 144Mb',
    code: '99999',
    price: 5991.50,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'Processador',
    description: 'AMD',
    link: '../../../pagesProduct/pageProduct/products/page_product_processador.html?id=1',
    image_1: '../../../../imagens/produtos/processador/processador_1_1.jpeg',
    image_2: '../../../../imagens/produtos/processador/processador_1_2.jpeg',
    images: [
      '../../../../imagens/produtos/processador/processador_1_1.jpeg',
      '../../../../imagens/produtos/processador/processador_1_2.jpeg',
      '../../../../imagens/produtos/processador/processador_1_3.jpeg',
      '../../../../imagens/produtos/processador/processador_1_4.jpeg'
    ],
    detailedDescription: 'Carregando . . .'
  },
  {
    id: 2,
    name: 'Processador Intel Core I9-13900KF, Lga 1700, 36MB',
    code: '99999',
    price: 4635.49,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'Processador',
    description: 'Intel',
    link: '../../../pagesProduct/pageProduct/products/page_product_processador.html?id=2',
    image_1: '../../../../imagens/produtos/processador/processador_2_1.jpeg',
    image_2: '../../../../imagens/produtos/processador/processador_2_2.jpeg',
    images: [
      '../../../../imagens/produtos/processador/processador_2_1.jpeg',
      '../../../../imagens/produtos/processador/processador_2_2.jpeg',
      '../../../../imagens/produtos/processador/processador_2_3.jpeg',
      '../../../../imagens/produtos/processador/processador_2_4.jpeg'
    ],
    detailedDescription: 'Carregando . . .'
  },
  {
    id: 3,
    name: 'Processador AMD Ryzen Threadripper Pro 5995WX, Cache 256 MB, 64 Núcleos',
    code: '99999',
    price: 33999.90,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'Processador',
    description: 'AMD',
    link: '../../../pagesProduct/pageProduct/products/page_product_processador.html?id=3',
    image_1: '../../../../imagens/produtos/processador/processador_3_1.jpeg',
    image_2: '../../../../imagens/produtos/processador/processador_3_2.jpeg',
    images: [
      '../../../../imagens/produtos/processador/processador_3_1.jpeg',
      '../../../../imagens/produtos/processador/processador_3_2.jpeg',
      '../../../../imagens/produtos/processador/processador_3_3.jpeg',
      '../../../../imagens/produtos/processador/processador_3_4.jpeg'
    ],
    detailedDescription: 'Carregando . . .'
  },
  {
    id: 4,
    name: 'Processador Intel Core i9-13900KS, 6.0GHz Max Turbo, Cache 36MB, 24 Núcleos, 32 Threads, LGA 1700',
    code: '99999',
    price: 3699.90,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'Processador',
    description: 'Intel',
    link: '../../../pagesProduct/pageProduct/products/page_product_processador.html?id=4',
    image_1: '../../../../imagens/produtos/processador/processador_4_1.jpeg',
    image_2: '../../../../imagens/produtos/processador/processador_4_2.jpeg',
    images: [
      '../../../../imagens/produtos/processador/processador_4_1.jpeg',
      '../../../../imagens/produtos/processador/processador_4_2.jpeg',
      '../../../../imagens/produtos/processador/processador_4_3.jpeg',
      '../../../../imagens/produtos/processador/processador_4_4.jpeg'
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










