// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightBox from 'simplelightbox;
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryBox = document.querySelector(".gallery");
const galleryList = createGalleryLightBox(galleryItems);
galleryBox.insertAdjacentHTML("beforeend", galleryList);

function createGalleryLightBox(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}
galleryBox.addEventListener("click", onGalleryLightBoxClick);
function onGalleryLightBoxClick(e) {
  e.preventDefault();
  const imgSource = e.target.dataset.source;
  const instance = basicLightbox.create(`
    <img
    src="${imgSource}"
    >
`);

  instance.show();
}