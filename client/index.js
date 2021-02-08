let pagePostion = 0;

function scroll(e) {
  if (pagePostion === 0 && e.deltaY > 0) {
    pagePostion += e.deltaY;
  }
}

// const section2 = document.getElementById("section-2");
// section2.addEventListener("wheel", scroll);
