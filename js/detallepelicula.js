const ApiKey = "e076870216634aba329a155058ae5e08";
// Obtener datos de la URL
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");
console.log(id);

let nombrePelicula = queryStringObj.get(".nombre");
let imagen = document.querySelector(".imgpelicula");
let titulo = document.querySelector(".titulo");
let nmr = document.querySelector(".nmr")
let fecha = document.querySelector(".fecha")
let duracion = document.querySelector(".duracion")
let sinopsis = document.querySelector(".sinopsis")
let elenco = document.querySelector(".elenco")
let botonVerRecomendaciones = document.querySelector('#verRecomendaciones');
let recomendacionesDisplay = document.querySelector('#recomendacionesDisplay');
let recomendacionesList = document.getElementById('#recomendacionesList');
let comentariosList = document.querySelector('#comentarioList');
let comentariosDisplay = document.querySelector('#comentarioDisplay');

fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}`)
.then(function(response){
    return response.json() ;
})
.then(function(data){
    console.log(data);
    imagen.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
    titulo.innerText = data.original_title;
    nmr.innerText += " " + data.vote_average;
    fecha.innerHTML = data.release_date;
    duracion.innerText = data.runtime + "min"
    sinopsis.innerText = data.overview;

    let generos = data.genres;
    let Generos_peli = "";
    
    for (let i=0; i<generos.length; i++){
        Generos_peli += `<a class="elenco" href="./detallegenero.html?id=${generos[i].id}"> ${generos[i].name}</a>`
    };
    
    elenco.innerHTML += Generos_peli
    
  return data;
})
.catch(function(error){
    console.log(error);
    return error ;
});

botonVerRecomendaciones.addEventListener('click', function() {

    let url = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${ApiKey}`;
    console.log(url);
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            
            recomendacionesDisplay.style.display = 'block';                                  


            let recomendaciones = data.results;
            let contenido = ""; 

        
            for (let i = 0; i < 5; i++) {
                

                // Agregar cada recomendación a la lista
                contenido += `<li class="reco">
                                                    <a class= "Titulo-reco-peli" href="./detallepelicula.html?id=${recomendaciones[i].id}">
                                                        <img class="recoImg" src="https://image.tmdb.org/t/p/w500/${recomendaciones[i].poster_path}" alt="${recomendaciones[i].title}">
                                                        ${recomendaciones[i].title}
                                                    </a>
                                                  </li>`;

            }

            recomendacionesDisplay.innerHTML = contenido;

            
        
            return data;
        })
        .catch(function(error) {
            console.error("Error al obtener recomendaciones:", error);
        });
});
document.getElementById('verComentarios').addEventListener('click', function() {
    let url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${ApiKey}`;
    
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);

            // Mostrar el contenedor de comentarios
            comentariosDisplay.style.display = 'block';

            let comentarios = data.results;
            let contenido = "";

            for (let i = 0; i < 3; i++) {
                // Agregar cada comentario a la lista
                contenido += `<li class="comentario">
                                <strong>${comentarios[i].author}</strong>: ${comentarios[i].content}
                              </li>`;
            }

            // Colocar los comentarios en el contenedor
            comentariosList.innerHTML = contenido;

            return data;
        })
        .catch(function(error) {
            console.error("Error al obtener comentarios:", error);
        });
});