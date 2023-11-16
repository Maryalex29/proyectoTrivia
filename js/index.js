const tituloPregunta = document.getElementById("tituloPregunta");
const enunciado = document.getElementById("enunciado");
const respuesta1 = document.getElementById("respuesta1");
const respuesta2 = document.getElementById("respuesta2");
const respuesta3 = document.getElementById("respuesta3");

const radio = document.getElementsByName("respuesta");
const campoNombre = document.getElementById("nombreUsuario");

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

function redireccionarSiValor() {
    let campoValor = document.getElementById("nombre").value;

    if (campoValor.trim() !== "") {
        localStorage.setItem("nombreUsuario", campoValor);
        window.location.href = "/vista/categorias.html";
    } else {
        alert("El campo esta vació. Por favor ingrese un nombre.");
    }
}
function redireccionarCultura() {
    window.location.href = "/vista/preguntas.html";
}
function redireccionarPelicula() {
    window.location.href = "/vista/preguntasPelicula.html";
}
function redireccionarPrincipal() {
    window.location.href = "../index.html";
}

let preguntaActual = 0;

campoNombre.textContent = "Hola " + localStorage.getItem("nombreUsuario");

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

function siguientePregunta() {
    preguntaActual++;
    if (preguntaActual < preguntasCultura.length) {
        mostrarPregunta();
    } else {
        window.location.href = "/vista/resultados.html";
    }
}

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
