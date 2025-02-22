document.addEventListener("DOMContentLoaded", function() {
    const dropdownBtn = document.querySelector(".dropdown-btn");
    
    dropdownBtn.addEventListener("click", function() {
      dropdownBtn.classList.toggle("open"); // Añade o elimina la clase 'open' para girar la flecha
    });
  });
  
    // Inicializar DPlayer con el video predeterminado (ESPN)
    var dp = new DPlayer({
        element: document.getElementById('dplayer'),
        video: {
            url: 'https://libertadores.solargentinotv.com.ar/ALI-BOC-TELEFE.mp4',
            type: 'mp4'
        },
        theme: '#FFFF00' // Tema amarillo
    });

    // Obtener el botón y su span interno
    const videoBtn = document.getElementById('video-btn');
    const videoBtnSpan = videoBtn.querySelector('span'); // Seleccionar el <span> dentro del botón

    if (videoBtn && videoBtnSpan) {
        videoBtn.addEventListener('click', function() {
            document.getElementById('video-dropdown').classList.toggle('show');
        });
    } else {
        console.error('El botón no tiene un <span> dentro');
    }

    // Cambiar la fuente del video cuando se selecciona una opción
    document.querySelectorAll('.video-option').forEach(function(option) {
        option.addEventListener('click', function() {
            var selectedVideo = this.getAttribute('data-video');

            // Cambiar el video en DPlayer
            dp.switchVideo({
                url: selectedVideo,
                type: 'mp4'
            });

            // Actualizar el texto del botón dentro del <span>
            if (videoBtnSpan) {
                videoBtnSpan.textContent = this.textContent;
            }

            // Ocultar el menú desplegable
            document.getElementById('video-dropdown').classList.remove('show');
        });
    });