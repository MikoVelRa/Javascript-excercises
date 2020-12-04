//Método utilizando casting

const conversionNumerica = (number, base) => {
  if (base === 2) {
    number = parseInt(number, 10).toString(base);
  } else if (base === 10) {
    number = parseInt(number, 2);
  } else {
    return "Base inexistente";
  }
  return number;
};

//Método utilizando operaciones aritméticas

const conversionNumerica2 = (number, base) => {
  let result = null;

  if (base === 2) {
    for (let i = number; i >= 1; i /= 2) {
      result += Math.trunc(i % 2);
    }
    return result.split("").reverse().join("");
  } else if (base === 10) {
    number = number.toString().split("");
    for (let i = number.length - 1; i >= 0; i--) {
      if (number[i] === "1") result += Math.pow(2, i);
      else result += 0;
    }
    return result;
  }
};

const montoFinal = (cantidad, descuento) =>
  cantidad - (cantidad * descuento) / 100;

const numberOfYears = (fecha) => {
  if (!(fecha instanceof Date)) return "No has ingresado una fecha";
  else {
    let aniosPasados = new Date().getFullYear() - fecha.getFullYear();
    return Math.sign(aniosPasados) === -1
      ? `Faltan ${Math.abs(aniosPasados)} años para el año ${fecha.getFullYear()}`
      : aniosPasados === 0
      ? `Estamos en el año actual`
      : `Han pasado ${aniosPasados} años`;
  }
};

//console.log(conversionNumerica(123, 10));
//console.log(conversionNumerica("0", 10));
//console.log(conversionNumerica2("1010101", 10));
// console.log(montoFinal(1000, 20));
//console.log(numberOfYears(new Date(2040, 11, 3)));
