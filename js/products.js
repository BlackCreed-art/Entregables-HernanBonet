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
        <a href="#" class="col-sm-12 col-md-5 col-lg-3 col-xl-2 product-card">
					<img src="${imgSrc}" class="product-img">
					<div class="product-card-body">
						<h4>${name}</h4>
						<span>${currency} ${cost}</span>
						<hr>
						<p>${description}</p>
						<div>
							<hr>
							<small>${soldCount} vendidos</small>
						</div>
					</div>
				</a>
        `;
    });
    document.getElementById("contenedor-lista-de-productos").innerHTML = htmlContentToAppend;
}