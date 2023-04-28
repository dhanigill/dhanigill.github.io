document.addEventListener("DOMContentLoaded", function () {
  
  function fadeIn(elem) {
    if (!elem) return;
    let distInView = elem.getBoundingClientRect().top - window.innerHeight + 100;
    if (distInView < 0) {
      elem.classList.add("inView");
    } else {
      elem.classList.remove("inView");
    }
  }

  function fadeOut(elem) {
    if (!elem) return;
    let distInView =
      elem.getBoundingClientRect().bottom - window.innerHeight + 350;
    if (distInView < 0) {
      elem.classList.remove("inView");
      elem.classList.add("outView");
    } else {
      elem.classList.remove("outView");
    }
  }

  //calling function for different divs
  let elemName = document.querySelector(".mname");
  window.addEventListener("scroll", () =>fadeIn(elemName));
  window.addEventListener("scroll", () =>fadeOut(elemName));

  let elemBio = document.querySelector(".bio");
  window.addEventListener("scroll", () =>fadeIn(elemBio));
  window.addEventListener("scroll", () =>fadeOut(elemBio));
  
  let elemEducation=document.querySelector(".Education");
  window.addEventListener("scroll",() => fadeIn(elemEducation));
  window.addEventListener("scroll",() => fadeOut(elemEducation));
  
  let elemWork=document.querySelector(".Work");
  window.addEventListener("scroll",() => fadeIn(elemWork));
  window.addEventListener("scroll",() => fadeOut(elemWork));


  //function for Nav bar active link color

  const tab=document.querySelectorAll(".header_link");
  const windowHref=document.location.pathname;
  tab.forEach(tablink =>{
    if(tablink.href.includes(windowHref)){
      tablink.classList.add('active');
    }
  })
  
});
