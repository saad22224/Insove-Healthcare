// mobile nav
const mobilenav = document.querySelector(".mnav");
const closebtn = document.querySelector(".mnav__close-btn");
const closebtnicon = document.querySelector(".mnav__close-btn-icon");
const navopenedclass = "left-0";
const naveclosedvlass = "-left-[250px]";
const arrowleftclass = "ri-arrow-left-s-line";
const arrowrightclass = "ri-arrow-right-s-line";
closebtn.addEventListener("click", () => {
  if (mobilenav.classList.contains(naveclosedvlass)) {
    mobilenav.classList.toggle(navopenedclass);
    closebtnicon.classList.toggle(arrowleftclass);
    closebtnicon.classList.toggle(arrowrightclass);
  }
});
// swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
//  faq
let faqItems = document.querySelectorAll(".faq__item");
let open = "h-full";

faqItems.forEach(function (e) {        // foreach (callbackfunction (element اجباري , index اختياري , array اختياري) ,tihis argument)
  e.addEventListener("click", function () {
    let icon = e.querySelector(".faq__answer");
    let btn = e.querySelector(".faq__btn ");
    let iconnn = btn.querySelector("i");
    let iconinner = "ri-subtract-line";
    icon.classList.toggle(open);
    iconnn.classList.toggle(iconinner);
  });
});

const buttons = document.querySelectorAll(".show-more-btn");
buttons.forEach((e) =>  {
   e.addEventListener("click", (event) => {
    event.preventDefault(); // يمنع السلوك الافتراضي للرابط
    const hiddenContent = e.previousElementSibling;
    hiddenContent.classList.toggle("hidden");
    if (hiddenContent.classList.contains("hidden")) {
      e.textContent = "Read More";
    } else {
      e.textContent = "Show Less";
    }
  });
});
let btn = document.getElementById("btn");
btn.onclick = function (event) {
  event.preventDefault();
};

// scroll animation
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 3000,
  delay: 400,
  // reset:true,  // reset animation
});
// hero
sr.reveal(".hero__text", { origin: "top" });
sr.reveal(".hero__img");
// stats animation
sr.reveal(".stats__item", {
  delay: 400,
  distance: "100px",
  interval: 100,
  origin: "top",
});
// services animation
sr.reveal(".services");
sr.reveal(".services__top");
sr.reveal(".services__item", {
  delay: 400,
  distance: "100px",
  interval: 100,
  origin: "bottom",
});
// appointment
sr.reveal(".appointment-title");
sr.reveal(".appointment__form");
// testmonials
sr.reveal(".Testmonials");
sr.reveal(".Testmonials__container");

// team

sr.reveal(".team__title", {
  origin: "top",
});
sr.reveal(".team__slider");
// faq
sr.reveal(".faq__title");
sr.reveal(".faq__item", {
  delay: 400,
  distance: "100px",
  interval: 100,
  origin: "bottom",
});

// department
sr.reveal(".department__bg");
sr.reveal(".department__container");
// blog
sr.reveal(".blog__title");
sr.reveal(".blog__post", {
  delay: 400,
  distance: "100px",
  interval: 100,
  origin: "bottom",
});
//brands
sr.reveal(".brands__logo", {
  delay: 400,
  distance: "100px",
  interval: 100,
  origin: "bottom",
});
// newsletter

sr.reveal(".newsletter");
sr.reveal(".newsletter__container");
// footer
sr.reveal(".footer__item", {
  delay: 400,
  distance: "100px",
  interval: 100,
  origin: "bottom",
});
// scroll to top bottom
let kem = document.querySelector(".kem");
window.onscroll = function () {
  if (window.scrollY >= 1000) {
    kem.style.display = "block";
  } else {
    kem.style.display = "none";
  }
};
kem.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
