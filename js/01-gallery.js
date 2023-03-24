import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery')
const galleryMarkup = createImgGallery(galleryItems);


galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)


function createImgGallery (gallery) {
    return gallery.map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                class="gallery__image"
                src='${preview}'
                data-source='${original}'
                alt='${description}'
                />
            </a>
        </li>`
    }).join('');
}