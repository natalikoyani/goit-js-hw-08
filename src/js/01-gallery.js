import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line

import { galleryItems } from './gallery-items';

// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems
    .map(galleryItem => `<li class="gallery__item">
   <a class="gallery__link" href=${galleryItem.original}>
      <img class="gallery__image" src=${galleryItem.preview} alt=${galleryItem.description} />
   </a>
</li>`)
    .join('');

gallery.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', { captionsData: `alt`, captionDelay: 250, });
