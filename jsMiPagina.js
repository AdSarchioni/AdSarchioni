let inputs = document.getElementsByClassName('formulario__input');

//const formulario = document.getElementById('formulario');//accedemos al id del formulario
//const inputs = document.querySelectorAll('#formulario input');//trae un arreglo con todos los input del formulario

for (let i = 0; i< inputs.length; i++) {

   inputs[i].addEventListener('keyup',function(){
       
if(this.value.length>=1){
this.nextElementSibling.classList.add('fijar')
   }else{
    this.nextElementSibling.classList.remove('fijar');
    }

});
}

let sinError = true;
function validar(){
    let nombre = document.getElementById("nombre");
    let mensaje = document.getElementById("mensaje");
    let lista_errores = document.getElementById("lista_errores");
    let lista_mensaje = document.getElementById("lista_mensaje");
    
    lista_errores.innerHTML = "";
    nombre.classList.remove("error");
    mensaje.classList.remove("error");
    if(nombre.value.trim()==""||nombre.value.length>20){

        console.log("nombre invalido");
        let texto = document.createElement("li");
        lista_errores.appendChild(texto);
        texto.innerHTML = "nombre invalido";
        nombre.classList.add("error");
        sinError = false;
    }
    
    if(mensaje.value.trim()==""||mensaje.value.length>200){

        console.log("mensaje invalido");
        let texto = document.createElement("li");
        lista_errores.appendChild(texto);
        texto.innerHTML = "mensaje invalido";
        mensaje.classList.add("error");
        sinError = false;
    }
    if(sinError){

        let item = document.createElement("li");
        lista_mensajes.appendChild(item);
        
        item.innerHTML = nombre.value+" <b>dice </b> "+mensaje.value;
        mensaje.value = "";
        mensaje.focus();
}


// document.forms[0].reset();
//let f = document.getElementById("frm");
// f.reset();
}
//return false;
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
