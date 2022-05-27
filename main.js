function preload(){
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    canvas = createCapture(VIDEO)
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
 }
 tint_color = "";

function modelLoaded() {
    console.log('poseNet is initialized');
}
 
 function draw(){
    Fill(225, 0, 0);
    stroke(255, 0, 0);
    circle(noseX, noseY, 20);
    image(clown_nose, noseX, noseY, 30, 30);
    tint(tint_color);
 }
 
 function takeSnapshot(){
     save('myFilterImage.png');
 }
 function gotPoses() 
{
    if(Results.length > 0 );
    {
        console.log(Results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}
noseX=0;
noseY=0;

function preload() {
    clown_nose = loadImage('');
}