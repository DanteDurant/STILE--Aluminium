"use strict";

///////// SLIDER /////////////////////////////////////////////////////////

const slider = document.querySelector(".carousel--slider");
const leftArrow = document.querySelector(".arrow--left");
const rightArrow = document.querySelector(".arrow--right");
const indicatorParents = document.querySelector(".controls ul");

let sectionIndex = 0;

// REFACTORS ////////////////////////////

function setIndex() {
  document.querySelector(".controls .selected").classList.remove("selected");
  slider.style.transform = `translate(${sectionIndex * -25}%)`;
}
function arrowIndex() {
  indicatorParents.children[sectionIndex].classList.add("selected");
}

// BULLET FUNTIONALITY //////////////////

document.querySelectorAll(".controls li").forEach(function (indicator, ind) {
  indicator.addEventListener("click", function () {
    sectionIndex = ind;
    setIndex();
    arrowIndex();
  });
});

// LEFT ARROW FUNTIONALITY //////////////

leftArrow.addEventListener("click", function () {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 3;
  setIndex();
  indicatorParents.children[sectionIndex].classList.add("selected");
});

// RIGHT ARROW FUNTIONALITY /////////////

rightArrow.addEventListener("click", function () {
  sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 0;
  setIndex();
  arrowIndex();
});
