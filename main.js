const swiper = new Swiper('.homepage__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 800,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    // Disable preloading of all images
    preloadImages: false,
    // Enable lazy loading
    lazy: {
        loadPrevNext: true,
        elementClass: 'home__swiper-lazy',
        loadOnTransitionStart: true
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});