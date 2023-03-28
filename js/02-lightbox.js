import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery')
const galleryMarkup = createImgGallery(galleryItems);

function createImgGallery (gallery) {
    return gallery.map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src='${preview}'
                alt='${description}'
                />
            </a>
        </li>`
    }).join('');
}


galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)

const createdLightModal = new SimpleLightbox('.gallery a', {
    
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250
});
