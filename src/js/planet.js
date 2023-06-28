"use strict";

export class Planet {
  name;
  leftEl;
  leftBottomEl;
  rightEl;
  flag;

  constructor(name) {
    this.name = name;
    this.leftEl = document.querySelector(`.${name} .planet__desc-left`);
    this.leftBottomEl = document.querySelector(
      `.${name} .planet__desc-bottom-left`
    );
    this.rightEl = document.querySelector(`.${name} .planet__desc-right`);
    this.flag = true;
  }

  makeAnime() {
    this.leftEl.classList.remove("hidden");
    this.leftBottomEl.classList.remove("hidden");
    this.rightEl.classList.remove("hidden");

    const leftTitleEl = this.leftEl.querySelector(".one");
    const leftDescEl = this.leftEl.querySelector(".planet__desc-left-con");
    const leftBottomTitleEl = this.leftBottomEl.querySelector(".two");
    const leftBottomDescEl = this.leftBottomEl.querySelector(".container");
    const rightTitleEl = this.rightEl.querySelector(".three");
    const rightDescEl = this.rightEl.querySelector(".container");

    gsap.from(leftTitleEl, { y: -50, opacity: 0, delay: 0.3 });
    gsap.from(leftBottomTitleEl, { y: -50, opacity: 0, delay: 0.5 });
    gsap.from(rightTitleEl, { y: -50, opacity: 0, delay: 0.5 });

    gsap.from(leftDescEl, { x: -50, opacity: 0, delay: 0.5 });
    gsap.from(leftBottomDescEl, { x: -50, opacity: 0, delay: 0.8 });
    gsap.from(rightDescEl, { x: -50, opacity: 0, delay: 0.8 });
  }

  hideAnime() {
    this.leftEl.classList.add("hidden");
    this.leftBottomEl.classList.add("hidden");
    this.rightEl.classList.add("hidden");
  }

  setFlag() {
    this.flag = !this.flag;
  }
}
