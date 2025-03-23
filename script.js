document.getElementById("showImageButton").addEventListener("click", function () {
    let body = document.body;

    // Check the current background image by checking the computed style
    let currentBackground = getComputedStyle(body).backgroundImage;

    // Toggle background image
    if (currentBackground.includes("Biophore.png")) {
        body.style.backgroundImage = "url('with.png')";
    } else {
        body.style.backgroundImage = "url('Biophore.png')";
    }
});
