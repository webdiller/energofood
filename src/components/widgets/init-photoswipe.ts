import PhotoSwipeLightbox from "photoswipe/lightbox";

export function initPhotoSwipeGallery(galleryId: string): void {
  const el = document.getElementById(galleryId);
  if (!el) return;

  const lightbox = new PhotoSwipeLightbox({
    gallery: `#${galleryId}`,
    children: "a",
    pswpModule: () => import("photoswipe"),
  });

  lightbox.init();
}
