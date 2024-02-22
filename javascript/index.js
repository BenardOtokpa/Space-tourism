// Hambuger menu button toggler

const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

//onclicking the hamburger button
navToggle.addEventListener("click", () => {
  //if nav is closed, open it
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
  } else {
    nav.setAttribute("data-visible", false);
  }

  console.log(visibility);
});
