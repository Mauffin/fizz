for(var i=0; i<20; i++){
    
    if(i%2 == 1){
        console.log("impares: "+i);
    }
}

console.log(".............");
//Disminuir múltiplos de 3 
//Usando un bucle, escribe un código que haga que console.log
//imprima todos los valores que sean divisibles de manera uniforme por 3 del 100 al 0.
// console.log("------- --------");

for(d=100; d>=0; d--){
    if(d % 3 === 0){
        console.log("multiplos de 3: "+ d);
    }
}
//Imprime la secuencia 
// Usando un bucle, escribe un código que haga que console.log 
//imprima los valores en esta secuencia  4, 2.5, 1, -0.5, -2, -3.5.

console.log("..............");

for(f=4; f >= -3.5; f-=1.5 ){
   
   console.log("secuencia: "+f);

}

//Sigma 
//Escribe código que sume todos los valores del 1 al 100 en una variable sum y, 
//al final,console.log dé como resultado 1 + 2 + 3 + ... + 98 + 99 + 100.
// Deberíamos obtener 5050 al final.

console.log("..........");
var numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
var sum = 0;

for(var o=0; o<numeros.length; o++){
   sum += numeros[o];
}
console.log("suma de los 100 numeros: "+sum);

//Factorial 
//Escribe código que multiplique todos los valores del 1 al 12 en una variable producty, 
//al final, console.logdé como resultado  1 * 2 * 3 * ... * 10 * 11 * 12. Deberíamos obtener  479001600al final.

console.log(".........");

var numeproduct = [1,2,3,4,5,6,7,8,9,10,11,12];
var product = 1;

for(var p=0; p<numeproduct.length; p++){
   product *= numeproduct[p];
}
console.log("suma de multiplicaciones: "+product);