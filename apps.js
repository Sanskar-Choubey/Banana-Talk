var btnTranslate = document.querySelector(".btn");
var inputField = document.querySelector(".input-field");
var outputField = document.querySelector(".output-field");


// outputField.innerText = "I am Sanskar" +" "+ "nwheuirhiusiu";

function urlGenerator(text){
        var generatedUrl = url + "?" + "text=" + inputField.value;
        console.log(generatedUrl);
}


btnTranslate.addEventListener("click", function btnEventHandler(){
   outputField.innerText = "Translated:" + inputField.value;
   urlGenerator();
})

