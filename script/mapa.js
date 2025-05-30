// Função para gerar coordenadas aleatórias em Recife (ajuste se quiser)
function getRandomLatLng() {
  const minLat = -8.15;
  const maxLat = -7.95;
  const minLon = -34.95;
  const maxLon = -34.85;

  const lat = Math.random() * (maxLat - minLat) + minLat;
  const lon = Math.random() * (maxLon - minLon) + minLon;
  return [lat, lon];
}

const initialPos = getRandomLatLng();

const map = L.map('map').setView(initialPos, 14);

L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.{ext}', {
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);


const btnLocate = document.getElementById('localizacao');

btnLocate.addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        marker = L.marker([lat, lon]).addTo(map).bindPopup('Você está aqui 📍').openPopup();

        map.setView([lat, lon], 16);
      },
      (err) => {
        alert('Não foi possível obter sua localização. Verifique as permissões.');
        console.error(err);
      }
    );
  } else {
    alert('Seu navegador não suporta geolocalização.');
  }
});
