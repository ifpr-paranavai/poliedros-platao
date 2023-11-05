var angR;

var X;
var Y;
var Z;

var pontosXYZ = [];

var maiorX;
var maiorY;
var maiorZ;
var menorX;
var menorY;
var menorZ;
var deslocamentoXYZ=[];

class Hexaedro{

    constructor() {
        Algebra(3, 0, 1, () => {
            var point = (x, y, z) => !(1e0 + x * 1e1 + y * 1e2 + z * 1e3);
            var motor = (line, angle_or_distance) => Math.E ** (angle_or_distance / 2 * line);

            // Create some points (P).
            var p0 = point(-0.5, 0, 0), p1 = point(0.5, 0, 0),
                p2 = point(-0.5, -1, 0), p3 = point(0.5, -1, 0),
                p4 = point(-1.5, 0, 0), p5 = point(-1.5, -1, 0),
                p6 = point(-0.5, -2, 0), p7 = point(0.5, -2, 0),
                p8 = point(1.5, 0, 0), p9 = point(1.5, -1, 0),
                p10 = point(-0.5, 1, 0), p11 = point(0.5, 1, 0),
                p12= point(-0.5, 2, 0), p13 = point(0.5, 2, 0);

            var L1, L2, L3, L4, L5;
            var R1, R2, R3, R4, R5;



            for (let i = 0; i <= 360; i++) {
                p0 = point(-0.5, 0, 0), p1 = point(0.5, 0, 0),
                p2 = point(-0.5, -1, 0), p3 = point(0.5, -1, 0),
                p4 = point(-1.5, 0, 0), p5 = point(-1.5, -1, 0),
                p6 = point(-0.5, -2, 0), p7 = point(0.5, -2, 0),
                p8 = point(1.5, 0, 0), p9 = point(1.5, -1, 0),
                p10 = point(-0.5, 1, 0), p11 = point(0.5, 1, 0),
                p12= point(-0.5, 2, 0), p13 = point(0.5, 2, 0);

                
                angR = radians(i);


                L1 = (p0 & p2).Normalized;
                R1 = motor(L1, angR);
                p4 = (R1 * p4 * R1.Conjugate);
                p5 = (R1 * p5 * R1.Conjugate);

                L2 = (p2 & p3).Normalized;
                R2 = motor(L2, angR);
                p6 = (R2 * p6 * R2.Conjugate);
                p7 = (R2 * p7 * R2.Conjugate);

                L3 = (p1 & p3).Normalized;
                R3 = motor(L3, -angR);
                p8 = ((R3 * p8 * R3.Conjugate));
                p9 = ((R3 * p9 * R3.Conjugate));

                L4 = (p0 & p1).Normalized;
                R4 = motor(L4, -angR);
                p10 = (R4 * p10 * R4.Conjugate);
                p11 = (R4 * p11 * R4.Conjugate);
                p12 = (R4 * p12 * R4.Conjugate);
                p13 = (R4 * p13 * R4.Conjugate);

                L5 = (p10 & p11).Normalized;
                R5 = motor(L5, -angR);
                p12 = (R5 * p12 * R5.Conjugate);
                p13 = (R5 * p13 * R5.Conjugate);



                X = [
                    p0.Normalized.e023,  p1.Normalized.e023,
                    p2.Normalized.e023,  p3.Normalized.e023,
                    p4.Normalized.e023,  p5.Normalized.e023,
                    p6.Normalized.e023,  p7.Normalized.e023,
                    p8.Normalized.e023,  p9.Normalized.e023,
                    p10.Normalized.e023, p11.Normalized.e023,
                    p12.Normalized.e023, p13.Normalized.e023
                ];
                for (let i = 0; i < X.length; i++) {
                    X[i] = X[i] * -1;
                }

                Y = [
                    p0.Normalized.e013,  p1.Normalized.e013,
                    p2.Normalized.e013,  p3.Normalized.e013,
                    p4.Normalized.e013,  p5.Normalized.e013,
                    p6.Normalized.e013,  p7.Normalized.e013,
                    p8.Normalized.e013,  p9.Normalized.e013,
                    p10.Normalized.e013, p11.Normalized.e013,
                    p12.Normalized.e013, p13.Normalized.e013
                ];
                
                Z = [
                    p0.Normalized.e012,  p1.Normalized.e012,
                    p2.Normalized.e012,  p3.Normalized.e012,
                    p4.Normalized.e012,  p5.Normalized.e012,
                    p6.Normalized.e012,  p7.Normalized.e012,
                    p8.Normalized.e012,  p9.Normalized.e012,
                    p10.Normalized.e012, p11.Normalized.e012,
                    p12.Normalized.e012, p13.Normalized.e012
                ];
                for (let i = 0; i < Z.length; i++) {
                    Z[i] = Z[i] * -1;
                }

                
                maiorX = X[0];
                maiorY = Y[0];
                maiorZ = Z[0];
                menorX = X[0];
                menorY = Y[0];
                menorZ = Z[0];
                
                for(let i = 0; i < X.length; i++){
                    if(X[i] > maiorX){
                        maiorX = X[i];
                    }
                    else if(X[i] < menorX){
                        menorX = X[i];
                    }

                    if(Y[i] > maiorY){
                        maiorY = Y[i];
                    }
                    else if(Y[i] < menorY){
                        menorY = Y[i];
                    }

                    if(Z[i] > maiorZ){
                        maiorZ = Z[i];
                    }
                    else if(Z[i] < menorZ){
                        menorZ = Z[i];
                    }
                }
                deslocamentoXYZ.push([(abs(maiorX)-abs(menorX))/2, (abs(maiorY)-abs(menorY))/2, (abs(maiorZ)-abs(menorZ))/2]);


                pontosXYZ.push([X, Y, Z]);
            }
        });
    }

