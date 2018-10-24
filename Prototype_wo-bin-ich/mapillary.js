var locationArray = ['rowZ0XyU4ss1sqkQCJktBQ', 'vby8GrfA2NrJ3bZls-YfXQ', '4Afcy7Fg0hHIplBEqNf3Bw', 'YCdw6yb4y-Ja55-gjwP-7A', 'EeoZWjtIK32GLQ6w6gyRdQ', 'u9WNJ8lFwCpBVNlikGcfeA'];
var min = 0;
var max = locationArray.length;

function getRandomIntInclusive() {
    min = Math.ceil(0);
    max = Math.floor(5);
    return Math.floor(Math.random() * (5 +1)); 
  }

var mly = new Mapillary.Viewer(
    'mly',
    'UlhwcmNzcEs2TFpQaEQ1TEFRaWtaZzo1MDk0NjU0OGY5YjNjYzA2',
    locationArray[getRandomIntInclusive()]
);

