const products = [
  {
    id: 1,
    name: 'Memória RAM Kingston Fury Beast, RGB, 64GB (2x32GB), 6000MHz, DDR5, CL36, Branco - KF560C36BWEAK2-64',
    code: '99999',
    price: 2258.99,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'Memoria Ram',
    description: 'Kingston',
    link: '../../../pagesProduct/pageProduct/products/page_product_memRam.html?id=1',
    image_1: '../../../../imagens/produtos/memRam/memRam_1_1.jpeg',
    image_2: '../../../../imagens/produtos/memRam/memRam_1_2.jpeg',
    images: [
      '../../../../imagens/produtos/memRam/memRam_1_1.jpeg',
      '../../../../imagens/produtos/memRam/memRam_1_2.jpeg',
      '../../../../imagens/produtos/memRam/memRam_1_3.jpeg',
      '../../../../imagens/produtos/memRam/memRam_1_4.jpeg'
    ],
    detailedDescription: 'Carregando . . .'
  },
  {
    id: 2,
    name: 'Memória RAM Corsair Dominator Platinum, RGB, 32GB (2x16GB), 7200MHz, DDR5, CL34, para Intel XMP, Preto - CMT32GX5M2X7200C34',
    code: '99999',
    price: 3059.99,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'Memoria Ram',
    description: 'Corsair',
    link: '../../../pagesProduct/pageProduct/products/page_product_memRam.html?id=2',
    image_1: '../../../../imagens/produtos/memRam/memRam_2_1.jpeg',
    image_2: '../../../../imagens/produtos/memRam/memRam_2_2.jpeg',
    images: [
      '../../../../imagens/produtos/memRam/memRam_2_1.jpeg',
      '../../../../imagens/produtos/memRam/memRam_2_2.jpeg',
      '../../../../imagens/produtos/memRam/memRam_2_3.jpeg',
      '../../../../imagens/produtos/memRam/memRam_2_4.jpeg'
    ],
    detailedDescription: 'Carregando . . .'
  },
  {
    id: 3,
    name: 'Memória RAM Kingston Fury Beast, RGB, 128GB (4x32GB), 3200MHz, DDR4, CL16, Preto - KF432C16BB2AK4/128',
    code: '99999',
    price: 5060.99,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'Memoria Ram',
    description: 'Kingston',
    link: '../../../pagesProduct/pageProduct/products/page_product_memRam.html?id=3',
    image_1: '../../../../imagens/produtos/memRam/memRam_3_1.jpeg',
    image_2: '../../../../imagens/produtos/memRam/memRam_3_2.jpeg',
    images: [
      '../../../../imagens/produtos/memRam/memRam_3_1.jpeg',
      '../../../../imagens/produtos/memRam/memRam_3_2.jpeg',
      '../../../../imagens/produtos/memRam/memRam_3_3.jpeg',
      '../../../../imagens/produtos/memRam/memRam_3_4.jpeg'
    ],
    detailedDescription: 'Carregando . . .'
  },
  {
    id: 4,
    name: 'Memória RAM Corsair Dominator Titanium, RGB, 32GB (2x16GB), 6000MHz, DDR5, CL30, para Intel XMP, Preto - CMP32GX5M2B6000C30',
    code: '99999',
    price: 6990.90,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'Memoria Ram',
    description: 'Corsair',
    link: '../../../pagesProduct/pageProduct/products/page_product_memRam.html?id=4',
    image_1: '../../../../imagens/produtos/memRam/memRam_4_1.jpeg',
    image_2: '../../../../imagens/produtos/memRam/memRam_4_2.jpeg',
    images: [
      '../../../../imagens/produtos/memRam/memRam_4_1.jpeg',
      '../../../../imagens/produtos/memRam/memRam_4_2.jpeg',
      '../../../../imagens/produtos/memRam/memRam_4_3.jpeg',
      '../../../../imagens/produtos/memRam/memRam_4_4.jpeg'
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










