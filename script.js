// Menú Hamburgesa
let d = document;
let $hamburgerButton = d.querySelector('#hamburger-button');
let $menuLayer = d.querySelector('.menu-layer');

const hamburgerToggle = (even, classArr) => {
    if(classArr.includes('hamburger') ||
    classArr.includes('hamburger-box') ||
    classArr.includes('hamburger-inner')){
        $hamburgerButton.classList.toggle('is-active');
        if($menuLayer.style.animation === ''){
            $menuLayer.style.animation = 'swipe-lr .5s forwards';
        }else{
            $menuLayer.style.animation = '';
        };
    };
    if(even.target.matches('.link-container__text')){
        $menuLayer.style.animation = '';
        $hamburgerButton.classList.toggle('is-active');
    };
};

// Reloj Digital
let $digitalClock = d.querySelector('.section-body__clock');
let $alarm = d.querySelector('.section-body__alarm');

const clockAct = (digitalClock, elem) => {
    let clock = new Date().toTimeString().split(' ')[0];
    digitalClock.textContent = clock;
    elem.target.disabled = true;
};

const clockDis = (digitalClock, elem) => {
    digitalClock.textContent = '';
    elem.target.previousElementSibling.disabled = false;
};

const alarmAct = alarm => alarm.play();

const alarmDis = alarm => alarm.pause();

const sectionOne = (even) => {
    switch (even.target.id) {
        case 'btn-clock-act':
            setInterval(() => clockAct($digitalClock, even), 1000);
            break;
        case 'btn-clock-dis':
            clockDis($digitalClock, even);
            break;
        case 'btn-alarm-act':
            alarmAct($alarm);
            break;
        case 'btn-alarm-dis':
            alarmDis($alarm);
            break;
    
        default:
            break;
    }
};

// Eventos del Teclado
let $circle = d.querySelector('.block-container__circle');
let topProperty = 0;
let leftProperty = 0;

const shortcuts = even => {
    let containerLimit = d.querySelector('.block-container').getBoundingClientRect();
    let circleLimit = $circle.getBoundingClientRect();

    switch(true){
        case even.key === 'ArrowUp':
            // even.preventDefault();
            if($circle.style.top !== '') topProperty = $circle.style.top.split('%')[0];
            if(circleLimit.top > containerLimit.top) $circle.style.top = `${parseInt(topProperty) - 5}%`;
            break;
        case even.key === 'ArrowLeft':
            // even.preventDefault();
            if($circle.style.left !== '') leftProperty = $circle.style.left.split('%')[0];
            if(circleLimit.left > containerLimit.left) $circle.style.left = `${parseInt(leftProperty) - 5}%`;
            break;
        case even.key === 'ArrowDown':
            // even.preventDefault();
            if($circle.style.top !== '') topProperty = $circle.style.top.split('%')[0];
            if(circleLimit.bottom < containerLimit.bottom) $circle.style.top = `${parseInt(topProperty) + 5}%`;
            break;
        case even.key === 'ArrowRight':
            // even.preventDefault();
            if($circle.style.left !== '') leftProperty = $circle.style.left.split('%')[0];
            if(circleLimit.right < containerLimit.right) $circle.style.left = `${parseInt(leftProperty) + 5}%`;
            break;
        case even.ctrlKey && even.key === 'a':
            // even.preventDefault();
            window.alert('Esto es una alerta');
            break;
        case even.altKey && even.key === 'c':
            // even.preventDefault();
            window.confirm('Esto es una confirmación');
            break;
        case even.ctrlKey && even.altKey && even.key === 'p':
            // even.preventDefault();
            window.prompt('Esto es un rápido');
            break;
    };
};

// Countdown
let $countdown = d.querySelector('.countdown');
let finishDate = new Date('Jan 01, 2021 00:00:00');

const countdown = (finishDate) => {
    let restDateArr = msConvert(finishDate.getTime() - new Date().getTime());
    $countdown.textContent = `Restan 
        ${Math.floor(restDateArr.y)} Años,
        ${Math.floor(restDateArr.m)} Meses,
        ${Math.floor(restDateArr.w)} Semanas,
        ${Math.floor(restDateArr.d)} Días,
        ${Math.floor(restDateArr.hh)} Horas,
        ${Math.floor(restDateArr.mm)} Minutos,
        ${Math.floor(restDateArr.ss)} Segundos
    `;
};
setInterval(() => countdown(finishDate), 1000);

const msConvert = ms => {
    let convertionFactor = {
        y: (1000 * 60 * 60 * 24 * 7 * 30 * 12),
        m: (1000 * 60 * 60 * 24 * 7 * 30),
        w: (1000 * 60 * 60 * 24 * 7),
        d: (1000 * 60 * 60 * 24),
        hh: (1000 * 60 * 60),
        mm: (1000 * 60),
        ss: (1000),
    };
    let obj = {};

    obj.y = ms / convertionFactor.y;
    obj.m = (ms % convertionFactor.y) / (convertionFactor.m);
    obj.w = (ms % convertionFactor.m) / (convertionFactor.w);
    obj.d = (ms % convertionFactor.w) / (convertionFactor.d);
    obj.hh = (ms % convertionFactor.d) / (convertionFactor.hh);
    obj.mm = (ms % convertionFactor.hh) / (convertionFactor.mm);
    obj.ss = (ms % convertionFactor.mm) / (convertionFactor.ss);

    return obj;
};


