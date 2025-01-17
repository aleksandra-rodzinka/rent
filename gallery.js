const galleryContainer = document.querySelector(".gallery");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const header = document.getElementById("header");

let currentIndex = 0;

// Populate gallery
if (galleryContainer) {
  images.forEach((imageUrl, index) => {
    const imgElement = document.createElement("img");
    imgElement.src = imageUrl;
    imgElement.alt = `Project Image ${index + 1}`;
    imgElement.classList.add("img-fluid");
    imgElement.style.cursor = "pointer";

    imgElement.addEventListener("click", () => openModal(index));

    const colDiv = document.createElement("div");
    colDiv.className = "col-12 col-md-4";
    colDiv.appendChild(imgElement);
    galleryContainer.appendChild(colDiv);
  });
}

// Open modal
function openModal(index) {
  currentIndex = index;
  if (header) header.style.transform = "translateY(-100%)";
  modal.style.display = "flex";
  modalImage.src = images[currentIndex];
}

// Close modal
function closeModal() {
  if (header) header.style.transform = "translateY(0)";
  modal.style.display = "none";
}

// Navigate images
function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  modalImage.src = images[currentIndex];
}

// Attach event listeners
document.getElementById("closeModal").addEventListener("click", closeModal);
document
  .getElementById("prevImage")
  .addEventListener("click", () => changeImage(-1));
document
  .getElementById("nextImage")
  .addEventListener("click", () => changeImage(1));
