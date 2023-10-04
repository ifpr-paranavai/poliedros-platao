var angR;

var X;
var Y;
var Z;

var pontosXYZ = [];

class Octaedro{
    
    constructor() {
        Algebra(3, 0, 1, () => {
            var point = (x, y, z) => !(1e0 + x * 1e1 + y * 1e2 + z * 1e3);
            var motor = (line, angle_or_distance) => Math.E ** (angle_or_distance / 2 * line);
        
            // Create some points (P).
            var p0 = point(-0.5, 0, 0),   p1 = point(0.5, 0, 0),
                p2 = point(-1, -0.86603, 0),    p3 = point(0, -0.86603, 0),
                p4 = point(-0.5, -1.73205, 0),   p5 = point(0.5, -1.73205, 0),
                p6 = point(0, -2.59808, 0), p7 = point(1, -2.59808, 0),
                p8 = point(-0.5, -3.4641, 0), p9 = point(0.5, -3.4641, 0);

            var L1,L2,L3,L4,L5,L6,L7;
            var R1,R2,R3,R4,R5,R6,R7;
        
        
            
            for (let i = 0; i <= 361; i++) {
                p0 = point(-0.5, 0, 0),   p1 = point(0.5, 0, 0),
                p2 = point(-1, -0.86603, 0),    p3 = point(0, -0.86603, 0),
                p4 = point(-0.5, -1.73205, 0),   p5 = point(0.5, -1.73205, 0),
                p6 = point(0, -2.59808, 0), p7 = point(1, -2.59808, 0),
                p8 = point(-0.5, -3.4641, 0), p9 = point(0.5, -3.4641, 0);

                angR = radians(i);

                if (i == 360) {
                    angR = radians(180 - 109.471);
                    //angulos diedros( entre as faces/planos) do poliedro "fechado",
                    //180 - x porque o poliedro já começa planificado( 180 entre as faces)
                }
                else if (i == 361) {
                    angR = radians(180 + 109.471);
                }
                

                L1 = (p0 & p3).Normalized;
                R1 = motor(L1, angR);
                p2 = (R1 * p2 * R1.Conjugate);
                p4 = (R1 * p4 * R1.Conjugate);
                p5 = (R1 * p5 * R1.Conjugate);
                p6 = (R1 * p6 * R1.Conjugate);
                p7 = (R1 * p7 * R1.Conjugate);
                p8 = (R1 * p8 * R1.Conjugate);
                p9 = (R1 * p9 * R1.Conjugate);
           
        
                L2 = (p2 & p3).Normalized;
                R2 = motor(L2, angR);
                p4 = (R2 * p4 * R2.Conjugate);
                p5 = (R2 * p5 * R2.Conjugate);
                p6 = (R2 * p6 * R2.Conjugate);
                p7 = (R2 * p7 * R2.Conjugate);
                p8 = (R2 * p8 * R2.Conjugate);
                p9 = (R2 * p9 * R2.Conjugate);
            

                L3 = (p3 & p4).Normalized;
                R3 = motor(L3, -angR);
                p5 = (R3 * p5 * R3.Conjugate);
                p6 = (R3 * p6 * R3.Conjugate);
                p7 = (R3 * p7 * R3.Conjugate);
                p8 = (R3 * p8 * R3.Conjugate);
                p9 = (R3 * p9 * R3.Conjugate);


                L4 = (p4 & p5).Normalized;
                R4 = motor(L4, angR);
                p6 = (R4 * p6 * R4.Conjugate);
                p7 = (R4 * p7 * R4.Conjugate);
                p8 = (R4 * p8 * R4.Conjugate);
                p9 = (R4 * p9 * R4.Conjugate);


                L5 = (p5 & p6).Normalized;
                R5 = motor(L5, -angR);
                p7 = (R5 * p7 * R5.Conjugate);
                p8 = (R5 * p8 * R5.Conjugate);
                p9 = (R5 * p9 * R5.Conjugate);


                L6 = (p6 & p7).Normalized;
                R6 = motor(L6, angR);
                p8 = (R6 * p8 * R6.Conjugate);
                p9 = (R6 * p9 * R6.Conjugate);


                L7 = (p6 & p9).Normalized;
                R7 = motor(L7, angR);
                p8 = (R7 * p8 * R7.Conjugate);



                X = [
                    p0.Normalized.e023, p1.Normalized.e023,
                    p2.Normalized.e023, p3.Normalized.e023,
                    p4.Normalized.e023, p5.Normalized.e023,
                    p6.Normalized.e023, p7.Normalized.e023,
                    p8.Normalized.e023, p9.Normalized.e023
                ];
                for (let i = 0; i < X.length; i++) {
                    X[i] = X[i] * -1;
                }

                Y = [
                    p0.Normalized.e013, p1.Normalized.e013,
                    p2.Normalized.e013, p3.Normalized.e013,
                    p4.Normalized.e013, p5.Normalized.e013,
                    p6.Normalized.e013, p7.Normalized.e013,
                    p8.Normalized.e013, p9.Normalized.e013
                ];
            
                Z = [
                    p0.Normalized.e012, p1.Normalized.e012,
                    p2.Normalized.e012, p3.Normalized.e012,
                    p4.Normalized.e012, p5.Normalized.e012,
                    p6.Normalized.e012, p7.Normalized.e012,
                    p8.Normalized.e012, p9.Normalized.e012
                ];
                for (let i = 0; i < Z.length; i++) {
                    Z[i] = Z[i] * -1;
                }


                pontosXYZ.push([X, Y, Z]);
            }   
        });
    }

