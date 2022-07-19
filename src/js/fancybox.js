import { Fancybox } from '@fancyapps/ui';

export default function fancybox() {
    Fancybox.bind('[data-fancybox]', {
        placeFocusBack: false
    });

    Fancybox.bind('[data-fancybox^="project"]', {
        placeFocusBack: false,
        mainClass: 'fancy-project',
        center: true,
        Carousel: {
            slidesPerPage: 1
        }
    });
}
