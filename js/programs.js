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

  if (windowHref == "/") {
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
  if (Pname.length == 0) {
    console.log();
  } else {
    handler.observe(Pname[0]);
  }
  // Fade in and out

  const elemName1 = document.querySelector(".mname");
  const elemBio1 = document.querySelector(".bio");
  const elemEducation1 = document.querySelector(".Education");
  const elemWork1 = document.querySelector(".Work");
  const elemExtras1 = document.querySelector(".Extras");
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
    { rootMargin: "-200px" }
  );
  if (
    elemName1 == null ||
    elemBio1 == null ||
    elemEducation1 == null ||
    elemWork1 == null ||
    elemFooter1 == null ||
    elemExtras1 == null
  ) {
    console.log();
  } else {
    fader.observe(elemName1);
    fader.observe(elemBio1);
    fader.observe(elemEducation1);
    fader.observe(elemWork1);
    fader.observe(elemFooter1);
    fader.observe(elemExtras1);
  }
  //Function to display time

  function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    y = today.getFullYear();
    mm = today.getMonth() + 1;
    d = today.getDate();
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById("time").innerHTML = h + ":" + m + ":" + s;

    document.getElementById("date").innerHTML = d + "/" + mm + "/" + y;
    setTimeout(startTime, 1000);
  }

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
  }
  startTime();
});
