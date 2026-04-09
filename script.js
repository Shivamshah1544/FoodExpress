/* ================= LOAD CART FROM STORAGE ================= */

let cart = JSON.parse(localStorage.getItem("cart")) || [];


/* ================= ADD TO CART ================= */

function addToCart(name, price, image){

let item = {
name: name,
price: price,
image: image || "https://via.placeholder.com/80"
};

cart.push(item);

localStorage.setItem("cart", JSON.stringify(cart));

updateCartCount();

alert(name + " added to cart");

}


/* ================= DISPLAY CART ================= */

function displayCart(){

const container = document.getElementById("cartItems");

if(!container) return;

cart = JSON.parse(localStorage.getItem("cart")) || [];

container.innerHTML = "";

let total = 0;

cart.forEach((item, index)=>{

total += item.price;

container.innerHTML += `
<div class="cart-item">

<img src="${item.image}" width="80">

<div class="cart-info">
<h3>${item.name}</h3>
<p>₹${item.price}</p>
</div>

<button onclick="removeItem(${index})">Remove</button>

</div>
`;

});

const totalPrice = document.getElementById("totalPrice");

if(totalPrice){
totalPrice.innerText = "₹" + total;
}

updateCartCount();

}


/* ================= REMOVE ITEM ================= */

function removeItem(index){

cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.splice(index,1);

localStorage.setItem("cart", JSON.stringify(cart));

displayCart();

}


/* ================= CART COUNTER ================= */

function updateCartCount(){

const counter = document.getElementById("cartCount");

if(counter){
counter.innerText = cart.length;
}

}


/* ================= SIGNUP ================= */

function signup(){

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let password = document.getElementById("password").value.trim();

if(name === "" || email === "" || password === ""){
alert("Please fill all fields");
return;
}

let user = {
name: name,
email: email,
password: password
};

localStorage.setItem("user", JSON.stringify(user));

alert("Signup successful! Please login.");

window.location.href = "login.html";

}


/* ================= LOGIN ================= */

function login(){

let email = document.getElementById("email").value.trim();
let password = document.getElementById("password").value.trim();

let user = JSON.parse(localStorage.getItem("user"));

if(!user){
alert("No account found. Please signup first.");
return;
}

if(email === user.email && password === user.password){

localStorage.setItem("loggedIn", "true");

alert("Login Successful");

window.location.href = "index.html";

}else{

alert("Invalid Email or Password");

}

}


/* ================= LOGOUT ================= */

function logout(){

localStorage.removeItem("loggedIn");

alert("Logged out successfully");

window.location.href="login.html";

}


/* ================= FORGOT PASSWORD ================= */

function resetPassword(){

let email = document.getElementById("resetEmail").value.trim();

if(email === ""){
alert("Enter your email first");
return;
}

alert("Password reset link sent to " + email);

window.location.href = "login.html";

}


/* ================= DEFAULT DEMO USER ================= */

if(!localStorage.getItem("user")){

const defaultUser = {
name: "Demo User",
email: "demo@foodexpress.com",
password: "123456"
};

localStorage.setItem("user", JSON.stringify(defaultUser));

}


/* ================= ORDER NOW BUTTON ================= */

function goToMenu(){
window.location.href = "menu.html";
}


/* ================= LOAD PAGE FUNCTIONS ================= */

document.addEventListener("DOMContentLoaded", function(){

displayCart();
updateCartCount();

});
function placeOrder(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

if(cart.length === 0){
alert("Your cart is empty!");
return;
}

document.getElementById("paymentSection").style.display = "block";

}


function paymentSuccess(method){

alert("Payment Successful using " + method);

localStorage.removeItem("cart");

window.location.href="index.html";

}
