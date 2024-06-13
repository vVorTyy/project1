let cartIcon = document.querySelector("#navbar").querySelector("nav").querySelector(".mobile").querySelector(".cart-icon");
let closeCart = document.querySelector("#close-cart")
let cartSection = document.querySelector(".cart-section")
let badge = document.querySelector("#badge");
let cart = document.querySelector("#cart").querySelector("table").querySelector("tbody")





function drawAllProuctsInCart(allProducts = []){
    let products = JSON.parse(localStorage.getItem("objectElement")) || allProducts;
    let productsUI = products.map(function(e){

        let id = e.id
        let img = e.img
        let price = e.price

        return `
            
    <tr>
        <td><a href=""><i class="fa-regular fa-circle-xmark"></i></a></td>
        <td>${img}</td>
        <td>Cartoon Astronaut T-shirt</td>
        <td>${price}</td>
    </tr> 
        `
    })
        cart.innerHTML = productsUI
}
drawAllProuctsInCart()



let chooesedItem = document.querySelector(".cart-section").querySelector("tbody")
let cartCounterElement = chooesedItem.querySelectorAll("tr")
console.log(cartCounterElement)


badge.innerHTML = cartCounterElement.length


// if(badge.innerHTML > "0"){
//     badge.style.display = "block";

//     cartIcon.onclick = function(){
//         cartSection.classList.add("active")
//     };
//     closeCart.onclick = function(){
//         cartSection.classList.remove("active")
//     };
// }

function addToCart(id){

    let addedItem = localStorage.getItem("objectElement")? JSON.parse(localStorage.getItem("objectElement")) : [];
    let choosenItem = ProductsPropertes.find((e) => e.id === id)


    objectElememt = 
    {
        id : choosenItem.id,
        price : choosenItem.price,
        img: choosenItem.imgUrl,
    }

    addedItem = [...addedItem, objectElememt]
    localStorage.setItem("objectElement" , JSON.stringify(addedItem))


        // making alert cart
        // Identfiy needed elements
        let cartAlert = document.querySelector("#cart-alert")
        let continueShopping = document.querySelector("#cart-alert").querySelector(".button")
        
        

        // add active class to the cart to make it apper in the page and remove it 
        cartAlert.classList.add("active-one")
        continueShopping.onclick = function(){cartAlert.classList.remove("active-one")}


        drawAllProuctsInCart()


        let chooesedItem = document.querySelector(".cart-section").querySelector("tbody")
        let cartCounterElement = chooesedItem.querySelectorAll("tr")
        console.log(cartCounterElement)
    
    
        badge.innerHTML = cartCounterElement.length

        if(badge.innerHTML > "0"){
            badge.style.display = "block";
        
            cartIcon.onclick = function(){
                cartSection.classList.add("active")
            };
            closeCart.onclick = function(){
                cartSection.classList.remove("active")
            };
        }
        
};



if(badge.innerHTML > "0"){
    badge.style.display = "block";

    cartIcon.onclick = function(){
        cartSection.classList.add("active");
    };
    closeCart.onclick = function(){
        cartSection.classList.remove("active")
    };
}

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

