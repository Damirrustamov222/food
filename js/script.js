const btns = document.querySelectorAll(`[data-modal]`); 
const dialog = document.querySelector(`.modal`);
const close = dialog.querySelector(`[data-close]`); 

const slides = document.querySelectorAll('.offer__slide');
const prev = document.querySelector('.offer__slider-prev');
const next = document.querySelector('.offer__slider-next');
const current = document.querySelector('#current');
const total = document.querySelector('#total');


const tabcontent = document.querySelectorAll(".tabcontent")
const tabheader__item =  document.querySelectorAll(".tabheader__item")
    








let slideIndex = 1;

function slidesShow(n) {
    if (n > slides.length) {
        slideIndex = 1;
    } 

    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((slide) => {
        slide.classList.add('hide');
    });

    slides[slideIndex - 1].classList.remove('hide');

    if (slideIndex < 10) {
        current.innerHTML = `0${slideIndex}`;
    } else {
        current.innerHTML = slideIndex;
    }
}

slidesShow(slideIndex);

next.onclick = () => {
    slideIndex++;
    slidesShow(slideIndex);
};

prev.onclick = () => {
    slideIndex--;
    slidesShow(slideIndex);
};

total.innerHTML = slides.length 
current.innerHTML = slideIndex < 10 ? `0${slideIndex}` : slideIndex; 



btns.forEach(btn => {
    btn.onclick = () => {
        dialog.classList.add(`show`);
    }
});

close.onclick = () => {
    dialog.classList.remove(`show`);
}



