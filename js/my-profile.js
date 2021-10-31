//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
(document.getElementById("Perfil")).innerHTML= "Mi perfil" + " " + localStorage.getItem("usuario1")
});



function guardarDatos(){
    let perfil = {};
    perfil.nombre = document.getElementById("nombre").value;
    perfil.apellido = document.getElementById("primerapellido").value;
    perfil.edad = document.getElementById("edad").value;
    perfil.telefono = document.getElementById("telefono").value;
    perfil.correo = document.getElementById("correo").value;
    perfil.Imagen = document.getElementById("imgCargada").src;

    localStorage.setItem("usuario", JSON.stringify(perfil));

    alert("Datos Guardados");

}


document.addEventListener("DOMContentLoaded", ()=>  {
    
    let imagen = document.getElementById("imgCargada");
    let datos = JSON.parse(localStorage.getItem("usuario"));

    if(datos !== null){

        document.getElementById("nombre").value = datos.nombre;
        document.getElementById("primerapellido").value = datos.apellido;
        document.getElementById("edad").value = datos.edad;
        document.getElementById("telefono").value = datos.telefono;
        document.getElementById("correo").value = datos.correo;
        document.getElementById("imgCargada").src = datos.Imagen;
    
    }else{
  
        imagen= "img/perfil.png";
    
    }

})

document.getElementById("Imagen").addEventListener("change", () => {

    let imagen = document.getElementById("imgCargada");
    let file = document.getElementById("Imagen").files[0];

    const reader = new FileReader();

    if(file){
        reader.readAsDataURL(file);
    }else{
        imagen.src = "img/perfil.png";
    }

    reader.addEventListener("load", () => {
        imagen.src = reader.result;
    })

})
