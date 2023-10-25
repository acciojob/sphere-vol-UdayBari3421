function volume_sphere() {
var radius = document.getElementById("radius").value;

if (isNaN(radius) || radius === "") {
	alert("Please enter a valid number for the radius.");
	return;
}

var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

document.getElementById("volume").value = volume.toFixed(4);
}

window.onload = function () {
document.getElementById("submit").onclick = volume_sphere;
};