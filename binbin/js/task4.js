window.onload=function () {
  //获取四个按钮以及input
  var btn1=document.getElementById("btn1");
  var btn2=document.getElementById("btn2");
  var btn3=document.getElementById("btn3");
  var btn4=document.getElementById("btn4");
  var input=document.getElementById("input");
  var div=document.getElementById("div");

  //判断输入框是否有数字
  function isNum() {
    if(input.value!=NaN&&input.value&&input.value!=undefined){
      return true;
    }
    return false;
  }
  //下面分别实现左侧入、右侧入、左侧出、右侧出
  //左侧入
  btn1.onclick=function () {
    if(isNum()){
      //获取输入框的值
      var num=parseInt(input.value);
      //创建一个数组存放输入框的值
      var arr=[];
      arr.push(num);
      for(var i=0;i<arr.length;i++){
        var span=document.createElement("span");
        span.innerHTML=arr[i];
        div.insertBefore(span,div.firstChild);
      }
    }
  }
  //右侧入
  btn2.onclick=function () {
    if(isNum()){
      //获取输入框的值
      var num=parseInt(input.value);
      //创建一个数组存放输入框的值
      var arr=[];
      arr.push(num);
      for(var i=0;i<arr.length;i++){
        var span=document.createElement("span");
        span.innerHTML=arr[i];
        div.appendChild(span);
      }
    }
  }
  // 左侧出
  btn3.onclick=function () {
    div.removeChild(div.firstChild);
  }
  //右侧出
  btn4.onclick=function () {
    div.removeChild(div.lastChild);
  }
  //点击队列中的任何一个元素，此元素从队列中删除
  div.addEventListener('click',function(ev){
    var ev = ev || window.event;
    var target = ev.target || ev.srcElement;
    if(target.nodeName=="SPAN"){
      target.remove();
    }
  })
}
