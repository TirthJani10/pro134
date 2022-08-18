alert = "";
status_label = "";
objects = [];


function preload() {
alert = loadSound("alert.mp3")
}


function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("statusbaby").innerHTML = "Status: Detecting Objects";
}

function draw() {
    image(video, 0,0, 380, 380);
        objectDetector.detect(video, gotResults);
        for(i = 0; i < objects.length; i++){
            if(objects[i].label = "person") {
                alert.play()
            } 
        }
    
}


function modelLoaded() {
    console.log("MOdel Loaded!");
    status_label = true;
}



function gotResults(error, results){
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        objects = results;
    }
}

