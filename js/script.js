"use strict";

///////// SLIDER /////////////////////////////////////////////////////////

const slider = document.querySelector(".carousel--slider");
const leftArrow = document.querySelector(".arrow--left__control");
const rightArrow = document.querySelector(" .arrow--right__control");
const indicatorParents = document.querySelector(".controls ul");

let sectionIndex = 0;

// AUTO-PLAY ////////////////////////////

setInterval(() => {
  sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 0;
  setIndex();
  arrowIndex();
}, 9000);

// REFACTORS ////////////////////////////

const setIndex = () => {
  document.querySelector(".controls .selected").classList.remove("selected");
  slider.style.transform = `translate(${sectionIndex * -25}%)`;
};
const arrowIndex = () => {
  indicatorParents.children[sectionIndex].classList.add("selected");
};

// BULLET FUNTIONALITY //////////////////

document.querySelectorAll(".controls li").forEach((indicator, ind) => {
  indicator.addEventListener("click", function () {
    sectionIndex = ind;
    setIndex();
    arrowIndex();
  });
});

// LEFT ARROW FUNTIONALITY //////////////

leftArrow.addEventListener("click", () => {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 3;
  setIndex();
  indicatorParents.children[sectionIndex].classList.add("selected");
});

// RIGHT ARROW FUNTIONALITY /////////////

rightArrow.addEventListener("click", () => {
  sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 0;
  setIndex();
  arrowIndex();
});
