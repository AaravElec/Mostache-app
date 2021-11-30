noseX=0;
noseY=0;

function preload() {
    clown_nose = loadImage('https://user-images.githubusercontent.com/78690660/144032680-aff1ba9c-070f-4d47-82c2-9fc15e46f301.png')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('Auro Poses Initialized');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-20;
        noseY = results[0].pose.nose.y+10;
    }
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 40, 20);
}
function take_snapshot() {
    save('result.png');
}