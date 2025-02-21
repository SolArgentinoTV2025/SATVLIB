  document.addEventListener("DOMContentLoaded", function() {
    const dropdownBtn = document.querySelector(".dropdown-btn");
    
    dropdownBtn.addEventListener("click", function() {
      // Solo girar la flecha sin abrir el dropdown
      dropdownBtn.classList.toggle("open");
    });
  });