$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1500,
    dotsSpeed: 1500,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 5,
            nav: true,
            loop: false
        }
    }
})

$('.loop').owlCarousel({
    center: true,
    items: 2,
    loop: true,
    margin: 10,
    responsive: {
        600: {
            items: 4
        }
    }
});
$('.nonloop').owlCarousel({
    center: true,
    items: 2,
    loop: false,
    margin: 10,
    dots: false,
    responsive: {
        600: {
            items: 4
        }
    }
});

const btn = document.querySelectorAll(".btncart");
btn.forEach(function (btncart, index) {
    btncart.addEventListener("click", function (event) {
        var btnItem = event.target;
        var product = btnItem.parentElement.parentElement;
        var productImg = product.querySelector("img").src;
        var productName = product.querySelector("p").innerText;
        var productCost = product.querySelector(".btncost").innerText;
        addCart(productImg, productName, productCost);
    });
});

function addCart(productImg, productName, productCost) {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        let productT = cartItem[i].querySelector(".title");
        if (productT && productT.innerHTML === productName) {
            alert("Sản phẩm của bạn đã có trong giỏ hàng");
            return;
        }
    }


    var addtr = document.createElement("tr");
    var trcontent = `
        <tr>
            <td class="col-sm-3">
                <img class="img-fluid" src="${productImg}" alt="">
                <span class="title">${productName}</span>
            </td>
            <td class="col-sm-3 Cost">
                <p><span class="prices">${productCost}</span><sup>$</sup></p>
            </td>
            <td class="col-sm-3"><input type="number" value="1" min="1"></td>
            <td class="col-sm-3 " style="cursor: pointer;"><span class="cart-delete">Delete</span></td>
        </tr>
    `;
    addtr.innerHTML = trcontent;
    var carttable = document.querySelector("tbody");
    carttable.appendChild(addtr);
    cartTotal();
    deleteCart();
}
// ----------------------totalPrice---------------
function cartTotal() {
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0;
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = parseInt(cartItem[i].querySelector("input").value);
        var productPrice = parseFloat(cartItem[i].querySelector(".prices").innerHTML);
        var totalA = inputValue * productPrice * 1000;
        var totalC = totalA + totalC;
    }
    // var totalD = totalC.toLocaleString('de-DE');
    var cartTotalE = document.querySelector(".price-total span");
    var cartPrice = document.querySelector(".cartIcon span");
    cartTotalE.innerHTML = totalC.toLocaleString('de-DE');
    cartPrice.innerHTML = totalC.toLocaleString('de-DE');
    inputchange();
}
//-------------------------Delete cart-----------
function deleteCart() {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        let productT = document.querySelectorAll(".cart-delete");
        productT[i].addEventListener("click", function (event) {
            var cartDelete = event.target;
            var cartItemR = cartDelete.parentElement.parentElement;
            cartItemR.remove();
            cartTotal();
        });
    }
}
deleteCart();

function inputchange() {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        let inputValue = cartItem[i].querySelector("input");
        inputValue.addEventListener("change", function () {
            cartTotal();
        });
    }
}
const cartbutton1 = document.querySelector(".button-close");
const cartshow = document.querySelector(".cartIcon");
cartshow.addEventListener("click", function () {
    document.querySelector("#cart-table").style.right = "0";
});
cartbutton1.addEventListener("click", function () {
    document.querySelector("#cart-table").style.right = "-100%";
});

var img1 = new Image();
var img2 = new Image();

function loadImage() {
  img1.src = "/IMAGES/Carousel-Image/img13.webp";
  img2.src = "/IMAGES/Carousel-Image/img10.webp";
}

function overImage(element) {
  element.src = img1.src;
}

function outImage(element) {
  element.src = img2.src;
}










