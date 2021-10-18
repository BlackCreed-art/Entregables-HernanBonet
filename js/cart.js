document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL1).then(function(enlace){
        if (enlace.status === "ok"){
            showCarrito(enlace.data);
        }
    });
});


function showCarrito(info){

    let HtmlContent = "";
    let data =  info.articles;

    for(let index = 0; index < data.length; index++){
        

        HtmlContent = `
        <tr>
            <td class="align-middle"><img src="${data[index].src}" class="img-fluid" style ="max-width:50px"></td>
            <td class="align-middle">${data[index].name}</td>
            <td class="align-middle"><input  type="number" min ="1" value = "${data[index].count}" onchange="subtotalPrice(this.value,${data[index].unitCost},${index},'${data[index].currency}')" style ="max-width:80px"></td>
            <td class="align-middle">${data[index].currency} ${data[index].unitCost}</td>
            <td class="align-middle subtotal" id = "${index}"></td>
        <tr>
        `
        document.getElementById("productsContainer").innerHTML += HtmlContent;
        subtotalPrice(data[index].count,data[index].unitCost, index, data[index].currency);
    }
    
}


function subtotalPrice(input, cost, index, currency){

    if(currency === "UYU"){
        cost = cost / 40;
    }
    let subtotal = cost * input;
    document.getElementById(index).innerHTML = `USD ${subtotal}`;
    totalPrice();
}


function totalPrice(){
    total = 0;
    subtotal = document.getElementsByClassName("subtotal");
    for(let s of subtotal){
        let content = s.innerHTML.substr(4);
        total += parseFloat(content);
        s.innerHTML = `USD ${content}`
    }
    document.getElementById("total").innerHTML = `USD ${total}`;
}



