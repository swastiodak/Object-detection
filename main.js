function open1(){
    i = "bedroom.png"
    localStorage.setItem("imageN",i);
    window.location="bedroom.html";
}

function open2(){
    i = "Bottles.webp"
    localStorage.setItem("imageN",i);
    window.location="bottles.html";
}

function open3(){
    i = "TV.jpeg"
    localStorage.setItem("imageN",i);
    window.location="tv.html";
}

function open4(){
    i = "fruit.jpeg"
    localStorage.setItem("imageN",i);
    window.location="fruit.html";
}

function open5(){
    i = "work.jpeg"
    localStorage.setItem("imageN",i);
    window.location="work.html";
}

function preload(){
    image1 = loadImage("bedroom.png");
    image2 = loadImage("Bottles.webp")
    image3 = loadImage("fruit.jpeg")
    image4 = loadImage("TV.jpeg")
    image5 = loadImage("work.jpeg")
}