function volume_sphere(event) {
    event.preventDefault(); // Prevent the form from submitting and page refreshing
    
    // Get the value of the radius input field
    var radius = parseFloat(document.getElementById("radius").value);

    // Check if the input is a valid number
    if (!isNaN(radius)) {
        // Calculate the volume of the sphere
        var volume = (4/3) * Math.PI * Math.pow(radius, 3);

        // Update the volume input field with the calculated value
        document.getElementById("volume").value = volume.toFixed(2); // Rounded to 2 decimal places
    } else {
        // If the input is not a valid number, display an error message
        document.getElementById("volume").value = "Invalid Input";
    }
}

window.onload = function () {
    // Add an event listener to the form submit event
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
