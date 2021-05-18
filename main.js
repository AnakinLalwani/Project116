var moustacheX;
var moustacheY;
var nosex;
var nosey;
function preload() {
    moustache = loadImage('Moustache.png');
}
function setup() {
    canvas = createCanvas(480, 320);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses)
} 

function modelLoaded() {
    console.log("Ml5 mode loaded");
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results)
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        moustacheX = nosex-200;
        moustacheY = nosey-100;
        console.log("moustache x = " +moustacheX);
        console.log("moustache y = "+moustacheY)
    }
}
function draw() {
    image(video, 0, 0, 480, 320);
    image(moustache, moustacheX, moustacheY, 200, 100)
}
function take_snapshot() {
    save("myfilterimage.png");
}