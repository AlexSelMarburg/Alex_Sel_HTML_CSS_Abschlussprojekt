const map = L.map("map", {
  zoomControl: false,
}).setView([50.81862, 8.77415], 19);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

L.marker([50.81855, 8.77415])
  .addTo(map)
  .bindPopup(
    "Das <strong>Hamburgers & more </strong>- Team</br>erwartet dich hier!"
  )
  .openPopup();

L.control
  .zoom({
    position: "bottomright",
  })
  .addTo(map);
