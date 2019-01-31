// Your code goes here
const logoHeading = document.querySelector(".logo-heading");
const introImg = document.querySelector("header img");
const button1 = document.querySelector(".btn");

//mouseover event listener
logoHeading.addEventListener('mouseover', function(e) {
    introImg.style.display = "initial";
})

//dblclick event listener
button1.addEventListener('dblclick', () => {
    button1.textContent = "Ooo, fancy double click!";
})

