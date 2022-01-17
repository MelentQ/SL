import { Swiper, Navigation, Parallax, Pagination } from 'swiper';

Swiper.use([Navigation, Parallax, Pagination]);

export default function introSlider() {
    const elements = Array.from(document.querySelectorAll('.js-intro-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 'auto',
            watchOverflow: true,
            speed: 1000,
            threshold: 10,
            pagination: {
                el: element.querySelector('.slider-pagination'),
                type: 'bullets',
                clickable: true
            },
            parallax: true,
            navigation: {
                nextEl: element.querySelector('.intro__slider-arrow--next'),
                prevEl: element.querySelector('.intro__slider-arrow--prev')
            }
        });
    });
}
