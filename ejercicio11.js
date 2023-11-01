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