import { Swiper, Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

export default function articleGallery() {
    const elements = Array.from(document.querySelectorAll('.js-article-gallery'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');
        new Swiper(container, {
            slidesPerView: 1,
            watchOverflow: true,
            speed: 700,
            spaceBetween: 0,
            threshold: 10,
            pagination: {
                el: window.matchMedia('(max-width: 640px)').matches ? element.querySelector('.slider-pagination') : element.querySelector('.article__gallery-pagination'),
                type: 'bullets',
                clickable: true
            },
            navigation: {
                nextEl: element.querySelector('.article__gallery-arrow--next'),
                prevEl: element.querySelector('.article__gallery-arrow--prev')
            },
        });
    });
}
