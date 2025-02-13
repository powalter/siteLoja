const products = [
  {
    id: 1,
    name: 'PC Gamer Hera, Ryzen 7 5700, RTX 3050 6GB, 16GB, SSD 480GB',
    code: '99999',
    price: 4000.00,
    discount: 10,
    description: 'PC-GAMER',
    link: 'pageOffer.html?id=1',
    image_1: 'https://assets.onecompiler.app/42wu6ajnx/438dhea88/pc_offer_img_1.jpeg',
    image_2: 'https://assets.onecompiler.app/42wu6ajnx/438dhea88/pc_offer_img_2.jpeg',
    detailedDescription:`
      <div class="boxDescription_content">
        <p><strong>Projetado para garantir o melhor desempenho em seus Jogos!</strong></p>
  
        <p>Os Computadores Brazil Pc, equipados com processadores Intel Core i5, têm desempenho surpreendente. Execute múltiplas tarefas ao mesmo tempo com fluidez.</p>
        
        <p>Compatível com os mais diversos jogos atuais, execute em alto desempenho sem lags ou travamentos, com armazenamento M.2, ligue e abra seus programas em segundos. Transfira seus dados facilmente entre dispositivos através da porta USB. Acompanha manual de instrução.</p>
        
        <p><strong>Especificações do produto abaixo:</strong></p>
        
        <p><strong>- Processador:</strong></p>
        <p>Intel Core i5-11400 11ª geração</p>
        
        <p><strong>- Memória:</strong></p>
        <p>Capacidade 16GB DDR4</p>
        
        <p><strong>- Armazenamento:</strong></p>
        <p>Tipo: M.2, Capacidade: 512GB</p>
        
        <p><strong>- Placa de Vídeo:</strong></p>
        <p>GEFORCE RTX3060M Golden Memory</p>
        
        <p><strong>- Fonte:</strong></p>
        <p>500W Bivolt automática 80 Plus Bronze</p>
        
        <p><strong>- Tensão:</strong></p>
        <p>110V/230V</p>
        
        <p><strong>- Gabinete:</strong></p>
        <p>Tipo: Torre ATX com lateral em vidro temperado</p>
      </div>
    `
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
