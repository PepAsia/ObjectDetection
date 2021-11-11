function back()
{
   window.location = "index.html";
}
function back()
{
   window.location = "index.html";
}
img = "";

function preload()
{
    img = loadImage("room2.jpg");
}

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status :";
}

function modelLoaded()
{
    console.log("Model Loaded");
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
}