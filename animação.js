// Seleção dos elementos principais
const services = document.querySelectorAll('.service');
const nextServiceButton = document.getElementById('nextService');
const prevServiceButton = document.getElementById('prevService');
let currentServiceIndex = 0;

// Função para exibir o serviço ativo
function showService(index) {
    services.forEach((service, i) => {
        service.classList.toggle('active', i === index);
    });
}

// Função para mostrar o próximo serviço
function showNextService() {
    currentServiceIndex = (currentServiceIndex + 1) % services.length;
    showService(currentServiceIndex);
}

// Função para mostrar o serviço anterior
function showPrevService() {
    currentServiceIndex = (currentServiceIndex - 1 + services.length) % services.length;
    showService(currentServiceIndex);
}

// Adiciona eventos de clique aos botões de navegação
nextServiceButton.addEventListener('click', showNextService);
prevServiceButton.addEventListener('click', showPrevService);

// Intervalo automático para trocar de serviço a cada 5 segundos
setInterval(showNextService, 5000);

// Exibe o primeiro serviço ao carregar a página
showService(currentServiceIndex);

const frases = [
    "SEU GUIA NO MARKETING DIGITAL",
    "A EXTENSÃO DA SUA EMPRESA",
    "SUA AGÊNCIA DE MARKETING"
  ];
  
  let fraseIndex = 0;
  let charIndex = 0;
  const typingSpeed = 30; // Velocidade de digitação em milissegundos
  const textoVariavel = document.querySelector(".typing-text");
  
  function digitar() {
    if (charIndex < frases[fraseIndex].length) {
      textoVariavel.textContent += frases[fraseIndex].charAt(charIndex);
      charIndex++;
      setTimeout(digitar, typingSpeed); // Chama a função de digitação
    } else {
      setTimeout(apagar, 2000); // Espera 2 segundos antes de apagar
    }
  }
  
  function apagar() {
    if (charIndex > 0) {
      textoVariavel.textContent = frases[fraseIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(apagar, typingSpeed);
    } else {
      fraseIndex = (fraseIndex + 1) % frases.length; // Vai para a próxima frase
      setTimeout(digitar, typingSpeed);
    }
  }
  
  // Inicia o efeito de digitação
  digitar();
  
