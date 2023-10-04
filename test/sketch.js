var x = 0;
var y = 0;

var cam1;
 
function setup() {
    createCanvas(innerWidth, innerHeight, WEBGL);
    normalMaterial();
    debugMode();


    cam1 = createCamera();

   
}

function draw() {
    background(200);
  
    orbitControl(1, 1, 1, {freeRotation: true});
        
    rotateY(0.5);
    box(30, 50);
}