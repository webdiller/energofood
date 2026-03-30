import PhotoSwipeLightbox from "photoswipe/lightbox";

// Initializes Photoswipe for the franchise gallery.
// This module is loaded via a client-side `<script type="module" src="...">`.
const galleryId = "franchise-gallery";

const el = document.getElementById(galleryId);
if (el) {
  const lightbox = new PhotoSwipeLightbox({
    gallery: `#${galleryId}`,
    children: "a",
    pswpModule: () => import("photoswipe"),
  });

  lightbox.init();
}

