var listarFilmes = [

    {
        "id": "1: ",
        "name": "Jurassic World: O Mundo dos Dinossauros",
        "image": "https://m.media-amazon.com/images/M/MV5BNzQ3OTY4NjAtNzM5OS00N2ZhLWJlOWUtYzYwZjNmOWRiMzcyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "year": 2015,
        "link": "https://www.imdb.com/video/vi1176612889?playlistId=tt0369610&ref_=tt_ov_vi"
    },
    {
        "id": "2: ",
        "name": "Game Of Thrones - Guerra dos Tronos",
        "image": "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY268_CR7,0,182,268_AL_.jpg",
        "year": 2019,
        "link": "https://www.imdb.com/video/vi1509866521?playlistId=tt0944947&ref_=tt_ov_vi"
    },
    {
        "id": "3: ",
        "name": "Anjos da Noite: O Despertar",
        "image": "https://m.media-amazon.com/images/M/MV5BMjAxMjc0ODk0OF5BMl5BanBnXkFtZTcwMTc5NDQwNw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "year": 2012,
        "link": "https://www.imdb.com/video/vi1011654169?playlistId=tt1496025&ref_=tt_ov_vi"
    },
    {
        "id": "4: ",
        "name": "Vingadores: Ultimato",
        "image": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "year": 2019,
        "link": "https://www.imdb.com/video/vi2163260441?playlistId=tt4154796&ref_=tt_ov_vi"
    },
    {
        "id": "5: ",
        "name": "Justice League",
        "image": "https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg",
        "year": 2021,
        "link": "https://www.imdb.com/title/tt12361974/?ref_=hm_fanfav_tt_i_1_pd_fp1"
    },
    {
        "id": "6: ",
        "name": "John Wick 3 - Parabellum",
        "image": "https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "year": 2019,
        "link": "https://www.imdb.com/video/vi3203841305?playlistId=tt6146586&ref_=tt_ov_vi"
    },
    // {
    //     "name": "Gladiador",
    //     "image": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    //     "year": 2000,
    //     "link": "https://www.imdb.com/title/tt12361974/?ref_=hm_fanfav_tt_i_1_pd_fp1"
    // },
    // {
    //     "name": "Coringa",
    //     "image": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    //     "year": 2019,
    //     "link": "https://www.imdb.com/video/vi1723318041?playlistId=tt7286456&ref_=tt_ov_vi"
    // },
    // {
    //     "name": "The Walking Dead: Um Novo Universo",
    //     "image": "https://m.media-amazon.com/images/M/MV5BODEzZjAwOGMtMWZkZC00Nzg1LTlmNDUtNDU5NDA5YmViOTMwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    //     "year": 2020,
    //     "link": "https://www.imdb.com/video/vi2289745433?playlistId=tt10148174&ref_=tt_ov_vi"
    // },
    // {
    //     "name": "Vikings: The Viking Sagas",
    //     "image": "https://m.media-amazon.com/images/M/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    //     "year": 2020,
    //     "link": "https://www.imdb.com/video/vi3793207577?playlistId=tt2306299&ref_=tt_ov_vi"
    // },
    // {
    //     "name": "Avatar",
    //     "image": "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    //     "year": 2009,
    //     "link": "https://www.imdb.com/video/vi531039513?playlistId=tt0499549&ref_=tt_ov_vi"
    // },
    // {
    //     "name": "O Regresso",
    //     "image": "https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX182_CR0,0,182,268_AL_.jpg",
    //     "year": 2015,
    //     "link": "https://www.imdb.com/video/vi3857035801?playlistId=tt1663202&ref_=tt_pr_ov_vi"
    // },
    // {
    //     "name": "Godzilla vs. Kong",
    //     "image": "https://m.media-amazon.com/images/M/MV5BZmYzMzU4NjctNDI0Mi00MGExLWI3ZDQtYzQzYThmYzc2ZmNjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg",
    //     "year": 2021,
    //     "link": "https://www.imdb.com/video/vi576962841?playlistId=tt5034838&ref_=tt_pr_ov_vi"
    // },
    // {
    //     "name": "Kong: A Ilha da Caveira",
    //     "image": "https://m.media-amazon.com/images/M/MV5BZDg0OGM1NWEtNDEwOC00OTE2LTliZWEtNzg1MTZkNjFlMmNhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_UX182_CR0,0,182,268_AL_.jpg",
    //     "year": 2017,
    //     "link": "https://www.imdb.com/video/vi4065441305?playlistId=tt3731562&ref_=tt_pr_ov_vi"
    // },
    // {
    //     "name": "O Último Reino",
    //     "image": "https://m.media-amazon.com/images/M/MV5BMjE1MzYzNjk3OF5BMl5BanBnXkFtZTgwMzk0MzYwNzE@._V1_UX182_CR0,0,182,268_AL_.jpg",
    //     "year": 2015,
    //     "link": "https://www.imdb.com/video/vi81247769?playlistId=tt4179452&ref_=tt_ov_vi"
    // },
    // {
    //     "name": "Transformers: O Último Cavaleiro",
    //     "image": "https://m.media-amazon.com/images/M/MV5BN2YwOWM4ODgtZTMzMi00ZmFmLTk5NTEtNmY4ZDcwNzQxNDhjXkEyXkFqcGdeQXVyNTI0NzAyNjY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    //     "year": 2017,
    //     "link": "https://www.imdb.com/video/vi4102142233?playlistId=tt3371366&ref_=tt_ov_vi"
    // },
    // {
    //     "name": "Mulher-Maravilha",
    //     "image": "https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX182_CR0,0,182,268_AL_.jpg",
    //     "year": 2017,
    //     "link": "https://www.imdb.com/video/vi3944268057?playlistId=tt0451279&ref_=tt_ov_vi"
    // },
    // {
    //     "name": "Como Treinar o Seu Dragão 3",
    //     "image": "https://m.media-amazon.com/images/M/MV5BMjIwMDIwNjAyOF5BMl5BanBnXkFtZTgwNDE1MDc2NTM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    //     "year": 2019,
    //     "link": "https://www.imdb.com/video/vi1887746585?playlistId=tt2386490&ref_=tt_ov_vi"
    // },
    // {
    //     "name": "Como Treinar o Seu Dragão",
    //     "image": "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    //     "year": 2010,
    //     "link": "https://www.imdb.com/video/vi1158218777?playlistId=tt0892769&ref_=tt_ov_vi"
    // },
    // {
    //     "name": "O Rei Leão",
    //     "image": "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    //     "year": 2019,
    //     "link": "https://www.imdb.com/video/vi3509369881?playlistId=tt6105098&ref_=tt_pr_ov_vi"
    // },
    // {
    //     "name": "Arcanjo Renegado",
    //     "image": "https://m.media-amazon.com/images/M/MV5BMTgyYmNiYTItNDI4Yi00MjYyLWI3NDktOGJhMjM0YTA3ODcwXkEyXkFqcGdeQXVyMTk2NDE3Mzc@._V1_UX182_CR0,0,182,268_AL_.jpg",
    //     "year": 2020,
    //     "link": "https://globoplay.globo.com/v/8296822/"
    // },

];

