const products = [
  {
    id: 1,
    name: 'Placa de Vídeo Gigabyte NVIDIA GeForce RTX 4070 Ti Super WINDFORCE MAX OC, 16GB, GDDR6X, DLSS, Ray Tracing, GV-N407TSWF3MAX OC-16GD',
    code: '99999',
    price: 9239.00,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'PLACA_DE_VIDEO',
    description: 'NVIDIA',
    link: '../../../pagesProduct/pageProduct/products/page_product_vga.html?id=1',
    image_1: 'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/vga_1_img_1_.jpeg',
    image_2: 'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/vga_1_img_2_.jpeg',
    images: [
      'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/vga_1_img_1_.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/vga_1_img_2_.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/vga_1_img_3_.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/vga_1_img_4_.jpeg'
    ],
    detailedDescription: 'Carregando . . .'
  },
  {
    id: 2,
    name: 'Placa de Vídeo Asus Rog Strix NVIDIA GeForce RTX 4070 Super OC, 12GB, GDDR6X, DLSS, Ray Tracing',
    code: '99999',
    price: 8829.00,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'PLACA_DE_VIDEO',
    description: 'ASUS',
    link: '../../../pagesProduct/pageProduct/products/page_product_vga.html?id=2',
    image_1: 'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/vga_2_img_1_.jpeg',
    image_2: 'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/vga_2_img_2_.jpeg',
    images: [
      'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/vga_2_img_1_.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/vga_2_img_2_.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/vga_2_img_3_.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/vga_2_img_4_.jpeg'
    ],
    detailedDescription: 'Carregando . . .'
  },
  {
    id: 3,
    name: 'Placa de Video Gigabyte GeForce RTX 5080 Gaming OC, 16GB, GDDR7, 256-bit, GV-N5080GAMING-OC-16GD',
    code: '99999',
    price: 14709.00,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'PLACA_DE_VIDEO',
    description: 'GIGABYTE',
    link: '../../../pagesProduct/pageProduct/products/page_product_vga.html?id=3',
    image_1: 'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/vga_3_img_1_.jpeg',
    image_2: 'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/vga_3_img_2_.jpeg',
    images: [
      'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/vga_3_img_1_.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/vga_3_img_2_.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/vga_3_img_3_.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/vga_3_img_4_.jpeg'
    ],
    detailedDescription: 'Carregando . . .'
  },
  {
    id: 4,
    name: 'Placa de Video PNY GeForce RTX 2000 Ada Generation, 16GB, GDDR6, 128-bit, VCNRTX2000ADA-PB-NAC',
    code: '99999',
    price: 7999.00,
    discount: 10,
    installments: 8,
    discountOffer: 15,
    category: 'PLACA_DE_VIDEO',
    description: 'NVIDIA',
    link: '../../../pagesProduct/pageProduct/products/page_product_vga.html?id=4',
    image_1: 'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/vga_4_img_1_.jpeg',
    image_2: 'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/vga_4_img_2_.jpeg',
    images: [
      'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/vga_4_img_1_.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/vga_4_img_2_.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/vga_4_img_3_.jpeg',
      'https://assets.onecompiler.app/42wu6ajnx/43ae7bmp5/vga_4_img_4_.jpeg'
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
