 function volume_sphere() {
// Get the radius value from the input field
var radius = document.getElementById("radius").value;

// Check if the entered value is a valid number
if (isNaN(radius) || radius === "") {
	alert("Please enter a valid number for the radius.");
	return;
}

// Calculate the volume of the sphere
var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

// Display the volume in the result field
document.getElementById("volume").value = volume.toFixed(2);
}

window.onload = function () {
// Assign the volume_sphere function to the onclick event of the "Calculate" button
document.getElementById("submit").onclick = volume_sphere;
};