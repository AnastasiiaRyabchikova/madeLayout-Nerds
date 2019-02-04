var slideOneButton = document.querySelector(".slider-circle-1");
var slideTwoButton = document.querySelector(".slider-circle-2");
var slideThreeButton = document.querySelector(".slider-circle-3");

var slideOneButtonInput = document.querySelector(".slider-circle-1 input");
var slideTwoButtonInputInput = document.querySelector(".slider-circle-2 input");
var slideThreeButtonInput = document.querySelector(".slider-circle-3 input");

var slideOne = document.querySelector(".slide-1");
var slideTwo = document.querySelector(".slide-2");
var slideThree = document.querySelector(".slide-3");

slideOneButton.addEventListener("click", function(evt) {
    slideOne.classList.add("slide-show");
    slideTwo.classList.remove("slide-show");
    slideThree.classList.remove("slide-show");
})

slideTwoButton.addEventListener("click", function(evt) {
    slideTwo.classList.add("slide-show");
    slideThree.classList.remove("slide-show");
    slideOne.classList.remove("slide-show");

})

slideThreeButton.addEventListener("click", function(evt) {
    slideThree.classList.add("slide-show");
    slideOne.classList.remove("slide-show");
    slideTwo.classList.remove("slide-show");
})


var writeUsButton = document.querySelector("#write-us-button");

var writeUsPopap = document.querySelector(".popap");

var writeUsCloseButton = document.querySelector(".close-button");

writeUsButton.addEventListener("click", function(evt) {
    writeUsPopap.classList.add("popap-show");
})

writeUsCloseButton.addEventListener("click", function(evt) {
    writeUsPopap.classList.remove("popap-show");
})
