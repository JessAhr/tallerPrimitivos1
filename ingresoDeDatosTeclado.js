// Usar prompt() para pedir datos al usuario.
//  Ejercicio 1:
//  •Pide al usuario su año de nacimiento con prompt().
//  •Calcula su edad.
//  •Muestra.
//  Ejercicio 2:
//  •Pide dos números con prompt().
//  •Convierte los datos a número.
//  •Muestra la suma en consola.
const prompt  = require ("prompt-sync")();
let anioNacimiento;
anioNacimiento=prompt("Escriba su año de nacimiento: ");
let anioActual;
anioActual= prompt ("ingresa año actual: ");
let edad = anioActual - anioNacimiento

console.log("Su edad es: " , edad );


