//Punto 6 Y 7
const nro1 = parseInt(prompt("Type in the first value: "))
const nro2 = parseInt(prompt("Type in the second value: "))

if (nro1 > nro2){
    alert("The higher number is " + nro1)
} else if (nro2 > nro1){
    alert("The higher number is " + nro2)
}
else{
    alert("You've typed in an invalid number or value. Please try again")
}