// Seleccionar el elemento HTML
let elementoFecha = document.querySelector('#fecha');
if (elementoFecha) {
  console.log(elementoFecha);

  // Crear una nueva instancia del objeto Date
  let fecha = new Date();

  // Obtener el día, el mes y el año
  let dia = fecha.getDate();
  let mes = fecha.getMonth() + 1; // Los meses en JavaScript comienzan desde 0
  let año = fecha.getFullYear();

  // Formatear la fecha
  let fechaFormateada = `${dia}/${mes}/${año}`;
  console.log(fechaFormateada);

  // Establecer el contenido del elemento HTML
  elementoFecha.textContent = fechaFormateada;
}