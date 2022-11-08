img="";
Status="";

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modeloaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function modeloaded() {
    console.log("Model Loaded!");
    Status=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
}


function preload() {
    img=loadImage('bed.png');
}

function draw() {
    image(img,0,0,640,420);
    fill("red");
    text("Lamp",45,75);
    noFill();
    stroke("red");
    rect(10,60,80,200);

    fill("red");
    text("Curtains",400,50);
    noFill();
    stroke("red");
    rect(400,60,270,190);
    
}
