const product = [
    {
        id: 0, 
        image: "Apple-AirPods-Pro.jpg",
        title: 'Apple-Airpods',
        price: 1700,
    },
    {
        id: 1, 
        image: "iphone_15_plus_black_pdp_image_position-1.jpg",
        title: 'Iphone 15',
        price:  18000,
    },
    {
        id: 2,
        image: 'iphone_15_plus_black_pdp_image_position-1.jpg',
        title: 'Iphone 15 Plus',
        price: 25000,
    },
    {
        id: 3,
        image: 'macbook_air_2.jpg',
        title: 'Macbook Air Space',
        price: 15000
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} =item;
    return(
         `<div class='box'>
             <div class='img-box'>
                 <img class='images' src=${image}></img>
             </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>R ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function deElement(a){
    cart.splice(a, 1);
    displaycart();
}
function displaycart(a){
    let j = 0; total=0;
    document.getElementById("count").innerHTML=cart.length
    if(cart.length==0){
        document.getElementById('cartitem').innerHTML = "You cart is empty";
        document.getElementById("total").innerHTML = "R "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "R "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowing' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>R ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='deElement("+(j++) +")'></i></div>"
            );
        }).join('');
    }
}