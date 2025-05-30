// Selecionando os elementos do DOM (botão e contador)
const button = document.getElementById('clickButton');
const countDisplay = document.getElementById('clickCount');

// Inicializando o contador com valor 0
let clickCount = 0;

// Função que é chamada toda vez que o botão é clicado
function handleClick() {
    clickCount++;  // Incrementa o valor do contador
    countDisplay.textContent = clickCount;  // Atualiza o contador exibido na tela
    animateClickCount();  // Chama a função de animação
}

// Função que adiciona uma animação ao contador de cliques
function animateClickCount() {
    // Aumenta o contador em escala para dar efeito visual
    countDisplay.style.transform = "scale(1.1)";
    setTimeout(() => {
        countDisplay.style.transform = "scale(1)";  // Retorna o contador ao tamanho original
    }, 200);  // A animação dura 200ms
}

// Adicionando um evento de clique no botão
button.addEventListener('click', handleClick);
