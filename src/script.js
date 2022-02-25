var createItems = new ShortCuts();
var img = "";
var imgSRC = "imgs/dog_cat.jpg";

function preload(){
    img = loadImage(imgSRC);
}

function setup(){
    createItems.create("canvas",640,420);
}
function draw(){
    background(255);
    image(img,0,0);
    drawDogBox();
    drawCatBox();
}
function drawDogBox(){
    fill(255,0,0);
    textSize(24);
    text("Dog",45,80);
    noFill();
    stroke(255,0,0);
    rect(30,60,450,350);
    noStroke();
}
function drawCatBox(){
    fill(0,0,255);
    textSize(24);
    text("Cat",220,120);
    noFill();
    stroke(0,0,255);
    rect(210,100,425,300);
}

