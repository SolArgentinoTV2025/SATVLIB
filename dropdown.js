document.addEventListener("DOMContentLoaded", function() {
    const dropdownBtn = document.querySelector(".dropdown-btn");
    
    dropdownBtn.addEventListener("click", function() {
      dropdownBtn.classList.toggle("open"); // Añade o elimina la clase 'open' para girar la flecha
    });
  });  