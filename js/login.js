//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

}); 

const userName = document.getElementById('user');
const userPassword = document.getElementById('pwd');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', evento =>{
    evento.preventDefault();

    let user = userName.value;
    let password = userPassword.value;
    
    if(user.length >= 10 && user.length <= 20 && password.length >= 6 && password.length <= 8){
        alert('Acceso correcto!');

        location.replace ("./home.html");
    }
    else{
        alert('Usuario debe tener entre 10 y 20 caracteres de largo y la contraseña entre 6 y 8');
        document.getElementById('login').reset();
    }
});