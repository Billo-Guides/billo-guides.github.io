$(document).ready(() => {
    // Get all clickable images
    const clickableImages = document.querySelectorAll(".clickable-image");

    // Get the modal elements
    const popup = document.getElementById("image-popup");
    const popupImage = document.getElementById("popup-image");
    const closePopupElement = document.querySelector(".popup-close");

    // Add click event listeners to each image
    clickableImages.forEach((image) => {
        image.addEventListener("click", (event) => {
            const imageSrc = image.getAttribute("data-image"); // Get the image source
            popupImage.src = imageSrc; // Set the popup image source
            popup.style.display = "flex"; // Show the popup modal
        });
    });

    // Add event listener to close button
    if (closePopupElement) {
        closePopupElement.addEventListener("click", () => {
            closePopup();
        });
    }

    // Close the popup when clicking outside the image
    if (popup) {
        popup.addEventListener("click", (event) => {
            if (event.target === popup) {
                closePopup();
            }
        });
    }

    // Close popup when pressing the ESC key
    $(document).keydown(e => {
        if (e.keyCode === 27) { // ESC key
            closePopup();
        }
    });

    function closePopup() {
        if (popup) {
            popup.style.display = "none"; // Hide the popup
            popupImage.src = ""; // Clear the image source
        }
    }
});
