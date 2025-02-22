document.addEventListener("DOMContentLoaded", function() {
    const videoBtn = document.getElementById("video-btn");
    const videoBtnSpan = videoBtn.querySelector("span");
    const videoDropdown = document.getElementById("video-dropdown");

    if (videoBtn && videoBtnSpan) {
        videoBtn.addEventListener("click", function() {
            videoDropdown.classList.toggle("show");
            videoBtn.classList.toggle("open"); // Alterna la clase 'open' para girar la flecha
        });
    } else {
        console.error("El botón no tiene un <span> dentro");
    }

    // Manejar selección de video
    document.querySelectorAll(".video-option").forEach(function(option) {
        option.addEventListener("click", function() {
            var selectedVideo = this.getAttribute("data-video");

            // Cambiar el video en DPlayer
            dp.switchVideo({
                url: selectedVideo,
                type: "mp4"
            });

            // Actualizar el texto dentro del <span>
            if (videoBtnSpan) {
                videoBtnSpan.textContent = this.textContent;
            }

            // Ocultar el menú desplegable y resetear la flecha
            videoDropdown.classList.remove("show");
            videoBtn.classList.remove("open"); // Quita la clase 'open' para que la flecha vuelva a bajar
        });
    });
});

// Inicializar DPlayer con el video predeterminado
var dp = new DPlayer({
    element: document.getElementById("dplayer"),
    video: {
        url: "https://libertadores.solargentinotv.com.ar/ALI-BOC-TELEFE.mp4",
        type: "mp4"
    },
    theme: "#FFFF00" // Tema amarillo
});