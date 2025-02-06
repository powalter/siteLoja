// ==========================
// Função para o Carrossel da Divisoria
// ==========================

let slideIndexDiv = 0;
const slides = document.querySelectorAll('.contentDiv');
const slideDiv = document.getElementById('slideDiv');

// Função para mostrar o slide
function showSlideDiv() {
    // Move o slide container para a posição correta
    slideDiv.style.transform = `translateX(-${slideIndexDiv * 100}%)`;

    // Incrementa o índice do slide
    slideIndexDiv = (slideIndexDiv + 1) % slides.length;
}

// Função para verificar a largura da tela
function checkScreenWidth() {
    const screenWidth = window.innerWidth;

    // Se a largura da tela for menor ou igual a 760px, roda o carrossel
    if (screenWidth <= 760) {
        // Muda o slide a cada 2 segundos
        setInterval(showSlideDiv, 2000);
    } else {
        // Se a tela for maior que 760px, para o carrossel
        clearInterval(showSlideDiv);
    }
}

// Inicializa a verificação da largura da tela
checkScreenWidth();

// Adiciona um listener para mudar a verificação quando a tela for redimensionada
window.addEventListener('resize', checkScreenWidth);



document.querySelectorAll('.conteinerNav').forEach(navItem => {
  navItem.addEventListener('mouseenter', () => {
    // Aplica o filtro de brilho no .boxBanner
    document.querySelector('.boxBanner').style.filter = 'brightness(0.2)';
  });

  navItem.addEventListener('mouseleave', () => {
    // Restaura o brilho original no .boxBanner
    document.querySelector('.boxBanner').style.filter = 'brightness(1)';
  });
});

// ==========================
// Zoom da Lupa
// ==========================

const imagem = document.querySelector('.imgLupa');
const lupa = document.querySelector('.lupa');
const imagemContainer = document.querySelector('.boxProduct_gallery_mainLupa');

// Função para obter as coordenadas do mouse ou do toque
function getCoordinates(e) {
    if (e.type.startsWith('touch')) {
        // Para dispositivos móveis, pega as coordenadas do primeiro toque
        const rect = imagemContainer.getBoundingClientRect(); // Pega as coordenadas do container
        return {
            offsetX: e.touches[0].clientX - rect.left,  // Calcula a posição em relação ao container
            offsetY: e.touches[0].clientY - rect.top
        };
    } else {
        // Para dispositivos com mouse
        return {
            offsetX: e.offsetX,
            offsetY: e.offsetY
        };
    }
}

// Função para atualizar a posição da lupa
function updateLupaPosition(offsetX, offsetY) {
    const larguraImagem = imagem.offsetWidth;
    const alturaImagem = imagem.offsetHeight;

    // Ajustar posição da lupa
    const posX = offsetX - lupa.offsetWidth / 2;
    const posY = offsetY - lupa.offsetHeight / 2;

    lupa.style.left = `${posX}px`;
    lupa.style.top = `${posY}px`;

    // Configurar a parte da imagem para ser exibida dentro da lupa
    const proporcaoImagem = 2; // A proporção do zoom (quanto mais alto, mais zoom)
    
    // Aumentando a área visível da imagem dentro da lupa
    lupa.style.backgroundImage = `url('${imagem.src}')`;
    lupa.style.backgroundSize = `${larguraImagem * proporcaoImagem}px ${alturaImagem * proporcaoImagem}px`;
    
    // Movimentando o fundo da lupa para exibir o zoom da parte correta da imagem
    lupa.style.backgroundPosition = `-${(offsetX * proporcaoImagem) - lupa.offsetWidth / 2}px -${(offsetY * proporcaoImagem) - lupa.offsetHeight / 2}px`;
}

// Adicionando o evento de "mousemove" para desktop
imagemContainer.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY } = getCoordinates(e);
    updateLupaPosition(offsetX, offsetY);
});

// Adicionando o evento de "touchmove" para dispositivos móveis
imagemContainer.addEventListener('touchmove', (e) => {
    e.preventDefault();  // Previne o comportamento padrão de rolagem da tela
    const { offsetX, offsetY } = getCoordinates(e);
    updateLupaPosition(offsetX, offsetY);
});

// ==========================
// Troca de imagens + destaque nas miniaturas
// ==========================

// Seleciona todas as miniaturas de imagem
const miniaturas = document.querySelectorAll('.boxProduct_gallery_miniatureConteiner');
const imagemPrincipal = document.querySelector('.boxProduct_gallery_main img'); // Seleciona a imagem principal

// Adiciona um evento de clique para cada miniatura
miniaturas.forEach(miniatura => {
  miniatura.addEventListener('click', function() {
    // Troca a imagem principal
    imagemPrincipal.src = this.querySelector('img').src;

    // Remove a classe de destaque de todas as miniaturas
    miniaturas.forEach(img => img.classList.remove('destaque'));

    // Adiciona a classe de destaque à miniatura clicada
    this.classList.add('destaque');
  });
});

// ==========================
// Aumentar e diminuira quantidade
// ==========================

// Acessando os elementos
const decreaseButton = document.getElementById("decrease");
const increaseButton = document.getElementById("increase");
const quantityInput = document.getElementById("quantity");

// Função para diminuir
decreaseButton.addEventListener("click", () => {
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
        quantityInput.value = quantity - 1;
    }
});

// Função para aumentar
increaseButton.addEventListener("click", () => {
    let quantity = parseInt(quantityInput.value);
    quantityInput.value = quantity + 1;
});

// ==========================
// Botão do favoritar
// ==========================

// Seleciona o elemento da imagem
const favorito = document.querySelector('.boxProduct_gallery_shareFav img');

// Adiciona o evento de clique
favorito.addEventListener('click', function() {
  // Aplica a transição de opacidade para a imagem desaparecer
  this.style.transition = 'opacity 0.3s ease-in-out';
  this.style.opacity = 0;

  // Após a transição de opacidade, troca a imagem
  setTimeout(() => {
    // Verifica qual é a imagem atual e troca
    if (this.src.includes('fav_b.png')) {
      this.src = 'https://assets.onecompiler.app/42wu6ajnx/43846gyxw/fav_b_full.png'; // Substitua pelo URL da imagem desejada
    } else {
      this.src = 'https://assets.onecompiler.app/42wu6ajnx/43846gyxw/fav_b.png'; // Imagem inicial
    }

    // Torna a imagem visível novamente após a troca
    this.style.opacity = 1;
  }, 300); // Espera o tempo da transição (300ms) antes de mudar a imagem
});







