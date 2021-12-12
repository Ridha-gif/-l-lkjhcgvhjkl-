function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,600);
canvas.position(640,250);
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotposes)
}
function draw(){
    background("grey")
}
function modelloaded(){
    console.log("modelLoaded!!")
}
function gotposes(results){
    if(results.length>0){
        console.log(results)
    }
}