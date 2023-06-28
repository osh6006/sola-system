"use strict";

import { Planet } from "./planet";

{
  const sun = new Planet("sun");
  const mercury = new Planet("mercury");

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

    console.log(zMove);
    // 행성 애니메이션
  });

  // function
  function resizeHandler() {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  }

  function init() {}

  // init
  init();
}
