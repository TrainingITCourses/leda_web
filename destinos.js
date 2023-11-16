// lista de destinos con sus precios
const destinos = [
  { pais: "USA", ciudad: "New York", iata: "JFK", billete: 1000 , noche: 300 },
  { pais: "Inglaterra", ciudad: "Londres", iata: "LON", billete: 300, noche: 120 },
  { pais: "Portugal", ciudad: "Lisboa", iata: "LIS", billete: 1000 , noche: 60 },
  { pais: "Portugal", ciudad: "Oporto", iata: "OPO", billete: 250 , noche: 50 },
  { pais: "Argentina", ciudad: "Buenos Aires", iata: "EZE", billete: 1200 , noche: 40 },
  { pais: "Venezuela", ciudad: "Caracas", iata: "CCS", billete: 900 , noche: 30 },
];


// Obtener el elemento HTML donde se mostrarán los destinos
const listaDestinos = document.getElementById("listaDestinos");

// Rellena la lista de destinos
const cantidadDestinos = destinos.length;
for (let i = 0; i < cantidadDestinos; i++) {
  
  const destino = destinos[i];

  const li = document.createElement("li");

  const destinoUrl = `./checkout.html?c=${destino.ciudad}&i=${destino.iata}&b=${destino.billete}&n=${destino.noche}`;
  const ciudadSpan = `<a href="${destinoUrl}" class="destino">${destino.ciudad}</a>`;
  const destinoPrecio = `${destino.billete}€ por billete y ${destino.noche}€ por noche`;
  const destinoPrecioSpan = `<span" class="precio">${destinoPrecio}</span>`;

  li.innerHTML = `${destino.pais}:${ciudadSpan}${destinoPrecioSpan}`;
 
  listaDestinos.appendChild(li);
}
