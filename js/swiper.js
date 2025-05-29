// Initialize Swiper
var swiper = new Swiper(".slider-swp ", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullests: true,
        clickable: true
    },
    autoplay: {
        delay: 2500,
    },
    loop: true
});

// swiper slide product
var swiper = new Swiper(".slide_product", {
    slidesPerView: 5,
    spaCeBetween: 20,
    autoplay: {
        delay: 2500,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"

    },
    loop: true,

    breakpoints: {
        1200: {
            slidesPerView: 5,
            spaCeBetween: 20
        },

        1000: {
            slidesPerView: 4,
            spaCeBetween: 20
        },

        700: {
            slidesPerView: 3,
            spaCeBetween: 15
        },

        500: {
            slidesPerView: 2,
            spaCeBetween: 15
        },
        0: {
            slidesPerView: 1,
            spaCeBetween: 10
        },
    }
});
