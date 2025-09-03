// function localizacaoObtida(localizacao){
//     console.log(localizacao);
// }

// function localizacaoNaoObtida(erro){
//     console.error(erro);
// }


// navigator.geolocation.getCurrentPosition(localizacaoObtida,localizacaoNaoObtida)



const x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function success(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

function error() {
  alert("Posição não encontrada.");
}