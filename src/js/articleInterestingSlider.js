import { Swiper, Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

export default function articleInterestingSlider() {
    const elements = Array.from(document.querySelectorAll('.js-article-interesting-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 'auto',
            watchOverflow: true,
            speed: 700,
            spaceBetween: 15,
            threshold: 10,
            pagination: {
                el: element.querySelector('.slider-pagination'),
                type: 'bullets',
                clickable: true
            },
            navigation: {
                nextEl: element.querySelector('.article__interesting-slider-arrow--next'),
                prevEl: element.querySelector('.article__interesting-slider-arrow--prev')
            },
            breakpoints: {
                641: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                }
            }
        })
       
    });
}
