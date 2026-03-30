import PhotoSwipeLightbox from "photoswipe/lightbox";

// Initializes Photoswipe for the retail supplies gallery.
const galleryId = "retail-gallery";

const el = document.getElementById(galleryId);
if (el) {
  const lightbox = new PhotoSwipeLightbox({
    gallery: `#${galleryId}`,
    children: "a",
    pswpModule: () => import("photoswipe"),
  });

  lightbox.init();
}

