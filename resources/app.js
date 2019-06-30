const numberOfImages = 30;
const imagewidth = 500;
const imageheight = 500;
const collectionId = 1160922;
const imagesAvailable = 141;
const gallery = document.querySelector('.gallery-container')

function renderImages(randomNumber) {
    fetch(`https://source.unsplash.com/collection/${collectionId}/${imagewidth}x${imageheight}/?sig=${randomNumber}`)
        .then((response) => {
            let galleryImage = document.createElement('div');
            galleryImage.classList.add('gallery-image');
            galleryImage.innerHTML = `<img class="gallery-image" src="${response.url}" alt="random images"></img>`
            gallery.appendChild(galleryImage)
        })
        .catch((error) => {
            console.log(error.response)
        })
}
for (let i = 0; i < numberOfImages; i++) {
    let randomImageIndex = Math.floor(Math.random() * imagesAvailable);
    renderImages(randomImageIndex)
}