    desenhar(ang, sca, faces){   
        //console.log(pontosXYZ);
    
        stroke(250, 250, 250);
        strokeWeight(0.01 * sca);

        if (faces) {
            fill(0, 0, 255);
        } else {
            noFill();
        }

        //pontosXYZ[angulo][x][ponto]; pontosXYZ[angulo][y][ponto]; pontosXYZ[angulo][z][ponto]
        //fill(0,0,255);
        beginShape();
        vertex(pontosXYZ[ang][0][1] * sca, pontosXYZ[ang][1][1] * sca, pontosXYZ[ang][2][1] * sca);
        vertex(pontosXYZ[ang][0][0] * sca, pontosXYZ[ang][1][0] * sca, pontosXYZ[ang][2][0] * sca);
        vertex(pontosXYZ[ang][0][2] * sca, pontosXYZ[ang][1][2] * sca, pontosXYZ[ang][2][2] * sca);
        vertex(pontosXYZ[ang][0][3] * sca, pontosXYZ[ang][1][3] * sca, pontosXYZ[ang][2][3] * sca);
        endShape(CLOSE);


        //fill(255,0,0);
        beginShape();
        vertex(pontosXYZ[ang][0][2] * sca, pontosXYZ[ang][1][2] * sca, pontosXYZ[ang][2][2] * sca);
        vertex(pontosXYZ[ang][0][0] * sca, pontosXYZ[ang][1][0] * sca, pontosXYZ[ang][2][0] * sca);
        vertex(pontosXYZ[ang][0][4] * sca, pontosXYZ[ang][1][4] * sca, pontosXYZ[ang][2][4] * sca);
        vertex(pontosXYZ[ang][0][5] * sca, pontosXYZ[ang][1][5] * sca, pontosXYZ[ang][2][5] * sca);
        endShape(CLOSE);

        
        //fill(0,255,0);
        beginShape();
        vertex(pontosXYZ[ang][0][3] * sca, pontosXYZ[ang][1][3] * sca, pontosXYZ[ang][2][3] * sca);
        vertex(pontosXYZ[ang][0][2] * sca, pontosXYZ[ang][1][2] * sca, pontosXYZ[ang][2][2] * sca);
        vertex(pontosXYZ[ang][0][6] * sca, pontosXYZ[ang][1][6] * sca, pontosXYZ[ang][2][6] * sca);
        vertex(pontosXYZ[ang][0][7] * sca, pontosXYZ[ang][1][7] * sca, pontosXYZ[ang][2][7] * sca);
        endShape(CLOSE);

        
        //fill(0,255,0);
        beginShape();
        vertex(pontosXYZ[ang][0][3] * sca, pontosXYZ[ang][1][3] * sca, pontosXYZ[ang][2][3] * sca);
        vertex(pontosXYZ[ang][0][1] * sca, pontosXYZ[ang][1][1] * sca, pontosXYZ[ang][2][1] * sca);
        vertex(pontosXYZ[ang][0][8] * sca, pontosXYZ[ang][1][8] * sca, pontosXYZ[ang][2][8] * sca);
        vertex(pontosXYZ[ang][0][9] * sca, pontosXYZ[ang][1][9] * sca, pontosXYZ[ang][2][9] * sca);
        endShape(CLOSE);
   
        
        //fill(255,255,0);
        beginShape();
        vertex(pontosXYZ[ang][0][1] * sca, pontosXYZ[ang][1][1] * sca, pontosXYZ[ang][2][1] * sca);
        vertex(pontosXYZ[ang][0][0] * sca, pontosXYZ[ang][1][0] * sca, pontosXYZ[ang][2][0] * sca);
        vertex(pontosXYZ[ang][0][10] * sca, pontosXYZ[ang][1][10] * sca, pontosXYZ[ang][2][10] * sca);
        vertex(pontosXYZ[ang][0][11] * sca, pontosXYZ[ang][1][11] * sca, pontosXYZ[ang][2][11] * sca);
        endShape(CLOSE);

        //fill(255,0,255);
        beginShape();
        vertex(pontosXYZ[ang][0][11] * sca, pontosXYZ[ang][1][11] * sca, pontosXYZ[ang][2][11] * sca);
        vertex(pontosXYZ[ang][0][10] * sca, pontosXYZ[ang][1][10] * sca, pontosXYZ[ang][2][10] * sca);
        vertex(pontosXYZ[ang][0][12] * sca, pontosXYZ[ang][1][12] * sca, pontosXYZ[ang][2][12] * sca);
        vertex(pontosXYZ[ang][0][13] * sca, pontosXYZ[ang][1][13] * sca, pontosXYZ[ang][2][13] * sca);
        endShape(CLOSE);
        
    }

}