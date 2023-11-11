// Endpoint y API Key
const ApiKey                = "e076870216634aba329a155058ae5e08"
let endpointMasVistos       = `https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}`
let endpointSeries          = `https://api.themoviedb.org/3/tv/popular?api_key=${ApiKey}`
let endpointPeliculas       = `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}`
 

// Trabajando con los elementos 

/*Lo más visto*/
fetch(endpointMasVistos)
.then(function (response) {
    return response.json();

}).then(function (data) {

    let ArrayDeMasVistas    = data.results; 
    console.log(ArrayDeMasVistas)

    // Capturo el elemtento donde quiero hacer la modificación
    let LoMasVisto          = document.querySelector("#loMasVisto");
    let PeliculasMasVistas  = " ";
    
    // Recorro la información de la API y la organizo para mostrarla en el HTML

    for (let i=0; i<5; i++){
        PeliculasMasVistas += `<a href="./detallepelicula.html?id=${ArrayDeMasVistas[i].id}">
                                <article class="articles">
                                   <img class="imgpelicula" src="https://image.tmdb.org/t/p/w500/${ArrayDeMasVistas[i].poster_path}" alt="Portada Gossip girl">
                                   <p class="titulo_peliculas">${ArrayDeMasVistas[i].title}</p>
                                   <p class="estreno_peliculas">Estreno: ${ArrayDeMasVistas[i].release_date}</p>
                                   
                              </article>
                              </a>`
    };

    
    LoMasVisto.innerHTML += PeliculasMasVistas

}).catch(function (error) {
    return error
})

/*Series*/
fetch(endpointSeries)
.then(function (response) {
    return response.json();

}).then(function (data) {

    let ArraySeries    = data.results; 
    console.log(ArraySeries)

    // Capturo el elemtento donde quiero hacer la modificación
    let series          = document.querySelector("#series");
    let SeriesValoradas  = " ";
    
    // Recorro la información de la API y la organizo para mostrarla en el HTML

    for (let i=0; i<5; i++){
        SeriesValoradas +=` <a href="./detalleserie.html?id=${ArraySeries[i].id}">
                              <article class="articles">
                                  <img class="imgpelicula" src="https://image.tmdb.org/t/p/w500/${ArraySeries[i].poster_path}" alt="Portada Suits">
                                  <p class="titulo_peliculas">${ArraySeries[i].name}</p>
                                  <p class="estreno_peliculas">Estreno: ${ArraySeries[i].first_air_date}</p>
                                  
                              </article>
                            </a>`
    };
    
    series.innerHTML += SeriesValoradas

}).catch(function (error) {
    return error
})

/*Peliculas*/

fetch(endpointPeliculas)
.then(function (response) {
    return response.json();

}).then(function (data) {

    let ArrayPeliculas    = data.results; 
    console.log(ArrayPeliculas)

    // Capturo el elemtento donde quiero hacer la modificación
    let peliculas          = document.querySelector("#peliculas");
    let Pelis  = " ";
    
    // Recorro la información de la API y la organizo para mostrarla en el HTML

    for (let i=0; i<5; i++){
        Pelis += `<a href="./detallepelicula.html?=${ArrayPeliculas[i].id}">
                    <article class="articles">
                        <img class="imgpelicula" src="https://image.tmdb.org/t/p/w500/${ArrayPeliculas[i].poster_path}" alt="Portada el 3 metros sobre el cielo">
                        <p class="titulo_peliculas">${ArrayPeliculas[i].title}</p>
                        <p class="estreno_peliculas">Estreno: ${ArrayPeliculas[i].release_date}</p>
                    </article>
                    </a>`
    };
    
    peliculas.innerHTML += Pelis

}).catch(function (error) {
    return error
})


