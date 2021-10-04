
// Muestra solo las imagenes del producto
// Muestra solo las imagenes del producto
function showImagesGallery(array){

    let HTMLContettoAppend = `
    <div class="carousel-item active">
        <img src="${array.images[0]}" class="d-block w-100">
    </div>
        `
    document.getElementById("Imagenesilustrativas").innerHTML = HTMLContettoAppend;
    

    for(let i = 1; i< array.images.length; i++){
      
        let HTMLContent = 
        `
        <div class="carousel-item">
            <img src="${array.images[i]}" class="d-block w-100">
        </div>

        `
        document.getElementById("Imagenesilustrativas").innerHTML += HTMLContent;
    }
    
}



document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function (enlace) {
        if (enlace.status === "ok") {
            
            showInfo(enlace.data);
            infoProducts = enlace.data;
        }
    });
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (enlace) {
        if (enlace.status === "ok"){

            showComents(enlace.data)
        };
    });
    getJSONData(PRODUCTS_URL).then(function (enlace) {
        if (enlace.status === "ok") {

            ProductosRelacionados(enlace.data)
        }
    });
});


function showInfo(data){

    document.getElementById("nombre").innerHTML = data.name;
    document.getElementById("categoria").innerHTML = data.category;
    document.getElementById("descripction").innerHTML = data.description;
    document.getElementById("currencyCost").innerHTML = data.currency + " " + data.cost;
    document.getElementById("soldCount").innerHTML = data.soldCount;
    showImagesGallery(data);
}




function DrawStars(stars){

    let number = parseInt(stars);
        let html = "";

    for(let i = 0; i <number; i++){
        html+=  `<span class="fa fa-star checked"></span>`
    }

    for(let j= number+1;j <=5; j++){
        html+= `<span class="fa fa-star"></span>`
    }
    return html;
}



function showComents(data){

    for(datos of data){

        let HTMLContent = `
            <div class="p-3 m-3 border" >
            <div class=" mb-4">
            <div class = "d-flex justify-content-end"">
            <small class = "text-muted">Fecha: ${datos.dateTime}</small> 
            </div>
            <div> Usuario: <strong>${datos.user}</strong>             
            </div>
            </div>    
            <p text>${datos.description}</p>
            <div class = "mt-5 ">
            Puntuacion: ${DrawStars(datos.score)}
            </div>
            <div>
        `
        document.getElementById("Coments").innerHTML += HTMLContent;
    }
}




function postComments(){
    let comentario = document.getElementById("areaComentario").value;
    let usuario = localStorage.getItem("usuario");
    let puntuacion = document.getElementById("Puntuacion");
    let comentariosLista = document.getElementById("Coments");
    let fecha = new Date();
    
        let contentHTML =
        `<div class="p-3 m-3 border" >
        <div class="d-flex w-100 justify-content-between mb-4">
        <div class = "mb-1"> Usuario: <strong> ${usuario}</strong></div>
        <small class = "text-muted"> Fecha: ${fecha.getFullYear()}-${fecha.getMonth()}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}</small>
        </div>    
        <p>${comentario}</p>
        <div>
        <p>Puntuacion: ${DrawStars(parseInt(puntuacion.value))}</p>
        </div>
        <div>`
        comentariosLista.innerHTML += contentHTML;
        document.getElementById("areaComentario").value = "";

}
function ProductosRelacionados(data){
    let info = infoProducts.relatedProducts

    for(let i = 0; i < info.length; i++){

        let htmlContent2 = `
        <div>
                <div class="card list-group-item" style="width:300px;" >
                    <img src="${data[info[i]].imgSrc}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h4 class="card-text">${data[info[i]].name}</h4>
                    <p class="card-text">${data[info[i]].description}</p>
                    </div>
                </div>
        </div>`

    document.getElementById("ProductosRelacionados").innerHTML += htmlContent2;
    }
}