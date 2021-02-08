const numbers = document.querySelectorAll(".number");
const section4 = document.querySelector(".section-4");

const options = {
  rootMargin: "0px 0px -270px 0px",
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("show");
  });
}, options);

numbers.forEach((number) => {
  observer.observe(number);
});

const optionSection4 = {};
let initialY = 450;

const observerSection4 = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    initialY += window.scrollY;
    document.addEventListener("scroll", (e) => {
      $(".section-4 .background-img").css("left", window.scrollY - initialY);
    });
    // entry.target.classList.add("show");
  });
}, optionSection4);

observerSection4.observe(section4);
