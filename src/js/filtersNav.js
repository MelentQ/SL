import { Swiper } from 'swiper';

export default function filtersNav() {
    const elements = Array.from(document.querySelectorAll('.js-filters-nav'));

    elements.forEach(element => {
        if (!window.matchMedia("(max-width: 640px)").matches) return;
        
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 'auto',
            watchOverflow: true
        });
    });
}
