var canvas = document.getElementById('canvas');
var rect = canvas.getContext('2d');
var line = canvas.getContext('2d');
var circle = canvas.getContext('2d');


//Rechteck
rect.fillStyle = 'lightgray';
rect.fillRect(0, 0, 500, 800);
//Linie
line.moveTo(0,0);
line.lineTo(500, 800);
line.stroke();
//Kreis
circle.beginPath();
circle.arc(250,400,250,0,2*Math.PI);
circle.stroke();
circle.fillStyle = "gray";
circle.fill();


function shrinkCircle() {
    circle.fillStyle = "red";
    circle.fill();


}
