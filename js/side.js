class Side {
  constructor(doc) {
    this.n = 0;

    this.init(doc);
  }

  init(doc) {
    this.wrapper = document.querySelector(doc);

    this.a = this.wrapper.querySelector(".forbid"); //有数据
    this.b = this.wrapper.querySelector(".right-btn"); //有数据

    this.banner = this.wrapper.querySelector(".slideinner"); //有数据

    console.log(this.banner);

    this.a.addEventListener("click", this.aFn.bind(this));
    this.b.addEventListener("click", this.bFn.bind(this));
  }
  aFn() {
    //   console.log(123);

    this.n--;

    if (this.n <= 0) {
      this.n = 0;
      return;
    }

    this.banner.style.left = this.banner.offsetLeft + 210 + "px";
  }
  bFn() {
    //   console.log(456);

    this.n++; // 1 2 3

    // console.log(this.n);

    if (this.n >= 3) {
      this.n = 3;
      return;
    }

    // console.log(this.banner);

    this.banner.style.left = this.banner.offsetLeft - 210 + "px";
  }
}

let side1 = new Side(".side1");
let side2 = new Side(".side2");
let side3 = new Side(".side3");
