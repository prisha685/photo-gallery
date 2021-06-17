 function preload() {

 }
 function setup() {
     canvas=createCanvas(640,640);
     canvas.position(110,250);
     video=createCapture(VIDEO);
     video.hide();
 }
 function draw() {
     image(video,0,0,640,480);
     circle(30,30,80)
     circle(610,440,80)
     rect(30, 20,610, 5) 
     rect(30, 430,610, 5) 
 }
 function take_snapshot() {
     save('digital_photoframe_name.png');
 }