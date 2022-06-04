/*Dada una cadena de texto (string) separe y muestre en consola los caracteres de
forma desordenada uno por línea, 1 carácter a la vez.*/

let testWord = "esternocleidomastoideo";
function shuffle(){
  const random = Math.random()
  if(random < 0.5){
    return - 1
  } else {
    return 1
  }
}

function wordCounter(word) {
  let split = word.split('').sort(shuffle)
  split.forEach(letter=>console.log(letter))
}
wordCounter(testWord)

/*Dado un string buscar en un listado e indicar si se encuentra o no ahí contenido
debe soportar mayúsculas y minúsculas sin importar la variación, es lo mismo Carro,
CARRO o carro.*/

let testTargetWordA = "Sabrosura";
let testTargetWordB = "Sazón";
let testTargetWordC = "Tempurado";
let testWordsList = [
  "Sabrosura",
  "Gozadera",
  "ritmo",
  "TEMPURADO",
  "SAZON",
  "Chevere",
  "Meneo",
];

function wordSearcherIgnoreCase(word) {
  return word.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace("0","o").toUpperCase();  
}

function buscaPalabraEnLista(word, wordList) {
  let currentWord = word;
  let normalizar = wordSearcherIgnoreCase(currentWord);
  const normalizarLista = [];
  for (let index = 0; index < wordList.length; index++) {
    normalizarLista.push(wordSearcherIgnoreCase(wordList[index]))
    
  }

  console.log(normalizarLista.includes(normalizar),'palabra: ${normalizar', normalizarLista)
  
}

buscaPalabraEnLista(testTargetWordB, testWordsList)

/*Dado un arreglo de strings, retornar la palabra más larga, la más corta y el tamaño
promedio, el arreglo debe ser entregado por parámetro y puede variar en cantidad
de palabras del arreglo de entrada libremente, debe retornar un objeto con los
valores mencionados..*/

let testSampleList = [
  "Capitan",
  "Comandante",
  "Teniente",
  "Cabo",
  "Brigadier",
  "Coronel",
  "Zar",
];

function wordsLengthClassifier(words) {
  let totalLetters = 0;
  const sortedWords = words.sort((wordA, wordB) => {
    if (wordA.length < wordB.length) {
     return -1;
    } else if (wordA.length > wordB.length) {
      return 1; 
    } else {
      return 0;
    }
});
sortedWords.forEach(word => totalLetters += word.length);
const average = totalLetters / sortedWords.length;
return {
  shortestWord: sortedWords[0],
  longesWord: sortedWords[sortedWords.length - 1],
  average
};
}

console.log(wordsLengthClassifier(testSampleList))

/*Dado un string retorna si este es o no un palíndromo. No debe diferenciar entre mayúsculas y minúsculas*/

let onVerificationWordA = "reconocer";
let onVerificationWordB = "querer";
let onVerificationWordC = "Gomosos";
let onVerificationWordD = "Somos";

function palindromeVerifier(word) {
let palindomeWord = word.toLowerCase.split("").reverse.join("")
  if (palindomeWord === word.toLowerCase()){

  console.log(word + "es palindromo")
  } else {
  console.log(word + "no es palindromo")
  }
}

/*Dado un objeto que contiene una lista de palabras contar el
número de letras vocales y consonantes y retornarlo en un arreglo de 2 posiciones.*/

let containerTestObject = {
  list:["Cumbamba", "Oreja", "Nariz", "Ojo", "Lengua", "Diente"]
}

function lettersCounter(containerTestObject) {
  const list = containerTestObject.list;
  let vocales = 0;
  let consonantes = 0;
  list.forEach(word => {
    word.split('').forEach(letter => {
      if (
        letter === 'a' ||
        letter === 'e' ||
        letter === 'i' ||
        letter === 'o' ||
        letter === 'u'
      ) {
        vocales++;
       } else {
         consonantes++;
       }       
      
    })
  })
  return [vocales, consonantes];
}
console.log(lettersCounter(containerTestObject));

/*Dado 2 arreglos de strings retornar un arreglo con todos los strings.*/
let wordArrayA = ["hola", "¿" ,"cómo", "estás", "?"];
let wordArrayB = ["te", "ves" ,"igual", "te", "ves", "igual"];

function arrayJoiner(listA, listB) {

  newArray = [...listA, ...listB];
  return newArray

}

console.log(arrayJoiner(wordArrayA,wordArrayB));

/*Dado un arreglo de strings indicar qué posiciones del arreglo
son anagramas de una palabra base (recibida como parámetro), retorne las posiciones en un arreglo.*/

let testWordToExplore = "amar";
let wordsToVerify = ["amar", "arma", "rana" , "mara", "rama", "roma", "amor", "ramon", "omar"];

function anagramVerifier(wordToExplore, listOfWords) {

  resultado = []

  listOfWords.forEach((palabra, index) => {
  if(palabra.split("").every(letra => {
    return wordToExplore.includes (letra);
    })) result.push(index)
  })
}

/*Dado un objeto que contiene 2 arreglos, retornar un objeto con 1
arreglo que contiene las palabras sin vocales.*/

let testObjMultiContainer = {
  listA : ["piraña", "cachama", "tilapia", "trucha", "carpa", "salmón"],
  listB : ["rinoceronte", "elefante", "jirafa", "tigre", "gacela", "ñú"]
};

function vocalsRemoverFromObject(objectMultiContainer) {
    
  let lista = objectMultiContainer.listA.concat(objectMultiContainer.listB); 

  lista.forEach(palabra => {
  let actualWord = []
  let resultado = []
    palabra.split('').forEach(letra => {
    if (
       letra !== 'a'||
       letra !== 'e'||
       letra !== 'i'|| 
       letra !== 'o'|| 
       letra !== 'u'
       ){ actualWord.push(letra);
          } 
          
      }) 
      resultado.push(actualWord.join(''))    
  }) 
  return {resultado}
}

/*Dado un arreglo de palabras reemplazar la última vocal por una x y retornar dicho arreglo.*/

let someWordsToTest = ["compañeros", "estudiantes", "señores", "amigos", "graduandos", "artistas", "universitarios"];

function lastVocalReplacer(words) {
  const replacedArr = words.map(word => {
  let newPal;
   for(let i = word.length - 1; i >= 0; i--) {
    const letter = word.charAt(i);
     if(
         letter === 'a'||
         letter === 'e'||
         letter === 'i'|| 
         letter === 'o'|| 
         letter === 'u'
      ) {
       //console.log(word.charAt(i))
      newPal = word.substring (0, i) + 'X' + word.substring(i + 1, word.length );
      break;
   }
  }
  return newPal;
})
 return replacedArr;
}

/*Dada una lista de palabras verificar si alguna de las palabras es la
versión al revés de alguna de las palabras de una segunda lista,
debe contar las identificadas y retornar un objeto con ese conteo.*/


let testListA = ["amor", "sabor", "calor","firma", "mara"];
let testListB = ["roma", "robar", "portar", "arma", "mora"];

function doubleListVerifier(listA, listB) {


  let dobleLista = 0;
  let newB=[];

  for (let i = 0; i < listB.length; i++) {
   newB[i]=listB[i].split("").reverse().join("");
  }
  for (let i = 0; i < listA.length; i++) {
   for(let j = 0; j < newB.length; j++){
     if (newB[j] == listA[i]){
      dobleLista++;
     }
    return dobleLista;
   }
 }
  return {dobleLista}
}

console.log(doubleListVerifier(testListA,testListB));

