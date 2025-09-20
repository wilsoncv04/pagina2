// Botón para ir a otra página
document.addEventListener('DOMContentLoaded', function() {
    const btnIr = document.getElementById('irOtraPagina');
    if (btnIr) {
        btnIr.addEventListener('click', function() {
            window.location.href = 'otra.html';
        });
    }
});
// Animación de mariposas volando
// Mariposas de diferentes colores y tamaños
const mariposasEmojis = [
    '🦋', // azul
    '🦋', // azul
    '🦋', // azul
    '🦋', // azul
    '🦋', // azul
    '🦋', // azul
    '🦋', // azul
    '🦋', // azul
];
const coloresMariposas = [
    '#ffb6f9', // rosa
    '#ffe066', // amarillo
    '#a3f7bf', // verde menta
    '#ffd6e0', // rosa claro
    '#b5ead7', // verde agua
    '#c7ceea', // lila
    '#f6abb6', // rosa fuerte
    '#f9f871', // amarillo pastel
    '#66a8ff', // azul claro
    '#ffadad', // rojo pastel
    '#fdffb6', // amarillo pálido
    '#caffbf', // verde claro
    '#9bf6ff', // celeste
    '#bdb2ff', // violeta
    '#ffc6ff', // rosa suave
];

function crearMariposaVolando() {
    const mariposa = document.createElement('span');
    mariposa.className = 'mariposa-volando';
    // Elegir emoji y color aleatorio
    mariposa.textContent = mariposasEmojis[Math.floor(Math.random() * mariposasEmojis.length)];
    mariposa.style.color = coloresMariposas[Math.floor(Math.random() * coloresMariposas.length)];
    // Posición horizontal aleatoria
    mariposa.style.left = Math.random() * 95 + 'vw';
    // Tamaño aleatorio
    mariposa.style.fontSize = (1.5 + Math.random() * 2.5) + 'rem';
    document.body.appendChild(mariposa);
    // Eliminar la mariposa después de la animación
    mariposa.addEventListener('animationend', () => {
        mariposa.remove();
    });
}

// Solo mostrar mariposas si existe la sección de flores (página inicial)
if (document.getElementById('flores')) {
    setInterval(() => {
        if (Math.random() < 0.8) crearMariposaVolando();
    }, 1000);
}
// Animación de girasoles cayendo desde la parte superior
function crearGirasolCayendo() {
    const girasol = document.createElement('span');
    girasol.className = 'girasol-cayendo';
    girasol.textContent = '🌻';
    // Posición horizontal aleatoria
    girasol.style.left = Math.random() * 95 + 'vw';
    // Tamaño aleatorio
    girasol.style.fontSize = (2 + Math.random() * 2) + 'rem';
    document.body.appendChild(girasol);
    // Eliminar el girasol después de la animación
    girasol.addEventListener('animationend', () => {
        girasol.remove();
    });
}

// Crear girasoles cada cierto tiempo y en mayor cantidad
setInterval(() => {
    for (let i = 0; i < 2; i++) {
        crearGirasolCayendo();
    }
}, 500);
// Script para mostrar un saludo al hacer clic en el botón

document.addEventListener('DOMContentLoaded', function() {
    const saludoBtn = document.getElementById('saludoBtn');
    if (saludoBtn) {
        saludoBtn.addEventListener('click', function() {
            alert('¡Hola! Bienvenido a la página inicial.');
        });
    }
});
