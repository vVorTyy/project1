// Identfi Elements
let tShirtBox = document.querySelector(".t-shirtBox");
let contentBoxOne = document.querySelector("#products").querySelector(".content-box")
let contentBoxTwo = document.querySelector("#featured-Products").querySelector(".content-box") 
let contentBoxThree = document.querySelector("#featured-Products").querySelector(".content-box2") 
let productsContent = document.querySelector("#more-info").querySelector("#products").querySelector(".content").querySelector(".content-box")
let moreInfo = document.querySelector("#more-info");

let mainHeader = document.querySelector("#main-header")
let offersNews = document.querySelector("#offers-news")
let features = document.querySelector("#features")
let offersNewsPartTwo  = document.querySelector("#offers-news-part-two")
let newsletters = document.querySelector("#newsletters")
let repairService = document.querySelector("#repair-service")
let featureProducts = document.querySelector("#featured-Products")

let products = document.querySelector("#products")
// let cartIcon = document.querySelector("#navbar").querySelector("nav").querySelector("ul").querySelector(".cart-icon");
// let cartIconMob = document.querySelector("#navbar").querySelector("nav").querySelector(".mobile").querySelector(".cart-icon");
let cartIcon = document.querySelector("#navbar").querySelector("nav").querySelector(".mobile").querySelector(".cart-icon");
let closeCart = document.querySelector("#close-cart")
let cartSection = document.querySelector(".cart-section")
let badge = document.querySelector("#badge");
let cart = document.querySelector("#cart").querySelector("table").querySelector("tbody")
let searchInput = document.querySelector("#products").querySelector("#search")
let priceFilter = document.querySelector("#price-filter")


