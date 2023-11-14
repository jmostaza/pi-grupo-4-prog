const apiKey                        = 'e076870216634aba329a155058ae5e08';
let qs                              = location.search;
let qsObj                           = new URLSearchParams(qs);
let titbusqueda                     = qsObj.get('busqueda');
let pagina                          = 1; // Inicializa la página para el boton ver mas
let loader                          = document.querySelector('.loader'); 


loader.style.display = 'block'; // Muestra el loader 

function fetchResults(page) {
    let endpoint                    = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${titbusqueda}&page=${page}`;

    fetch(endpoint)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let ArrayResultados     = data.results;

            let busqueda            = document.querySelector('.buscados');
            let resultadoBusqueda   = '';

            for (let i = 0; i < ArrayResultados.length; i++) {

                if (ArrayResultados[i].poster_path!=null) {
                        resultadoBusqueda +=    `<a class="underline" href="./detallepelicula.html?id=${ArrayResultados[i].id}">
                                                <article class="diario">
                                                <img class="imgdiario" src='https://image.tmdb.org/t/p/w500/${ArrayResultados[i].poster_path}' alt="">
                                                <p class="tit">${ArrayResultados[i].title}</p>
                                                </article>
                                                </a> `; 
                }                 
            }

            busqueda.innerHTML += resultadoBusqueda; // Agrega los nuevos resultados al contenido existente
            
            loader.style.display = 'none'; // Oculta el loader después de cargar los resultados

            if (ArrayResultados.length === 0) {
                alert('No se han encontrado más resultados');
            }
        })
        .catch(function (error) {
            console.log(error);
            loader.style.display = 'none'; 
        });
}

function verMas() {
    pagina++; // incrementa el valor de la variable página en 1 
    fetchResults(pagina); // llamo a la función con la nueva variable pagina como argumento
}

document.addEventListener('DOMContentLoaded', function () {
    let resultTitle                 = document.querySelector('.titbusqueda');
    resultTitle.textContent         = `Resultado de la Búsqueda: "${titbusqueda}"`;

    fetchResults(pagina);

    let verMasbtn                   = document.createElement('button'); // se crea el elemento y se asigna la variable
    verMasbtn.textContent = 'Ver más'; // texto del botón
    verMasbtn.classList.add('btn-ver-mas'); // agrego una clase
    verMasbtn.addEventListener('click', verMas); // asigno el evento de clic al botón

    let main                        = document.querySelector('.mainBusqueda'); // traigo el elemento con clase mainBusqueda y se lo asigno a la variable main
    main.appendChild(verMasbtn); // agrego el botón al elemento main

});
