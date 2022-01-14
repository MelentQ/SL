export default function contactsMap() {
    const elements = Array.from(document.querySelectorAll('.js-contacts-map'));

    elements.forEach(element => {
        ymaps.ready(initMap);

        const pinURL = element.getAttribute('data-pin');
        const location = element.getAttribute('data-location');

        if (!location) return;

        function initMap() {
            const pin = {
                iconLayout: 'default#image',
                iconImageHref: pinURL,
                iconImageSize: [55, 55],
                iconImageOffset: [-27.5, -55]
            };

            const coords = location.split(',');

            const mapInstance = new ymaps.Map(element, {
                center: coords,
                zoom: 14,
                controls: []
            });

            mapInstance.behaviors.disable('scrollZoom');

            const zoomControl = new ymaps.control.ZoomControl({
                options: {
                    size: 'small',
                    position: {
                        right: 20,
                        bottom: 60
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
