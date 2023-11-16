// variables preguntas cultura
const tituloPregunta = document.getElementById("tituloPregunta");
const enunciado = document.getElementById("enunciado");
const respuesta1 = document.getElementById("respuesta1");
const respuesta2 = document.getElementById("respuesta2");
const respuesta3 = document.getElementById("respuesta3");
const radio = document.getElementsByName("respuesta");

//nombre de usuario
const campoNombre = document.getElementById("nombreUsuario");

//preguntas cultura general
const preguntasCultura = [
    {
        numeroPregunta: 1,
        pregunta: "¿Qué colores tiene la bandera de Brasil?",
        respuesta: {
            rtaA: "A.verde, amarillo, azul, blanco",
            rtaB: "B.verde, amarillo, azul",
            rtaC: "C.verde, amarillo, azul, blanco, rojo ",
        },
        verdadera: 1,
    },
    {
        numeroPregunta: 2,
        pregunta: "¿Cuál es el río más grande del mundo?",
        respuesta: {
            rtaA: "A.Amazonas",
            rtaB: "B.Misisipi",
            rtaC: "C.Nilo ",
        },
        verdadera: 3,
    },
    {
        numeroPregunta: 3,
        pregunta: "¿Cuál es el animal terrestre que pone el huevo más grande?",
        respuesta: {
            rtaA: "A.Pavo real",
            rtaB: "B.Avestruz",
            rtaC: "C.Gallina ",
        },
        verdadera: 2,
    },
];

// validar que el usuario ingrese el nombre y si no que muestre un mensaje
// si ingreso bien el nombre redireciona a las categorias
function redireccionarSiValor() {
    let campoValor = document.getElementById("nombre").value;

    if (campoValor.trim() !== "") {
        localStorage.setItem("nombreUsuario", campoValor);
        window.location.href = "/vista/categorias.html";
    } else {
        alert("El campo esta vació. Por favor ingrese un nombre.");
    }
}

// redirecionar a preguntas cultura general
function redireccionarCultura() {
    window.location.href = "/vista/preguntas.html";
}
// redirecionar a preguntas peliculas
function redireccionarPelicula() {
    window.location.href = "/vista/preguntasPelicula.html";
}

// redirecionar a pagina principal
function redireccionarPrincipal() {
    window.location.href = "../index.html";
}

//declarar variable pregunta actual
let preguntaActual = 0;

campoNombre.textContent = "Hola " + localStorage.getItem("nombreUsuario");

// funcion para mostrar pregunta cultura
function mostrarPregunta() {
    tituloPregunta.textContent =
        "Pregunta " + preguntasCultura[preguntaActual].numeroPregunta;
    enunciado.textContent = preguntasCultura[preguntaActual].pregunta;
    respuesta1.textContent = preguntasCultura[preguntaActual].respuesta.rtaA;
    respuesta2.textContent = preguntasCultura[preguntaActual].respuesta.rtaB;
    respuesta3.textContent = preguntasCultura[preguntaActual].respuesta.rtaC;
    respuesta1.classList.remove("correcta");
    respuesta1.classList.remove("incorrecta");
    respuesta2.classList.remove("correcta");
    respuesta2.classList.remove("incorrecta");
    respuesta3.classList.remove("correcta");
    respuesta3.classList.remove("incorrecta");
}

mostrarPregunta();

// funcion para ir mostrando las demas preguntas de cultura
function siguientePregunta() {
    preguntaActual++;
    if (preguntaActual < preguntasCultura.length) {
        mostrarPregunta();
    } else {
        window.location.href = "/vista/resultados.html";
    }
}

// funcion para validar respuesta correcta
function validarPregunta() {
    let respuesta;
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            respuesta = i + 1;
        }
    }
    if (respuesta == preguntasCultura[preguntaActual].verdadera) {
        switch (respuesta) {
            case 1:
                respuesta1.classList.add("correcta");

                break;
            case 2:
                respuesta2.classList.add("correcta");
                break;
            case 3:
                respuesta3.classList.add("correcta");
            default:
                break;
        }
    } else {
        switch (respuesta) {
            case 1:
                respuesta1.classList.add("incorrecta");

                break;
            case 2:
                respuesta2.classList.add("incorrecta");
                break;
            case 3:
                respuesta3.classList.add("incorrecta");
            default:
                break;
        }
    }
    setTimeout(() => {
        radio[respuesta - 1].checked = false;

        siguientePregunta();
    }, 1000);
}
