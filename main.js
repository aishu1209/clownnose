noseX = 0;
noseY = 0;





function preload(){
clown_nose = loadImage("https://i.postimg.cc/66PqF41L/rednose.png")
}

function setup(){
    canvas = createCanvas(400,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(400,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);

poseNet.on('pose',gotPoses);

}

function draw(){

    image(video,0,0,400,300);

    image(clown_nose, noseX, noseY, 30,30);
}

function take_snapshot(){
    save('clown_pic.png');
}

function modelLoaded(){
    console.log("model loaded!");

}

function gotPoses(results){

    if(results.length > 0){
        console.log(results);
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
        noseX = results[0].pose.nose.x -12;
        noseY = results[0].pose.nose.y -10;
    }
}