const navBtn = document.querySelector(".nav-icon-btn");
const navIcon = document.querySelector(".nav-icon");
const nav = document.querySelector(".header__row");


navBtn.addEventListener("click", function() {
    navIcon.classList.toggle("nav-icon--active");
    nav.classList.toggle("header__row--mobile");
    document.body.classList.toggle("no-scroll");
});

//

const mapElement = document.querySelector(".section-map__map");
const mapText = document.querySelector(".section-map__text");

mapElement.addEventListener("click", function() {
    mapElement.classList.remove("_active");
    mapText.classList.remove("_active");
});

//

let position = 0;
let activeDotIndex = 0;

const track = document.querySelector(".team__slider-track");
const item = document.querySelector(".team__employee");
const dots = document.querySelectorAll(".team__dot");
let activeDot = document.querySelector(".team__dot._active");

let itemWidth = item.clientWidth;

window.addEventListener("resize", function() {
    track.classList.remove("_animation");

    itemWidth = item.clientWidth;
    countPosition();
    setPosition();
}); 

dots.forEach((dot, index) => {
    dot.addEventListener("click", function() {
        activeDot.classList.remove("_active");
        activeDot = dot;
        activeDot.classList.add("_active");

        activeDotIndex = index;

        track.classList.add("_animation");

        countPosition();
        setPosition();
    });
});

function countPosition() {
    position = -activeDotIndex * itemWidth;
}

function setPosition() {
    track.style.transform = `translateX(${position}px)`;
}