// Scroll Up
let $circleUp = d.querySelector('.circle-up');

const scrolllUp = () => {
    window.pageYOffset >= 500 ? $circleUp.classList.remove('circle-up--hidden') : $circleUp.classList.add('circle-up--hidden');
};

const scrolllUpClick = e => {
    if (e.target.matches('.circle-up')){
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
            left: 0
        });
    };
};

// Dark Mode
let $darkMode = d.querySelector('.dark-mode');
let counter = 0;
let moon = '🌙';
let sun = '☀️';

$darkMode.textContent = moon;

const darkModeToggle = () => {
    let $elementWithDataDark = d.querySelectorAll('[data-dark]');
    $elementWithDataDark.forEach(elem => elem.classList.toggle('dark-mode--active'));
    $darkMode.textContent === moon ? $darkMode.textContent = sun : $darkMode.textContent = moon;
    localStorage.getItem('theme') === 'light' ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');
};

const darkMode = e => {
    if (e.target.matches('.dark-mode')){
        darkModeToggle();
    };
};

// Responsive with javascript
const desktopDisplay = link => {
    const $iframe = d.createElement('iframe');
    $iframe.setAttribute('class', 'section-body__desktop-element');
    $iframe.setAttribute('src', link);
    return $iframe;
};

const mobileDisplay = (n,link) => {
    const $a = d.createElement('a');
    $a.setAttribute('class', 'section-body__mobile-element');
    $a.setAttribute('href', link);
    $a.textContent = `Enlace ${n}`;
    return $a;
};

const responsive = () => {
    const $template = d.querySelector('#element-to-load');
    const $parentElement = $template.parentElement;
    const $fragment = d.createDocumentFragment();
    const breakpoint = window.matchMedia('(min-width: 768px)');
    const elementToLoad = [
        'https://www.youtube.com/embed/6IwUl-4pAzc',
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.256167273655!2d-70.70786538425537!3d-33.59865728073181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d94f6eef1f51%3A0x48e82f1d2eb65ea9!2sDuoc!5e0!3m2!1ses-419!2scl!4v1609816528155!5m2!1ses-419!2scl'
    ];
    let counter = 0;

    elementToLoad.forEach(link => {
        if(breakpoint.matches){
            $fragment.appendChild(desktopDisplay(link))
        }else{
            counter++;
            $fragment.appendChild(mobileDisplay(counter, link));
        }; 
    });

    $parentElement.appendChild($fragment)
};

responsive();

// Responsive Tester
const openWindow = (tryBtn, closeBtn, link, w, h) => {
    let windowConf = `menubar=no,navegationtoolbar=no,bookmarktoolbar=no,width=${w},height=${h},statusbar=no,centerscreen=yes`;
    closeBtn.disabled = false;
    closeBtn.classList.remove('no-hover');
    tryBtn.disabled = true;
    tryBtn.classList.add('no-hover');
    return window.open(link, 'Window name', windowConf);
};

const closeWindow = (tryBtn, closeBtn, window) => {
    closeBtn.disabled = true;
    closeBtn.classList.add('no-hover');
    tryBtn.disabled = false;
    tryBtn.classList.remove('no-hover');
    window.close();
};

let win;
const responsiveTester = e => {
    if(e.target.matches('.tester-container__button')){
        const $tryBtn = d.querySelectorAll('.tester-container__button')[0];
        const $closeBtn = d.querySelectorAll('.tester-container__button')[1];
        const url = d.querySelectorAll('.tester-container__input')[0].value;
        const width = d.querySelectorAll('.tester-container__input')[1].value;
        const height = d.querySelectorAll('.tester-container__input')[2].value;
    
        if(url.length > 10 && width.length > 1 && height.length > 1){
            if(e.target.textContent === 'Probar'){
                win = openWindow($tryBtn, $closeBtn, url, width, height);
            }else{
                closeWindow($tryBtn, $closeBtn, win);
            };
        };
    };
};

d.addEventListener('DOMContentLoaded', e => {
    if(localStorage.getItem('theme') === null) localStorage.setItem('theme', 'light');
    if(localStorage.getItem('theme') !== 'light') darkModeToggle();
});

d.addEventListener('scroll', e => {
    scrolllUp()
});

d.addEventListener('keydown', e => {
    shortcuts(e);
});

d.addEventListener('click', e => {  
    hamburgerToggle(e, e.target.classList.value.split(' '));
    sectionOne(e);
    scrolllUpClick(e);
    darkMode(e)
    responsiveTester(e)
});


