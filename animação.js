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
