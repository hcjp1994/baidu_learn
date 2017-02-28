window.onload=function () {
  var name=document.getElementById("name");
  var password=document.getElementById("password");
  var div=document.getElementsByTagName("div");
  var span=document.getElementsByTagName("span");
  var btn=document.getElementsByTagName("button");
  //验证姓名不能为空
  btn[0].onclick=function() {
    if(name.value==""||name.value==null){
      span[0].innerHTML="姓名不能为空！";
    }
    else {
      span[0].innerHTML="";
    }
  }
  // 验证输入长度为4-16位之间
  btn[1].onclick=function () {
    var reg=/\.{4,16}/;
    if(!reg.test(password.value)){
      span[1].innerHTML="必填，长度为4-16位任意字符";
    }
    else {
      span[1].innerHTML="";
    }
  }
}