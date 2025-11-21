const products = [
  {
    id: 1,
    name: 'SSD Corsair MP700 Pro, 4TB, M.2 NVMe, Leitura 12400MB/s e Gravação 11800MB/s, Preto - CSSD-F4000GBMP700PNH',
    code: '99999',
    price: 4254.99,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'HDD-SSD',
    description: 'Corsair',
    link: '../../../pagesProduct/pageProduct/products/page_product_case.html?id=1',
    image_1: '../../../../imagens/produtos/hd/hd_ssd_1_1.jpeg',
    image_2: '../../../../imagens/produtos/hd/hd_ssd_1_2.jpeg',
    images: [
      '../../../../imagens/produtos/hd/hd_ssd_1_1.jpeg',
      '../../../../imagens/produtos/hd/hd_ssd_1_2.jpeg',
      '../../../../imagens/produtos/hd/hd_ssd_1_3.jpeg',
      '../../../../imagens/produtos/hd/hd_ssd_1_4.jpeg'
    ],
    detailedDescription: 'Carregando . . .'
  },
  {
    id: 2,
    name: 'SSD Samsung 8TB, 2.5, Sata 3',
    code: '99999',
    price: 7225.00,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'HDD-SSD',
    description: 'Samsung',
    link: '../../../pagesProduct/pageProduct/products/page_product_case.html?id=2',
    image_1: '../../../../imagens/produtos/hd/hd_ssd_2_1.jpeg',
    image_2: '../../../../imagens/produtos/hd/hd_ssd_2_2.jpeg',
    images: [
      '../../../../imagens/produtos/hd/hd_ssd_2_1.jpeg',
      '../../../../imagens/produtos/hd/hd_ssd_2_2.jpeg',
      '../../../../imagens/produtos/hd/hd_ssd_2_3.jpeg',
      '../../../../imagens/produtos/hd/hd_ssd_2_4.jpeg'
    ],
    detailedDescription: 'Carregando . . .'
  },
  {
    id: 3,
    name: 'HD SSD Hp 3.2TB, Pcie X8 Mixed Use',
    code: '99999',
    price: 30683.32,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'HDD-SSD',
    description: 'HP',
    link: '../../../pagesProduct/pageProduct/products/page_product_case.html?id=3',
    image_1: '../../../../imagens/produtos/hd/hd_ssd_3_1.jpeg',
    image_2: '../../../../imagens/produtos/hd/hd_ssd_3_2.jpeg',
    images: [
      '../../../../imagens/produtos/hd/hd_ssd_3_1.jpeg',
      '../../../../imagens/produtos/hd/hd_ssd_3_2.jpeg',
      '../../../../imagens/produtos/hd/hd_ssd_3_3.jpeg',
      '../../../../imagens/produtos/hd/hd_ssd_3_4.jpeg'
    ],
    detailedDescription: 'Carregando . . .'
  },
  {
    id: 4,
    name: 'Storage Qnap Intel Xeon E-2334 3.4GHZ, 16GB, DDR4 2.5gbe 10gbe, Rack 2u 12+6-baias',
    code: '99999',
    price: 52254.68,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'HDD-SSD',
    description: 'Asus',
    link: '../../../pagesProduct/pageProduct/products/page_product_case.html?id=4',
    image_1: '../../../../imagens/produtos/hd/hd_ssd_4_1.jpeg',
    image_2: '../../../../imagens/produtos/hd/hd_ssd_4_2.jpeg',
    images: [
      '../../../../imagens/produtos/hd/hd_ssd_4_1.jpeg',
      '../../../../imagens/produtos/hd/hd_ssd_4_2.jpeg',
      '../../../../imagens/produtos/hd/hd_ssd_4_3.jpeg',
      '../../../../imagens/produtos/hd/hd_ssd_4_4.jpeg'
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










