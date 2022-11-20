



const expresiones = {
    mensaje: /^[a-zA-Z0-9\s\_\-]{4,60}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
let inputs = document.getElementsByClassName('formulario__input');



for (let i = 0; i < inputs.length; i++) {

    inputs[i].addEventListener('keyup', function () {
        if (expresiones.nombre.test(nombre.value)) {
            nombre.classList.add("ok");
            document.querySelector(`#error_n .formulario_error`).classList.remove('formulario_error-activo');
        } else {
            nombre.classList.add("error");
            nombre.classList.remove("ok");
            document.querySelector(`#error_n .formulario_error`).classList.add('formulario_error-activo');
        }
        if (expresiones.mensaje.test(mensaje.value)) {
            mensaje.classList.add("ok");
            document.querySelector(`#error_m .formulario_error`).classList.remove('formulario_error-activo');
        }
        else {
            mensaje.classList.add("error");
            mensaje.classList.remove("ok");
            document.querySelector(`#error_m .formulario_error`).classList.add('formulario_error-activo');
        }
        if (expresiones.correo.test(correo.value)) {
            correo.classList.add("ok");
            document.querySelector(`#error_c .formulario_error`).classList.remove('formulario_error-activo');
        }
        else {
            correo.classList.add("error");
            correo.classList.remove("ok");
            document.querySelector(`#error_c .formulario_error`).classList.add('formulario_error-activo');
        }
        if (expresiones.telefono.test(telefono.value)) {
            telefono.classList.add("ok");
            document.querySelector(`#error_t .formulario_error`).classList.remove('formulario_error-activo');
        }
        else {
            telefono.classList.add("error");
            telefono.classList.remove("ok");
            document.querySelector(`#error_t .formulario_error`).classList.add('formulario_error-activo');
        }

        if (this.value.length >= 1) {
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }

    });
}





let sinError = true;
function validar() {
    let nombre = document.getElementById("nombre");
    let mensaje = document.getElementById("mensaje");
    let lista_errores = document.getElementById("lista_errores");
    let lista_mensaje = document.getElementById("lista_mensaje");

    lista_errores.innerHTML = "";
    nombre.classList.remove("error");
    mensaje.classList.remove("error");
    if (!expresiones.nombre.test(nombre.value)) {

        console.log("nombre invalido");
        let texto = document.createElement("li");
        lista_errores.appendChild(texto);
        texto.innerHTML = "nombre invalido";
        nombre.classList.add("error");
        sinError = false;
    }


    if ( !expresiones.mensaje.test(mensaje.value)) {


        console.log("mensaje invalido");
        let texto = document.createElement("li");
        lista_errores.appendChild(texto);
        texto.innerHTML = "mensaje invalido";
        mensaje.classList.add("error");
        sinError = false;
    }

    if ( !expresiones.correo.test(correo.value)) {


        console.log("correo invalido");
        let texto = document.createElement("li");
        lista_errores.appendChild(texto);
        texto.innerHTML = "correo invalido";
        mensaje.classList.add("error");
        sinError = false;
    }
    if ( !expresiones.telefono.test(telefono.value)) {


        console.log("telefono invalido");
        let texto = document.createElement("li");
        lista_errores.appendChild(texto);
        texto.innerHTML = "telefono invalido";
        mensaje.classList.add("error");
        sinError = false;
    }
    if (sinError) {

        let item = document.createElement("li");
        lista_mensajes.appendChild(item);
         item.innerHTML = nombre.value + " <b>dice </b> " + mensaje.value;

        let item1 = document.createElement("li");
        lista_mensajes.appendChild(item1);
        item1.innerHTML = correo.value + " <b>correo y telefono </b> " + telefono.value;


        mensaje.value = "";
        mensaje.focus();
    }

   
}


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
