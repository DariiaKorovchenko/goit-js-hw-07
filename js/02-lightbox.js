import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const itemsMarkup = createGalleryItems(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", itemsMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function createGalleryItems(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href='${original}'>
         <img class="gallery__image" src='${preview}' alt='${description}' />
      </a>
   </li>`;
    })
    .join("");
}

function onGalleryContainerClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });
}
