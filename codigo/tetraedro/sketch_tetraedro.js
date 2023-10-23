p5.disableFriendlyErrors = true;

var x;
var y;
var z = 100;

var ang = 0;
var indexAng = 0;

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

//var linhas = true;
//var faces = true;

//var sca = 100;


let locked = false;


var guiAng = {
    angulo :    180
}

var fecharSolido = { fecharSolido:function(){
    gui.__controllers[0].setValue(70.5);
    document.getElementsByClassName("c")[0].getElementsByTagName("div")[0].getElementsByTagName("input")[0].value=70.529;
}}

var resetCam = { resetCam:function(){
    if (Orbital.orb) {
        cam = createCamera();
    }
}}

var Orbital = {
    orb : true
}
var Fps = {
    fps : false
}

var empty = {
    empty:function(){
        
}}

var fixa = {
    fixa : false
}
var centralizada = {
    centralizada : true
}

var faces = {
    faces : true
}
var eixos = {
    eixos : false
}

var alturaDispo = window.screen.availHeight;

function setup() {
    //cria o canvas com o masmo tamanh do iframe
    createCanvas(alturaDispo - (alturaDispo*0.15), alturaDispo - (alturaDispo*0.15), WEBGL);

    //verifica se esta fora do iframe (tela cheia), e ajusta o tamanho de acordo
    if(window.frameElement == null){
        resizeCanvas(window.innerWidth, window.innerHeight - (window.innerHeight*0.006));
    }


    cam = createCamera();
    angleMode(DEGREES);

    tetra = new Tetraedro();


    gui = new dat.GUI();

    gui.add(guiAng, "angulo", 0, 180).name("Ângulos").onChange(function () {
        //quando angulo da ui muda o ang de controle interno tem que mudar de forma adequada
        if (guiAng.angulo < 180) {
            indexAng = Math.floor(180 + guiAng.angulo);
        }

        if (guiAng.angulo > 70 && guiAng.angulo < 71) {
            document.getElementsByClassName("c")[0].getElementsByTagName("div")[0].getElementsByTagName("input")[0].value = 70.529;

            indexAng = 361;
        }
        else if (guiAng.angulo > 179 && guiAng.angulo < 181) {
            indexAng = 0;
            //ang = indexAng;
        }
        else if (guiAng.angulo > 289 && guiAng.angulo < 290) {
            document.getElementsByClassName("c")[0].getElementsByTagName("div")[0].getElementsByTagName("input")[0].value = 289.471;
        }


        if (indexAng == 360) {
            ang = 109.5;
        }
        else if (indexAng == 361) {
            ang = 250.5;
        } else {
            ang = indexAng;
        }
    });

    gui.add(fecharSolido,'fecharSolido').name("Fechar Sólido");
   
    opcoesFolder = gui.addFolder('Opções');

    cameraFolder = opcoesFolder.addFolder('Câmera');
    cameraFolder.add(resetCam, 'resetCam').name("Reiniciar");

    cameraFolder.add(Orbital, 'orb').name("Orbital").onChange(function () {
        if (!orbit) {
            orbit = true;
            cam = createCamera();
        }

    });

    cameraFolder.add(Fps, 'fps').name("FPS").onChange(function() {
        /*
        if ( indexAng ==  360) {
            ang = 63.5;
        }
        else if (indexAng == 361) {
            ang  = 296.5;
        }else{
            ang = indexAng;
        }
        */

        
        gui.__folders.Opções.hide();
        gui.__controllers[1].__li.style.display = "none";

        if (Orbital.orb || orbit) {
            cam = createCamera();
        };

        locked = true;
        requestPointerLock();
        Orbital.orb = false;
        gui.updateDisplay();

        
    });


    exibicaoFolder = opcoesFolder.addFolder('Exibição');

    exibicaoFolder.add(fixa, 'fixa').name("Fixa").onChange(function() {
        centralizada.centralizada =  !centralizada.centralizada;
        gui.updateDisplay();
    });
    exibicaoFolder.add(centralizada, 'centralizada').name("Centralizada").onChange(function() {
        fixa.fixa = !fixa.fixa;
        gui.updateDisplay();
    });

    exibicaoFolder.add(empty, 'empty').name("");

    exibicaoFolder.add(faces, 'faces').name("Faces");
    exibicaoFolder.add(eixos, 'eixos').name("Eixos");

    gui.__controllers[0].setValue(70.5);
    document.getElementsByClassName("c")[0].getElementsByTagName("div")[0].getElementsByTagName("input")[0].value=70.529;
}


