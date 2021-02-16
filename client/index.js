let cardSelected;
let cardsLength;
let opened = false;
let clicked = false;
let zIndex = 10;

$(".section-7 .card").click((e) => {
  if (opened) {
    return;
  } else {
    opened = true;
  }

  const body = document.body.getBoundingClientRect();
  const section7 = document.querySelector(".section-7").getBoundingClientRect();
  const offset = section7.top - body.top;
  const scrollY = window.pageYOffset;
  const cards = document.querySelectorAll(".card");
  cardsLength = cards.length;

  // setting screen background color
  $(".background-section-7").css({
    top: `${scrollY}px`,
    visibility: "visible",
  });

  // prevent scrolling
  $("body").css("overflow", "hidden");

  // making exit, left and right button visible
  $("#section-7-exit-btn").css({
    top: `calc(${scrollY - offset}px + 50px)`,
    right: "100px",
    visibility: "visible",
  });

  $("#section-7-left-btn").css({
    top: `calc(${scrollY - offset}px + 200px)`,
    right: "100px",
    visibility: "visible",
  });

  $("#section-7-right-btn").css({
    top: `calc(${scrollY - offset}px + 350px)`,
    right: "100px",
    visibility: "visible",
  });

  cards.forEach((card) => {
    $(`.section-7 #${card.id}`).css({
      top: `calc(${scrollY - offset}px + (100vh - 400px)/2)`,
      left: "calc((1160px - 640px)/2)",
      right: "0",
    });

    if (
      card.id === e.target.id ||
      card.id === e.target.parentNode.id ||
      card.id === e.target.parentNode.parentNode.id
    ) {
      cardSelected = card.id.substring(5);
      $(`.section-7 #${card.id}`).css("z-index", "1");
      zIndex++;
      setTimeout(() => {
        gsap.to(`#card-${cardSelected}`, {
          duration: 0.5,
          x: "350px",
          y: "-400px",
          rotate: "20deg",
        });
        gsap.to(`#card-${cardSelected}`, {
          duration: 0.5,
          zIndex: `${zIndex}`,
          x: "0px",
          y: "0px",
          rotate: "0deg",
          delay: 0.5,
        });
        cardAnimation();
      }, 500);
    }
  });
});

// section-7 exit button

$("#section-7-exit-btn").click(() => {
  $(".section-7 .card").removeAttr("style");
  gsap.killTweensOf(".section-7 .title, .section-7 .para-1,.section-7 .para-2");
  $(".section-7 .para-1, .section-7 .para-2 ,.section-7 .title").removeAttr(
    "style"
  );
  $("#section-7-exit-btn").removeAttr("style");
  $("#section-7-left-btn").removeAttr("style");
  $("#section-7-right-btn").removeAttr("style");
  $("body").removeAttr("style");
  $(".background-section-7").removeAttr("style");
  opened = false;
});

// section 7 left and right button
$(".section-7 .btn").click((e) => {
  if (clicked) return;
  clicked = true;

  const angles = [-2, 4, -4, 2, 8, -8, 6, -6];
  const oldCard = cardSelected;
  zIndex++;

  if (
    e.target.id === "section-7-left-btn" ||
    e.target.parentNode.id === "section-7-left-btn"
  ) {
    cardSelected = (parseInt(cardSelected) + 1) % cardsLength;
  } else if (
    e.target.id === "section-7-right-btn" ||
    e.target.parentNode.id === "section-7-right-btn"
  ) {
    if (parseInt(cardSelected) === 0) {
      cardSelected = cardsLength - 1;
    } else {
      cardSelected = parseInt(cardSelected) - 1;
    }
  } else {
    return;
  }

  gsap.to(`#card-${cardSelected}`, {
    duration: 0.5,
    x: "350px",
    y: "-400px",
    rotate: "20deg",
    zIndex: `${zIndex}`,
  });
  gsap.to(`#card-${cardSelected}`, {
    duration: 0.5,
    x: "0px",
    y: "0px",
    rotate: "0deg",
    delay: 0.5,
  });
  gsap.to(`#card-${oldCard}`, {
    rotate: `${angles[oldCard]}`,
  });
  setTimeout(() => {
    clicked = false;
  }, 1000);
});

// animation on card viewed
function cardAnimation() {
  let cardTitle = $(`#card-${cardSelected} .title`);
  let para1 = $(`#card-${cardSelected} .para-1`);
  let para2 = $(`#card-${cardSelected} .para-2`);

  let timeline = gsap.timeline({ defaults: { duration: 1, delay: 1 } });

  timeline
    .fromTo(cardTitle, { y: "0px" }, { y: "-175px", ease: "bounce" })
    .fromTo(
      para1,
      { color: "transparent", textShadow: "0 0 10px rgb(0, 0, 0)" },
      { color: "black", textShadow: "none" },
      0.5
    )
    .fromTo(
      para2,
      { color: "transparent", textShadow: "0 0 10px rgb(0, 0, 0)" },
      { color: "black", textShadow: "none" },
      0.8
    );
}
