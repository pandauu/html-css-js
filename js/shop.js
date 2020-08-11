
function $(exp) {
 
  let el;
  if(/^#\w+$/.test(exp)){

    // 获取id元素
    el = document.querySelector(exp);

  }else {
    //获取文档所以exp元素
    el = document.querySelectorAll(exp);
  }

  return el;
}

let cart = $("#cart").innerHTML;
let box = $("#box");



let trs = $("#a1 div");

let a1 = $("#a1");

let aside = $(".cart-floatbar input")[0];

a1.oncick = function(ev) {
  let e=ev||event;
  let target=e.target||e.srcElement;//获取当前点击对象
  let cls=target.className;
  if (cls.indexOf("check")!=-1)cls='check';  //indexof为返回值

  switch(cls) {
    case "add":
      let tr = targer.parentNode.parentNode;//找到点击那一行
      let tds = tr.cells;
      target.previousSibling.value++;//数量那一栏的数字加一
      tds[4].innerText = (tds[2].innerText * target.previousElementSibling.value).toFixed(2);//修改小计里面的价格
      break;

    case "reduce"://减少商品数量
      let tr = target.parentNode.parentNode;//找到点击那一行
      let tds = tr.cells;
      if(target.nextElementSibling.value != 1) target.nextElementSibling.value--;//数量那一栏减一
      tds[4].innerText = (tds[2].innerText * target.nextElementSibling.value).toFixed(2);//修改小计里面的价格
      break;

      case "text"://直接修改数量那一栏input的值
      let tr = target.parentNode.parentNode;
      let tds = tr.cells;
      target.onblur = function () {//失去焦点时执行
          tds[4].innerText = (tds[2].innerText * this.value).toFixed(2);
          this.onblur = null;//销毁事件

      };
      break;
      case "del"://删除商品
      var tr = target.parentNode.parentNode;
      if(confirm("你确定要删除吗？"))
          tbody.removeChild(tr);//tr.innerHTML = "";
      break;
  case "check"://复选框选择商品
      chk(target);//执行复选框函数
      break;
  case "delAll"://删除全部商品
      if(confirm("你确定要删除全部商品吗"))
          tbody.innerHTML = "";
      break;
  }

};