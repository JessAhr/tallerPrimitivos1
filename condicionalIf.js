//  Tomar decisiones con if, else if, else.
//  Ejercicio 1:
//  •Pide al usuario su edad.
//  •Si es mayor o igual a 18, muestra "Puedes entrar".
// •Si no, muestra "No puedes entrar".
//  Ejercicio 2:
//  •Pide un número.
//  •Si es positivo, muestra "Es positivo".
//  •Si es negativo, muestra "Es negativo".
//  •Si es cero, muestra "Es cero"

const prompt  = require ("prompt-sync")();

let edadUsuario;
edadUsuario = prompt("ingrese su edad: ");

if (edadUsuario >=18){

  
}
if (edadUsuario >= 18){

 prompt ("Puedes Entrar ");
    
} else {
     prompt ("no puedes entrar");
    
}

let numeroUsuario = prompt("Ingrese un numero; ");
numeroUsuario= Number (numeroUsuario);

if (numeroUsuario > 0  ){ 
    prompt ("El numero es positivo ");
}else if (numeroUsuario <0){
    prompt("El numero es negativo ")
} else {
 
   prompt("El numero Es Cero ");
    
}




    





