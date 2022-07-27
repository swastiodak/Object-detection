status = "";
object = [];

function preload(){
    image1 = loadImage("bedroom.png");
    image2 = loadImage("Bottles.webp")
    image3 = loadImage("fruit.jpeg")
    image4 = loadImage("TV.jpeg")
    image5 = loadImage("work.jpeg")
}

function setup(){
    canvas = createCanvas(600,500)
    canvas.center()
    img = localStorage.getItem("imageN");
    if(img=="bedroom.png"){
        img = image1;
    }if(img=="Bottles.webp"){
        img = image2;
    }else if(img=="fruit.jpeg"){
        img = image3;
    }else if(img=="TV.jpeg"){
        img = image4;
    }else{
        img = image5;
    }
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = "Status: Detecting objects";
}

function draw(){
    image(img,0,0,600,500)
    if (status != "") {
        for (index = 0; index < object.length; index++) {
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            percent = floor(object[index].confidence * 100);
            fill('darkgreen');
            text(object[index].label + " " + percent + "%", object[index].x + 10, object[index].y + 20);
            noFill();
            stroke('darkgreen')
            rect(object[index].x, object[index].y, object[index].width, object[index].height);
        }
    }
}

function modelLoaded(){
    console.log("model loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error,result){
    if (error){
        console.error(error);
    }else{
        console.log(result);
        object = result;
    }
}