import loadApi from "./loadApi";
import getCoords from "./getCoords";

export default function contactsMap() {
    const elements = Array.from(document.querySelectorAll('.js-contacts-map'));

    elements.forEach(element => {
        const loadTrigger = getCoords(element).top;
        const windowHeight = document.documentElement.clientHeight;
        const yandexMapsUrl = document.querySelector('#mapurl');

        if (!yandexMapsUrl) return;

        const check = () => {
            const scrollWindow = window.scrollY;
    
            if (scrollWindow > loadTrigger - windowHeight && scrollWindow < loadTrigger + windowHeight) {
                const url = yandexMapsUrl.dataset.url;
    
                loadApi('yandex', url,() => { ymaps.ready(initMap); });
    
                window.removeEventListener('scroll', check);
            }
        }

        window.addEventListener('scroll', check, false);

        function initMap() {
            const pinURL = element.getAttribute('data-pin');
            const location = element.getAttribute('data-location');

            if (!location) return;

            const pin = {
                iconLayout: 'default#image',
                iconImageHref: pinURL,
                iconImageSize: window.matchMedia('(max-width: 640px)').matches ? [40, 40] : [55, 55],
                iconImageOffset: window.matchMedia('(max-width: 640px)').matches ? [-20, -40] : [-27.5, -55]
            };

            const coords = location.split(',');

            const mapInstance = new ymaps.Map(element, {
                center: coords,
                zoom: window.matchMedia('(max-width: 640px)').matches ? 12 : 14,
                controls: []
            });

            mapInstance.behaviors.disable('scrollZoom');

            const zoomControl = new ymaps.control.ZoomControl({
                options: {
                    size: 'small',
                    position: {
                        right: 10,
                        bottom: 40
                    }
                }
            });
            mapInstance.controls.add(zoomControl);

            var objectManager = new ymaps.ObjectManager({
                geoObjectOpenBalloonOnClick: false,
                clusterize: false
            });
            mapInstance.geoObjects.add(objectManager);

            var objectToAdd = {
                id: coords.join('-'),
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: coords
                },
                options: {
                    ...pin,
                    balloonShadow: false,
                    hideIconOnBalloonOpen: false
                }
            };

            objectManager.add(objectToAdd);
        }
    });
}
