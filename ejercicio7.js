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