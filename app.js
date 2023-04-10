var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/emoji.json";

function getTranslationURL(text){
    return serverURL+"?"+"text="+text;
}
function errorHandler(error)
{
    console.log(error);
    alert("Server is down, try again later!!");
}
function clickEventHandler(){
    var inputText = textInput.value;
    fetch(getTranslationURL(inputText)).
    then(response => response.json()).
    then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
}
btnTranslate.addEventListener("click", clickEventHandler);