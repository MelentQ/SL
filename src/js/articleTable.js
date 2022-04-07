import Hammer from 'hammerjs';
import { primaryInput } from 'detect-it';
import { wrap } from './utils';

export default function articleTable() {
   
    const scrollableTables = Array.from(document.querySelectorAll('.article__main-content table'));

    console.log('Elements', scrollableTables);

    scrollableTables.forEach(element => {
        const wrapper = document.createElement('div');
        wrapper.classList = 'article__table-wrapper';

        wrap(element, wrapper);

        if (primaryInput === 'touch') return;

        const hammertime = new Hammer(wrapper);

        let startX = 0;
        hammertime.on('panstart', function(event) {
            startX = wrapper.scrollLeft;
        });
        hammertime.on('panmove', function(event) {
            wrapper.scrollLeft = Math.floor(startX - event.deltaX);
        });
    });
}
