///////////////////////////////////////////////////
const imagenes = document.querySelector(".imagenes");
const Todasimagenes = document.querySelectorAll(".imagen");
const btAv = document.querySelector(".avanzar");
const btRetroc = document.querySelector(".retroceder");
btAv.addEventListener("click",sigu);
btRetroc.addEventListener("click",previa);
let indice = 0;
let intervalo =setInterval(inicioIntervalo,2000);

function inicioIntervalo(){
    indice++;
    moverCarrusel();
}
function reste(){
    clearInterval(intervalo);
    intervalo=setInterval(inicioIntervalo,5000);
}
function moverCarrusel(){
    if(indice >Todasimagenes.length-1){
        indice=0;
    }else if(indice<0){
        indice = Todasimagenes.length-1;
    }
    imagenes.style.transform = `translatex(-${indice*300}px)`;
}
function previa(){
    indice --;
    reste();
    moverCarrusel();
}
function sigu(){
    indice++;
    reste();
    moverCarrusel();
}
    //////////////////////////////////////
    let i = 0;
let fotos = [
"Bosqueceramica/img16.jpeg",
"Bosqueceramica/img17.jpeg",
"Bosqueceramica/img18.jpeg",
];

function cambiaImg(){
    let img = document.getElementById("img-foto");
    img.src = fotos[i];           
}

function avanzar(){
    if(i < fotos.length - 1){
     i ++;
    } else {
        i= 0;
    }
    cambiaImg();
}

function retroceder(){
    if(i > 0){
     i --;
    } else {
        i = fotos.length - 1;
    }
    cambiaImg();
}
