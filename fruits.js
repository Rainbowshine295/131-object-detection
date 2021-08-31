img = "";
status = " ";

function preload() {
    img = loadImg('fruits.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd' , modelLodaded);
}

function modelLodaded() {
    console.log("Model is loaded! :)");
    objectDetector.detect(img , gotResult);
}

function gotResult(error, results) {
if (error) {
    console.log(error);
}
    console.log(results);
}

function draw() {
    image(img, 0, 0, 640, 420);
}