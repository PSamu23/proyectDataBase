document.getElementById('crear-cuenta').onclick = function() {
    document.getElementById('miModal').style.display = "block";
  }
  
  document.getElementById('cerrarModal').onclick = function() {
    document.getElementById('miModal').style.display = "none";
  }


  document.getElementById('abrirModal').onclick = function() {
    document.getElementById('miModalLogin').style.display = "block";
  }
  
  document.getElementById('cerrarModalLogin').onclick = function() {
    document.getElementById('miModalLogin').style.display = "none";
  }
  
  // Evitar que la ventana emergente se cierre al hacer clic dentro del formulario
  document.getElementById('formularioLogin').onclick = function(event) {
    event.stopPropagation();
  }
  
  // Cerrar la ventana emergente al hacer clic fuera de ella
  document.getElementById('miModalLogin').onclick = function() {
    document.getElementById('miModalLogin').style.display = "none";
  }

  function irAPagina() {
    window.location.href = "noti.html";
  }