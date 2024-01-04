$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
  });
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots: false,
    responsiveClass:true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1500,
    dotsSpeed: 1500,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})

$('.loop').owlCarousel({
  center: true,
  items:2,
  loop:true,
  margin:10,
  responsive:{
      600:{
          items:4
      }
  }
});
$('.nonloop').owlCarousel({
  center: true,
  items:2,
  loop:false,
  margin:10,
  dots: false,
  responsive:{
      600:{
          items:4
      }
  }
});

  const btn = document.querySelectorAll(".btncart");
  btn.forEach(function(btncart, index){
      btncart.addEventListener("click", function(event){{
          var btnItem = event.target;
          var product = btnItem.parentElement.parentElement;
          var productImg = product.querySelector("img").src;
          var productName = product.querySelector("p").innerText;
          var productCost = product.querySelector(".btncost").innerText;
        //   console.log(productImg, productName, productCost);
          addCart(productImg, productName, productCost);
  }});
});
function addCart(productImg, productName, productCost){
    var addtr = document.createElement("tr");
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++){
        let productT = document.querySelectorAll("title");
        if(productT[i].innerHTML === productName){
            alert("Sản phẩm của bạn đã có trong giỏ hàng")
        }
    }
    var trcontent = '<tr><td class="col-sm-3"><img class="img-fluid" src="'+productImg+' alt="" <span> class="title"' + productName + '</span>' + productName + '"> ' + productName + '</td><td class="col-sm-3 Cost"><p><span>' + productCost + '</span><sup>$</sup></p></td><td class="col-sm-3" ><input type="number" value="1" min="1"></td><td class="col-sm-3">Delete</td></tr>';;
    addtr.innerHTML = trcontent;
    var carttable = document.querySelector("tbody");
    carttable.append(addtr);

    cartTotal();
}
//---------------------totalPrice---------------//
function cartTotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    // console.log(cartItem);
    var totalC = 0;
    for (var i = 0; i < cartItem.length; i++){
        var inputValue = parseInt(cartItem[i].querySelector("input").value);
        // console.log(inputValue);
        var productPrice = parseFloat(cartItem[i].querySelector("span").innerHTML);
        // console.log(productPrice);
        var totalA = inputValue * productPrice*1000;
        // var totalB = totalA.toLocaleString('de-DE');
        var totalC = totalA + totalC;
        var totalD = totalC.toLocaleString('de-DE');
    }
    var cartTotalE = document.querySelector(".price-total span");
    cartTotalE.innerHTML = totalD;
}







