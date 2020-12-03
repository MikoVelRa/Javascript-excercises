const esPrimo = (numero) => {
  if (typeof numero !== "number") return "El valor debe ser un number";
  else if (numero < 2) return "El número no se puede evaluar";
  else if (typeof numero === "undefined") return "Introduzca un número";
  else if (numero === 2) return "El número es primo";
  else {
    for (let i = numero - 1; i >= 2; i--)
      if (numero % i === 0) return "El número no es primo";
  }
  return "El número es primo";
};

const esPar_O_Impar = (number) => {
  if (typeof number === "undefined") return "Introduzca un número";
  else if (typeof number !== "number") return "El valor debe ser un número";
  else if (number <= 0) return "Número inválido";

  return number % 2 === 1 ? "número impar" : "número par";
};

const conversorTemperatura = (degrees, format) => {
  //if(typeof degrees === "undefined") return "Introduzca un número";
  if (typeof format === "undefined" && typeof degrees === "undefined")
    return "Parámetros vacíos";
  else if (typeof format !== "string" || typeof degrees !== "number")
    return "Formatos no válidos";
  else if (format !== "C" && format !== "F") return "Formato inexistente";
  else {
    switch (format) {
      case "C":
        return (degrees - 32) * 0.555556;
      case "F":
        return degrees * 1.8 + 32;
      default:
        return "Introduzca un número";
    }
  }
};

console.log(conversorTemperatura());
console.log(conversorTemperatura(33, 'K'));
console.log(conversorTemperatura([]));
console.log(conversorTemperatura(33, 'C'));
console.log(conversorTemperatura(33, 'F'));
