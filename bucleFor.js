// Repetir código un número exacto de veces.
//  Ejercicio 1:
//  •Usa un for para imprimir los números del 1 al 10 en consola.
//  Ejercicio 2:
//  •Pide un número con prompt().
//  •Usa un for para mostrar la tabla de multiplicar de ese número (del 1 al 10)
 
for (let i = 1; i <= 10; i++) {
    console.log("numeros del 1 al 10: ", i);
    
    
}

const prompt  = require ("prompt-sync")();
let numeroTabla = prompt("Ingreser el numero para mostrar la tabla: ");
numeroTabla=Number(numeroTabla);
console.log("La table de multiplicar de " + numeroTabla + ":");

for (let i = 1 ; i <=10 ; i++){
    console.log(numeroTabla + " x " + i + " = "+ (numeroTabla * i) );
}