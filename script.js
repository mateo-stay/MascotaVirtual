let energia = 100;
let alegria = 100;
let temperatura = "Normal";

function actualizarPantalla() {
  document.getElementById("energia").textContent = energia;
  document.getElementById("alegria").textContent = alegria;
  document.getElementById("temperatura").textContent = temperatura;
}

function recargar() {
  energia = Math.min(energia + 10, 100);
  actualizarPantalla();
}

function alimentar() {
  alegria = Math.min(alegria + 10, 100);
  actualizarPantalla();
}

function jugar() {
  alegria = Math.min(alegria + 15, 100);
  energia = Math.max(energia - 10, 0);
  temperatura = energia < 30 ? "Alta" : "Normal";
  actualizarPantalla();
}

// Llamada inicial
actualizarPantalla();
