var status = ""

function preload(){}

function setup(){
    canvas = createCanvas(400, 400)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
}

function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded)
}

function modelLoaded() {
    console.log("Model Loaded!")
    document.getElementById("modelStatus").innerHTML = "Status: Detecting Objects"
    status = true
}

function draw(){
    image(video, 0, 0, 400, 400)
}