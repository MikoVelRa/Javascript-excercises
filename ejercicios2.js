// const reverseWord = (word = "") => {
//   let reverse = "";
//   if (!word) return "Cadena vacía";
//   else if (typeof word != "string") return "El parámetro no es un string.";
//   else {
//     for (let i = word.length; i >= 0; i--) {
//       reverse += word.charAt(i);
//     }
//   }
//   return reverse;
// };

const reverseWord = word => word.split("").reverse().join("");

//console.log(reverseWord('Hola mundo'));

const matches = (word, match) => {        
    return word.match(new RegExp(match, 'gi')).length;    
}

//console.log(matches('hola mundo adios mundo mundo de colores, este mundo es una mierda', 'mundo'));

const isPalindrome = word => {

    let palindromo = '';
    for(let i = word.length-1; i >= 0; i--){
        palindromo += word[i];
    }
    return palindromo.replace(/\s+/g, '').toLowerCase() === word.replace(/\s+/g, '').toLowerCase();    
}

//console.log(isPalindrome('Anita lava la tina'));

const eliminarCaracteres = (text, pattern) => {    
    return text.replace(new RegExp(pattern, 'gi'), '');
}

//console.log(eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));

//Solución de JM

let cadena = "hola mundo hola mundo hola mundomundo";

let contador = 0, i = 0;

while(i !== -1){    
    i = cadena.indexOf('do', i);
    console.log(i);
    if(i !== -1){
        i++;
        contador++;
    }
}

//console.log(contador);
