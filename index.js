let apellido = prompt("Ingresa tu apellido: ");
let nombre = prompt("Ingresa tu nombre: ");
let edad = prompt("Ingresa tu edad ");
const menorEdad = "Eres menor de edad, no puedes ingresar al sitio"


if (edad < 17) {
    console.log ("Tu edad es de " + edad + " años. " + menorEdad);
} if (edad > 18) {
        console.log ("Hola " + apellido + " " + nombre + ", " + " tu edad es " + edad + " años");
} if (edad >=17 && edad <=18) {
    let mes = prompt ("Ingresa cuantos meses te faltan para cumplir los 18 años: ");
    console.log("Pues nos vemos en " + mes + " meses!!! " + menorEdad);}

console.log(apellido.toUpperCase(), nombre, edad);
