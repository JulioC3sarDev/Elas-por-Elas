const tel = document.querySelector(".tel")
const telefone = document.querySelector(".telefone");
const conteudo = document.querySelector(".conteudo")

function exibir(){
    conteudo.classList.toggle("ativar")
    telefone.classList.toggle("ativar")
}


tel.addEventListener("click",exibir);


let map;
let marker;

const fallbackPos = [-8.05, -34.88]; 
map = L.map('map').setView(fallbackPos, 14);

L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.{ext}', {
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;

      map.setView([lat, lon], 16);

      marker = L.marker([lat, lon]).addTo(map);
    },
    (err) => {
      console.warn('Erro ao obter localização inicial:', err.message);
     
    }
  );
} else {
  alert('Seu navegador não suporta geolocalização.');
}
