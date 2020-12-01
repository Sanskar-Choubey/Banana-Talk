var btnTranslate = document.querySelector(".btn");
var inputField = document.querySelector(".input-field");
var outputField = document.querySelector(".output-field");


// outputField.innerText = "I am Sanskar" +" "+ "nwheuirhiusiu";

var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var text = inputField.value;

function urlGenerator(text) {
        return url + "?" + "text=" + inputField.value;
        console.log(generatedUrl);
}

function errorHandler(error) {
        console.log("Some error occured",error);
        alert("The server is down!Sorry for the inconvience");
}

function fetchURL() {
        fetch(urlGenerator()).then(response => response.json()).then(JSON => console.log(JSON.contents.translated)).catch(errorHandler())
}

btnTranslate.addEventListener("click", function btnEventHandler() {
        console.log(fetchURL());     
})

