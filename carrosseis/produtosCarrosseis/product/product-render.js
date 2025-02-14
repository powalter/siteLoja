function generateProductHTML(product) {
  return `
    <div class="boxProduct" id="boxProductDesk">
      <div class="boxProduct_conteiner">
        
        <!-- Galeria de Imagens -->
        <div class="boxProduct_gallery">
          
          <!-- Imagem Principal -->
          <div class="boxProduct_gallery_main">
            <div class="boxProduct_gallery_mainLupa">
              <img src="${product.image_1}" id="img_1" class="imgLupa" />
              <img src="${product.image_2}" id="img_2" class="imgLupa" />
              <div class="boxBtnFav" onclick="toggleCheckbox()" >
                <img src="https://assets.onecompiler.app/42wu6ajnx/43846gyxw/fav_b.png" id="imgFav_1" alt="Unchecked" class="checkboxFav" />
                <img src="https://assets.onecompiler.app/42wu6ajnx/43846gyxw/fav_b_full.png" id="imgFav_2" alt="Checked" class="checkboxFav" />
              </div>
            </div>
          </div>
          
        </div>

        <!-- Descrição do Produto -->
        <div class="boxProduct_description">
          
          <!-- Título e Código do Produto -->
          <div class="boxProduct_descriptionTitle">
            <a href="pageProduto/${product.link}" target="_black"><h1>${product.name}</h1></a>
          </div>
          
          <!-- Preço e Parcelamento -->
          <div class="boxProduct_descriptionPrice">
            <h1>R$ ${formatPrice(product.price)}</h1>
            <p>até <strong> ${product.installment}x </strong> de <strong> R$ ${formatPrice(product.price / product.installment)} </strong> sem juros</p>
          </div>
          
          <!-- Botões de Quantidade e Compra -->
          <div class="boxProduct_btns">
            <div class="boxProduct_btnsSup">
              <div class="boxProduct_btnsQtd">
                <button type="button" id="decrease">-</button>
                <input type="number" id="quantity" value="1" min="1" />
                <button type="button" id="increase">+</button>
              </div>
              <div class="boxProduct_btnsBuy">
                <button type="button">Comprar</button>
              </div>
            </div>
            <div class="boxProduct_btnsInf">
              <button type="button">
                <span>Comprar pelo whatsapp</span>
                <img src="https://assets.onecompiler.app/42wu6ajnx/436r6bnrh/whatsapp_g.png" alt="WhatsApp" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function loadProduct() {
  // Obtém o ID do produto na URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));
  
  if (isNaN(productId)) {
    // Caso o ID seja inválido
    document.getElementById('product-container').innerHTML = "<p>Produto não encontrado! O ID do produto é inválido.</p>";
    return;
  }

  // Busca o produto no banco de dados
  const product = getProductById(productId);
  if (product) {
    // Se o produto for encontrado, renderiza o HTML
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = generateProductHTML(product);

    // Adiciona eventos de zoom e troca de imagens após o carregamento do produto
    const imagem = document.querySelector('.imgLupa');
    const lupa = document.querySelector('.lupa');
    const imagemContainer = document.querySelector('.boxProduct_gallery_mainLupa');

    // Função para obter as coordenadas do mouse ou do toque
    function getCoordinates(e) {
        if (e.type.startsWith('touch')) {
            // Para dispositivos móveis, pega as coordenadas do primeiro toque
            return {
                offsetX: e.touches[0].pageX - imagemContainer.offsetLeft,
                offsetY: e.touches[0].pageY - imagemContainer.offsetTop
            };
        } else {
            // Para dispositivos com mouse
            return {
                offsetX: e.offsetX,
                offsetY: e.offsetY
            };
        }
    }

    // Adicionando o evento de "mousemove" para desktop
    imagemContainer.addEventListener('mousemove', (e) => {
        const { offsetX, offsetY } = getCoordinates(e);
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
    });

    // Adicionando o evento de "touchmove" para dispositivos móveis
    imagemContainer.addEventListener('touchmove', (e) => {
        const { offsetX, offsetY } = getCoordinates(e);
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
    });

    // Troca de imagens + destaque nas miniaturas
    const miniaturas = document.querySelectorAll('.boxProduct_gallery_miniatureConteiner');
    const imagemPrincipal = document.querySelector('.boxProduct_gallery_main img');
  
    miniaturas.forEach(miniatura => {
      miniatura.addEventListener('click', function() {
        imagemPrincipal.src = this.querySelector('img').src;

        miniaturas.forEach(img => img.classList.remove('destaque'));
        this.classList.add('destaque');
      });
    });

    // Aumentar e diminuir a quantidade
    const decreaseButton = document.getElementById("decrease");
    const increaseButton = document.getElementById("increase");
    const quantityInput = document.getElementById("quantity");

    decreaseButton.addEventListener("click", () => {
        let quantity = parseInt(quantityInput.value);
        if (quantity > 1) {
            quantityInput.value = quantity - 1;
        }
    });

    increaseButton.addEventListener("click", () => {
        let quantity = parseInt(quantityInput.value);
        quantityInput.value = quantity + 1;
    });

    // Botão do favoritar
    const favorito = document.querySelector('.boxProduct_gallery_shareFav img');
    if (favorito) {
      favorito.addEventListener('click', function() {
        this.style.transition = 'opacity 0.3s ease-in-out';
        this.style.opacity = 0;

        setTimeout(() => {
          if (this.src.includes('fav_b.png')) {
            this.src = 'https://assets.onecompiler.app/42wu6ajnx/43846gyxw/fav_b_full.png';
          } else {
            this.src = 'https://assets.onecompiler.app/42wu6ajnx/43846gyxw/fav_b.png';
          }

          this.style.opacity = 1;
        }, 300);
      });
    }

  } else {
    // Se o produto não for encontrado
    document.getElementById('product-container').innerHTML = "<p>Produto não encontrado!</p>";
  }
}

// Chama a função de carregar o produto ao carregar a página
window.onload = loadProduct;

// -------------------------------------------------------- //

// BOTAO DE CHECK DO FAV

// -------------------------------------------------------- //
function toggleCheckbox() {
  const img1 = document.getElementById('imgFav_1');
  const img2 = document.getElementById('imgFav_2');
  
  if (img1.style.opacity === '0') {
    img1.style.opacity = '1';
    img2.style.opacity = '0';
  } else {
    img1.style.opacity = '0';
    img2.style.opacity = '1';
  }
}

// -------------------------------------------------------- //

// REDIMENSIONA A PAGINA DE ACORDO COM O TAMANHO DA TELA

// -------------------------------------------------------- //

window.addEventListener('message', function(event) {
  // Verifica se a mensagem vem da origem esperada (a página principal)
  if (event.origin !== window.origin) return;

  // Recebe as dimensões enviadas pela página principal
  const { width, height } = event.data;
});



