// destino
let ciudad = "";
let iata = "";
// Precios
let precioBillete = 0;
let precioNoche = 0;


function calcularPrecio() {
  // Obtener valores ingresados por el usuario
  const numPasajeros = parseInt(document.getElementById("pasajeros").value, 10);
  const numNoches = parseInt(document.getElementById("noches").value, 10);

  // Calcular el precio total
  const billetes = precioBillete * numPasajeros;
  const noches = precioNoche * numNoches;
  const precioTotal = billetes + noches;

  // Mostrar el resultado
  document.getElementById("precioTotal").textContent = "Precio Total: " + precioTotal + "€";
}

function mostrarDestino() {
  const urlParams = new URLSearchParams(window.location.search);
  // Obtener valores de la URL
  ciudad = urlParams.get("c");
  iata = urlParams.get("i");
  precioBillete = urlParams.get("b");
  precioNoche = urlParams.get("n");

  // Rellena la información en elementos HTML
  document.getElementById("destino").textContent =  ciudad + " (" + iata + ")";
  document.getElementById("precioBillete").textContent = precioBillete + "€";
  document.getElementById("precioNoche").textContent = precioNoche + "€";
}

// Llama a la función al cargar la página
window.onload = mostrarDestino;
