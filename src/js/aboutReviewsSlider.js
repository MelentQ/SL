import { Swiper, Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

export default function aboutReviewsSlider() {
    const elements = Array.from(document.querySelectorAll('.js-about-reviews-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            watchOverflow: true,
            slidesPerView: 1,
            spaceBetween: 20,
            speed: 600,
            pagination: {
                el: element.querySelector('.slider-pagination'),
                type: 'bullets',
                clickable: true
            },
            navigation: {
                nextEl: element.querySelector('.about-reviews__slider-arrow--next'),
                prevEl: element.querySelector('.about-reviews__slider-arrow--prev')
            },
            breakpoints: {
                641: {
                    slidesPerView: 'auto',
                    spaceBetween: 0
                }
            }
        });
    });
}
