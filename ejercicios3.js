//Forma difícil (sin conversión del número a string u objeto, solo para números enteros)

const getMaxDivisor = (number) => {
  if (number < 10) return "Defina un número mayor o igual a 10";

  let maxDivisor,
    j = 1,
    capicuo = 0,
    contador = number;

  for (let i = 1; i <= number; i *= 10) maxDivisor = i;

  while (contador > 0) {
    capicuo += Math.floor(contador / maxDivisor) * j; //contador
    contador = contador - Math.floor(contador / maxDivisor) * maxDivisor; //resultadp
    j *= 10; //incrementador para obtener cifra invertida
    maxDivisor /= 10; //decremento que gestiona el ciclo
  }

  return number === capicuo ? "es capicua" : "no es capicua";
};

//Forma fácil (haciendo uso de la conversión de tipos)

const esCapicua = (number) => {
  if (number < 10) return "Defina un número mayor o igual a 10";
  return number.toString().split("").reverse().join("") == number
    ? "es capicúa"
    : "no es capicúa";
};

//Random

const getRandom = (inicio, final) =>
  Math.round(Math.random() * (inicio - final) + final);

//Factorial recursivo
const factorial = (number) => {
  if (number === 1) return 1;
  else if (number === 0) return "El valor no puede ser 0";
  else if (Math.sign(number) === -1) return "El valor no puede ser negativo";
  else if (typeof number !== "number") return "El valor debe ser un número";
  else return number * factorial(number - 1);
};

//Factorial iterativo
const facIterativo = (number) => {
  if (number === 1) return 1;
  else if (number === 0) return "El valor no puede ser 0";
  else if (Math.sign(number) === -1) return "El valor no puede ser negativo";
  else if (typeof number !== "number") return "El valor debe ser un número";
  for (let i = number; i > 1; i--) number *= i - 1;
  return number;
};

//Pruebas
console.log(getMaxDivisor(212.212));
console.log(esCapicua(212.212));
console.log(getRandom(501, 600));
console.log(factorial(5));
console.log(facIterativo(5));
