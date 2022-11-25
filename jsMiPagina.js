



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
    sinError = true;
    if (!expresiones.nombre.test(nombre.value)||nombre.value.trim()==""||nombre.value.length>40) {
        
        console.log("nombre invalido");
        let texto = document.createElement("li");
        lista_errores.appendChild(texto);
        texto.innerHTML = "nombre invalido";
        nombre.classList.add("error");
        sinError = false;
    }


    if ( !expresiones.mensaje.test(mensaje.value)||mensaje.value.trim()==""||mensaje.value.length>60) {

        
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
        correo.classList.add("error");
        sinError = false;
    }
    if ( !expresiones.telefono.test(telefono.value)) {

      
        console.log("telefono invalido");
        let texto = document.createElement("li");
        lista_errores.appendChild(texto);
        texto.innerHTML = "telefono invalido";
        telefono.classList.add("error");
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
        mensaje.classList.remove("ok");
        mensaje.classList.add("error");
    }

   
}


