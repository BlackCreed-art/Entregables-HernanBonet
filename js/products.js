//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function () {
    getProducts(PRODUCTS_URL)
});

async function Producto(url) {
    let resultObj = await getJSONData(url);
    if (resultObj.status === 'ok') {
        showProductList(resultObj.data);
    } else {
        console.log(resultObj.status);
    }
}

function Mostrarlista(ListaProducto) {
    let htmlContentToAppend = "";
    ListaProducto.forEach(({
        cost,
        currency,
        description,
        imgSrc,
        name,
        soldCount
    }) =>{
 htmlContentToAppend += `
        <a href="#">
		<img src="${imgSrc}">
			<div>
			<h2>${name}</h2>
			<p>${currency} ${cost}</p>
			<br>
			<p>${description}</p>
			<div>
			<br>
			<small>${soldCount} vendidos</small>
</div>
</div>
</a>
        `;
    });
    document.getElementById("contenedero-lista-de-productos").innerHTML = htmlContentToAppend;
}