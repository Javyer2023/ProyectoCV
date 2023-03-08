fetch('datos.json')
    .then (response => response.json())
    .then (data => {
        document.getElementById('edad').innerHTML = `<b>Edad:</b>  ${data.dianacimiento.edad}`
        document.getElementById('diana').innerHTML = `<b>Fecha de Nacimiento:</b> ${data.dianacimiento.dia}`
        document.getElementById('direccion').innerHTML = `<b>Direccion:</b> ${data.ubicacion.calle.nombre}  ${data.ubicacion.calle.numero}`
        document.getElementById('Ciudad').innerHTML = `<b>Ciudad:</b> ${data.ubicacion.ciudad} , ${data.ubicacion.pais} `
        document.getElementById('tel').innerHTML = `<b>Celular:</b> ${data.celular}`
        document.getElementById('email').innerHTML= `<b>Email:</b> ${data.email}` 

    })


  /*    
   let  boton = document.getElementById("btn");
   boton.onclick = function() {
       var parrafo = document.getElementById("oculto");
       parrafo.style.display = "block";
   }
   */

  window.onload =  function() {
    let boton = document.getElementById("btn");
    boton.onclick = function() {
      let parrafo = document.getElementById("oculto");
      parrafo.style.display = "block";
      boton.style.display = "none";

    }
}

