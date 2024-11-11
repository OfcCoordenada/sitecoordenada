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
