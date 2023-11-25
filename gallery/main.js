const galleryContainer = document.querySelector(".grid");

function openLightbox(image) {
  const lightbox = document.getElementById("lightboxModal");
  const lightboxContent = document.getElementById("lightboxContent");
  lightboxContent.innerHTML = `<img onclick="linkImgTags()" src="${image}" class=".gallery max-h-full max-w-screen mx-12 cursor-pointer">`;
  lightbox.classList.remove("hidden");

  const closeModalBtn = document.getElementById("closeModal");
  closeModalBtn.addEventListener("click", () => {
    lightbox.classList.add("hidden");
  });
}

function linkImgTags() {
  const lgtbx = document.getElementById("lightboxModal");
  lgtbx.classList.add("hidden");
}

window.onload = function () {
  const currentDate = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-GB", options);
  document.getElementById("currentYear").textContent = formattedDate;
};
