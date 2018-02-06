// Funcion a la que se llama en el src del script
function initMap() {
  var laboratoriaLima = {lat:-12.1191427, lng:-77.0349046};
  var map = new google.maps.Map(document.getElementById("map"), {
    // Acercamiento con el que se verá el mapa
    zoom: 18,
    // Ubicación en la que se centrará el mapa
    // Center indica el centro del mapa, recibe latitud y longitud
    center: laboratoriaLima
  });
}
// MARCADOR
var markadorLaboratoria = new google.maps.Marker ({
  // Indica el lugar donde se pondrá el marcador, recibe la latitud y longitud
  position: laboratoriaLima,
  // Indica el mapa en el que aparecerá el marcador
  map:map
})

function buscar(){
  if(navigator.geolocation) {
    // La propiedad de sólo lectura Navigator.geolocation devuelve un objeto Geolocation que proporciona acceso web a la ubicación del dispositivo
    // Para obtener la ubicación actual del usuario, puede llamar al método getCurrentPosition()
    // *Esta función acepta tres parámetros: El éxito de la función, un error de la función y de opciones de posición (en ese orden)
    navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
  }
}