var mostrarcatalogo = parseInt(prompt("Por favor digite uma das opções \n 1: Exibir todo o catálogo de Filmes \n 2: Exibir caracteristicas de um filme específico: "))

if (mostrarcatalogo == 1){
    for(var i = 0; i < listarFilmes.length; i++) {
   document.write("<img src=" + listarFilmes[i] + ">")
 } 
  }  if (mostrarcatalogo == 2){
    for(var i = 0; i < listarFilmes.length; i++) {
          alert(listarFilmes[i].id + `${listarFilmes[i].name}`)
        }
    }
//     var selecionarFilmes = parseInt(prompt("Selecione o filme para mais informações:" + `${listarFilmes[i].name}`))
    
//   if (selecionarFilmes == 1) {
//     lert("<h2> <a href=" + listarFilmes[i].name[0] +"</a></h2>")
//    document.write("<img src=" + listarFilmes.name[0] + ">")
   
//}
//   else if (selecionarFilmes == 2) {
//     alert("<h2> <a href=" + listarFilmes[i].name[1] +"</a></h2>")
//    document.write("<img src=" + listarFilmes.name[1] + ">")
// }
// else if (selecionarFilmes == 3) {
//     alert("<h2> <a href=" + listarFilmes[i].name[2] +"</a></h2>")
//    document.write("<img src=" + listarFilmes.name[2] + ">")
// }
// else if (selecionarFilmes == 4) {
//     alert("<h2> <a href=" + listarFilmes[i].name[3] +"</a></h2>")
//    document.write("<img src=" + listarFilmes.name[3] + ">")
//}

