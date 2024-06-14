// const btns = document.querySelectorAll(`[data-modal]`); 
// const dialog = document.querySelector(`.modal`);
// const close = dialog.querySelector(`[data-close]`); 

// const slides = document.querySelectorAll('.offer__slide');
// const prev = document.querySelector('.offer__slider-prev');
// const next = document.querySelector('.offer__slider-next');
// const current = document.querySelector('#current');
// const total = document.querySelector('#total');


// const tabs = document.querySelectorAll('.tabcontent')
// const tabs_btn = document.querySelectorAll('.tabheader__item')

// function tabsShow(idx) {
//         tabs.forEach((tab) => tab.classList.add('hide' , 'fade'))
//         tabs[idx].classList.remove('hide')
// }

// tabsShow(0)

// tabs_btn.forEach((btn , idx) => {
//         btn.onclick = () => {
//                 tabsShow(idx)
//                 document.querySelector('.tabheader__item_active').classList.remove('tabheader__item_active')
//                 btn.classList.add('tabheader__item_active')
//         }
// })

    

// let slideIndex = 1;

// function slidesShow(n) {
//     if (n > slides.length) {
//         slideIndex = 1;
//     } 

//     if (n < 1) {
//         slideIndex = slides.length;
//     }

//     slides.forEach((slide) => {
//         slide.classList.add('hide');
//     });

//     slides[slideIndex - 1].classList.remove('hide');

//     if (slideIndex < 10) {
//         current.innerHTML = `0${slideIndex}`;
//     } else {
//         current.innerHTML = slideIndex;
//     }
// }

// slidesShow(slideIndex);

// next.onclick = () => {
//     slideIndex++;
//     slidesShow(slideIndex);
// };

// prev.onclick = () => {
//     slideIndex--;
//     slidesShow(slideIndex);
// };

// total.innerHTML = slides.length 
// current.innerHTML = slideIndex < 10 ? `0${slideIndex}` : slideIndex; 



// btns.forEach(btn => {
//     btn.onclick = () => {
//         dialog.classList.add(`show`);
//     }
// });

// close.onclick = () => {
//     dialog.classList.remove(`show`);
// }




// let deadline = "2024-06-16 00:00";
// let newyear = "2025-01-01 00:00";



// function getRemainingTime(endTime) {
//     const t = Date.parse(endTime) - Date.now(),
//         days = Math.floor((t / 1000) / 60 / 60 / 24),
//         hours = Math.floor((t / 1000) / 60 / 60 % 24),
//         minutes = Math.floor((t / 1000) / 60 % 60),
//         seconds = Math.floor((t / 1000) % 60);
//     return {
//        total:  t,
//         days,
//         hours,
//         minutes,
//         seconds
//     };
// }

// function setTimer(endTime, selector) {
//     const t = document.querySelector(selector);
//      days = t.querySelector('#days'),
//      hours = t.querySelector('#hours'),
//      minutes = t.querySelector('#minutes'),
//      seconds = t.querySelector('#seconds'),
//      interval = setInterval(NewTimer, 1000);


//     function NewTimer() {
//         const t = getRemainingTime(endTime);

//         days.innerHTML = t.days;
//         hours.innerHTML = t.hours;
//         minutes.innerHTML = t.minutes;
//         seconds.innerHTML = t.seconds;

//         if (t.total <= 0) {
//             clearInterval(interval);
//             days.innerHTML = 0;
//             hours.innerHTML = 0;
//             minutes.innerHTML = 0;
//             seconds.innerHTML = 0;
                      


//              poof()
            
//         return
//         }
//     }

//     NewTimer(); 
// }

// function poof() {
//     const confettiCount = 100, confetti = [], container = document.createElement('div');
//     Object.assign(container.style, { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'hidden' });
//     document.body.appendChild(container);

//     for (let i = 0; i < confettiCount; i++) {
//         const confetto = document.createElement('div');
//         Object.assign(confetto.style, {
//             position: 'absolute',
//             width: '10px',
//             height: '10px',
//             backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`
//         });
//         container.appendChild(confetto);
//         confetti.push(confetto);
//     }

//     let prev = undefined;
//     requestAnimationFrame(function loop(timestamp) {
//         const delta = prev ? timestamp - prev : 0;
//         prev = timestamp;
//         const height = window.innerHeight;

