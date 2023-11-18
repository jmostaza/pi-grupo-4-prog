// // Endpoint y API Key
const ApiKey                                = "e076870216634aba329a155058ae5e08"
let endpoint_genero_serie                   = `https://api.themoviedb.org/3/genre/tv/list?api_key=${ApiKey}`
let endpoint_genero_pelicula                = `https://api.themoviedb.org/3/genre/movie/list?api_key=${ApiKey}`
let listadoGeneroSeries                     = document.querySelector(".listado-series");
let listadoGeneroPeliculas                  = document.querySelector(".listado-peliculas");

// Generos de Series
fetch(endpoint_genero_serie)
    .then(function (response) {
        return response.json();

    }).then(function (data) {

        console.log(data.genres);
        let arrayGeneros                    = data.genres;

        // Capturo el elemtento donde quiero hacer la modificación
        let GenerosSeries                   = " ";

        // Recorro la información de la API y la organizo para mostrarla en el HTML

        for (let i = 0; i < arrayGeneros.length; i++) {
            GenerosSeries += `<li class="item-genero"><a href="detallegenero.html?id=${arrayGeneros[i].id}&name=${arrayGeneros[i].name}">${arrayGeneros[i].name}</a></li>`
        };

        listadoGeneroSeries.innerHTML = GenerosSeries

    }).catch(function (error) {
        return error
    })

// Generos de Películas
fetch(endpoint_genero_pelicula)
    .then(function (response) {
        return response.json();

    }).then(function (data) {

        console.log(data.genres);
        let arrayGenerosPelis               = data.genres;

        // Capturo el elemtento donde quiero hacer la modificación
        let GenerosPelis                    = " ";

        // Recorro la información de la API y la organizo para mostrarla en el HTML

        for (let i = 0; i < arrayGenerosPelis.length; i++) {
            GenerosPelis += `<li class="item-genero"><a href="detallegenero.html?id=${arrayGenerosPelis[i].id}&name=${arrayGenerosPelis[i].name}">${arrayGenerosPelis[i].name}</a></li>`;
        }


        listadoGeneroPeliculas.innerHTML += GenerosPelis

    }).catch(function (error) {
        return error
    })


