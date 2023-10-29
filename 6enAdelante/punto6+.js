//Punto 6 Y 7
const nro1 = parseInt(prompt("Type in the first value: "))
const nro2 = parseInt(prompt("Type in the second value: "))
const nro3 = parseInt(prompt("Type in the third value. If you are not in need of typing a third value, please type '0': "))

if (nro1 > nro2 & nro1 > nro3){
    alert("The higher number is " + nro1)
} else if (nro2 > nro1 & nro2 > nro3){
    alert("The higher number is " + nro2)
} else if (nro3 > nro1 & nro3 > nro2){
    alert("The higher number is " + nro3)
}
else{
    alert("You've typed in an invalid number or value. Please try again")
}



//Punto 8

const valor1 = parseInt(prompt("Type in the first value: "))

if (valor1 % 2 == 0){
    alert("Number " + valor1 + " is divisible by 2")
} else {
    alert("Number " + valor1 + " is NOT divisible by 2")
}


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


//punto 10

const numeroIngresado = parseInt(prompt("Type in a number, please: "))

if (numeroIngresado % 2 == 0){
    alert("Number " + numeroIngresado + " is divisible by 2")
} 
else if (numeroIngresado % 3 == 0){
    alert("Number " + numeroIngresado + " is divisible by 3")
} 
else if (numeroIngresado % 5 == 0){
    alert("Number " + numeroIngresado + " is divisible by 5")
} 
else if (numeroIngresado % 7 == 0){
    alert("Number " + numeroIngresado + " is divisible by 7")
} 
else {
    alert("Number " + numeroIngresado + " is NOT divisible by 2, 3, 5 or 7")
}



//punto 11

const valorIngresado = parseInt(prompt("Type in a number, please: "))
let mensaje = "Number " + valorIngresado + " is divisible by: ";


if (valorIngresado % 2 === 0) {
    mensaje += "2, ";
}

if (valorIngresado % 3 === 0) {
    mensaje += "3, ";
}

if (valorIngresado % 5 === 0) {
    mensaje += "5, ";
}

if (valorIngresado % 7 === 0) {
    mensaje += "7, ";
}

if (mensaje === "Number " + valorIngresado + " is divisible by: ") {
    alert("Number " + valorIngresado + " is NOT divisible by 2, 3, 5 or 7");
} else {
    alert(mensaje.slice(0, mensaje.length - 2));
}