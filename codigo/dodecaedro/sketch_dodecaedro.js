/*let a = window.document.getElementsByClassName("c");
    console.log(a.length);


setTimeout(() => {
    a = window.document.getElementsByClassName("c");
    console.log(a[0].getElementsByTagName("div")[0].getElementsByTagName("input")[0].value=1.5);
}, 100);
*/

p5.disableFriendlyErrors = true;

var x;
var y;
var z = 200;

var ang = 0;
var indexAng = 0;

//  var autTrans = true;


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

let locked = false;

var gui;
var cameraFolder;

var numTest = {
    angulo :    180
}

var fechar = { fechar:function(){
    gui.__controllers[0].setValue(116.5);
    document.getElementsByClassName("c")[0].getElementsByTagName("div")[0].getElementsByTagName("input")[0].value=116.565;

}};

var fps = { fps:function(){
    gui.__folders.Camera.hide();
    gui.__controllers[1].__li.style.display = "none";

    if(orbit){
        cam = createCamera();
    };

    locked = true;
    requestPointerLock();
    orbit = false;
}};

var orbit = true;
var orbital = { orbital:function(){ if(!orbit){orbit = true; cam = createCamera()}}};


function setup() {
    
    createCanvas(500, 500, WEBGL);

    cam = createCamera();
    angleMode(DEGREES);

    dodec = new Dodecaedro();

    //requestPointerLock();

    gui = new dat.GUI();

    //console.log(document.getElementsByClassName("close-button close-bottom"));

    gui.add(numTest, "angulo", 0, 180).name("Ângulos");
    gui.add(fechar,'fechar').name("Fechar");
   

    cameraFolder = gui.addFolder('Camera');
    cameraFolder.add(fps,'fps').name("FPS");
    cameraFolder.add(orbital,'orbital').name("Orbital");

}

var angVisi;


function draw() {
    //gui.__folders.Camera.show();
    //gui.__controllers[1].__li.style.display = "";
   

        background(0);
            
        if(orbit){
            if(numTest.angulo < 180){
                indexAng = Math.floor(180+numTest.angulo);
            }
            else if(numTest.angulo > 180){
                indexAng = Math.floor(numTest.angulo - 180) ;
            }
            
            if(numTest.angulo > 116 && numTest.angulo < 117){
                indexAng = 361; 
            }
            if(numTest.angulo > 179 && numTest.angulo < 181) {
                indexAng =  0;
            }
        }

        if(locked){
            controles();

            // Calculo do angulo entre a linha( da posição da camera até o ponto de visão) e o eixo Z
            angVisi = atan(abs(1 / ((cam.centerZ - cam.eyeZ) / (cam.centerY - cam.eyeY))));

            
            cam.pan(-movedX * 0.1);
    
            if (angVisi < 85) {
                cam.tilt(movedY * 0.1);
            }
        
            //console.log("A " + ang);
            //console.log("B " + indexAng);
        }else if(orbit){
            orbitControl(1, 1, 1, {freeRotation: true});
        }

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


        dodec.desenhar(indexAng, 100, faces);
        pop();


    
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
    }else if(keyCode == ESCAPE){
        //gui.__folders.Camera.show();
        //gui.__controllers[1].__li.style.display = "";
        //console.log("AAAAAAAA");
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
        //180° - 116.565° = 63.435
        //180° + 116.565° = 296.565

        if (!ang0 && !angDie) {
            if (ang == 297 || ang == 296.5 || ang == 64 || ang == 63.5) {
                ang = ang - 0.5;
                indexAng = ang;
            } else {
                ang--;
                indexAng = ang;
            }
        }


        if (ang == 296.5) {
            indexAng = 361;
            angDie = true;
        } else if (ang == 63.5) {
            indexAng = 360;
        }

        if (ang == 0) {
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
            if (ang == 63 || ang == 63.5 || ang ==  296 || ang == 296.5) {
                ang = ang + 0.5;
                indexAng = ang;
            } else {
                ang++;
                indexAng = ang;
            }
        }



        if (ang > 359) {
            ang = 0;
            indexAng = 0;
        }


        if (ang == 63.5) {
            indexAng = 360;
            angDie = true;
        }
        else if (ang == 296.5) {
            indexAng = 361;
        }


        if (ang == 0) {
            ang0 = true;
        }

    }
   
}

/*
let pointerLockActivatedAt = null;


function mousePressed() {
    console.log(mouseButton);
    if (!locked && performance.now()-pointerLockActivatedAt > 1200 && mouseButton === RIGHT){ 
        locked = true;
        requestPointerLock();
        //console.log("click " + locked);

    }
}
*/
var saindo = false;

document.onpointerlockchange = (event) => {
    if(saindo){
        gui.__folders.Camera.show();
        gui.__controllers[1].__li.style.display = "";
       // console.log("VVVVVV");
    }
    saindo = !saindo;
    //console.log(orbit);

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