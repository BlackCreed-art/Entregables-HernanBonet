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
    
    if(user.length >= 6 && user.length <= 8 && password.length >= 6 && password.length <= 8){
        alert('Acceso correcto!');

        location.href = './productos.html';
    }
    else{
        alert('Usuario y contraseña deben estar entre 6 y 8 caracteres de largo');
        document.getElementById('login').reset();
    }
});