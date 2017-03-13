var game={
  canvas:null,
  ctx:null,

  //画布的宽和高
  canWidth:0,
  canHeight:0,

  //上一次执行的时间
  lastTime:0,
  //时间间隔
  deltaTime:0,
  //background
  bg:null,
  init:function () {
    this.canvas=document.getElementById("canvas");
    this.ctx=this.canvas.getContext("2d");

    this.canWidth=this.canvas.width;
    this.canHeight=this.canvas.height;

    this.lastTime=Date.now();
    this.deltaTime=0;

    this.bg=new Image();
    this.bg.src="../src/background.jpg";
    console.log(this.bg);
  }

}

window.onload=function () {
  game.init();
}