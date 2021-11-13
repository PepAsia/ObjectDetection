function back()
{
   window.location = "index.html";
}

img = "";
objects = [];
status = "";

function preload()
{
    img = loadImage("room5.jpg");
}

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results)
{
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}
function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Fruits", 210, 70);
    noFill();
    stroke("#FF0000");
    rect(200, 50, 320, 280);

    fill("#FF0000");
    text("Fruit Basket", 100, 70);
    noFill();
    stroke("#FF0000");
    rect(70, 50, 500, 350);
}