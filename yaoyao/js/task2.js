window.onload=function () {
  var user=document.getElementById("user");
  var userTip=document.getElementById("userTip");

  var pwd=document.getElementById("pwd");
  var pwdTip=document.getElementById("pwdTip");

  var repwd=document.getElementById("repwd");
  var repwdTip=document.getElementById("repwdTip");

  var email=document.getElementById("email");
  var emailTip=document.getElementById("emailTip");

  var rigist=document.getElementById("rigist");

  // 表单获得焦点时，下方显示表单填写规则
  // 表单失去焦点时校验表单内容
  // 校验结果正确时，表单边框显示绿色，并在下方显示验证通过的描述文字
  // 校验结果错误时，表单边框显示红色，并在下方显示验证错误的描述文字
  // 点击提交按钮时，对页面中所有输入进行校验，校验结果显示方式同上。若所有表单校验通过，弹窗显示“提交成功”，否则显示“提交失败”

  //验证用户名,用户名为6-12位数字，字母
  function userValidator() {
    var reg=/^[a-zA-Z0-9]{6,12}$/;
    if(user.value==""||user.value==null){
      userTip.innerHTML="用户名不能为空";
      userTip.style.color="red";
      user.className="red";
      return false;
    }
    else if(!reg.test(user.value)){
      userTip.innerHTML="用户名为6-12位数字，字母";
      userTip.style.color="red";
      user.className="red";
      return false;
    }
    else {
      user.className="green";
      userTip.innerHTML="输入正确";
      userTip.style.color="green";
      return true;
    }
  }
  user.onblur=userValidator;
  user.onfocus=function () {
    userTip.innerHTML="必填，用户名为6-12位数字，字母";
    userTip.style.color="#654eff";
  }
  //验证密码，密码为6-8位数字，字母
  function pwdValidator() {
    var reg=/^[a-zA-Z0-9]{6,8}$/;
    if(pwd.value==""||pwd.value==null){
      pwdTip.innerHTML="密码不能为空";
      pwdTip.style.color="red";
      pwd.className="red";
      return false;
    }
    else if(!reg.test(pwd.value)){
      pwdTip.innerHTML="密码为6-8位数字，字母";
      pwdTip.style.color="red";
      pwd.className="red";
      return false;
    }
    else {
      pwd.className="green";
      pwdTip.innerHTML="密码输入正确";
      pwdTip.style.color="green";
      return true;
    }
  }
  pwd.onblur=pwdValidator;
  pwd.onfocus=function () {
    pwdTip.innerHTML="必填，密码为6-8位数字，字母";
    pwdTip.style.color="#654eff";
    pwd.className="";
  }
  //确认密码
  function repwdValidator() {
    var reg=/^[a-zA-Z0-9]{6,8}$/;
    if(repwd.value==""||repwd.value==null){
      repwdTip.innerHTML="密码不能为空";
      repwdTip.style.color="red";
      repwd.className="red";
      return false;
    }
    else if(!reg.test(repwd.value)){
      repwdTip.innerHTML="密码为6-8位数字，字母";
      repwdTip.style.color="red";
      repwd.className="red";
      return false;
    }
    else if(pwd.value!=repwd.value){
      repwdTip.innerHTML="两次密码输入不一致";
      repwd.className="red";
      repwdTip.style.color="red";
      return false;
    }
    else {
      repwd.className="green";
      repwdTip.innerHTML="密码输入正确";
      repwdTip.style.color="green";
      return true;
    }
  }
  repwd.onblur=repwdValidator;
  repwd.onfocus=function () {
    repwdTip.innerHTML="必填,确认密码";
    repwdTip.style.color="#654eff";
    repwd.className="";
  }
  //验证邮箱
  function emailValidator() {
    if (email.value == "" || email.value == null) {
      emailTip.innerHTML = "邮箱不能为空";
      emailTip.style.color = "red";
      email.className = "red";
      return false;
    }
    else {
      emailTip.innerHTML = "邮箱输入正确";
      emailTip.style.color = "green";
      email.className ="green";
      return true;
    }
  }
  email.onblur=emailValidator;
  email.onfocus=function () {
    emailTip.innerHTML="必填";
    emailTip.style.color="#654eff";
    email.className="";
  }
  //点击提交按钮时，验证是否全部正确
  function formValidator(){
    // 判断表单内所有元素验证全部通过
    if(userValidator()&&pwdValidator()&&repwdValidator()&&emailValidator()){
      alert("表单验证成功!");
      return true;
    }else{
      alert("表单验证失败!");
      return false;
    }
  }
}
