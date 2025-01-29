const swiper = new Swiper(".slider-wrapper", {
  grabCursor: true,
  spaceBetween: 30,

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 2, // Tampilkan 1 gambar di layar kecil
    },
    1024: {
      slidesPerView: 3, // Tampilkan 3 gambar di layar besar
    },
  },
});
