const swiper = new Swiper('.swiper-genres', {
    slidesPerView: 6,
    loop: true,
    slideClass: 'swiper-slide-genre',
    navigation: {
        nextEl: '.swiperGenre-button-next',
        prevEl: '.swiperGenre-button-prev',
    },
});