var divlistarFilmes = document.querySelector(".all-movies");
var div = document.createElement("div");


for (var i = 0; i < listarFilmes.length; i++) {
    divlistarFilmes.innerHTML +=
        `<a href="${listarFilmes[i].link}" target="_blank">
      <div class="movies-area">
      <img src="${listarFilmes[i].image}">
      <span>${listarFilmes[i].name}</span>
      <div class="year">
      <p>${listarFilmes[i].year}</p>
      </div>
      </div>
      </a>
      `
};



//---------------comentários--------------

//array - conjunto de varias variavéis
//push - utilizando para empurar uma quantidade de informações(Filmes)
//length - informa todos os elementos dentro de uma variavel(array).
//while - o programa fica rodando até achar o valor informado
//for - estrutura de repetição/percorre o array


//imdb - database de filmes (utilizado para incluir no projeto)














// const listarFilmes = []

// listarFilmes.push("https://m.media-amazon.com/images/M/MV5BNzQ3OTY4NjAtNzM5OS00N2ZhLWJlOWUtYzYwZjNmOWRiMzcyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg");
// listarFilmes.push("https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY268_CR7,0,182,268_AL_.jpg");
// listarFilmes.push("https://m.media-amazon.com/images/M/MV5BMTk1OTc2ZmUtODU0Yy00NGJiLWJmNmQtODI0MzBjODk3MjI4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL_.jpg");
// listarFilmes.push("https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg");
// listarFilmes.push("https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_UX182_CR0,0,182,268_AL_.jpg");
// listarFilmes.push("https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg");
// listarFilmes.push("https://m.media-amazon.com/images/M/MV5BMTc5ZmM0OTQtNDY4MS00ZjMyLTgwYzgtOGY0Y2VlMWFmNDU0XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX182_CR0,0,182,268_AL_.jpg");
// listarFilmes.push("https://m.media-amazon.com/images/M/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg");
// listarFilmes.push("https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_UX182_CR0,0,182,268_AL_.jpg");
// listarFilmes.push("https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX182_CR0,0,182,268_AL_.jpg");
// listarFilmes.push("https://m.media-amazon.com/images/M/MV5BOGFjYWNkMTMtMTg1ZC00Y2I4LTg0ZTYtN2ZlMzI4MGQwNzg4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg");
// listarFilmes.push("https://m.media-amazon.com/images/M/MV5BMjYxYmRlZWYtMzAwNC00MDA1LWJjNTItOTBjMzlhNGMzYzk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg");
// listarFilmes.push("https://m.media-amazon.com/images/M/MV5BMjE1MzYzNjk3OF5BMl5BanBnXkFtZTgwMzk0MzYwNzE@._V1_UX182_CR0,0,182,268_AL_.jpg");
// listarFilmes.push("https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX182_CR0,0,182,268_AL_.jpg");
// listarFilmes.push("https://m.media-amazon.com/images/M/MV5BMjIwMDIwNjAyOF5BMl5BanBnXkFtZTgwNDE1MDc2NTM@._V1_UX182_CR0,0,182,268_AL_.jpg");
// listarFilmes.push("https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_UX182_CR0,0,182,268_AL_.jpg")

// const tralerFilmes = []

// tralerFilmes.push("https://www.youtube.com/watch?v=fmvYUOuvhyw");
// tralerFilmes.push("https://www.youtube.com/watch?v=5b9Z8toVaAU");
// tralerFilmes.push("https://www.youtube.com/watch?v=LgzQuT4exuI");
// tralerFilmes.push("https://www.youtube.com/watch?v=2riAuCnL9pg");



// // nameFilmes.push(document.write("namenemafdfdsf"))

// for (let i = 0 ; i < listarFilmes.length; i++){
//     document.write("<img src=" + listarFilmes[i] + " class='imgfilm' id='imgfilm'><a href=" + tralerFilmes[i] + " title=" >)

// }