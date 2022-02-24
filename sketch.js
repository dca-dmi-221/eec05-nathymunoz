//ejercicio 1
let entrada = nombre ("joselito");
function nombre (palabra) {
  let arr = [];
  for (let i = 0; i < palabra.length; i++) {
    if (i % 2 === 0) {
    arr.push (palabra[i]);
    }
  }
  return arr;
}
console.log(entrada);

//ejercicio 2
function mayusMinus(name){
  let palabra = []
  for (let i = 0; i < name.length; i++) {
    if (i%2===0) {
      palabra.push(name[i].toUpperCase());
      } else{
      palabra.push(name[i].toLowerCase());
    }
  }
  console.log(...palabra);
}
mayusMinus('alejandro');

//ejercicio 3
function acion(palabra){
    let newPalabra = palabra
    newPalabra = palabra.substring(0, palabra.length - 4);
    console.log(newPalabra + "ción");
}
acion("Hipopótamo");