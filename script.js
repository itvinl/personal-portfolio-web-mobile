// Menu Sticky
const menu = document.querySelector(".Menu");
const closeMenu = document.querySelector(".Navigation");
const removeAct = document.querySelector(".Menu");

function menu_sticky() {
    const scroll = window.scrollY;
    if (scroll > 0) {
        menu.classList.add("sticky");
        closeMenu.classList.remove("active");
    } else {
        menu.classList.remove("sticky");
        removeAct.classList.remove("act");
    };
};

window.addEventListener('scroll', (function() {
    menu_sticky();
}));


// Menu Mobile
function menuMobile() {
    const mobile = document.querySelector(".Navigation");
    const menuAct = document.querySelector(".Menu");

    mobile.classList.toggle("active");
    menuAct.classList.toggle("act");
};


// Debounce of Lodash
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function() {
            timeout = null;
            if(!immediate) func.apply(context, args)
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};


// Animate On Scroll
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.scrollY + (window.innerHeight * 1);
    target.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();

if (target.length) {
    window.addEventListener('scroll', debounce(function() {
        animeScroll();
    }, 50));
}