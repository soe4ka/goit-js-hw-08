// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const listOfImages = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    galleryItem =>
      `<div class="gallery__item">
      <a class="gallery__item" href="${galleryItem.original}">
        <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
      </a>
    </div>`
  )
  .join('');

listOfImages.insertAdjacentHTML('afterbegin', markup);

new SimpleLightbox('.gallery a', {captionType: 'attr', captionsData: 'alt', captionDelay: 250});
