
// Selecciona todos los elementos <a> con el id "linkito"
const links = document.querySelectorAll('.linkito');

// Selecciona el audio con el id "hoverSound"
const hoverSound = document.getElementById("hoverSound");

// Recorre los enlaces y agrega un evento 'mouseover' para reproducir el audio
links.forEach(link => {
    link.addEventListener("mouseover", () => {
        hoverSound.currentTime = 0; // Reinicia el audio para que se reproduzca desde el principio
        hoverSound.play();
    });
});

const fondo = document.getElementById("fondo");

fondo.volume = 0.04;
hoverSound.volume = 25;