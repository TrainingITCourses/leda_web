var destinos = [
  { pais: "USA", ciudad: "New York", iata: "JFK", billete: 1000 , noche: 300},
  { pais: "Inglaterra", ciudad: "Londres", iata: "LON", billete: 300, noche: 120},
  { pais: "Portugal", ciudad: "Lisboa", iata: "LIS", billete: 1000 , noche: 60},
  { pais: "Portugal", ciudad: "Oporto", iata: "OPO", billete: 250 , noche: 50},
  { pais: "Argentina", ciudad: "Buenos Aires", iata: "EZE", billete: 1200 , noche: 40},
  { pais: "Venezuela", ciudad: "Caracas", iata: "CCS", billete: 900 , noche: 30},
];

// Rellena la lista de destinos
var listaDestinos = document.getElementById("listaDestinos");
destinos.forEach(function (destino) {
  var li = document.createElement("li");
  li.innerHTML = `
                ${destino.pais}:
                <span class="destino">${destino.ciudad}</span>
                <a href="./checkout.html?c=${destino.ciudad}&i=${destino.iata}&b=${destino.billete}&n=${destino.noche}" class="precio">${destino.billete}€ por billete y ${destino.noche}€ por noche</a>
            `;
  listaDestinos.appendChild(li);
});
