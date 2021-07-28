 function preload(){

 }
function setup(){
camera=createCapture(VIDEO);
camera.size(300,300);
canvas=createCanvas(300,300);
poseNet=ml5.poseNet(video,model_loaded);
poseNet.on('pose',gotresult);
}

function model_loaded(){
    console.log("model is loaded")
}

function gotresult(result){
if(result.lenght>0){
    console.log(result);
}
}

function draw(){

}