const numbers = document.querySelectorAll(".number");
const section4 = document.querySelector(".section-4");
const rotaters = document.querySelectorAll(".rotating-img");

const options = {
  rootMargin: "0px 0px -270px 0px",
};

// observer for numbers in section 3 that appear when entering viewport
const observerNumbers = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("show");
  });
}, options);

numbers.forEach((number) => {
  observerNumbers.observe(number);
});

const optionSection4 = {};
let initialY = 450;

// observer for moving background image in section 4 that appear when entering viewport
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

// observer for rotating images
const observerRotaters = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    addRotateListener(entry);
  });
});

rotaters.forEach((rotater) => {
  observerRotaters.observe(rotater);
});

let called = [false, false, false, false];

function addRotateListener(entry) {
  const bodyPos = document.body.getBoundingClientRect().top;
  const index = parseInt(entry.target.name);
  const direction = index % 2 === 0 ? "left" : "right";
  let angle = 0;

  if (!called[index]) {
    window.addEventListener("scroll", function () {
      angle = bodyPos + window.pageYOffset;

      $(`.section-5 img[alt=${entry.target.alt}]`).css(
        "transform",
        `rotate(${direction === "left" ? angle / -20 : angle / 20}deg)`
      );
    });

    called[index] = true;
  }
}

// observer for rolling img - section 6
const rollingImgs = document.querySelectorAll(".roll-in");
console.log(rollingImgs);
const rollingImgsOptions = {};

const observerRollingImgs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const name = entry.target.attributes.name.value;
      const isOdd = name % 2 === 0 ? false : true;

      $(`.section-6 img[name='${name}']`).css("opacity", "1");
      entry.target.classList.add(isOdd ? "roll-in-left" : "roll-in-right");
    }
  });
}, rollingImgsOptions);

rollingImgs.forEach((img) => {
  observerRollingImgs.observe(img);
});
