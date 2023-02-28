fetch('datos.json')
    .then (response => response.json())
    .then (data => {
        document.getElementById('edad').innerHTML = `Edad:  ${data.dianacimiento.edad}`
        document.getElementById('diana').innerHTML = `Fecha de Nacimiento: ${data.dianacimiento.dia}`
        document.getElementById('direccion').innerHTML = `Direccion: ${data.ubicacion.calle.nombre}  ${data.ubicacion.calle.numero}`
        document.getElementById('Ciudad').innerHTML = `Ciudad: ${data.ubicacion.ciudad} , ${data.ubicacion.pais} `
        document.getElementById('tel').innerHTML = `Celular: ${data.celular}`
        document.getElementById('email').innerHTML= `Email: ${data.email}` 

    })

    
/* No he podido terminar el proyecto como hubiera querido. Por distintos problemas personales retomé el curso hace una semana. El trabajo practico lo hice en mi tiempo libre entre el fin de semana y ahora estoy por subirlo. Les pido disculpas. Se que faltan muchas funcionalidades. **/
