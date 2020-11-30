var btnTranslate = document.querySelector(".btn");
var inputField = document.querySelector(".input-field");

btnTranslate.addEventListener("click", function btnEventHandler(){
    console.log("Clicked");
    console.log(inputField.value);
})

