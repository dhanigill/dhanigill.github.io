document.addEventListener("DOMContentLoaded", function () {

  const mainnav = document.querySelector(".nav");
  const hambutton = document.querySelector("#menu");

  // Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
  hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
  });

  //function for Nav bar active link color
  const tab = document.querySelectorAll(".header_link");
  const windowHref = document.location.pathname;
  
  tab.forEach((tablink) => {
    if (tablink.href.includes(windowHref)) {
      tablink.classList.add("active");
    } 
  });

  if(windowHref=='/'){
    tab[1].classList.remove("active");
    tab[2].classList.remove("active");
  }


  // function for header's shadow
  const Pname = document.getElementsByClassName("pname");
  const header = document.getElementsByClassName("header");
  const handler = new IntersectionObserver((entries) => {
    if (header) {
      if (!entries[0].isIntersecting) {
        header[0].classList.add("shadow");
      } else {
        header[0].classList.remove("shadow");
      }
    }
  });
  handler.observe(Pname[0]);

  // Fade in and out

  const elemName1 = document.querySelector(".mname");
  const elemBio1 = document.querySelector(".bio");
  const elemEducation1 = document.querySelector(".Education");
  const elemWork1 = document.querySelector(".Work");
  const elemFooter1 = document.querySelector(".Footer");

  const fader = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Fade in observed elements that are in view
          entry.target.classList.replace("fadeOut", "fadeIn");
        } else {
          // Fade out observed elements that are not in view
          entry.target.classList.replace("fadeIn", "fadeOut");
        }
      });
    },
    { root: null },
    { rootMargin: "-200px"}
  );

  fader.observe(elemName1);
  fader.observe(elemBio1);
  fader.observe(elemEducation1);
  fader.observe(elemWork1);
  fader.observe(elemFooter1);
});
