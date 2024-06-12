const btns = document.querySelectorAll(`[data-modal]`); 
const dialog = document.querySelector(`.modal`);
const close = dialog.querySelector(`[data-close]`); 

const slides = document.querySelectorAll('.offer__slide');
const prev = document.querySelector('.offer__slider-prev');
const next = document.querySelector('.offer__slider-next');
const current = document.querySelector('#current');
const total = document.querySelector('#total');


const tabs = document.querySelectorAll('.tabcontent')
const tabs_btn = document.querySelectorAll('.tabheader__item')

function tabsShow(idx) {
        tabs.forEach((tab) => tab.classList.add('hide' , 'fade'))
        tabs[idx].classList.remove('hide')
}

tabsShow(0)

tabs_btn.forEach((btn , idx) => {
        btn.onclick = () => {
                tabsShow(idx)
                document.querySelector('.tabheader__item_active').classList.remove('tabheader__item_active')
                btn.classList.add('tabheader__item_active')
        }
})

    

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




let deadline = "2024-06-12 16:32";
let newyear = "2025-01-01 00:00";

function getRemainingTime(endTime) {
    const t = Date.parse(endTime) - Date.now(),
        days = Math.floor((t / 1000) / 60 / 60 / 24),
        hours = Math.floor((t / 1000) / 60 / 60 % 24),
        minutes = Math.floor((t / 1000) / 60 % 60),
        seconds = Math.floor((t / 1000) % 60);
    return {
        total: t,
        days,
        hours,
        minutes,
        seconds
    };
}

function setTimer(endTime, selector) {
    const t = document.querySelector(selector);
     days = t.querySelector('#days'),
     hours = t.querySelector('#hours'),
     minutes = t.querySelector('#minutes'),
     seconds = t.querySelector('#seconds'),
     interval = setInterval(NewTimer, 1000);


    function NewTimer() {
        const t = getRemainingTime(endTime);

        days.innerHTML = t.days;
        hours.innerHTML = t.hours;
        minutes.innerHTML = t.minutes;
        seconds.innerHTML = t.seconds;

        if (t.total <= 0) {
            clearInterval(interval);
            days.innerHTML = 0;
            hours.innerHTML = 0;
            minutes.innerHTML = 0;
            seconds.innerHTML = 0;
        }
    }

    NewTimer(); 
}

setTimer(deadline, '.timer_two');
setTimer(newyear, '.timer_one');

