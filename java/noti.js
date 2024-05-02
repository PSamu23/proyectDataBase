 const renderizarnoticias = () => {
    document.getElementById('not').innerHTML = '';
    for(let i=0;i<10;i++) {
        document.getElementById('not').innerHTML += `
        <div   class="noticias">
        <div id="padi_img"><div class="marco-redondo"><img src="images/samuel.jpg"></div> </div>
        <div class="contenido_publicacion">
            <div> nombre </div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, velit nec sodales venenatis, purus elit accumsan odio, id faucibus neque mi non ex. Vestibulum sodales, arcu vel varius eleifend, purus arcu condimentum nisi, sed fermentum justo tellus a risus. Fusce commodo leo eget magna pharetra, sit amet varius mi lobortis. Ut id justo nec ligula pharetra congue nec vitae quam. Aliquam tempus lorem nec eleifend tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur auctor tristique tellus sit amet viverra. In hac habitasse platea dictumst. Duis id suscipit dui. Integer lacinia bibendum risus, ac lobortis risus consequat eu. Cras congue, elit nec consequat vehicula, elit mi ullamcorper arcu, nec mattis neq</div>
            <div class="pie_publicaion">
                <div><i class="fa-regular fa-comment"></i> 3</div>
                <div><i class="fa-solid fa-repeat"></i></div>
                <div><i class="fa-regular fa-heart"></i> 3 mil</div>
                <div><i class="fa-solid fa-share"></i></div> 
            </div>
           
        
        </div>
       
    </div>
        ` ;}
  } 
  renderizarnoticias();

  /* aqui inicia para publicar mensajes */

  function borrarPlaceholder() {
    var input = document.getElementById("mensaje");
    if (input.value === "¿Qué estás pensando?") {
        input.value = "";
    }
}

function restaurarPlaceholder() {
    var input = document.getElementById("mensaje");
    if (input.value === "") {
        input.value = "¿Qué estás pensando?";
    }
}
restaurarPlaceholder()

function publicarMensaje() {
    var mensaje = document.getElementById("mensaje").value;
    if (mensaje.trim() !== "" && mensaje.trim() !== "¿Qué estás pensando?") {
        alert("Mensaje publicado: " + mensaje);
        // Aquí puedes agregar código para enviar el mensaje a algún servidor o procesarlo de alguna otra manera
        // Por ahora, solo mostraremos un alert
    } else {
        alert("Por favor, escribe algo antes de publicar.");
    }
}
//aqui termina lo de publicar mensaje 


function irAPagina() {
    window.location.href = "profile.html";
  }
  function irAPagina2() {
    window.location.href = "premiun.html";
  }