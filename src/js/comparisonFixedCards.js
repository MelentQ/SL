import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function comparisonFixedCards() {
    const mainInfo = document.querySelector('.comparison-page__main-info');

    if (!mainInfo) return;

    ScrollTrigger.matchMedia({
        '(min-width: 641px)': () => {
            ScrollTrigger.create({
                trigger: mainInfo,
                start: 'center top',
                end: 9999999,
                onToggle: self => {
                    if (self.isActive) {
                        document.body.classList.add('comparison-cards-fixed');
                    } else {
                        document.body.classList.remove('comparison-cards-fixed');
                    }
                }
            });
        },
        '(max-width: 640px)': () => {
            ScrollTrigger.create({
                trigger: '.comparison-page__fixed-cards-inner',
                start: () => `top top+=${document.querySelector('.page-header').offsetHeight}`,
                end: 9999999,
                pin: true,
                pinSpacing: false
            });
        }
    });
}
