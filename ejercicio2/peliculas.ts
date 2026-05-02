// INGENIERA EN FORMACIÓN: Paula Unda - C.I: 32.139.353
// UNIDAD CURRICULAR: Programación III


// Ejercicio 2 - Enumerar y mostrar géneros y países de películas

// Aquí creo un enumerado con diferentes géneros de películas
// Esto me permite tener los valores organizados y evitar escribirlos manualmente después
enum GeneroPelicula {
    ACCION = "Acción",
    COMEDIA = "Comedia",
    DRAMA = "Drama",
    TERROR = "Terror",
    CIENCIA_FICCION = "Ciencia Ficción",
    AVENTURA = "Aventura"
}

// Aquí creo otro enumerado pero con países donde se producen películas
// Sirve para tener una lista fija de países disponibles
enum PaisPelicula {
    USA = "Estados Unidos",
    MEXICO = "México",
    FRANCIA = "Francia",
    JAPON = "Japón",
    REINO_UNIDO = "Reino Unido",
    COREA_DEL_SUR = "Corea del Sur"
}

// Aquí muestro los géneros de películas en consola
// Imprimo cada uno de los valores del enum
console.log("Géneros de películas:");
console.log(GeneroPelicula.ACCION);
console.log(GeneroPelicula.COMEDIA);
console.log(GeneroPelicula.DRAMA);
console.log(GeneroPelicula.TERROR);
console.log(GeneroPelicula.CIENCIA_FICCION);
console.log(GeneroPelicula.AVENTURA);

// Aquí separo la salida para que sea más ordenada en consola
console.log("\nPaíses de películas:");

// Aquí muestro los países disponibles usando el enum
console.log(PaisPelicula.USA);
console.log(PaisPelicula.MEXICO);
console.log(PaisPelicula.FRANCIA);
console.log(PaisPelicula.JAPON);
console.log(PaisPelicula.REINO_UNIDO);
console.log(PaisPelicula.COREA_DEL_SUR);