//         for (let i = confetti.length - 1; i >= 0; i--) {
//             const confetto = confetti[i];
//             confetto.style.top = `${parseFloat(confetto.style.top) + delta * 0.05}px`;
//             if (parseFloat(confetto.style.top) > height) {
//                 container.removeChild(confetto);
//                 confetti.splice(i, 1);
//             }
//         }

//         if (confetti.length)
//             requestAnimationFrame(loop);
//         else
//             document.body.removeChild(container);
//     });
// }

// setTimer(newyear, '.timer_one'); 
// setTimer(deadline, '.timer_two');



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




let deadline = "2024-06-16 00:00";
let newyear = "2025-01-01 00:00";





function getRemainingTime(endTime) {
    const t = Date.parse(endTime) - Date.now(),
        days = Math.floor((t / 1000) / 60 / 60 / 24),
        hours = Math.floor((t / 1000) / 60 / 60 % 24),
        minutes = Math.floor((t / 1000) / 60 % 60),
        seconds = Math.floor((t / 1000) % 60);
    return {
       total:  t,
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
                      


            
            poof()
            poof()
            poof()

        }
    }

    NewTimer(); 
}

function poof() {
    const confettiCount = 100, confetti = [], container = document.createElement('div');
    Object.assign(container.style, { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'hidden' });
    document.body.appendChild(container);

    for (let i = 0; i < confettiCount; i++) {
        const confetto = document.createElement('div');
        Object.assign(confetto.style, {
            position: 'absolute',
            width: '10px',
            height: '10px',
            backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
        });
        container.appendChild(confetto);
        confetti.push(confetto);
    }


    let prev = undefined;
    requestAnimationFrame(function loop(timestamp) {
        const delta = prev ? timestamp - prev : 0;
        prev = timestamp;
        const height = window.innerHeight;

        for (let i = confetti.length - 1; i >= 0; i--) {
            const confetto = confetti[i];
            confetto.style.top = `${parseFloat(confetto.style.top) + delta * 0.05}px`;
            if (parseFloat(confetto.style.top) > height) {
                container.removeChild(confetto);
                confetti.splice(i, 1);
            }
        }

        if (confetti.length)
            requestAnimationFrame(loop);
        else
            document.body.removeChild(container);
    });
}


setTimer(deadline, '.timer_two');
setTimer(newyear, '.timer_one'); 





const gender_btns = document.querySelectorAll('#gender .calculating__choose-item')
const gender_btns_big = document.querySelectorAll(".calculating__choose_big .calculating__choose-item")
const inputs = document.querySelectorAll(".calculating__choose_medium input")
const res_view = document.querySelector("#res_view")

const user_data = {
    gender: 'woman',
    act: 'low'
}

gender_btns.forEach(btn => {
    btn.onclick = () => {
        user_data.gender = btn.getAttribute('data-gender')
        gender_btns.forEach(el => el.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')
       
    }
})

inputs.forEach(inp => {
    inp.onkeyup = () => {
        user_data[inp.id] = inp.value
        console.log(user_data);
       
    }
});

gender_btns_big.forEach(btn_big => {
    btn_big.onclick = () => {
        user_data.act = +btn_big.getAttribute('data-act')
        const act = +btn_big.getAttribute('data-act')
        gender_btns_big.forEach(it => it.classList.remove('calculating__choose-item_active'));
        btn_big.classList.add('calculating__choose-item_active')
        console.log(user_data);


        let result = 0
        if (user_data.gender === 'woman') {
            result = 655.1 + (9.563 * user_data.weight) + (1.85 * user_data.height) - (4.676 * user_data.age)
        } else {
            result = 66.5 + (13.75 * user_data.weight) + (5.003 * user_data.height) - (6.775 * user_data.age)
        }
        res_view.innerHTML = Math.round(result * act)
    }
});


const order = document.querySelector('#order');
const two = document.querySelector('#two');
const scrollto = document.querySelector('.menu');
const scrollto_two = document.querySelector('.offer');


order.onclick = () => {
    scrollto.scrollIntoView({ block: "center", behavior: "smooth" });
}

two.onclick = () => {
    scrollto_two.scrollIntoView({ block: "center", behavior: "smooth" });

}


