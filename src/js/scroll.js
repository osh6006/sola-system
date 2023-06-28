"use strict";

import { Planet } from "./planet";

{
  const sun = new Planet("sun");
  const mercury = new Planet("mercury");
  const venus = new Planet("venus");
  const earth = new Planet("earth");

  const stageEl = document.querySelector(".world .stage");
  const progressEl = document.querySelector(".progress-bar");

  // 스크롤할 때 제일 끝 값
  let maxScrollValue = document.body.offsetHeight - window.innerHeight;

  // 윈도우 사이즈가 변경될 시 창의 크기 적용
  window.addEventListener("resize", resizeHandler);

  window.addEventListener("scroll", () => {
    //  스크롤할 때 얼만큼 스크롤 했는지의 비율
    const zMove = (window.scrollY / maxScrollValue) * 980 - 490;
    stageEl.style.transform = `translateZ(${zMove}vw)`;

    // // 프로그래스바
    // const scrollPer = window.scrollY / maxScrollValue;
    // progressEl.style.width = `${scrollPer * 100}%`;

    // 행성 애니메이션

    const scrollPoint = (window.scrollY / maxScrollValue) * 100;
    console.log(scrollPoint);
    if (scrollPoint > 10 && sun.flag) {
      sun.makeAnime();
      sun.setFlag();
    }

    if (scrollPoint > 35 && mercury.flag) {
      mercury.makeAnime();
      mercury.setFlag();
    }

    if (scrollPoint > 70 && venus.flag) {
      venus.makeAnime();
      venus.setFlag();
    }

    if (scrollPoint > 90 && earth.flag) {
      earth.makeAnime();
      earth.setFlag();
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
