

//Punto 9
function vowelDetection(caracter) {
    return "aeiouAEIOU".includes(caracter);
}

const phrase = prompt("Please, type in a phrase: ");

let vowelsFound = "";

for (let i = 0; i < phrase.length; i++) {
    const caracter = phrase.charAt(i);
    if (vowelDetection(caracter)) {
        vowelsFound += caracter;
    }
    }

if (vowelsFound.length > 0) {
    alert("The vowels found in the phrase are: " + vowelsFound);
    } else {
    alert("The phrase provided contains no vowels.");
    }

