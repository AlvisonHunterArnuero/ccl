/**
 * @constant {HTMLElement} galleryContainer - The container element for the gallery images.
 */
const galleryContainer = document.querySelector('.grid');

/**
 * Opens a lightbox modal displaying the selected image.
 *
 * @param {string} image - The source URL of the image to display in the lightbox.
 */
function openLightbox(image) {
  const lightbox = document.getElementById('lightboxModal');
  const lightboxContent = document.getElementById('lightboxContent');

  // Set the lightbox content to display the selected image
  lightboxContent.innerHTML = `<img onclick="linkImgTags()" src="${image}" class=".gallery max-h-full max-w-screen mx-12 cursor-pointer">`;
  lightbox.classList.remove('hidden');

  // Add click event to close button to hide the lightbox
  const closeModalBtn = document.getElementById('closeModal');
  closeModalBtn.addEventListener('click', () => {
    lightbox.classList.add('hidden');
  });
}

/**
 * Closes the lightbox modal.
 */
function linkImgTags() {
  const lgtbx = document.getElementById('lightboxModal');
  lgtbx.classList.add('hidden');
}

/**
 * Sets the current date in the format "weekday, day month year" in the element with ID "currentYear".
 * Runs when the window has fully loaded.
 */
window.onload = function () {
  const currentDate = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = currentDate.toLocaleDateString(
    'en-GB',
    options
  );
  document.getElementById('currentYear').textContent = formattedDate;
};
