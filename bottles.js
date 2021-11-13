function back()
{
   window.location = "index.html";
}

img = "";
objects = [];
status = "";

function preload()
{
    img = loadImage("room4.png");
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
//132 drawing rectangle without getting output from cocossd
/*function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Bottles", 50, 115);
    noFill();
    stroke("#FF0000");
    rect(20, 100, 320, 280);

    fill("#FF0000");
    text("Bottle", 100, 40);
    noFill();
    stroke("#FF0000");
    rect(90, 10, 500, 350);
}*/

function draw()
{
    image(img, 0, 0, 640, 420);
    
    if(status != "")
    {
      for (i=0; i < objects.length; i++)
      {
          document.getElementById("status").innerHTML = "Status: objects Detected";
        fill("#FF0000");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%" , objects[i].x + 15, objects[i].y +15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }
    }
}