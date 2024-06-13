// let productsCart = localStorage.getItem("objectElement")
let cart = document.querySelector("#cart").querySelector("table").querySelector("tbody")
let badge = document.querySelector("#badge");


function drawProuctsUI(allProducts = []){
    let products = JSON.parse(localStorage.getItem("objectElement")) || allProducts;
    let productsUI = products.map(function(e){

        let id = e.id
        let img = e.img
        let price = e.price

        return `
            
        <tr class="cart-box">
            <td class="one"><i class="fa-regular fa-circle-xmark" onclick="removeItem(${id})" ></i></td>
            <td class="two">${img}</td>
            <td class="three">Cartoon Astronaut T-shirt</td>
            <td class="four">${price}</td>
            <td class="five"><input type="number" value="1"></td>
        </tr>  
        `
    })
        cart.innerHTML = productsUI
        updateTotal()
}
drawProuctsUI()

// let quantityButton = document.querySelector("#cart").querySelector("table").querySelector(".cart-boxes")

// function removeItem(id){
//     let productsCart = localStorage.getItem("objectElement")
//     if(productsCart){
//         let items = JSON.parse(productsCart);
//         let flitered = items.filter( item => item.id != id);
//         localStorage.setItem("objectElement", JSON.stringify(flitered));
//         drawProuctsUI(flitered)
//     }
//     updateTotal()

// }

// let cartBoxes = document.querySelector("#cart").querySelector("table").querySelector(".cart-boxes").querySelectorAll(".cart-box");
// for(let i = 0 ; i < cartBoxes.length ; i++){
    
//     let quantityElement = cartBoxes[i].querySelector(".five").querySelector("input")
//     quantityElement.onchange = quantityChange
//     function quantityChange(e){

//         quantityElement = e.target
//         if(isNaN(quantityElement.value) || quantityElement.value <= 0){
//             quantityElement.value = 1
//         }
//         updateTotal()
//     }
// }

// function updateTotal(){
    
//     let totalAmount = document.querySelector("#add-to-cart").querySelector(".content").querySelector(".box-two").querySelector("table").querySelector("tbody").querySelector("tr").getElementsByTagName("td")[1]
//     let totalPrice = document.querySelector("#add-to-cart").querySelector(".content").querySelector(".box-two").querySelector("table").querySelector("tbody").getElementsByTagName("tr")[2].getElementsByTagName("td")[1];
//     let form = document.querySelector("#add-to-cart").querySelector(".content").querySelector(".box-one").querySelector("form")
//     let coupon = document.querySelector("#add-to-cart").querySelector(".content").querySelector(".box-one").querySelector("input")
//     console.log(coupon)
//     let apply = document.querySelector("#add-to-cart").querySelector(".content").querySelector(".box-one").querySelector("button")



//     // if(coupon === "qq"){
//     //     console.log("weefd")
//     // }
 

//     let cartBoxes = document.querySelector("#cart").querySelector("table").querySelector(".cart-boxes").querySelectorAll(".cart-box");
//     let total = 0;
    
//     for(let i = 0 ; i < cartBoxes.length ; i++){
//         let priceElement = parseFloat(cartBoxes[i].querySelector(".four").innerHTML.replace("$",""))
//         let quantityElement = parseFloat(cartBoxes[i].querySelector(".five").querySelector("input").value)
//         total = total + (priceElement * quantityElement)
//     }

//     form.onsubmit = function(e){
//         e.preventDefault()
//         if(coupon.value === "vorty" ||coupon.value === "VORTY"){
//             totalAmount.innerHTML = `$${total / 2}`
//             totalPrice.innerHTML = `$${total / 2}`
//         }
//     };
//     totalAmount.innerHTML = `$${total}` 
//     totalPrice.innerHTML = `$${total}` 
// }
// updateTotal()
let cartIcons = document.querySelector(".list__icon")
let closeIcon = document.querySelector(".close__icon")
let links = document.querySelector("#navbar nav ul .links")


cartIcons.onclick = function(e){
    e.preventDefault()
    console.log("ssss")
    links.classList.add("link__active")
};


closeIcon.onclick = function(e){
    e.preventDefault()
    console.log("aaaa")
    links.classList.remove("link__active")
};



