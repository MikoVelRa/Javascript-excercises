const alCuadrado = lista => lista.map((i) => Math.pow(i, 2));

const ordenarLista = (otraLista) => {
  otraLista.sort((a, b) => a - b);
  return `Número mas alto: ${otraLista[otraLista.length - 1]}, mas corto: ${otraLista[0]}`;
};

const filtering = lista => {
    let object = new Object();
    object.pares = lista.filter(number => number % 2 === 0);
    object.nones = lista.filter(number => number % 2 === 1);    
    return object;
}

//Forma prototípica
function object(lista) {
    this.pares = lista.filter(number => number % 2 === 0);
    this.nones = lista.filter(number => number % 2 === 1);
}

// console.log(alCuadrado([1,4,5]));
// console.log(ordenarLista([1, 4, 5, 99, -60]));
// console.log(filtering([1,2,3,4,5,6,7,8,9,0]));
// console.log(new object([1,2,3,4,5,6,7,8,9,0]));

//Omito validaciones por cuestiones prácticas.