
function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function (enlace) {
        if (enlace.status === "ok") {
            
            showInfo(enlace.data);
            
        }
    });
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (enlace) {
        if (enlace.status === "ok"){

            showComents(enlace.data)
        };
    });
});


function showInfo(data){

    document.getElementById("nombre").innerHTML = data.name;
    document.getElementById("categoria").innerHTML = data.category;
    document.getElementById("descripction").innerHTML = data.description;
    document.getElementById("currencyCost").innerHTML = data.currency + " " + data.cost;
    document.getElementById("soldCount").innerHTML = data.soldCount;
    showImagesGallery(data.images);
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

