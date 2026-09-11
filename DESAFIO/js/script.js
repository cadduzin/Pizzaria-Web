// Alternar menu no mobile
function alternarMenu() {
    document.getElementById('menu').classList.toggle('mostrar');
}

// Carrossel depoimentos
const depoimentos = document.querySelectorAll('.depoimento');
let indice = 0;

function mostrarDepoimento(i) {
    depoimentos.forEach((d, idx) => d.classList.toggle('ativo', idx === i));
}

function proximo() {
    indice = (indice + 1) % depoimentos.length;
    mostrarDepoimento(indice);
}

function anterior() {
    indice = (indice - 1 + depoimentos.length) % depoimentos.length;
    mostrarDepoimento(indice);
}

// Modal de pedido fictício
function mostrarPopup(event) {
    event.preventDefault();
    document.getElementById('popup').style.display = 'block';
}