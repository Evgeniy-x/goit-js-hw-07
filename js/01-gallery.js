import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery')
const galleryMarkup = createImgGallery(galleryItems);


galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)


function createImgGallery (gallery) {
    return gallery.map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
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


galleryContainer.addEventListener('click', (e)=> {
    
    if(e.target.nodeName !== 'IMG') {
        return
    }
    
    e.preventDefault();

    const createdModal = basicLightbox.create(
        `<img src='${e.target.dataset.source}'
        alt='${e.target.alt}
        style="width: 1400px"; height: 900px'>`,
        { onClose: () => {
            document.removeEventListener('keydown', closeModal);
        } }
    )

    createdModal.show()

    const closeModal = function(e) {
        if(e.code === 'Escape') {
            createdModal.close()
            
        }

    }
    document.addEventListener('keydown', closeModal)
    
})

