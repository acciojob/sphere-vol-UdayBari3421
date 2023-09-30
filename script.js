function volume_sphere(event) {
    // Get the value of the radius input field
  var radius = document.getElementById("radius").value;

  // Check if the input is a valid number
  if (isNaN(radius)) {
    alert("Please enter a valid number for the radius.");
    return;
  }

  // Calculate the volume of the sphere
  var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display the volume in the volume input field
  document.getElementById("volume").value = volume.toFixed(2);
}

window.onload = function () {
    // Add an event listener to the form submit event
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
