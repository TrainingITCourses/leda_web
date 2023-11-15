console.log('Hola Mundo!');

// Variables
let nombre = 'Alberto';
console.log(nombre);

let precioBillete = 1000;
console.log("Precio por billete: " + precioBillete + " euros");
let billetes = 5;
console.log(`Billetes: ${billetes}`);
let precioTotal = precioBillete * billetes;

let ahorros = 5000;

if (ahorros >= precioTotal) { 
  console.log("Compro los billetes");
  for (let i = 0; i < billetes; i++){
    console.log("Emitiendo billete " + (i + 1));
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