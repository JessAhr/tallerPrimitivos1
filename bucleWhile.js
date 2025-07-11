//  Repetir código mientras una condición sea verdadera.
//  Ejercicio 1:
//  •Pide un número con prompt().
//  •Usa un while para contar desde 1 hasta ese número.
//  •Muestra cada número en consola.
//  Ejercicio 2:
//  •Pide una contraseña con prompt().
//  •Usa un while para seguir preguntando hasta que ingrese "1234".
//  •Cuando acierte, muestra "Contraseña correcta"
const prompt  = require ("prompt-sync")();

let numeroUsuarioBucle = prompt ("ingrese un numero: ");
numeroUsuarioBucle = Number(numeroUsuarioBucle);
let contador=0;
while (contador <= numeroUsuarioBucle){
    console.log("itracion: ", contador);
    contador=contador+1;
}
let contrasena = "123";
let ingresoUsuario= prompt ("ingrese una contraseña de 3 digitos: ");

while (ingresoUsuario !== contrasena || ingresoUsuario.length !== 3) {
     ingresoUsuario = prompt("Contraseña incorrecta o  tiene mas de 3 digitos. Intente de nuevo: ");

    
}

console.log("Contraseña correcta");

