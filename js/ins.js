// 评论区切换
//123

class Tab {
  constructor(className) {
    this.init(className);
  }

  init(className) {
    this.obj = document.querySelector(className);

    // console.log(this.obj.querySelector(".de-a"));

    this.tabNavs = this.obj.querySelector(".de-a").querySelectorAll("li a");

    this.contents = this.obj.querySelector(".descon").children;

    console.log(this.tabNavs);
    console.log(this.contents);
    // querySelectorAll(".hehe");
    let that = this;
    Array.from(this.tabNavs).forEach((el, index) => {
      el.addEventListener("click", that.fn.bind(that, index));
    });
  }
  fn(index) {
    for (let i = 0; i < this.contents.length; i++) {
      this.contents[i].style.display = "none";
      console.log(this.contents[i]);
      console.log(i);
      this.tabNavs[i].classList.remove("cur");
    }
    console.log(index);
    this.contents[index].style.display = "block";
    this.tabNavs[index].classList.add("cur");
  }
}

let tab1 = new Tab(".des");
let tab2 = new Tab(".des2");

// 切换变色
// function show(num) {
//   for(i=0;i<=5;i++){
//       document.getElementById("lyyckick_"+i).style.backgroundColor="red"
//   }
//       document.getElementById("lyyckick_" + num).style.backgroundColor="red"
// }
// let tab2 = new Tab(".descon");

// 为下拉框内容
$(".menu-a").click(function() {
  $(".menu-d").slideToggle();
  return false;
});

// 三级联动
new PCAS("province", "city", "area", "广东省", "广州市", "黄埔区");

// 商品数量加减
let a = document.querySelector(".cup-b");
let b = document.querySelector(".cup-a");
let c = document.getElementById("cup");

b.onclick = function(ev) {
  c.value++;

  if (c.value >= 2) {
    a.classList.add("active");
  }

  if (parseInt(c.value) >= parseInt(c.dataset.max)) {
    c.value = c.dataset.max;
  }

  return false;
};

a.onclick = function(ev) {
  c.value--;
  if (c.value <= c.dataset.min) {
    c.value = c.dataset.min;
    a.classList.remove("active");
  }
  return false;
};

c.onchange = function() {
  if (this.value >= 200) {
    this.value = this.dataset.max;
  }
};

// 选中效果
let divs = document.querySelectorAll(".select");

//获取数据成功
// console.log(divs);

divs.forEach(el => {
  // 拿到所有的按钮

  let items1 = el.querySelectorAll(".dd>div");

  // console.log(items1);

  for (let i = 0; i < items1.length; i++) {
    items1[i].addEventListener("click", function() {
      for (let i = 0; i < items1.length; i++) {
        items1[i].classList.remove("a");
      }

      this.classList.add("a");
    });
  }
});

//改变图片路径

let btns = document.querySelectorAll("ul.yun li"),
  phoneDispaly = document.querySelector(".box_left>img");
console.log(btns);
// let i = 0,
//   flag = true;

let img = {
  in: [
    "./image/inside/in1.png",
    "./image/inside/in2.png",
    "./image/inside/in3.png",
    "./image/inside/in4.png",
    "./image/inside/in5.png",
    "./image/inside/in6.png",
    "./image/inside/in7.png"
  ],

  all: [
    "./image/inside/int1.png",
    "./image/inside/int2.png",
    "./image/inside/int3.png",
    "./image/inside/int6.png",
    "./image/inside/int4.png",
    "./image/inside/int5.png",
    "./image/inside/int7.png"
  ]
};
let big = document.querySelector(".box_right img");

for (let i = 0; i < btns.length; i++) {
  console.log(btns[i]);
  btns[i].addEventListener("click", function() {
    console.log(i);
    phoneDispaly.src = img.all[i];
    big.src = img.all[i];
  });
}

// 事件驱动

//放大镜

let box_left = document.querySelector(".box_left"); //获取 .box_left

let box = document.querySelector(".box");
let wrapper = document.querySelector(".wrapper");

let box_right = document.querySelector(".box_right"); //放大效果的图片

// 触摸图片坐标
box_left.onmousemove = function(ev) {
  let x = ev.pageX - box.offsetLeft; //相对盒子左的坐标

  let y = ev.pageY - box.offsetTop; //相对盒子上的坐标

  // console.log(ev.pageY, box.offsetTop); //有坐标

  let xx = x - wrapper.offsetWidth / 2;
  let yy = y - wrapper.offsetHeight / 2;

  // console.log(xx, yy); //获取坐标成功  0  0

  let maxX = box_left.offsetWidth - wrapper.offsetWidth;
  let maxY = box_left.offsetHeight - wrapper.offsetHeight;

  // if (xx < 0) xx = 0;

  xx < 0 && (xx = 0);
  yy < 0 && (yy = 0);

  xx > maxX && (xx = maxX);
  yy > maxY && (yy = maxY);

  wrapper.style.top = yy + "px";
  wrapper.style.left = xx + "px";

  // 我们希望阴影运动完成的时候， 图片也运动完成， 所以 阴影的运动和图片的运动 存在比例， 或者说剩余部分存在比例

  // 隐藏部分的比例

  let biliY = (biliX =
    (big.offsetWidth - box_right.offsetWidth) /
    (box.offsetWidth - wrapper.offsetWidth));

  big.style.left = -biliX * xx + "px";
  big.style.top = -biliY * yy + "px";
};

//触摸显示和移出隐藏
box_left.onmouseenter = function() {
  box_right.style.display = "block";
  wrapper.style.display = "block";
};

box_left.onmouseleave = function() {
  console.log(123);
  box_right.style.display = "none";
  wrapper.style.display = "none";
};

// 图片选中效果
let di = document.querySelectorAll(".bottom-nav");

//获取数据成功
console.log(di);

di.forEach(el => {
  // 拿到所有的按钮

  let items1 = el.querySelectorAll(".yun>li");

  console.log(items1);

  for (let i = 0; i < items1.length; i++) {
    items1[i].addEventListener("click", function() {
      for (let i = 0; i < items1.length; i++) {
        items1[i].classList.remove("ab");
      }

      this.classList.add("ab");
    });
  }
});
