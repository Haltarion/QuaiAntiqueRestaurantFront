const galerieImage = document.getElementById("allImages");

// Récupération des information des images
let titre = getImage("Titre");
let imgSource = getImage("../images/food.jpg");

let monImage = getImage(titre, imgSource);

galerieImage.innerHTML = monImage;

function getImage(titre, urlImage) {
  titre = sanitizeHtml(titre);
  urlImage = sanitizeHtml(urlImage);
  return `<div class="col p-3">
      <div class="image-card text-white">
        <img src="${urlImage}" class="rounded w-100" />
        <div class="action-image-buttons" data-show="admin">
          <button
            type="button"
            class="btn btn-outline-light"
            data-bs-toggle="modal"
            data-bs-target="#EditionPhotoModal"
          >
            <i class="bi bi-pencil"></i>
          </button>
          <button
            type="button"
            class="btn btn-outline-light"
            data-bs-toggle="modal"
            data-bs-target="#DeletePhotoModal"
          >
            <i class="bi bi-trash"></i>
          </button>
        </div>
        <p class="titre-image">${titre}</p>
      </div>
    </div>`;
}
