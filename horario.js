 // Selecciona todos los enlaces con la clase 'hover-link'
 const links = document.querySelectorAll('.hover-link');
 const hoverSound = document.getElementById('hoverSound');

 // Asigna el evento mouseover a cada enlace
 links.forEach(link => {
     link.addEventListener('mouseover', () => {
         hoverSound.currentTime = 0; // Reinicia el sonido
         hoverSound.play(); // Reproduce el sonido
     });
 });

 var audio = document.getElementById("volumenFondo");
 
 audio.addEventListener("canplay", function() {
    audio.volume = 0.2;
 });
 
