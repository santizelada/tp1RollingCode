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

