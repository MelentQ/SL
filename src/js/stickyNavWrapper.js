import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function stickyNavWrapper() {
    const elements = Array.from(document.querySelectorAll('.js-sticky-nav-wrapper'));

    elements.forEach(element => {
        ScrollTrigger.create({
            trigger: element,
            start: () => `top top+=${document.querySelector('.page-header').offsetHeight}`,
            markers: false,
            end: () => 9999999,
            pin: true,
            pinSpacing: false,
            toggleClass: 'active'
        });
    });
}
