status="";

function preload(){

}

function setup(){
canvas=createCanvas(400,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}

function draw(){
image(video,0,0,400,300);
}

function start(){
object_Detector=ml5.objectDetector("cocossd",modelloaded);
document.getElementById('status').innerHTML="Detecting Objects";
}

function modelloaded(){
console.log("Model is Loaded!");
status=true;
}

