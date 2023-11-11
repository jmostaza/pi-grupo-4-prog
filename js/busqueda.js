let qs               = location.search;
let qsObj            = new URLSearchParams (qs);
let titbusqueda      = qsObj.get ('busqueda');
let endpoint         = `https://api.themoviedb.org/3/search/movie?api_key=${'e076870216634aba329a155058ae5e08'}&query=${titbusqueda}`
let resultadoTitulo  = document.querySelector('.titbusqueda');


resultadoTitulo.textContent = `Resultado de la Búsqueda: "${titbusqueda}"`;

fetch(endpoint)
.then(function (res) {
    return res.json();
})
.then(function (data) {

    let ArrayResultados = data.results;
    console.log(ArrayResultados); 
    let busqueda = document.querySelector('.buscados');
    let resultadoBusqueda = '';

    for (let i=0; i<ArrayResultados.length; i++){
   
        resultadoBusqueda +=  `<a class="underline" href="./detallepelicula.html?id=${ArrayResultados[i].id}">
                                <article class="diario">
                                <img class="imgdiario" src='https://image.tmdb.org/t/p/w500/${ArrayResultados[i].poster_path}' alt="">
                                <p class="tit">${ArrayResultados[i].title}</p>
                                </article>
                                </a> `
    };
    busqueda.innerHTML = resultadoBusqueda

    if (ArrayResultados.length === 0) {
        alert('No se han encontrado resultados')
    }
})
.catch(function (error) {
    console.log(error);
    return error;
})
