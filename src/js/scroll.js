"use strict";

import { Planet } from "./planet";

{
  const sun = new Planet("sun");
  const mercury = new Planet("mercury");
  const venus = new Planet("venus");
  const earth = new Planet("earth");
  const mars = new Planet("mars");
  const jupiter = new Planet("jupiter");
  const saturn = new Planet("saturn");
  const uranus = new Planet("uranus");
  const neptune = new Planet("neptune");
  const pluto = new Planet("pluto");

  const stageEl = document.querySelector(".world .stage");
  const progressEl = document.querySelector(".progress-bar");

  // 스크롤할 때 제일 끝 값
  let maxScrollValue = document.body.offsetHeight - window.innerHeight;

  // 윈도우 사이즈가 변경될 시 창의 크기 적용
  window.addEventListener("resize", resizeHandler);

  window.addEventListener("scroll", () => {
    //  스크롤할 때 얼만큼 스크롤 했는지의 비율
    const zMove = (window.scrollY / maxScrollValue) * 2000 - 490;
    stageEl.style.transform = `translateZ(${zMove}vw)`;

    // // 프로그래스바
    // const scrollPer = window.scrollY / maxScrollValue;
    // progressEl.style.width = `${scrollPer * 100}%`;

    // 행성 애니메이션

    const scrollPoint = (window.scrollY / maxScrollValue) * 100;
    console.log(scrollPoint);
    if (scrollPoint > 3 && sun.flag) {
      sun.makeAnime();
      sun.setFlag();
    }

    if (scrollPoint > 12 && mercury.flag) {
      mercury.makeAnime();
      mercury.setFlag();
    }

    if (scrollPoint > 22 && venus.flag) {
      venus.makeAnime();
      venus.setFlag();
    }

    if (scrollPoint > 32 && earth.flag) {
      earth.makeAnime();
      earth.setFlag();
    }

    if (scrollPoint > 42 && mars.flag) {
      mars.makeAnime();
      mars.setFlag();
    }
    if (scrollPoint > 52 && jupiter.flag) {
      jupiter.makeAnime();
      jupiter.setFlag();
    }
    if (scrollPoint > 62 && saturn.flag) {
      saturn.makeAnime();
      saturn.setFlag();
    }
    if (scrollPoint > 72 && uranus.flag) {
      uranus.makeAnime();
      uranus.setFlag();
    }
    if (scrollPoint > 82 && neptune.flag) {
      neptune.makeAnime();
      neptune.setFlag();
    }
    if (scrollPoint > 92 && pluto.flag) {
      pluto.makeAnime();
      pluto.setFlag();
    }
  });

  // function
  function resizeHandler() {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  }

  function init() {}

  // init
  init();
}
