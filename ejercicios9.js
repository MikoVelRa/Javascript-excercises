import Pelicula from "./pelicula.js";

const peliculas = [
  {
    id: "tt0120737",
    titulo: "El señor de los anillos: La comunidad del anillo",
    director: "Peter Jackson",
    anio_estreno: 2001,
    paises_origen: ["España", "USA"],
    generos: ["Action", "Adventures", "Dramas"],
    calificacion: 8.8,
  },

  {
    id: "tt0167261",
    titulo: "El señor de los anillos: Las dos torres",
    director: "Peter Jackson",
    anio_estreno: 2002,
    paises_origen: ["España", "USA"],
    generos: ["Action", "Adventure", "Drama"],
    calificacion: 8.7,
  },

  {
    id: "tt0167260",
    titulo: "El señor de los anillos: El retorno del rey",
    director: "Peter Jackson",
    anio_estreno: 2003,
    paises_origen: ["España", "USA"],
    generos: ["Action", "Adventure", "Drama"],
    calificacion: 8.9,
  },
];

peliculas.forEach((peli) =>
  console.log(
    new Pelicula(
      peli.id,
      peli.titulo,
      peli.director,
      peli.anio_estreno,
      peli.paises_origen,
      peli.generos,
      peli.calificacion
    ).getFicha_Tecnica
  )
);
