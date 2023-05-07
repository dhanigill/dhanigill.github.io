document.addEventListener("DOMContentLoaded", function () {
  // Select all slides
  const slides = document.querySelectorAll(".sliderItem");

  slides.forEach((sliderItem, indx) => {
    sliderItem.style.transform = `translateX(${indx * 100}%)`;
  });
  // select next slide button
  const nextSlide = document.querySelector(".btnL");
  // current slide counter
  let curSlide = 0;
  // maximum number of slides
  let maxSlide = slides.length - 1;

  const slider = document.querySelector(".slider");
  //Auto play
  const inter = setInterval(nextS, 5000);
  slider.addEventListener("mouseenter", () => {
    clearInterval(inter);
    console.log("stopped");
  });
  slider.addEventListener("mouseleave", () => {
    setInterval(nextS, 5000);
    console.log("restart");
  });

  nextSlide.addEventListener("click", nextS);
  function nextS() {
    // check if current slide is the last and reset current slide
    if (curSlide === maxSlide) {
      slides[curSlide].classList.remove("vis");
      curSlide = 0;
    } else {
      curSlide++;
    }
    //   move slide by -100%
    slides.forEach((sliderItem, indx) => {
      sliderItem.style.transform = `translateX(${200 * (indx - curSlide)}%)`;
    });
    slides[curSlide].classList.add("vis");
    if (curSlide - 1 >= 0) slides[curSlide - 1].classList.remove("vis");
  }
  // select prev slide button
  const prevSlide = document.querySelector(".btnR");

  prevSlide.addEventListener("click", function () {
    // check if current slide is the first and reset current slide to last
    if (curSlide === 0) {
      slides[curSlide].classList.remove("vis");
      curSlide = maxSlide;
    } else {
      curSlide--;
    }
    //   move slide by 100%
    slides.forEach((sliderItem, indx) => {
      sliderItem.style.transform = `translateX(${200 * (indx - curSlide)}%)`;
    });
    slides[curSlide].classList.add("vis");
    if (curSlide + 1 <= maxSlide) slides[curSlide + 1].classList.remove("vis");
  });
});
