const carouselForward = document.querySelectorAll('.carousel-forward');
const carouselReverse = document.querySelectorAll('.carousel-reverse');
let resizing = false;
const updateNavWidth = () => {
    const carouselInner = document.querySelector('.carousel-navigation-inner');
    let carouselInnerWidth = 0;
    for (let i = 0; i < carouselInner.children.length; i++) {
        carouselInnerWidth += carouselInner.children[i].offsetWidth;
        carouselInnerWidth += parseFloat(window.getComputedStyle(carouselInner.children[i]).marginLeft);
        carouselInnerWidth += parseFloat(window.getComputedStyle(carouselInner.children[i]).marginRight);
    }
    carouselInner.style.width = ${carouselInnerWidth}px;
    carouselInner.style.transform = "translateX(0)";
    carouselInner.parentElement.nextElementSibling.children[0].disabled = false;
    carouselInner.parentElement.previousElementSibling.children[0].disabled = true;
}
const updateNavControls = () => {
    const carouselEL = document.querySelector('.carousel-navigation');
    const carouselInner = document.querySelector('.carousel-navigation-inner');
    const isCarouselSameWidth = Math.ceil(carouselEL.getBoundingClientRect().width) >= carouselInner.style.width.slice(0, -2);
    if (isCarouselSameWidth) {
        carouselForward[0].style.display = 'none';
        carouselReverse[0].style.display = 'none';
    } else {
        carouselForward[0].style.display = 'initial';
        carouselReverse[0].style.display = 'initial';
    }
}
carouselReverse.forEach((button) => {
    button.addEventListener('click', e => {
        if (e.target.nodeName === "BUTTON") {
            const carouselEl = e.target.parentElement.nextElementSibling;
            const carouselElInner = carouselEl.firstElementChild;
            const translateX = parseInt(window.getComputedStyle(carouselElInner).transform.slice(7, -1).split(',')[4]);
            const distance = (e.target.getBoundingClientRect().right) - (carouselElInner.getBoundingClientRect().left);
            if (distance - (carouselEl.getBoundingClientRect().width) < 0) {
                carouselElInner.style.transform = "translateX(0)";
                e.target.disabled = true;
                e.target.parentElement.nextElementSibling.nextElementSibling.children[0].disabled = false;
            } else {
                carouselElInner.style.transform = translateX(${translateX + (carouselEl.getBoundingClientRect().width)}px);
                e.target.parentElement.nextElementSibling.nextElementSibling.children[0].disabled = false;
            }
        }
    });
});
carouselForward.forEach((button) => {
    button.addEventListener('click', e => {
        if (e.target.nodeName === "BUTTON") {
            const carouselEl = e.target.parentElement.previousElementSibling;
            const carouselElInner = carouselEl.firstElementChild;
            const translateX = parseInt(window.getComputedStyle(carouselElInner).transform.slice(7, -1).split(',')[4]);        
            const distance = (e.target.getBoundingClientRect().left) - (carouselElInner.getBoundingClientRect().right);
            if (distance + (carouselEl.getBoundingClientRect().width) > 0) {
                carouselElInner.style.transform = translateX(-${carouselElInner.getBoundingClientRect().width - carouselEl.getBoundingClientRect().width}px);
                e.target.disabled = true;
                e.target.parentElement.previousElementSibling.previousElementSibling.children[0].disabled = false;
            } else {
                carouselElInner.style.transform = translateX(${translateX - (carouselEl.getBoundingClientRect().width)}px);
                e.target.parentElement.previousElementSibling.previousElementSibling.children[0].disabled = false;
            }
        }
    });
});
window.addEventListener('resize', () => {
    resizing = true;
});
setInterval(() => {
    if (resizing) {
        resizing = false;
        updateNavWidth();
        updateNavControls();
    }
}, 250);
updateNavWidth();
updateNavControls();
