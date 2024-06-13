// Identfi Elements
let Products = document.querySelector("#products");
let contentBox = Products.querySelector(".content-box")
let pages = document.querySelector("#pages");
let moreInfo = document.querySelector("#more-info");
let header = document.querySelector("#header")
let productsContent = document.querySelector("#more-info").querySelector("#products").querySelector(".content").querySelector(".content-box")
let cartIcon = document.querySelector("#navbar").querySelector("nav").querySelector(".mobile").querySelector(".cart-icon");
let cartSection = document.querySelector(".cart-section")
let closeCart = document.querySelector("#close-cart")
let badge = document.querySelector("#badge");
let cart = document.querySelector("#cart").querySelector("table").querySelector("tbody")


console.log(cartSection)
console.log(cartIcon)
console.log(closeCart)



// Creating ProductsPropertes DATA
let ProductsPropertes = [
    {
        id : 1,
        type: "adidas" ,
        name: "Cartoon Astronaut T-Shirts",
        imgUrl : `<img src="../t-shirses/t-shirt (1).jpg" alt="">`,
        price : 34
    },  
    {
        id : 2,
        type: "adidas" ,
        name: "Cartoon Astronaut T-Shirts",
        imgUrl : `<img src="../t-shirses/t-shirt (2).jpg" alt="">`,
        price : 32
    },     
    
    {
        id : 3,
        type: "adidas" ,
        name: "Cartoon Astronaut T-Shirts",
        imgUrl : `<img src="../t-shirses/t-shirt (3).jpg" alt="">`,
        price : 65
    },     
    
    {
        id : 4,
        type: "adidas" ,
        name: "Cartoon Astronaut T-Shirts",
        imgUrl : `<img src="../t-shirses/t-shirt (4).jpg" alt="">`,
        price : 12
    },     
    
    {
        id : 5,
        type: "adidas" ,
        name: "Cartoon Astronaut T-Shirts",
        imgUrl : `<img src="../t-shirses/t-shirt (5).jpg" alt="">`,
        price : 78
    },     
    
    {
        id : 6,
        type: "adidas" ,
        name: "Cartoon Astronaut T-Shirts",
        imgUrl : `<img src="../t-shirses/t-shirt (6).jpg" alt="">`,
        price : 34
    },     
    
    {
        id : 7,
        type: "adidas" ,
        name: "Cartoon Astronaut T-Shirts",
        imgUrl : `<img src="../t-shirses/t-shirt (7).jpg" alt="">`,
        price : 87
    },     
    
    {
        id : 8,
        type: "adidas" ,
        name: "Cartoon Astronaut T-Shirts",
        imgUrl : `<img src="../t-shirses/t-shirt (8).jpg" alt="">`,
        price : 21
    },       

]
function drawProuctsUI(){
    let newProductPropertes = ProductsPropertes.map(function(e){

        let id = e.id;
        let img = e.imgUrl;
        let type = e.type;
        let name = e.name;
        let price = e.price;

        console.log(id)
        
        
        return `                    
        <div class="t-shirtBox">
            <div class="TshitsBoxImg" >
                ${img}
            </div>
            <h1>${type}</h1>
            <h2>${id}</h2>
            <p>${name}</p>
            <div class="cart-part">
                <div>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <input class="quntity" type="number" value="1">
                    <h1>$${price}</h1>
                </div>
                <div>
                    <i onclick="addToCart(${id})" class="fa-solid fa-cart-shopping cart-icon"></i>
                </div>
            </div>
            </div>
            `; 
        });
        contentBox.innerHTML = newProductPropertes.join("")
    }
    drawProuctsUI()

// Add Items To LocalStorage



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


if(badge.innerHTML > "0"){
    badge.style.display = "block";

    cartIcon.onclick = function(){
        cartSection.classList.add("active");
        console.log("sdfaf")
    };
    closeCart.onclick = function(){
        cartSection.classList.remove("active")
        console.log("sdfaf")
    };
}



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
    let unique = uniqueItem(addedItem,"id")
    localStorage.setItem("objectElement" , JSON.stringify(unique))


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



function uniqueItem(arr, filterItem){
    let unique = arr.map((e) => e[filterItem])
    .map((e, i , final) => final.indexOf(e) === i && i)
    .filter((e) => arr[e] )
    .map((e) => arr[e])
    return unique;
}


