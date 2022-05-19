import { Swiper, Navigation, Pagination } from 'swiper';
import { Fancybox } from '@fancyapps/ui';

Swiper.use([Navigation, Pagination]);

export default function realisedProjects() {
    function intializeProjectsSliders() {
        const elements = Array.from(document.querySelectorAll('.js-realised-projects'));

        elements.forEach(element => {
            if (window.matchMedia('(max-width: 640px)').matches) {
                const container = element.querySelector('.realised-projects__slider > .swiper-container');

                new Swiper(container, {
                    watchOverflow: true,
                    slidesPerView: 'auto',
                    speed: 700,
                    centeredSlides: true,
                    centeredSlidesBounds: true,
                    spaceBetween: 10,
                    pagination: {
                        el: element.querySelector('.slider-pagination'),
                        type: 'bullets',
                        clickable: true
                    }
                });
            } else {
                const cards = Array.from(element.querySelectorAll('.realised-projects__card'));

                cards.forEach(card => {
                    const container = card.querySelector('.swiper-container');

                    new Swiper(container, {
                        slidesPerView: 1,
                        watchOverflow: true,
                        speed: 500,
                        pagination: {
                            el: card.querySelector('.realised-projects__card-image-slider-pagination'),
                            type: 'fraction'
                        },
                        navigation: {
                            nextEl: card.querySelector('.realised-projects__card-image-slider-arrow--next'),
                            prevEl: card.querySelector('.realised-projects__card-image-slider-arrow--prev')
                        }
                    });
                });
            }
        });
    }

    window.SL_API.intializeProjectsSliders = intializeProjectsSliders;


    intializeProjectsSliders();

    /* FancyBox options */

    Fancybox.bind('[data-fancybox="gallery"]', {
        closeButton: false,
        dragToClose: false,
        preload: 1.5,
        Toolbar: {
            display: []
        },
        Image: {
            ratio: 1
        }
    })


}
