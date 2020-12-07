const vocales_consonantes = (palabra) => {
  let regExpVocales = /[aeiou]/;
  let consonantes = 0,
    vocales = 0;
  palabra = palabra.split("");

  for (let i = 0; i < palabra.length; i++) {
    if (regExpVocales.test(palabra[i])) vocales += 1;
    else if (/\s/.test(palabra[i])) continue;
    else consonantes += 1;
  }

  palabra = palabra.join("");

  return `La palabra ${palabra} contiene ${vocales} vocales y ${consonantes} consonantes`;
};

const validarNombre = (nombre) => {
  nombre = nombre.trim();
  return /([A-Z][a-záéíóú]+\s?)*/gi.exec(nombre)[0] === nombre
    ? `${nombre} es un nombre válido`
    : `${nombre} no es un nombre válido.`;
};

const validarCorreo = (correo) => {
  correo = correo.trim();
  return /[a-z]{1}[\w\.\-]+\@[a-z]+(\.[a-z]+)+/g.exec(correo)[0] === correo
    ? `${correo} es un correo válido`
    : `${correo} no es un correo válido`;
};