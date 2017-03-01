window.onload=function () {
  //点击在校生单选按钮
  var student=document.getElementById("student");
  var worker=document.getElementById("worker");
  var input=document.getElementsByTagName("input");
  var cities=document.getElementById("cities");
  input[0].onclick=function() {
    if(worker.style.display=="block"){
      worker.style.display="none";
    }
    student.style.display="block";
  }

  //实现城市和学校的二级联动
  cities.onchange=function () {
    var school=document.getElementById("school");
    var opts = school.getElementsByTagName("option");
    // 声明数组，存放学校名称
   var schools=[];
    // 清空之前选择的城市的学校
    for(var z=opts.length-1;z>0;z--){
      school.removeChild(opts[z]);
    }
    //获取对应省份的城市信息
    var city=cities.value;
    switch (city){
      case "北京":
        schools=["北京大学","清华大学","北京师范大学","北京电影学院"];
        break;
      case "广州":
        schools=["广州大学","广东技术师范学院","中山大学","华南理工大学"];
        break;
      case "上海":
        schools=["上海交通大学","复旦大学","同济大学","华东理工大学"];
        break;
      case "天津":
        schools=["天津大学","南开大学","天津工业大学","天津师范大学"];
        break;
    }
    for(var i=0;i<schools.length;i++){
      var option = document.createElement("option");
      // 将城市的信息添加到<option>元素上
      var textNode = document.createTextNode(schools[i]);
      option.appendChild(textNode);
      //将创建的所有<option>元素添加到id为school元素上
      school.appendChild(option);
    }
  }
  //点击非在校生单选按钮
  input[1].onclick=function () {
    if(student.style.display=="block"){
      student.style.display="none";
    }
    worker.style.display="block";
  }
}