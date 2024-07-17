const imageGallery = document.getElementById('image-gallery');
const searchBox = document.getElementById('search-box');

const images = [
  { url: 'https://www.humanesociety.org/sites/default/files/2019/03/rabbit-475261_0.jpg', title: 'Image 1' },
  { url: 'https://w0.peakpx.com/wallpaper/641/1003/HD-wallpaper-white-bunny-rabbit-in-green-background-rabbit.jpg', title: 'Image 2' },
  { url: 'https://i.pinimg.com/originals/85/13/1b/85131bcbce28c3422645924d7d6fe879.jpg', title: 'Image 3' },
  { url: 'https://images6.alphacoders.com/121/1217936.jpg', title: 'Image 4' },
  { url: 'https://c4.wallpaperflare.com/wallpaper/587/406/367/photo-of-gray-and-black-duck-on-body-of-water-canada-goose-branta-canada-goose-branta-wallpaper-preview.jpg', title: 'Image 5' },
  { url: 'https://www.hdwallpapers.in/download/black_white_rabbit_is_sitting_on_green_grass_in_blur_green_white_bokeh_background_4k_hd_rabbit-1920x1080.jpg', title: 'Image 6' },
  { url: 'https://wallpaper.forfun.com/fetch/d6/d61f678274d336f7e8ff958095e8199b.jpeg', title: 'Image 7' },
  { url: 'https://c4.wallpaperflare.com/wallpaper/343/412/985/rodent-hamster-guinea-pig-mammal-wallpaper-preview.jpg', title: 'Image 8' },
  { url: 'https://c4.wallpaperflare.com/wallpaper/906/546/478/cute-256x1600-dekstop-wallpaper-preview.jpg', title: 'Image 9' },
  { url: 'https://wallpapers.com/images/featured/rabbit-my8mlc7baia7to15.jpg', title: 'Image 10' },

];

function displayImages(filteredImages) {
  imageGallery.innerHTML = '';
  filteredImages.forEach(image => {
    const imageElement = document.createElement('div');
    imageElement.classList.add('image-container');
    imageElement.innerHTML = `
      <img src="${image.url}" alt="${image.title}">
    `;
    imageGallery.appendChild(imageElement);
  });
}

displayImages(images); 

searchBox.addEventListener('keyup', (event) => {
  const searchTerm = event.target.value.toLowerCase();
  const filteredImages = images.filter(image => image.title.toLowerCase().includes(searchTerm));
  displayImages(filteredImages);
});
