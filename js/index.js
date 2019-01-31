// Your code goes here
const logoHeading = document.querySelector(".logo-heading");
const introImg = document.querySelector("header img");
const button1 = document.querySelector(".btn");
const button2 = document.querySelector(".btn")[1];
const destinationContent = document.querySelector('.content-destination p');
const img1 = document.querySelector('img');
const textSelect = document.querySelector('.text-content p');

//mouseover 
logoHeading.addEventListener('mouseover', function(e) {
    introImg.style.display = "initial";
})

//dblclick 
button1.addEventListener('dblclick', () => {
    button1.textContent = "Ooo, fancy double click!";
})

//keypress
window.addEventListener('keypress', () => {
    alert("Hi, you've pressed a key!")
})

//load
window.addEventListener("load", () => {
    console.log("This is a test for load event listener.");
})

//resize
window.addEventListener("resize", () => {
    alert("viewport resized!")
})

//select
destinationContent.addEventListener('select', () => {
    alert("Text selection alert!")
})

//scroll
window.addEventListener('scroll', () => {
    console.log("you scrolled!")
})

//drag
img1.addEventListener('drag', () => {
    console.log("you dragged!")
})

//wheel
textSelect.addEventListener('wheel', () => {
    console.log("This is a wheel listener test!");
})

