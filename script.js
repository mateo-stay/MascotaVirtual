// Valores iniciales
let energia = 100;
let alegria = 100;
let temperatura = "Normal"; // puede ser "Fría", "Normal", "Alta"

// Intervalo en milisegundos para la “vitalidad” automática
const INTERVALO_VIDA = 15000; // cada 15 segundos

// Obtengo los elementos del DOM
const spanEnergia = document.getElementById("energia");
const spanAlegria = document.getElementById("alegria");
const spanTemperatura = document.getElementById("temperatura");
const imgMascota = document.getElementById("img-mascota");
const botones = document.querySelectorAll(".acciones button");

// Función que actualiza todo en pantalla
function actualizarPantalla() {
  spanEnergia.textContent = energia;
  spanAlegria.textContent = alegria;
  spanTemperatura.textContent = temperatura;

  // Si energía llega a 0, aplicar estilo "apagado" y deshabilitar botones
  if (energia <= 0) {
    imgMascota.classList.add("apagado");
    botones.forEach(btn => btn.disabled = true);
    spanTemperatura.textContent = "Apagado";
  } else {
    imgMascota.classList.remove("apagado");
    botones.forEach(btn => btn.disabled = false);
  }
}

// Funciones de interacción manual (botones)
function recargar() {
  if (energia <= 0) return; // si está apagado, nada
  energia = Math.min(energia + 20, 100);
  temperatura = energia < 30 ? "Alta" : "Normal";
  actualizarPantalla();
}

function alimentar() {
  if (energia <= 0) return;
  alegria = Math.min(alegria + 20, 100);
  actualizarPantalla();
}

function jugar() {
  if (energia <= 0) return;
  energia = Math.max(energia - 15, 0);
  alegria = Math.max(alegria - 10, 0);
  temperatura = energia < 30 ? "Alta" : "Normal";
  actualizarPantalla();
}

// Función que hace el “decaimiento” automático cada INTERVALO_VIDA
function decaerEstado() {
  if (energia <= 0) return; // si ya está apagado, no seguimos
  energia = Math.max(energia - 5, 0);
  alegria = Math.max(alegria - 5, 0);
  
  // Ajustamos temperatura según la energía:
  if (energia <= 20) {
    temperatura = "Alta";  // se sobrecalienta por falta de batería
  } else if (energia <= 50) {
    temperatura = "Normal";
  } else {
    temperatura = "Fría"; // bien cargado, mantiene fresquito
  }

  actualizarPantalla();
}

// Iniciar el ciclo automático
setInterval(decaerEstado, INTERVALO_VIDA);

// Primera llamada al cargar la página
actualizarPantalla();

