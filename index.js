function calcularPrecioConIva(cantidad, precioUnitario) {
  let iva = 21;
  let base = cantidad * precioUnitario;
  let impuesto = base * iva / 100;
  let precio = base + impuesto;
  return precio;
}

console.log('Hola Mundo!');
let ahorros = 6000;

let nombre = 'Alberto';
console.log(`${nombre} tiene ahorrados ${ahorros} euros.`);

let precioBillete = 1000;
console.log("Precio por billete: " + precioBillete * (1.21) + " euros");

let billetes = 3;
console.log(`Billetes: ${billetes}`);

let precioBilletes = calcularPrecioConIva(billetes, precioBillete);
console.log("Precio billetes", precioBilletes);

let precioNoche = 300;
console.log("Precio noche", precioNoche * 1.21);
let noches = 6;
console.log(`Noches ${noches}`);
let precioNoches = calcularPrecioConIva(noches, precioNoche);
console.log("Precio noches", precioNoches);

let precioTotal = precioBilletes + precioNoches;
console.log(`Precio total ${precioTotal}`);

if (ahorros >= precioTotal) { 
  console.log("Compro los billetes");
  for (let i = 0; i < billetes; i++){
    console.log("Emitiendo billete " + (i + 1));
  }
  console.log("Compro las estancias");
  for (let i = 0; i < noches; i++){
    console.log("Emitiendo voucher " + (i + 1 ))
  }
} else {
  console.log("No tengo dinero suficiente");
}




// Seleccionar el elemento HTML
// let elementoFecha = document.querySelector('#fecha');
// if (elementoFecha) {
//   console.log(elementoFecha);

//   // Crear una nueva instancia del objeto Date
//   let fecha = new Date();

//   // Obtener el día, el mes y el año
//   let dia = fecha.getDate();
//   let mes = fecha.getMonth() + 1; // Los meses en JavaScript comienzan desde 0
//   let año = fecha.getFullYear();

//   // Formatear la fecha
//   let fechaFormateada = `${dia}/${mes}/${año}`;
//   console.log(fechaFormateada);

//   // Establecer el contenido del elemento HTML
//   elementoFecha.textContent = fechaFormateada;
// }