// Creating Opject One
let productsOne = [
    {
        id : 1,
        type: 'adidas' ,
        name: 'Astronaut T-Shirts',
        imgUrl : '<img src="./t-shirses/t-shirt (1).jpg" alt="">',
        price : 34,
        qnt : 1
    },  
    {
        id : 2,
        type: 'adidas' ,
        name: "Cartoon Astronaut T-Shirts",
        imgUrl : '<img src="./t-shirses/t-shirt (2).jpg" alt="">',
        price : 32,
        qnt : 1

    },     
    
    {
        id : 3,
        type: "adidas" ,
        name: "Cartoon Astronaut T-Shirts",
        imgUrl : '<img src="./t-shirses/t-shirt (3).jpg" alt="">',
        price : 65,
        qnt : 1

    },     
    
    {
        id : 4,
        type: "adidas" ,
        name: "Cartoon Astronaut T-Shirts",
        imgUrl : '<img src="./t-shirses/t-shirt (4).jpg" alt="">',
        price : 12,
        qnt : 1

    },     
    
    {
        id : 5,
        type: "adidas" ,
        name: "Cartoon Astronaut T-Shirts",
        imgUrl : '<img src="./t-shirses/t-shirt (5).jpg" alt="">',
        price : 78,
        qnt : 1

    },     
    
    {
        id : 6,
        type: "adidas" ,
        name: "Cartoon Astronaut T-Shirts",
        imgUrl : '<img src="./t-shirses/t-shirt (6).jpg" alt="">',
        price : 34,
        qnt : 1

    },     
    
    {
        id : 7,
        type: "adidas" ,
        name: "Cartoon Astronaut T-Shirts",
        imgUrl : '<img src="./t-shirses/t-shirt (7).jpg" alt="">',
        price : 87,
        qnt : 1

    },     
    
    {
        id : 8,
        type: "adidas" ,
        name: "Cartoon Astronaut T-Shirts",
        imgUrl : '<img src="./t-shirses/t-shirt (8).jpg" alt="">',
        price : 21,
        qnt : 1

    }, 
];
let drawProuctsOneUI;
(drawProuctsOneUI = function (productsOne = []){
    let productsOneUI = productsOne.map(function(e){
        return `                    
            <div class="t-shirtBox">
                <div class="shitsBoxImg">
                    ${e.imgUrl}
                </div>
                <h1>${e.type}</h1>
                <p>${e.name}</p>
                <div class="cart-part">
                    <div>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <h1>$${e.price}</h1>
                        <h3 onclick="addItemToTheFavoriteOne(${e.id})" style="color:${e.liked?'red':""}"><i class="fa-solid fa-heart heart"></i></h3>
                    </div>
                    
                    <div>
                        <i onclick="addItemToTheCartOne(${e.id})" class="fa-solid fa-cart-shopping cart-icon"></i>
                    </div> 
                </div>
            </div>
        `;
    });
    contentBoxOne.innerHTML = productsOneUI.join("")
})(productsOne);



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
badge.innerHTML = cartCounterElement.length
if(badge.innerHTML > "0"){
    badge.style.display = "block";

    cartIcon.onclick = function(){
        cartSection.classList.add("active")
        console.log("sdf")
    };
    closeCart.onclick = function(){
        cartSection.classList.remove("active")
        console.log("remove")
    };
}
function addItemToTheCartOne(id){

    
    let addedItem = localStorage.getItem("objectElement")? JSON.parse(localStorage.getItem("objectElement")) : [];
    let choosenItem = productsOne.find((e) => e.id === id)


    
    objectElememt = 
    {
        id : choosenItem.id,
        price : choosenItem.price,
        img: choosenItem.imgUrl,
        qnt: choosenItem.qnt
    }

    
    
    addedItem = [...addedItem, objectElememt]
    let unique = getUniqueArr(addedItem, "id")
    localStorage.setItem("objectElement" , JSON.stringify(unique))
    

    //     // making alert cart
    // Identfiy needed elements
        let cartAlert = document.querySelector("#cart-alert")
        let continueShopping = document.querySelector("#cart-alert").querySelector(".button")
        


    //     // add active class to the cart to make it apper in the page and remove it 
        cartAlert.classList.add("active-one")
        continueShopping.onclick = function(){cartAlert.classList.remove("active-one")}


        drawAllProuctsInCart()

        let chooesedItem = document.querySelector(".cart-section").querySelector("tbody")
        let cartCounterElement = chooesedItem.querySelectorAll("tr")
    
    
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

function addItemToTheFavoriteOne(id){

    let addedItem = localStorage.getItem("addObjectFavoriteOne")? JSON.parse(localStorage.getItem("addObjectFavoriteOne")) : [];
    let choosenItem = productsOne.find((e) => e.id === id)
    choosenItem.liked = true
    addedItem = [...addedItem, choosenItem]
    let unique = getUniqueArr(addedItem, "id")
    localStorage.setItem("addObjectFavoriteOne" , JSON.stringify(unique))
    productsOne.map((e) => {
        if(e.id === choosenItem.id){
            e.liked = true
        }
    })
    drawProuctsOneUI(productsOne)
};
function getUniqueArr(arr, filterType){
    let unique = arr
    .map((e) => e[filterType])
    .map((e, i , final) => final.indexOf(e) === i && i )
    .filter((e) => arr[e])
    .map((e)=> arr[e])
    return unique;
}
// Creating Opject Two
let productsTwo = [
    {
        id : 9,
        type: "adidas" ,
        name: "Cartoon Astronaut T-Shirts",
        imgUrl : `<img src="./t-shirses/t-shirt (9).jpg" alt="">`,
        price : 34
    },  
    {
        id : 10,
        type: "adidas" ,
        name: "Cartoon Astronaut T-Shirts",
        imgUrl : `<img src="./t-shirses/t-shirt (10).jpg" alt="">`,
        price : 32
    },     
    
    {
        id : 11,
        type: "adidas" ,
        name: "Cartoon Astronaut T-Shirts",
        imgUrl : `<img src="./t-shirses/t-shirt (11).jpg" alt="">`,
        price : 65
    },     
    
    {
        id : 12,
        type: "adidas" ,
        name: "Cartoon Astronaut T-Shirts",
        imgUrl : `<img src="./t-shirses/t-shirt (12).jpg" alt="">`,
        price : 12
    },     
    
    {
        id : 13,
        type: "adidas" ,
        name: "Cartoon Astronaut T-Shirts",
        imgUrl : `<img src="./t-shirses/t-shirt (13).jpg" alt="">`,
        price : 78
    },     
    
    {
        id : 14,
        type: "adidas" ,
        name: "Cartoon Astronaut T-Shirts",
        imgUrl : `<img src="./t-shirses/t-shirt (14).jpg" alt="">`,
        price : 34
    },     
    
    {
        id : 15,
        type: "adidas" ,
        name: "Cartoon Astronaut T-Shirts",
        imgUrl : `<img src="./t-shirses/t-shirt (15).jpg" alt="">`,
        price : 87
    },     
    
    {
        id : 16,
        type: "adidas" ,
        name: "Cartoon Astronaut T-Shirts",
        imgUrl : `<img src="./t-shirses/t-shirt (11).jpg" alt="">`,
        price : 21
    },       
];
function drawProuctsTwoUI(){
    let productsTwoUI = productsTwo.map(function(e){
        return`                    
        <div class="t-shirtBox">
            <div class="shitsBoxImg">
                ${e.imgUrl}
            </div>
            <h1>${e.type}</h1>
            <p>${e.name}</p>
            <div class="cart-part">
                <div>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <h1>$${e.price}</h1>
                    <h3 onclick="addItemToTheFavoriteOne(${e.id})" style="color:${e.liked?'red':""}"><i class="fa-solid fa-heart heart"></i></h3>
                    </div>
                
                <div>
                    <i onclick="addItemToTheCartTwo(${e.id})" class="fa-solid fa-cart-shopping cart-icon"></i>
                </div> 
            </div>
        </div>
    `;
    });
    contentBoxTwo.innerHTML = productsTwoUI.join("")
};
drawProuctsTwoUI()
function addItemToTheCartTwo(id){
    let addedItem = localStorage.getItem("objectElement")? JSON.parse(localStorage.getItem("objectElement")) : [];
    let choosenItem = productsTwo.find((e) => e.id === id)

    
    objectElememt = 
    {
        id : choosenItem.id,
        price : choosenItem.price,
        img: choosenItem.imgUrl,
    }

    addedItem = [...addedItem, objectElememt]
    let unique = getUniqueArr(addedItem, "id")

    localStorage.setItem("objectElement" , JSON.stringify(unique))

    //     // making alert cart
    //     // Identfiy needed elements
        let cartAlert = document.querySelector("#cart-alert")
        let continueShopping = document.querySelector("#cart-alert").querySelector(".button")
        


    //     // add active class to the cart to make it apper in the page and remove it 
        cartAlert.classList.add("active-one")
        continueShopping.onclick = function(){cartAlert.classList.remove("active-one")}
        

        function drawProuctsUI(allProducts = []){
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
                cart.innerHTML = productsUI.join("")
        }
        drawProuctsUI()



        let chooesedItem = document.querySelector(".cart-section").querySelector("tbody")
        let cartCounterElement = chooesedItem.querySelectorAll("tr")
    
    
        badge.innerHTML = cartCounterElement.length
};
// Creating Opject Three
let chackItemProducts = [
    {
        id : 1,
        type: "adidas" ,
        name: "Cartoon Astronaut T-Shirts",
        imgUrl : `<img src="./t-shirses/t-shirt (1).jpg" alt="">`,
        price : 34
    },  
    {
        id : 2,
        type: "adidas" ,
        name: "Cartoon Astronaut T-Shirts",
        imgUrl : `<img src="./t-shirses/t-shirt (2).jpg" alt="">`,
        price : 32
    },     
    
    {
        id : 3,
        type: "adidas" ,
        name: "Cartoon Astronaut T-Shirts",
        imgUrl : `<img src="./t-shirses/t-shirt (3).jpg" alt="">`,
        price : 65
    },     
    
    {
        id : 4,
        type: "adidas" ,
        name: "Cartoon Astronaut T-Shirts",
        imgUrl : `<img src="./t-shirses/t-shirt (4).jpg" alt="">`,
        price : 12
    },     
    
    {
        id : 5,
        type: "adidas" ,
        name: "Cartoon Astronaut T-Shirts",
        imgUrl : `<img src="./t-shirses/t-shirt (5).jpg" alt="">`,
        price : 78
    },     
    
    {
        id : 6,
        type: "adidas" ,
        name: "Cartoon Astronaut T-Shirts",
        imgUrl : `<img src="./t-shirses/t-shirt (6).jpg" alt="">`,
        price : 34
    },     
    
    {
        id : 7,
        type: "adidas" ,
        name: "Cartoon Astronaut T-Shirts",
        imgUrl : `<img src="./t-shirses/t-shirt (7).jpg" alt="">`,
        price : 87
    },     
    
    {
        id : 8,
        type: "adidas" ,
        name: "Cartoon Astronaut T-Shirts",
        imgUrl : `<img src="./t-shirses/t-shirt (8).jpg" alt="">`,
        price : 21
    },     
];
function chackItemProductsUI(){
    let chackItemProductsUI = chackItemProducts.map(function(e){

        return `                    
        <div class="t-shirtBox">
            <div class="shitsBoxImg" >
                ${e.imgUrl}
            </div>
            <h1>${e.type}</h1>
            <p>${e.name}</p>
            <div class="cart-part">
                <div>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <h1>$${e.price}</h1>
                    <h3 onclick="addItemToTheFavoriteOne(${e.id})" style="color:${e.liked?'red':""}"><i class="fa-solid fa-heart heart"></i></h3>
                    </div>
                
                <div>
                    <i onclick="addItemToTheCartThree(${e.id})" class="fa-solid fa-cart-shopping cart-icon"></i>
                </div> 
            </div>
        </div>
    `;
    });
    contentBoxThree.innerHTML = chackItemProductsUI.join("")  
}    
chackItemProductsUI()
function addItemToTheCartThree(id){
    let addedItem = localStorage.getItem("objectElement")? JSON.parse(localStorage.getItem("objectElement")) : [];
    let choosenItem = chackItemProducts.find((e) => e.id === id)


    
    
    objectElememt = 
    {
        id : choosenItem.id,
        price : choosenItem.price,
        img: choosenItem.imgUrl,
    }
    
    addedItem = [...addedItem, objectElememt]
    let unique = getUniqueArr(addedItem, "id")
    localStorage.setItem("objectElement" , JSON.stringify(unique))


        // making alert cart
        // Identfiy needed elements
        let cartAlert = document.querySelector("#cart-alert")
        let continueShopping = document.querySelector("#cart-alert").querySelector(".button")
        



        // add active class to the cart to make it apper in the page and remove it 
        cartAlert.classList.add("active-one")
        continueShopping.onclick = function(){cartAlert.classList.remove("active-one")}

        function drawProuctsUI(allProducts = []){
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
        drawProuctsUI()



        let chooesedItem = document.querySelector(".cart-section").querySelector("tbody")
        let cartCounterElement = chooesedItem.querySelectorAll("tr")
    
    
        badge.innerHTML = cartCounterElement.length
};
// Loop On Tshirts Items to Add them To The Shopdetails Page
let TshirtBox = document.querySelectorAll(".shitsBoxImg"); 
for(let i = 0; i < TshirtBox.length ; i++){
    TshirtBox[i].addEventListener("click", addToShopDetails)
};
// Add ShopDetalis Function
function addToShopDetails(e){

// // Identfiy Element
let button = e.target;
let img = button.parentElement.innerHTML;
// let id = button.parentElement.parentElement.querySelector("h2").innerHTML;
let price = button.parentElement.parentElement.querySelector(".cart-part").querySelector("h1").innerHTML;
let chackCart = document.querySelector("#more-info").querySelector(".content").querySelector(".chackCartPart");




// removing Items Tempory From Shop Main Page
// Products.remove();
mainHeader.remove();
offersNews.remove();
features.remove();
offersNewsPartTwo.remove(); 
newsletters.remove();
repairService.remove();
featureProducts.remove();
products.remove()


// Adding Chooesed Item To moreInfo section
chackCart.innerHTML =
`
    <div class="box1">

        <div class="main-image">
            ${img}
        </div>
        <div class="images">
            <img src="./t-shirses/t-shirt (1).jpg" alt="">
            <img src="./t-shirses/t-shirt (2).jpg" alt="">
            <img src="./t-shirses/t-shirt (3).jpg" alt="">
            <img src="./t-shirses/t-shirt (4).jpg" alt="">
        </div>
    </div>
    
    <div class="box2">

        <div class="texts">
            <h1>Home/T-shirt</h1>
            <h2>Men's Fashion T Shirts</h2>
            <h3>${price}</h3>
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
}
searchInput.oninput = function(){
    search(searchInput.value, productsOne)
}
function search(title, myArray){
    
    let arr = myArray.filter(function(e){
        return e.name.indexOf(title) !== -1
    })
    if(arr.length > 0 ){
        drawProuctsOneUI(arr) 
    }else {
        drawProuctsOneUI(productsOne) 

    }
}

priceFilter.addEventListener("change", FilterItemByPrice)

let filted = productsOne;

function FilterItemByPrice(e){
    let result = e.target.value;

    if(result === "all items"){
        filted = productsOne
        console.log(filted)

    }else if(result === "more than $100"){

        let filte = productsOne
        filte.filter((e) => e.price = e.price < 50)
        console.log(filte)
        // console.log("price more than")
        // drawProuctsOneUI(moreProducts) 
    }
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


