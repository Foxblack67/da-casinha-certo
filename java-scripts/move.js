let imagem = document.querySelector("#imagem-carrossel");
let proximo = document.querySelector("#proximo");
let anterior = document.querySelector("#anterior")
let img = [
    "/img/pizza boa 3 .jpg",
    "/img/pizza boa 2.jpg",
    "/img/pizza boa.jpg",
    "/img/boa pizza 4.jpg"
];

let atual = 0;


function actualizar_imagem(){
    imagem.src = img[atual]
}

function avancar (){
    atual ++

    if(atual >= img.length){
        atual = 0
    }

    actualizar_imagem();
}

function retroceder (){
    atual --

    if(atual < 0){
      atual = img.length - 1
    }

    actualizar_imagem();
}

proximo.addEventListener("click",avancar);

anterior.addEventListener("click",retroceder);

actualizar_imagem();