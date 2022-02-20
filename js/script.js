"use strict";

// Lazy loading images /////////////////////

const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));

// LAZY LOADING BACKFROUNDS  /////////////////

document.addEventListener("DOMContentLoaded", function () {
  let lazyBackgrounds = [].slice.call(
    document.querySelectorAll(".lazy-background")
  );

  if ("IntersectionObserver" in window) {
    let lazyBackgroundObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          lazyBackgroundObserver.unobserve(entry.target);
        }
      });
    });

    lazyBackgrounds.forEach(function (lazyBackground) {
      lazyBackgroundObserver.observe(lazyBackground);
    });
  }
});

///////// SLIDER ////////////////////////////////////////////////////////////////////

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
