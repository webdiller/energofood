import PhotoSwipeLightbox from "photoswipe/lightbox";

// Initializes PhotoSwipe for Eto Syrnik image gallery.
const galleryId = "eto-syrnik-gallery";
const el = document.getElementById(galleryId);
if (el) {
  const lightbox = new PhotoSwipeLightbox({
    gallery: `#${galleryId}`,
    children: "a",
    pswpModule: () => import("photoswipe"),
  });

  lightbox.init();
}

