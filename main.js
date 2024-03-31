function preLoad() {

}
function setup() {
    canvas = createCanvas(700, 450);
    canvas.position(430, 135);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    fill("gold");
    stroke("none");
    circle(50, 50, 50);
    circle(560, 50, 50);
    circle(560, 420, 50);
    circle(50, 420, 50);
    rect(50, 40, 490, 25);
    rect(50, 410, 490, 25);
    rect(50, 40, 25, 370);
    rect(550, 40, 25, 370);
    image(video, 90, 70, 450, 330);
}

function take_snapshot() {
    save('image.png');
}