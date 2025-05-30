//
const button = document.getElementById('clickButton');
const countDisplay = document.getElementById('clickCount');

// Inicializando o contador
let count = 0;

// Função que será chamada a cada clique
function handleClick() {
  count++;  // Incrementa o contador
  countDisplay.textContent = count;  // Atualiza o número exibido
}

// Adicionando o evento de clique no botão
button.addEventListener('click', handleClick);
