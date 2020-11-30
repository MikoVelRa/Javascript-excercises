const numOfCharacters = (texto = "") =>
  typeof texto !== "string"
    ? "Parámetro incorrecto, debe ser un texto"
    : "El texto tiene " + texto.length + " caracteres ";

// console.log(numOfCharacters());
// console.log(numOfCharacters("Like a stone"));

const textoRecortado = (texto = "", numOfCharacters = undefined) =>
  !texto || numOfCharacters === undefined
    ? "No has definido un texto o una longitud a cortar."
    : texto.slice(0, numOfCharacters);

// console.log(textoRecortado("", 10));
// console.log(textoRecortado("Hola mundo"));
// console.log(textoRecortado("Hola mundo", 4));

const dividirPalabra = (palabra, separador) => palabra.split(separador);

const repetirPalabra = (word, numberOfTimes) =>{
  let cadena = "";
    for (let i = 0; i < numberOfTimes; i++) {
      cadena += word + " ";
    }
  return cadena;
}

console.log(repetirPalabra("Hola mundo", 3));