    desenhar(ang, sca, faces){
        //if (ang == 360) {
            //ang = 0;
        //}     

        stroke(250,250,250);
        strokeWeight(0.01 * sca);

        if(faces){
            fill(0,0,255);
        }else{
            noFill();
        }
        
        //noFill();
           
        //pontosXYZ[angulo][x][ponto]; pontosXYZ[angulo][y][ponto]; pontosXYZ[angulo][z][ponto]
        
        beginShape();
        vertex(pontosXYZ[ang][0][0] * sca, pontosXYZ[ang][1][0] * sca, pontosXYZ[ang][2][0] * sca);
        vertex(pontosXYZ[ang][0][1] * sca, pontosXYZ[ang][1][1] * sca, pontosXYZ[ang][2][1] * sca);
        vertex(pontosXYZ[ang][0][3] * sca, pontosXYZ[ang][1][3] * sca, pontosXYZ[ang][2][3] * sca);
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

        //fill(0,255,0);
        beginShape();
        vertex(pontosXYZ[ang][0][3] * sca, pontosXYZ[ang][1][3] * sca, pontosXYZ[ang][2][3] * sca);
        vertex(pontosXYZ[ang][0][4] * sca, pontosXYZ[ang][1][4] * sca, pontosXYZ[ang][2][4] * sca); 
        vertex(pontosXYZ[ang][0][5] * sca, pontosXYZ[ang][1][5] * sca, pontosXYZ[ang][2][5] * sca);
        endShape(CLOSE);
   

        //fill(255,255,0);
        beginShape();
        vertex(pontosXYZ[ang][0][4] * sca, pontosXYZ[ang][1][4] * sca, pontosXYZ[ang][2][4] * sca);
        vertex(pontosXYZ[ang][0][5] * sca, pontosXYZ[ang][1][5] * sca, pontosXYZ[ang][2][5] * sca);
        vertex(pontosXYZ[ang][0][6] * sca, pontosXYZ[ang][1][6] * sca, pontosXYZ[ang][2][6] * sca);
        endShape(CLOSE);


        beginShape();
        vertex(pontosXYZ[ang][0][5] * sca, pontosXYZ[ang][1][5] * sca, pontosXYZ[ang][2][5] * sca);
        vertex(pontosXYZ[ang][0][6] * sca, pontosXYZ[ang][1][6] * sca, pontosXYZ[ang][2][6] * sca);
        vertex(pontosXYZ[ang][0][7] * sca, pontosXYZ[ang][1][7] * sca, pontosXYZ[ang][2][7] * sca);
        endShape(CLOSE);


        beginShape();
        vertex(pontosXYZ[ang][0][6] * sca, pontosXYZ[ang][1][6] * sca, pontosXYZ[ang][2][6] * sca);
        vertex(pontosXYZ[ang][0][7] * sca, pontosXYZ[ang][1][7] * sca, pontosXYZ[ang][2][7] * sca);
        vertex(pontosXYZ[ang][0][9] * sca, pontosXYZ[ang][1][9] * sca, pontosXYZ[ang][2][9] * sca);

        endShape(CLOSE);


        beginShape();
        vertex(pontosXYZ[ang][0][6] * sca, pontosXYZ[ang][1][6] * sca, pontosXYZ[ang][2][6] * sca);
        vertex(pontosXYZ[ang][0][8] * sca, pontosXYZ[ang][1][8] * sca, pontosXYZ[ang][2][8] * sca);
        vertex(pontosXYZ[ang][0][9] * sca, pontosXYZ[ang][1][9] * sca, pontosXYZ[ang][2][9] * sca);
        endShape(CLOSE);
    }

}