export default class Pelicula {
  /*
  @params
  id: id de la película
  titulo: título de la película
  director: director de la película
  anio_estreno: año de estreno de la película
  paises_origen: países colaboradores de la película
  generos: generos por la cual se clasifica a la película
  calificación: calificación brindada a la película
  */
  constructor(
    id = "", //String
    titulo = "", //String
    director = "", //String
    anio_estreno = null, //Number
    paises_origen = [], //Object (array)
    generos = [], //Object (array)
    calificacion = null //Number
  ) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.anio_estreno = anio_estreno;
    this.paises_origen = paises_origen;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarCampos(this);
  }

  static generosAceptados() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }

  validarGeneros(generos) {
    generos.forEach((element) =>
      !Pelicula.generosAceptados().includes(element)
        ? console.log(`Género "${element}" no existente, estos son los géneros aceptados: `, Pelicula.generosAceptados())
        : null
    );
  }

  get getFicha_Tecnica() {
    return `
      Id: ${this.id}
      Título: ${this.titulo}
      Director: ${this.director}
      Año estreno: ${this.anio_estreno}
      Países de origen: ${this.paises_origen}
      Géneros: ${this.generos}
      Calificación: ${this.calificacion}`;
  }

  validarCampos(obj) {    
    Object.entries(obj).map((element) =>
      !this.reglasValidacion(element[0], element[1])
        ? console.log(`El campo ${element[0]} no fué ingresado correctamente`)
        : null
    );    
  }

  reglasValidacion(campo, valor) {
    switch (campo) {
      case "id":
        if (
          typeof valor !== "string" ||
          valor === "" ||
          /^[a-z]{2}\d{7}/i.exec(valor) === null ||
          /^[a-z]{2}\d{7}/i.exec(valor)[0] !== valor
        ) {
          return false;
        }
        break;
      case "titulo":
        if (typeof valor !== "string" || valor === "" || valor.length > 100) {
          return false;
        }
        break;
      case "director":
        if (typeof valor !== "string" || valor === "" || valor.length > 50) {
          return false;
        }
        break;
      case "anio_estreno":
        if (
          typeof valor !== "number" ||
          valor === null ||
          valor.toString().length !== 4 ||
          Math.sign(valor) === -1
        ) {
          return false;
        }
        break;
      case "paises_origen":
        if (!Array.isArray(valor) || valor.length === 0) {
          return false;
        }
        break;
      case "generos":
        if (!Array.isArray(valor) || valor.length === 0) {
          return false;
        }
        this.validarGeneros(valor);
        break;
      case "calificacion":
        if (
          typeof valor !== "number" ||
          valor === null ||
          Math.sign(valor) === -1 ||
          valor > 10 ||
          /\d{1,2}(.\d)?/g.exec(valor.toString())[0] != valor
        ) {
          return false;
        }
        break;
    }
    return true;
  }
}