// Loop On Tshirts Items to Add them To The Shopdetails Page
let TshirtBox = document.querySelectorAll(".TshitsBoxImg"); 
for(let i = 0; i < TshirtBox.length ; i++){
    TshirtBox[i].addEventListener("click", addToShopDetails)
};






// Add ShopDetalis Function
function addToShopDetails(e){


// Identfiy Element
let button = e.target;
let img = button.parentElement.innerHTML;
let id = button.parentElement.parentElement.querySelector("h2").innerHTML;
let price = button.parentElement.parentElement.querySelector(".cart-part").querySelector("h1").innerHTML;
let chackCart = document.querySelector("#more-info").querySelector(".content").querySelector(".chackCartPart");

// console.log(button)

// removing Items Tempory From Shop Main Page
// Products.remove();
pages.remove();
header.remove();



// Adding Chooesed Item To moreInfo section
chackCart.innerHTML =
`
    <div class="box1">

        <div class="main-image">
            ${img}
        </div>
        <div class="images">
            <img src="../t-shirses/t-shirt (1).jpg" alt="">
            <img src="../t-shirses/t-shirt (2).jpg" alt="">
            <img src="../t-shirses/t-shirt (3).jpg" alt="">
            <img src="../t-shirses/t-shirt (4).jpg" alt="">
        </div>
    </div>
    
    <div class="box2">

        <div class="texts">
            <h1>Home/T-shirt</h1>
            <h2>Men's Fashion T Shirts</h2>
            <h3>${price}</h3>
            <h4>${id}</h4>                
        </div>

        <!--<select name="Select Size">
            <option value="">Select Size</option>
            <option value="">X</option>
            <option value="">XXX</option>
            <option value="">XXXXXXXXXX</option>
        </select>-->
    
        <div class="cart-options">
        <!-- <input class="option-one" type="number" value="1">-->
            <!--   <button class="option-two" type=""  >Add To Cart</button>-->
        </div>

        <p>
            <strong><span>Products Details</span></strong><br><br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ad, nostrum excepturi inventore accusantium quaerat velit, sint laborum facilis est, quibusdam perspiciatis! Ut omnis doloribus sunt odio quae nobis eos?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ad, nostrum excepturi inventore accusantium quaerat velit, sint laborum facilis est, quibusdam perspiciatis! Ut omnis doloribus sunt odio quae nobis eos?
        </p>

    </div>
    `


    let images = document.querySelector("#more-info").querySelector("#products").querySelector(".content").querySelector(".chackCartPart").querySelector(".box1").querySelector(".images").querySelectorAll("img")
    let mainImg = document.querySelector("#more-info").querySelector(".content").querySelector(".box1").querySelector(".main-image").querySelector("img");
    let addedToCartButton = document.querySelector("#more-info").querySelector(".content").querySelector(".box2").querySelector(".cart-options").querySelector(".option-two")

    // let images = document.querySelector("#more-info");
    // let mainImg = document.querySelector("#more-info");
    // let addedToCartButton = document.querySelector("#more-info").querySelector(".content").querySelector(".box2").querySelector(".cart-options").querySelector(".option-two")

    for(let i = 0; i < images.length; i++ ){
        images[i].addEventListener("click", changingMainImg)
    }
    function changingMainImg(e){
        imgSrc = e.target.src
        mainImg.src = imgSrc
    }


    // Storing the item in the localStorage 
    let addedItemToCart = localStorage.getItem("objectElement")? JSON.parse(localStorage.getItem("objectElement")): [];


    // making add to cart function

    addedToCartButton.addEventListener("click", addToCartt)
    function addToCartt(){

        // convent needed element to object to add them localstorge
        objectElememt = 
        {
            id : id,
            price : price,
            img: img,
        }
        // identfiy var to add localStorage items needed to it 
        addedItemToCart = [...addedItemToCart , objectElememt]
        localStorage.setItem("objectElement", JSON.stringify(addedItemToCart))
        




        // making alert cart
        // Identfiy needed elements
        let cartAlert = document.querySelector("#cart-alert")
        let continueShopping = document.querySelector("#cart-alert").querySelector(".button")
        



        // add active class to the cart to make it apper in the page and remove it 
        cartAlert.classList.add("active-one")
        continueShopping.onclick = function(){cartAlert.classList.remove("active-one")}

        console.log("adf")

    }

}

let cartIcons = document.querySelector(".list__icon")
let closeIcon = document.querySelector(".close__icon")
let links = document.querySelector("#navbar nav ul .links")

console.log(cartIcons, closeIcon, links)
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





