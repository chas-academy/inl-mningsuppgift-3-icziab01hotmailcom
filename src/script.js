// array för varukorgen
let cart = [];

// Hämta HTML-element
const productInput = document.getElementById("productInput");
const priceInput = document.getElementById("priceInput");
const addBtn = document.getElementById("addBtn");
const cartList = document.getElementById("cartList");

// Button
    function addToCart(){

//hämta värden
const productName = productInput.value;
const productPrice = Number(priceInput.value);

//Kontrollera
let found = false;

    for(let product of cart){
        if(product.productName === productName){
            product.quantity++;
            found = true;
        }
    }
// Om produkten inte finns
    if (!found){
        cart.push({productName: productName, price: productPrice, quantity: 1});
    }
//Visa varukorg
    cartList.innerHTML = "";
    for (let product of cart){
        const li = document.createElement("li");
        li.innerHTML = `${product.productName} - ${product.price} kr - Antal: ${product.quantity}`;
        cartList.appendChild(li);
    }
//Rensa input
    productInput.value = "";
    priceInput.value = "";
}