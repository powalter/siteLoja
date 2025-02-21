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