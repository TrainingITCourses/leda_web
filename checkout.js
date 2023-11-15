// destino
var ciudad = "";
var iata = "";
// Precios
var precioBillete = 0;
var precioNoche = 0;


function calcularPrecio() {
  // Obtener valores ingresados por el usuario
  var numPasajeros = parseInt(document.getElementById("pasajeros").value, 10);
  var numNoches = parseInt(document.getElementById("noches").value, 10);

  // Calcular el precio total
  var precioTotal = precioBillete * numPasajeros + precioNoche * numNoches;

  // Mostrar el resultado
  document.getElementById("precioTotal").textContent = "Precio Total: " + precioTotal + "€";
}

function mostrarInformacionDestino() {
  var urlParams = new URLSearchParams(window.location.search);
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
window.onload = mostrarInformacionDestino;
