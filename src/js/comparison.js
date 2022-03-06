export default function comparison() {
    function initializeComparisonSelects() {
        const comparisonSelects = Array.from(document.querySelectorAll('.js-comparison-select'));

        comparisonSelects.forEach(element => {
            const btn = element.querySelector('.js-comparison-select-btn');
            const btnValue = element.querySelector('.js-comparison-select-btn-text');

            const radio = Array.from(element.querySelectorAll('.js-comparison-radio'));

            const setSelectValue = () => {
                let checkedRadio = radio.find(item => {
                    const input = item.querySelector('input[type="radio"]');

                    return input.checked;
                });

                if (!checkedRadio) {
                    if (radio.length) {
                        checkedRadio = radio[0];
                        checkedRadio.querySelector('input[type="radio"]').checked = true;

                        console.log('Checked first radio');
                    } else {
                        return;
                    }
                }

                const radioValue = checkedRadio.querySelector('.js-comparison-radio-value').textContent;

                btnValue.textContent = radioValue;
            };

            setSelectValue();

            radio.forEach(item => {
                const input = item.querySelector('input[type="radio"]');

                input.addEventListener('change', () => {
                    setSelectValue();

                    element.classList.remove('mobile-select-open');
                });
            });

            btn.addEventListener('click', event => {
                event.preventDefault();
                comparisonSelects.forEach(otherElement => {
                    if (otherElement !== element) {
                        otherElement.classList.remove('mobile-select-open');
                    }
                });
                element.classList.toggle('mobile-select-open');
            });

            document.addEventListener('click', event => {
                if (!(event.target.matches('.js-comparison-select') || event.target.closest('.js-comparison-select'))) {
                    element.classList.remove('mobile-select-open');
                }
            });
        });
    }

    window.SL_API.initializeComparisonSelects = initializeComparisonSelects;

    initializeComparisonSelects();
}
