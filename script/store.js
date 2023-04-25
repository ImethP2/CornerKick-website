let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
/* ------------------------------------------------------------------------- */
let cartIcon =document.querySelector('#cart-icon');
let cart =document.querySelector('.cart');
let CloseCart =document.querySelector('#cart-close');

/* OPEN CART */
cartIcon.onclick=()=> {
  cart.classList.add('active');
};
/* CLOSE CART */
CloseCart.onclick=()=> {
  cart.classList.remove('active');
};

if (document.readyState=='loading'){
  document.addEventListener('DOMContentLoaded',ready);
}else{
  ready();
}
/* Making function */

function ready(){
  /* remove items */
  var removeCartButtons = document.getElementsByClassName('cart-delete');
  console.log(removeCartButtons);
  for(var i =0; i < removeCartButtons.length ; i++){
    var button = removeCartButtons[i];
    button.addEventListener("click" ,removeCartItem);
  }
  /* quantity */
  var quantityInputs = document.getElementsByClassName('cart-quantity');
  for (var i =0; i < quantityInputs.length ; i++){
    var input = quantityInputs[i];
    input.addEventListener("change",quantityChanged);
  }
  var addCart = document.getElementsByClassName('add-cart');
  for (var i =0; i < addCart.length ; i++){
    var button = addCart[i];
    button.addEventListener("click",addCartClicked);
  }
  /* Buy Button Mark */
  document.getElementsByClassName('btn-buy')[0].addEventListener("click",buyButtonClicked);
}
/* Buy Button */
function buyButtonClicked(){
  var link = "checkout.html";
  var message = "Please Fill out the Checkout Form.";
  if (confirm(message)) {
    window.location.href = link;
  }
  var cartContent=document.getElementsByClassName("cart-content")[0];
  while (cartContent.hasChildNodes()){
    cartContent.removeChild(cartContent.firstChild);
  }
  updatetotal();
}



/* remove items */
function removeCartItem (event){
  var buttonClicked=event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}
/* Quantity changes */
function quantityChanged(event){
  var input = event.target;
  if (isNaN(input.value)|| input.value<=0){
    input.value = 1;
  }
  updatetotal()
}
/* add to cart */
function addCartClicked(event){
  var button = event.target;
  var shopProducts =button.parentElement;
  var title= shopProducts.getElementsByClassName('product-title')[0].innerText;
  var price= shopProducts.getElementsByClassName('price')[0].innerText;
  var productImg= shopProducts.getElementsByClassName('product-img')[0].src;
  // console.log(title,price,productImg);
  addProductToCart(title,price,productImg);
  updatetotal();
}
function addProductToCart (title,price,productImg){
  var cartShopBox= document.createElement('div')
  cartShopBox.classList.add('cart-box');
  var cartItems =document.getElementsByClassName('cart-content')[0];
  var cartItemsNames =cartItems.getElementsByClassName('cart-product-title');
  for (var i =0; i < cartItemsNames.length ; i++){
    if (cartItemsNames[i].innerText==title){
      alert("You have already added this item to the cart");
      return;
    }
  }

var cartBoxContent = `
                      <img src="${productImg}" alt="" class="cart-img">
                      <div class="detail-box">
                        <div class="cart-product-title">${title}</div>
                        <div class="cart-price">${price}</div>
                        <input type="number" value="1" class="cart-quantity">
                      </div>
                      <!-- Remove cart -->
                      <i class='bx bx-trash cart-delete'></i>`;
cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox
.getElementsByClassName('cart-delete')[0]
.addEventListener('click',removeCartItem);
cartShopBox
.getElementsByClassName('cart-quantity')[0]
.addEventListener('change',quantityChanged);
}

function updatetotal(){
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for(var i =0; i < cartBoxes.length ; i++){
    var cartBox =cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement =cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$",""));
    var quantity= quantityElement.value;
    total= total + (price * quantity);
  }
    /* if price contain some cents */
    total = Math.round(total * 100)/100;
    document.getElementsByClassName("total-price")[0].innerText= "$" + total;
  
}