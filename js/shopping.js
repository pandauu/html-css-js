function $(exp) {
  //获取元素
  var el;
  if (/^#\w+$/.test(exp)) {
    el = document.querySelector(exp);
  } else {
    el = document.querySelectorAll(exp);
  }
  return el;
}
var arr = []; /*表单的数据*/
arr[arr.length] = {
  src: "../image/shopping/lun.png",
  txt: "联名心创纽百伦艾尚新款女鞋NB574潮百伦男纽拜伦z字n仔牛伯伦巴伦",
  price: "￥193.00"
};
arr[arr.length] = {
  src: "../image/shopping/lun.png",
  txt: "联名心创纽百伦艾尚新款女鞋NB574潮百伦男纽拜伦z字n仔牛伯伦巴伦",
  price: "￥193.00"
};
arr[arr.length] = {
  src: "../image/shopping/lun.png",
  txt: "联名心创纽百伦艾尚新款女鞋NB574潮百伦男纽拜伦z字n仔牛伯伦巴伦",
  price: "￥193.00"
};
arr[arr.length] = {
  src: "../image/shopping/lun.png",
  txt: "联名心创纽百伦艾尚新款女鞋NB574潮百伦男纽拜伦z字n仔牛伯伦巴伦",
  price: "￥193.00"
};
var temp = $("#temp").innerHTML;
var tbody = $("#tbody");
arr.forEach(function(el) {
  //把数据插入到HTML中
  tbody.innerHTML += temp
    .replace("{src}", el.src)
    .replace("{txt}", el.txt)
    .replace("{price}", el.price)
    .replace("{subtotal}", el.price);
});
var trs = $("#tbody tr");
var box = $("#box");
var aside = $("#section-top2-top1-bottom aside")[0];
box.onclick = function(ev) {
  //利用事件冒泡的原理，把事件添加给父级box
  var e = ev || event;
  var target = e.target || e.srcElement; //获取当前点击对象
  var cls = target.className;
  if (cls.indexOf("check") != -1) cls = "check";
  switch (cls) {
    case "add": //添加商品数量
      var tr = target.parentNode.parentNode; //找到点击那一行
      var tds = tr.cells;
      target.previousSibling.value++; //数量那一栏的数字加一

      // console.log(tds[2].innerText.split("￥")[1]);
      // console.log(target.previousElementSibling.value);
      tds[4].innerText =
        "￥" +
        (
          tds[2].innerText.split("￥")[1] * target.previousElementSibling.value
        ).toFixed(2); //修改小计里面的价格
      break;
    case "reduce": //减少商品数量
      var tr = target.parentNode.parentNode; //找到点击那一行
      var tds = tr.cells;
      if (target.nextElementSibling.value != 1)
        target.nextElementSibling.value--; //数量那一栏减一
      tds[4].innerText =
      "￥" +
      (
        tds[2].innerText.split("￥")[1]* target.nextElementSibling.value
      ).toFixed(2); //修改小计里面的价格

      break;
    case "text": //直接修改数量那一栏input的值
      var tr = target.parentNode.parentNode;
      var tds = tr.cells;
      target.onblur = function() {
        //失去焦点时执行
        tds[4].innerText = (tds[2].innerText * this.value).toFixed(2);
        this.onblur = null; //销毁事件
      };
      break;
    case "del": //删除商品
      var tr = target.parentNode.parentNode;
      if (confirm("你确定要删除吗？")) tbody.removeChild(tr); //tr.innerHTML = "";
      break;
    case "check": //复选框选择商品
      chk(target); //执行复选框函数
      break;
    case "delAll": //删除全部商品
      if (confirm("你确定要删除全部商品吗")) tbody.innerHTML = "";
      break;
  }
  total(); //计算价格
};
var total_all = $("#total");
var num = $("#num");
// total();
function total() {
  //计算价格
  var sum = 0,
    number = 0;
  trs = $("tbody tr");
  var str = "";
  trs.forEach(function(tr, i) {
    //遍历每一行判断，将已选择商品添加到显示隐藏里面
    var tds = tr.cells;
    if (tds[0].children[0].checked) {
      sum += parseFloat(tds[4].innerText.split("￥")[1]);
      number += parseInt(tds[3].children[1].value);
    }
    total_all.innerText = sum.toFixed(2);
    num.innerText = number;
  });
}
var checkAll = $("#box .checkAll");
function chk(target) {
  //复选框判断
  var cls = target.className;
  var flag = true;
  if (cls === "check") {
    //点击非全选复选框
    /*当存在一个复选框未选中，全选框为false*/
    for (var i = 0; i < trs.length; i++) {
      var checkbox = trs[i].cells[0].children[0];
      if (!checkbox.checked) {
        flag = false;
        break;
      }
    }
    checkAll[0].checked = checkAll[1].checked = flag;
  } else {
    //点击全选复选框，所有复选框的状态保持一致
    for (var i = 0; i < trs.length; i++) {
      var checkbox = trs[i].cells[0].children[0];
      checkbox.checked = target.checked;
    }
    checkAll[0].checked = checkAll[1].checked = target.checked;
  }
}
