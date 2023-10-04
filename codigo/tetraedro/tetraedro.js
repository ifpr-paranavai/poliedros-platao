var angR;

var X;
var Y;
var Z;

var pontosXYZ = [];

class Tetraedro{

    constructor() {
        Algebra(3, 0, 1, () => {
            var point = (x, y, z) => !(1e0 + x * 1e1 + y * 1e2 + z * 1e3);
            var motor = (line, angle_or_distance) => Math.E ** (angle_or_distance / 2 * line);

            // Create some points (P).
            var p0 = point(-0.5, 0, 0), p1 = point(0, 0.86603, 0),
                p2 = point(0.5, 0, 0), p3 = point(0, -0.86603, 0),
                p4 = point(1, -0.86603, 0), p5 = point(0.5, -1.73205, 0);

            var L1, L2, L3;
            var R1, R2, R3;



            for (let i = 0; i <= 361; i++) {
                p0 = point(-0.5, 0, 0), p1 = point(0, 0.86603, 0),
                p2 = point(0.5, 0, 0), p3 = point(0, -0.86603, 0),
                p4 = point(1, -0.86603, 0), p5 = point(0.5, -1.73205, 0);

                
                angR = radians(i);
 
                if (i == 360) {
                    angR = radians(180 - 70.529);//angulos diedros( entre as faces/planos) do poliedro "fechado",
                                                  //180 - x porque o poliedro já começa planificado( 180 entre as faces)
                }
                else if (i == 361) {
                    angR = radians(180 + 70.529);
                }


                L1 = (p0 & p2).Normalized;
                R1 = motor(L1, angR);
                p3 = (R1 * p3 * R1.Conjugate);
                p4 = (R1 * p4 * R1.Conjugate);
                p5 = (R1 * p5 * R1.Conjugate);
                L2 = (p2 & p3).Normalized;


                R2 = motor(L2, -angR);
                p4 = (R2 * p4 * R2.Conjugate);
                p5 = (R2 * p5 * R2.Conjugate);
                L3 = (p3 & p4).Normalized;

                
                R3 = motor(L3, angR);
                p5 = ((R3 * p5 * R3.Conjugate));




                X = [
                    p0.Normalized.e023, p1.Normalized.e023,
                    p2.Normalized.e023, p3.Normalized.e023,
                    p4.Normalized.e023, p5.Normalized.e023
                ];
                for (let i = 0; i < X.length; i++) {
                    X[i] = X[i] * -1;
                }

                Y = [
                    p0.Normalized.e013, p1.Normalized.e013,
                    p2.Normalized.e013, p3.Normalized.e013,
                    p4.Normalized.e013, p5.Normalized.e013
                ];
                
                Z = [
                    p0.Normalized.e012, p1.Normalized.e012,
                    p2.Normalized.e012, p3.Normalized.e012,
                    p4.Normalized.e012, p5.Normalized.e012
                ];
                for (let i = 0; i < Z.length; i++) {
                    Z[i] = Z[i] * -1;
                }

                


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
        vertex(pontosXYZ[ang][0][0] * sca, pontosXYZ[ang][1][0] * sca, pontosXYZ[ang][2][0] * sca);
        vertex(pontosXYZ[ang][0][1] * sca, pontosXYZ[ang][1][1] * sca, pontosXYZ[ang][2][1] * sca);
        vertex(pontosXYZ[ang][0][2] * sca, pontosXYZ[ang][1][2] * sca, pontosXYZ[ang][2][2] * sca);
        endShape(CLOSE);

        //fill(255,0,0);
        beginShape();
        vertex(pontosXYZ[ang][0][0] * sca, pontosXYZ[ang][1][0] * sca, pontosXYZ[ang][2][0] * sca);
        vertex(pontosXYZ[ang][0][2] * sca, pontosXYZ[ang][1][2] * sca, pontosXYZ[ang][2][2] * sca);
        vertex(pontosXYZ[ang][0][3] * sca, pontosXYZ[ang][1][3] * sca, pontosXYZ[ang][2][3] * sca);
        endShape(CLOSE);

        //fill(0,255,0);
        beginShape();
        vertex(pontosXYZ[ang][0][2] * sca, pontosXYZ[ang][1][2] * sca, pontosXYZ[ang][2][2] * sca);
        vertex(pontosXYZ[ang][0][3] * sca, pontosXYZ[ang][1][3] * sca, pontosXYZ[ang][2][3] * sca);
        vertex(pontosXYZ[ang][0][4] * sca, pontosXYZ[ang][1][4] * sca, pontosXYZ[ang][2][4] * sca);
        endShape(CLOSE);
   
        
        //fill(255,255,0);
        beginShape();
        vertex(pontosXYZ[ang][0][3] * sca, pontosXYZ[ang][1][3] * sca, pontosXYZ[ang][2][3] * sca);
        vertex(pontosXYZ[ang][0][4] * sca, pontosXYZ[ang][1][4] * sca, pontosXYZ[ang][2][4] * sca);
        vertex(pontosXYZ[ang][0][5] * sca, pontosXYZ[ang][1][5] * sca, pontosXYZ[ang][2][5] * sca);
        endShape(CLOSE);
        
    }

}