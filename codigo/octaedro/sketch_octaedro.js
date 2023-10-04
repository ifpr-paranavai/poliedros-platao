p5.disableFriendlyErrors = true;

var x;
var y;
var z = 200;

var ang = 0;
var indexAng = 0;

//  var autTrans = true;

var rotX = 0;
var rotY = 0;

var wPres = false;
var sPres = false;
var aPres = false;
var dPres = false;

var spacePres = false;
var shiftPres = false;

var pPres = false;
var oPres = false;

var angDie = false;
var ang0 = false;

var linhas = true;
var faces = true;

var sca = 100;

var tetra;

let locked = true;


function setup() {
    createCanvas(500, 500, WEBGL);

    cam = createCamera();
    angleMode(DEGREES);

    octa = new Octaedro();

    requestPointerLock();
}

var angVisi;


function draw() {
    
    //console.log(".");

    if(locked){
        background(0);

        // Calculo do angulo entre a linha( da posição da camera até o ponto de visão) e o eixo Z
        angVisi = atan(abs(1 / ((cam.centerZ - cam.eyeZ) / (cam.centerY - cam.eyeY))));

        //console.log(angVisi);

        cam.pan(-movedX * 0.1);

        if (angVisi < 85) {
            cam.tilt(movedY * 0.1);
        }

        //console.log("Posi: " + cam.eyeX + " , "+cam.eyeY + " , " + cam.eyeZ);
        //console.log("Visi: " + cam.centerX + " , " + cam.centerY + " , " + cam.centerZ);


        controles();
        //console.log("A " + ang);
        //console.log("B " + indexAng);


        push();
        rotateX(90);


        if (linhas) {
            //ilustrações dos eixos x,y,z*
            strokeWeight(2);
            stroke(0, 0, 255);
            line(0, 0, 0, 1500, 0, 0);
            stroke(255, 0, 0);
            line(0, 0, 0, 0, 1500, 0);
            stroke(0, 255, 0);
            line(0, 0, 0, 0, 0, 1500);
        }


        octa.desenhar(indexAng, 100, faces);
        pop();

    }
    
}

function keyPressed() {
    if (key == 'w' || key == 'W') {
        wPres = true;
    } else if (key == 's' || key == 'S') {
        sPres = true;
    } else if (key == 'a' || key == 'A') {
        aPres = true;
    } else if (key == 'd' || key == 'D') {
        dPres = true;
    } else if (key == ' ') {
        spacePres = true;
    } else if (key == 'Shift') {
        shiftPres = true;
    } else if (key == 'p' || key == 'P') {//planifica
        pPres = true;
        //autTrans = true;
    } else if (key == 'o' || key == 'O') {
        oPres = true;
        //autTrans = true;
    }
    else if (key == 'l' || key == 'L') {
        linhas = !linhas;
    }
    else if (key == 'k' || key == 'K') {
        faces = !faces;
    }
}



function keyReleased() {
    if (key == 'w' || key == 'W') {
        wPres = false;
    } else if (key == 's' || key == 'S') {
        sPres = false;
    } else if (key == 'a' || key == 'A') {
        aPres = false;
    } else if (key == 'd' || key == 'D') {
        dPres = false;
    } else if (key == ' ') {
        spacePres = false;
    } else if (key == 'Shift') {
        shiftPres = false;
    } else if (key == 'p' || key == 'P') {//planifica
        pPres = false;
        //autTrans = false;
        angDie = false;
        ang0 = false;
    } else if (key == 'o' || key == 'O') {
        oPres = false;
        //autTrans = false;
        angDie = false;
        ang0 = false;
    }
}

function controles() {
    if (wPres) {
        z = z + 5;
        cam.move(0, 0, -5);
    }
    if (sPres) {
        z = z - 5;
        cam.move(0, 0, 5);
    }
    if (aPres) {
        x = x + 5;
        cam.move(-5, 0, 0);
    }
    if (dPres) {
        x = x - 5;
        cam.move(5, 0, 0);
    }


    if (spacePres) {
        y = y - 5;
        push();
        cam.move(0, -5, 0);
        pop();
        //translate(0,y,0);
    }
    if (shiftPres) {
        y = y + 5;
        push();
        cam.move(0, 5, 0);
        pop();
        //translate(0,y,0);
    }


    if (pPres) {
        //autTrans = true;

        if (!ang0 && !angDie) {
            if(ang == 290 || ang == 289.5 || ang == 71 || ang == 70.5){
                ang = ang - 0.5;
                indexAng = ang;
            }else{
                ang--;
                indexAng = ang;
            }
        }


        if (ang == 289.5){
            indexAng = 361;
            angDie = true;
        }else if(ang == 70.5){
            indexAng = 360;
        }

        if(ang == 0){
            ang0 = true;
        }


        if (ang < 0) {
            ang = 359;
            indexAng = 359;
        }
    }

    if (oPres) {
        //autTrans = true;


        if (!ang0 && !angDie) {
            if(ang == 70 || ang == 70.5 || ang == 289 || ang == 289.5){
                ang = ang + 0.5;
                indexAng = ang;
            }else{
                ang++;
                indexAng = ang;
            }
        }
        


        if (ang > 359) {
            ang = 0;
            indexAng = 0;
        }

        
        if (ang == 70.5) {
            indexAng = 360;
            angDie = true;
        }
        else if(ang == 289.5){
            indexAng = 361  ;
        }

        
        if (ang == 0) {
            ang0 = true;
        }

    }
   
}


let pointerLockActivatedAt = null;

function mouseClicked() {
    console.log(performance.now()-pointerLockActivatedAt);

    if (!locked && performance.now()-pointerLockActivatedAt > 1200){ 
        locked = true;
        requestPointerLock();
        //console.log("click " + locked);

    }
}

document.onpointerlockchange = (event) => {

    if(document.pointerLockElement == null){
        pointerLockActivatedAt = performance.now();//limita o intervalo para voltar a trava depois de sair dela

        locked = false;
        //console.log("esc " + locked);
    }
 };

 document.onpointerlockerror = (event) => { 
    locked = true;
    requestPointerLock();
 };