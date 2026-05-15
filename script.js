function upDate(previewPic) {

    console.log("Mouse over or focus event triggered");

    let imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";

    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {

    console.log("Mouse leave or blur event triggered");

    let imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('')";

    imageDiv.innerHTML = "Hover over or focus on an image below to display details here.";
}

function addTabFocus() {

    console.log("Page loaded and tabindex added");

    let images = document.querySelectorAll(".gallery img");

    for (let i = 0; i < images.length; i++) {

        images[i].setAttribute("tabindex", "0");

        console.log("Tabindex added to image " + (i + 1));
    }
}