var angVisi;
function draw() {
    background(0);

    //quando angulo da ui muda o ang de controle interno tem que mudar de forma adequada
    if (guiAng.angulo < 180) {
        indexAng = Math.floor(180 + guiAng.angulo);
    }

    if (guiAng.angulo > 70 && guiAng.angulo < 71) {
        document.getElementsByClassName("c")[0].getElementsByTagName("div")[0].getElementsByTagName("input")[0].value = 70.529;

        indexAng = 361;
    }
    else if (guiAng.angulo > 179 && guiAng.angulo < 181) {
        indexAng = 0;
    }
    else if (guiAng.angulo > 289 && guiAng.angulo < 290) {
        document.getElementsByClassName("c")[0].getElementsByTagName("div")[0].getElementsByTagName("input")[0].value = 289.471;
    }

    //controles do teclado
    controles();

    //caso o cursor esteja travado, primeira pessoa
    if(locked){
        // Calculo do angulo entre a linha( da posição da camera até o ponto de visão) e o eixo Z
        angVisi = atan(abs(1 / ((cam.centerZ - cam.eyeZ) / (cam.centerY - cam.eyeY))));

        cam.pan(-movedX * 0.1);

        //impede que a camera rotacione +-90° no eixo vertical, por causa de problemas de inversão de valores
        if (angVisi < 85) {
            cam.tilt(movedY * 0.1);
        }
    }
    else if(Orbital.orb){
        orbitControl(1, 1, 1, {freeRotation: true});
    }

    //ilustra os eixos x,y,z*(sentido não convencional cartesiano, mas sim o da tela de computador)
    if (eixos.eixos) {
        strokeWeight(2);
        stroke(0, 0, 255);
        line(0, 0, 0, 1500, 0, 0);
        stroke(255, 0, 0);
        line(0, 0, 0, 0, 1500, 0);
        stroke(0, 255, 0);
        line(0, 0, 0, 0, 0, 1500);
    }

    //separa a movimentação do solido da dos outros elemantos
    push();
    //ajusta a posição do solido para que esteja sempre centralizado, caso contrario permanece fixa
    if(centralizada.centralizada){
        translate(-(deslocamentoXYZ[indexAng][0]*100), -(deslocamentoXYZ[indexAng][1]*100), -(deslocamentoXYZ[indexAng][2]*100));
    }

    tetra.desenhar(indexAng, 100, faces.faces);
    pop();

    //console.log("ang: " + ang + " index: " + indexAng + " gui: " + guiAng.angulo);
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
        eixos.eixos = !eixos.eixos;
        gui.updateDisplay();
    }
    else if (key == 'k' || key == 'K') {
        faces.faces = !faces.faces;
        gui.updateDisplay();
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
    } else if (key == 'p' || key == 'P') {
        pPres = false;
        angDie = false;
        ang0 = false;
    } else if (key == 'o' || key == 'O') {
        oPres = false;
        angDie = false;
        ang0 = false;
    }
}

function controles() {
    if (locked) {
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
        }
        if (shiftPres) {
            y = y + 5;
            push();
            cam.move(0, 5, 0);
            pop();
        }
        /*
        // Calculo do angulo entre a linha( da posição da camera até o ponto de visão) e o eixo Z
        angVisi = atan(abs(1 / ((cam.centerZ - cam.eyeZ) / (cam.centerY - cam.eyeY))));

        cam.pan(-movedX * 0.1);

        if (angVisi < 85) {
            cam.tilt(movedY * 0.1);
        }
        */
    }


    if (pPres) {
        //180° - 70.529° = 109.471
        //180° + 70.529° = 250.529


        if (!ang0 && !angDie){
            if (ang == 251 || ang == 250.5 || ang == 110 || ang == 109.5) {
                ang = ang - 0.5;
                indexAng = ang;
            } else {
                ang--;
                indexAng = ang;
            }
        }


        if (ang == 250.5){
            indexAng = 361;
            angDie = true;
        } else if (ang == 109.5){
            indexAng = 360;
        }


        if(ang == 0) {
            ang0 = true;
        }


        if(ang < 0) {
            ang = 359;
            indexAng = 359;
        }
        
        //quando o ang de controle interno muda o angulo da ui deve mudar adequadamente
        if(ang == 0) {
            guiAng.angulo = 180;
        }
        else if(ang < 180) {
            guiAng.angulo = ang + 180;
        }else{
            guiAng.angulo = ang - 180;
        }
        gui.updateDisplay();

    }

    if (oPres) {

        if (!ang0 && !angDie) {
            if (ang == 109 || ang == 109.5 || ang == 250 || ang == 250.5) {
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


        if (ang == 109.5) {
            indexAng = 360;
            angDie = true;
        }
        else if (ang == 250.5) {
            indexAng = 361;
        }


        if (ang == 0) {
            ang0 = true;
        }

       
        //quando o ang de controle interno muda o angulo da ui deve mudar adequadamente
        if (ang == 0) {
            guiAng.angulo = 180;
        }
        else if(ang < 180){
            guiAng.angulo = ang + 180;
        }else{
            guiAng.angulo = ang - 180;
        }
        gui.updateDisplay();
    }
   
}

var saindoFps = false;
var orbit = true;

document.onpointerlockchange = (event) => {
    if(saindoFps){
        gui.__folders.Opções.show();
        gui.__controllers[1].__li.style.display = "";

        Fps.fps = false;
        gui.updateDisplay();

        orbit = false;
    }
    saindoFps = !saindoFps;

    //limita o intervalo para voltar a trava depois de sair dela (teoricamente, precisa de mais trabalho) 
    if(document.pointerLockElement == null){
        pointerLockActivatedAt = performance.now();

        locked = false;
    }
 };

 document.onpointerlockerror = (event) => { 
    //garante que mesmo que de erro o curssor ira travar eventualmente
    locked = true;
    requestPointerLock();
 };
 
var camPosiX = 0;
var camPosiY = 0;
var camPosiZ = 0;

var camCentX = 0;
var camCentY = 0;
var camCentZ = 0;

var camUpX = 0;
var camUpY = 0;
var camUpZ = 0;


function windowResized() {
    camPosiX = cam.eyeX;
    camPosiY = cam.eyeY;
    camPosiZ = cam.eyeZ;

    camCentX = cam.centerX;
    camCentY = cam.centerX;
    camCentZ = cam.centerX;

    camUpX = cam.upX;
    camUpY = cam.upY;
    camUpZ = cam.upZ;


    resizeCanvas(window.innerWidth, window.innerHeight - (window.innerHeight * 0.006), false);

    cam.camera(camPosiX, camPosiY, camPosiZ, camCentX, camCentY, camCentZ, camUpX, camUpY, camUpZ);
}