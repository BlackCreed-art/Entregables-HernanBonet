function login(){
    const respuestaGoogle = (respuesta)=>{
        console.log(respuesta);
    }
    return(
    <div className = "App">
        <GoogleLogin
        ClientId="588462754882-7dhh09ovrbl3um0nr7dla1701asdgunu.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={respuestaGoogle}
        onFailure={respuestaGoogle}
        cookiePolicity={"single_host_origin"}
        />
    </div>
    );
}
export default login;