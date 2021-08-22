//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function () {
    getProducts(PRODUCTS_URL)
});

async function getProducts(url) {
    let resultObj = await getJSONData(url);
    if (resultObj.status === 'ok') {
        showProductList(resultObj.data);
    } else {
        console.log(resultObj.status);
    }
}

function showProductList(productList) {
    let htmlContentToAppend = "";
    productList.forEach(({
        cost,
        currency,
        description,
        imgSrc,
        name,
        soldCount
    }) => {
        htmlContentToAppend += `
		<img src="${imgSrc}"
		<div>
			<h1>${name}</h1>
            <br>
			<h2>${currency} ${cost}</h2>
			<br>
			<h4>${description}</h4>
		<div>
			<br>
			<small>${soldCount} vendidos</small>
		</div>
	</div>
</a>
        `;
    });
    document.getElementById("contenedor-lista-de-productos").innerHTML = htmlContentToAppend;
}