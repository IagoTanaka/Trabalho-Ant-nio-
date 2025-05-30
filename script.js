// Obtemos os elementos do DOM
const button = document.getElementById('clickButton');
const countDisplay = document.getElementById('clickCount');

// Inicializa o contador
let clickCount = 0;

// Função que atualiza o contador
function updateCounter() {
  clickCount++; // Incrementa o contador
  countDisplay.textContent = clickCount; // Atualiza a exibição
  animateClickCount();
}

// Função de animação para o contador
function animateClickCount() {
  // Adiciona uma animação visual quando o contador é atualizado
  countDisplay.style.transform = "scale(1.1)";
  setTimeout(() => {
    countDisplay.style.transform = "scale(1)";
  }, 200);
}

// Evento de clique no botão
button.addEventListener('click', updateCounter);