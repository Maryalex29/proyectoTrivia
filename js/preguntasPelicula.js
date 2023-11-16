//variables preguntas peliculas
const tituloPregunta1 = document.getElementById("tituloPregunta1");
const enunciado1 = document.getElementById("enunciado1");
const rta1 = document.getElementById("rta1");
const rta2 = document.getElementById("rta2");
const rta3 = document.getElementById("rta3");
const radio = document.getElementsByName("respuesta");

const campoNombre = document.getElementById("nombreUsuario");

campoNombre.textContent = "Hola " + localStorage.getItem("nombreUsuario");
// preguntas Peliculas
const preguntasPelicula = [
    {
        numeroPregunta: 1,
        pregunta: "¿Quién dirigió la película 'El Padrino?",
        respuesta: {
            rtaA: "A.Steven Spielberg",
            rtaB: "B.Quentin Tarantino",
            rtaC: "C.Francis Ford Coppola ",
        },
        verdadera: 3,
    },
    {
        numeroPregunta: 2,
        pregunta: "¿En que año se estreno Titanic?",
        respuesta: {
            rtaA: "A.1995",
            rtaB: "B.1997",
            rtaC: "C.2000 ",
        },
        verdadera: 2,
    },
    {
        numeroPregunta: 3,
        pregunta: "¿Quien interpreto a Neo en Matrix?",
        respuesta: {
            rtaA: "A.Keanu Reeves",
            rtaB: "B.Brad Pitt",
            rtaC: "C.Tom Cruise",
        },
        verdadera: 1,
    },
];

let preguntaActual1 = 0;
// funcion para mostrar preguntas peliculas
function mostrarPreguntaPelicula() {
    tituloPregunta1.textContent =
        "Pregunta " + preguntasPelicula[preguntaActual1].numeroPregunta;
    enunciado1.textContent = preguntasPelicula[preguntaActual1].pregunta;
    rta1.textContent = preguntasPelicula[preguntaActual1].respuesta.rtaA;
    rta2.textContent = preguntasPelicula[preguntaActual1].respuesta.rtaB;
    rta3.textContent = preguntasPelicula[preguntaActual1].respuesta.rtaC;

    //limpiae los campos
    rta1.classList.remove("correcta");
    rta1.classList.remove("incorrecta");
    rta2.classList.remove("correcta");
    rta2.classList.remove("incorrecta");
    rta3.classList.remove("correcta");
    rta3.classList.remove("incorrecta");
}
mostrarPreguntaPelicula();

//funcion para ir mostrando las demas preguntas de pelicula
function siguientePreguntaPelicula() {
    preguntaActual1++;
    if (preguntaActual1 < preguntasPelicula.length) {
        mostrarPreguntaPelicula();
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
    if (respuesta == preguntasPelicula[preguntaActual1].verdadera) {
        switch (respuesta) {
            case 1:
                rta1.classList.add("correcta");

                break;
            case 2:
                rta2.classList.add("correcta");
                break;
            case 3:
                rta3.classList.add("correcta");
            default:
                break;
        }
    } else {
        switch (respuesta) {
            case 1:
                rta1.classList.add("incorrecta");

                break;
            case 2:
                rta2.classList.add("incorrecta");
                break;
            case 3:
                rta3.classList.add("incorrecta");
            default:
                break;
        }
    }
    setTimeout(() => {
        radio[respuesta - 1].checked = false;

        siguientePreguntaPelicula();
    }, 1000);
}
