nosex=0;
nosey=0;

function preload(){
  hatimg=loadImage('https://i.postimg.cc/sxdZwxMR/monkey-filter-removebg-preview.png');
}

function setup(){
  canvas=createCanvas(450,400);
  canvas.center();
  video=createCapture(VIDEO);
  video.hide();
  video.size(450,400);
  posenet=ml5.poseNet(video,modelloaded);
  posenet.on('pose',poseon);

}

function draw(){
  image(video,0,0,450,400);
  fill("cyan");
  stroke("red");
  image(hatimg,nosex,nosey,250,380);
}

function takesnapshot(){
    save("realtimefilter.png");
}

function modelloaded(){
  console.log("modeloaded");
}

function poseon(result){
  if(result.length>0){
    console.log(result);
    console.log("nosex="+result[0].pose.nose.x);
    console.log("nosey"+result[0].pose.nose.y);
    nosex=result[0].pose.nose.x-120;
    nosey=result[0].pose.nose.y-260;
  }
}