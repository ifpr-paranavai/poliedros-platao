var angR;

var X;
var Y;
var Z;

var pontosXYZ=[];

var squareColor;
    
class Dodecaedro{

    constructor() {
		
        //blendMode(LIGHTEST);

        //squareColor = color(0, 0, 250);
        //squareColor.setAlpha(50);


        Algebra(3, 0, 1, () => {
            var point = (x, y, z) => !(1e0 + x * 1e1 + y * 1e2 + z * 1e3);
            var motor = (line, angle_or_distance) => Math.E ** (angle_or_distance / 2 * line);

            // Create some points (P).
            var p0 = point(0, 1.53884, 0), p19 = point(0.80902, 0.95106, 0),
            p1 = point(-0.80902, 0.95106, 0), p20 = point(3.11803, 0, 0),
            p2 = point(-0.5, 0, 0), p21 = point(2.30902, 0.58779, 0),
            p3 = point(-1.30902, 0.58779, 0), p22 = point(2.61803, 1.53884, 0),
            p4 = point(-2.11803, 0, 0), p23 = point(3.61803, 1.53884, 0),
            p5 = point(-1.80902, -0.95106, 0), p24 = point(3.92705, 0.58779, 0),
            p6 = point(-0.80902, -0.95106, 0), p25 = point(4.23607, 1.53884, 0),
            p7 = point(-1.61803, -1.53884, 0), p26 = point(5.23607, 1.53884, 0),
            p8 = point(-1.30902, -2.4899, 0), p27 = point(5.54508, 0.58779, 0),
            p9 = point(-0.30902, -2.4899, 0), p28 = point(4.73607, 0, 0),
            p10 = point(0, -1.53884, 0), p29 = point(5.73607, 0, 0),
            p11 = point(0.30902, -2.4899, 0), p30 = point(6.04508, -0.95106, 0),
            p12 = point(1.30902, -2.4899, 0), p31 = point(5.23607, -1.53884, 0),
            p13 = point(1.61803, -1.53884, 0), p32 = point(4.42705, -0.95106, 0),
            p14 = point(0.80902, -0.95106, 0), p33 = point(4.73607, -1.90211, 0),
            p15 = point(1.80902, -0.95106, 0), p34 = point(3.92705, -2.4899, 0),
            p16 = point(2.11803, 0, 0), p35 = point(3.11803, -1.90211, 0),
            p17 = point(1.30902, 0.58779, 0), p36 = point(3.42705, -0.95106, 0),
            p18 = point(0.5, 0, 0), p37 = point(2.61803, -1.53884, 0);

            var L1,L2,L3,L4,L5,L6,L7,L8,L9,L10,L11;
            var R1,R2,R3,R4,R5,R6,R7,R8,R9,R10,R11;



        /*
        p0  = (R1 * p0 * R1.Conjugate);   p19 = (R1 * p19 * R1.Conjugate);
        p1  = (R1 * p1 * R1.Conjugate);   p20 = (R1 * p20 * R1.Conjugate);
        p2  = (R1 * p2 * R1.Conjugate);   p21 = (R1 * p21 * R1.Conjugate); 
        p3  = (R1 * p3 * R1.Conjugate);   p22 = (R1 * p22 * R1.Conjugate);
        p4  = (R1 * p4 * R1.Conjugate);   p23 = (R1 * p23 * R1.Conjugate);
        p5  = (R1 * p5 * R1.Conjugate);   p24 = (R1 * p24 * R1.Conjugate);
        p6  = (R1 * p6 * R1.Conjugate);   p25 = (R1 * p25 * R1.Conjugate);
        p7  = (R1 * p7 * R1.Conjugate);   p26 = (R1 * p26 * R1.Conjugate);
        p8  = (R1 * p8 * R1.Conjugate);   p27 = (R1 * p27 * R1.Conjugate);
        p9  = (R1 * p9 * R1.Conjugate);   p28 = (R1 * p28 * R1.Conjugate);
        p10 = (R1 * p10 * R1.Conjugate);  p29 = (R1 * p29 * R1.Conjugate);
        p11 = (R1 * p11 * R1.Conjugate);  p30 = (R1 * p30 * R1.Conjugate);
        p12 = (R1 * p12 * R1.Conjugate);  p31 = (R1 * p31 * R1.Conjugate);
        p13 = (R1 * p13 * R1.Conjugate);  p32 = (R1 * p32 * R1.Conjugate);
        p14 = (R1 * p14 * R1.Conjugate);  p33 = (R1 * p33 * R1.Conjugate);
        p15 = (R1 * p15 * R1.Conjugate);  p34 = (R1 * p34 * R1.Conjugate);
        p16 = (R1 * p16 * R1.Conjugate);  p35 = (R1 * p35 * R1.Conjugate);
        p17 = (R1 * p17 * R1.Conjugate);  p36 = (R1 * p36 * R1.Conjugate);
        p18 = (R1 * p18 * R1.Conjugate);  p37 = (R1 * p37 * R1.Conjugate);
        */


            for (let i = 0; i <= 361; i++) {
                p0 = point(0, 1.53884, 0), p19 = point(0.80902, 0.95106, 0),
                p1 = point(-0.80902, 0.95106, 0), p20 = point(3.11803, 0, 0),
                p2 = point(-0.5, 0, 0), p21 = point(2.30902, 0.58779, 0),
                p3 = point(-1.30902, 0.58779, 0), p22 = point(2.61803, 1.53884, 0),
                p4 = point(-2.11803, 0, 0), p23 = point(3.61803, 1.53884, 0),
                p5 = point(-1.80902, -0.95106, 0), p24 = point(3.92705, 0.58779, 0),
                p6 = point(-0.80902, -0.95106, 0), p25 = point(4.23607, 1.53884, 0),
                p7 = point(-1.61803, -1.53884, 0), p26 = point(5.23607, 1.53884, 0),
                p8 = point(-1.30902, -2.4899, 0), p27 = point(5.54508, 0.58779, 0),
                p9 = point(-0.30902, -2.4899, 0), p28 = point(4.73607, 0, 0),
                p10 = point(0, -1.53884, 0), p29 = point(5.73607, 0, 0),
                p11 = point(0.30902, -2.4899, 0), p30 = point(6.04508, -0.95106, 0),
                p12 = point(1.30902, -2.4899, 0), p31 = point(5.23607, -1.53884, 0),
                p13 = point(1.61803, -1.53884, 0), p32 = point(4.42705, -0.95106, 0),
                p14 = point(0.80902, -0.95106, 0), p33 = point(4.73607, -1.90211, 0),
                p15 = point(1.80902, -0.95106, 0), p34 = point(3.92705, -2.4899, 0),
                p16 = point(2.11803, 0, 0), p35 = point(3.11803, -1.90211, 0),
                p17 = point(1.30902, 0.58779, 0), p36 = point(3.42705, -0.95106, 0),
                p18 = point(0.5, 0, 0), p37 = point(2.61803, -1.53884, 0);


                angR = radians(i);


                if (i == 360) {
                    angR = radians(180 - 116.565);//angulos diedros( entre as faces/planos) do poliedro "fechado",
                                                  //180 - x porque o poliedro já começa planificado( 180 entre as faces)
                }
                else if (i == 361) {
                    angR = radians(180 + 116.565);
                }


                L1 = (p2 & p18).Normalized;
                R1 = motor(L1, angR);

                                               p20 = (R1 * p20 * R1.Conjugate);
                                               p21 = (R1 * p21 * R1.Conjugate);
                p3 = (R1 * p3 * R1.Conjugate); p22 = (R1 * p22 * R1.Conjugate);
                p4 = (R1 * p4 * R1.Conjugate); p23 = (R1 * p23 * R1.Conjugate);
                p5 = (R1 * p5 * R1.Conjugate); p24 = (R1 * p24 * R1.Conjugate);
                p6 = (R1 * p6 * R1.Conjugate); p25 = (R1 * p25 * R1.Conjugate);
                p7 = (R1 * p7 * R1.Conjugate); p26 = (R1 * p26 * R1.Conjugate);
                p8 = (R1 * p8 * R1.Conjugate); p27 = (R1 * p27 * R1.Conjugate);
                p9 = (R1 * p9 * R1.Conjugate); p28 = (R1 * p28 * R1.Conjugate);
                p10 = (R1 * p10 * R1.Conjugate); p29 = (R1 * p29 * R1.Conjugate);
                p11 = (R1 * p11 * R1.Conjugate); p30 = (R1 * p30 * R1.Conjugate);
                p12 = (R1 * p12 * R1.Conjugate); p31 = (R1 * p31 * R1.Conjugate);
                p13 = (R1 * p13 * R1.Conjugate); p32 = (R1 * p32 * R1.Conjugate);
                p14 = (R1 * p14 * R1.Conjugate); p33 = (R1 * p33 * R1.Conjugate);
                p15 = (R1 * p15 * R1.Conjugate); p34 = (R1 * p34 * R1.Conjugate);
                p16 = (R1 * p16 * R1.Conjugate); p35 = (R1 * p35 * R1.Conjugate);
                p17 = (R1 * p17 * R1.Conjugate); p36 = (R1 * p36 * R1.Conjugate);
                                                 p37 = (R1 * p37 * R1.Conjugate);




                L2 = (p2 & p6).Normalized;
                R2 = motor(L2, angR);
                p3 = (R2 * p3 * R2.Conjugate);
                p4 = (R2 * p4 * R2.Conjugate);
                p5 = (R2 * p5 * R2.Conjugate);


                L3 = (p6 & p10).Normalized;
                R3 = motor(L3, angR);
                p7 = (R3 * p7 * R3.Conjugate);
                p8 = (R3 * p8 * R3.Conjugate);
                p9 = (R3 * p9 * R3.Conjugate);


                L4 = (p10 & p14).Normalized;
                R4 = motor(L4, angR);
                p11 = (R4 * p11 * R4.Conjugate);
                p12 = (R4 * p12 * R4.Conjugate);
                p13 = (R4 * p13 * R4.Conjugate);


                L5 = (p14 & p18).Normalized;
                R5 = motor(L5, angR);
                p15 = (R5 * p15 * R5.Conjugate);
                p16 = (R5 * p16 * R5.Conjugate);
                p17 = (R5 * p17 * R5.Conjugate);

                p20 = (R5 * p20 * R5.Conjugate);
                p21 = (R5 * p21 * R5.Conjugate);
                p22 = (R5 * p22 * R5.Conjugate);
                p23 = (R5 * p23 * R5.Conjugate);
                p24 = (R5 * p24 * R5.Conjugate);
                p25 = (R5 * p25 * R5.Conjugate);
                p26 = (R5 * p26 * R5.Conjugate);
                p27 = (R5 * p27 * R5.Conjugate);
                p28 = (R5 * p28 * R5.Conjugate);
                p29 = (R5 * p29 * R5.Conjugate);
                p30 = (R5 * p30 * R5.Conjugate);
                p31 = (R5 * p31 * R5.Conjugate);
                p32 = (R5 * p32 * R5.Conjugate);
                p33 = (R5 * p33 * R5.Conjugate);
                p34 = (R5 * p34 * R5.Conjugate);
                p35 = (R5 * p35 * R5.Conjugate);
                p36 = (R5 * p36 * R5.Conjugate);
                p37 = (R5 * p37 * R5.Conjugate);


                L6 = (p15 & p16).Normalized;
                R6 = motor(L6, angR);
                p20 = (R6 * p20 * R6.Conjugate);
                p21 = (R6 * p21 * R6.Conjugate);
                p22 = (R6 * p22 * R6.Conjugate);
                p23 = (R6 * p23 * R6.Conjugate);
                p24 = (R6 * p24 * R6.Conjugate);
                p25 = (R6 * p25 * R6.Conjugate);
                p26 = (R6 * p26 * R6.Conjugate);
                p27 = (R6 * p27 * R6.Conjugate);
                p28 = (R6 * p28 * R6.Conjugate);
                p29 = (R6 * p29 * R6.Conjugate);
                p30 = (R6 * p30 * R6.Conjugate);
                p31 = (R6 * p31 * R6.Conjugate);
                p32 = (R6 * p32 * R6.Conjugate);
                p33 = (R6 * p33 * R6.Conjugate);
                p34 = (R6 * p34 * R6.Conjugate);
                p35 = (R6 * p35 * R6.Conjugate);
                p36 = (R6 * p36 * R6.Conjugate);
                p37 = (R6 * p37 * R6.Conjugate);


                L7 = (p20 & p36).Normalized;
                R7 = motor(L7, -angR);
                p21 = (R7 * p21 * R7.Conjugate);
                p22 = (R7 * p22 * R7.Conjugate);
                p23 = (R7 * p23 * R7.Conjugate);
                p24 = (R7 * p24 * R7.Conjugate);
                p25 = (R7 * p25 * R7.Conjugate);
                p26 = (R7 * p26 * R7.Conjugate);
                p27 = (R7 * p27 * R7.Conjugate);
                p28 = (R7 * p28 * R7.Conjugate);
                p29 = (R7 * p29 * R7.Conjugate);
                p30 = (R7 * p30 * R7.Conjugate);
                p31 = (R7 * p31 * R7.Conjugate);
                p32 = (R7 * p32 * R7.Conjugate);
                p33 = (R7 * p33 * R7.Conjugate);
                p34 = (R7 * p34 * R7.Conjugate);
                p35 = (R7 * p35 * R7.Conjugate);


                L8 = (p20 & p24).Normalized;
                R8 = motor(L8, -angR);
                p21 = (R8 * p21 * R8.Conjugate);
                p22 = (R8 * p22 * R8.Conjugate);
                p23 = (R8 * p23 * R8.Conjugate);


                L9 = (p24 & p28).Normalized;
                R9 = motor(L9, -angR);
                p25 = (R9 * p25 * R9.Conjugate);
                p26 = (R9 * p26 * R9.Conjugate);
                p27 = (R9 * p27 * R9.Conjugate);


                L10 = (p28 & p32).Normalized;
                R10 = motor(L10, -angR);
                p29 = (R10 * p29 * R10.Conjugate);
                p30 = (R10 * p30 * R10.Conjugate);
                p31 = (R10 * p31 * R10.Conjugate);


                L11 = (p32 & p36).Normalized;
                R11 = motor(L11, -angR);
                p33 = (R11 * p33 * R11.Conjugate);
                p34 = (R11 * p34 * R11.Conjugate);
                p35 = (R11 * p35 * R11.Conjugate);



                X = [
                    p0.Normalized.e023, p1.Normalized.e023,
                    p2.Normalized.e023, p3.Normalized.e023,
                    p4.Normalized.e023, p5.Normalized.e023,
                    p6.Normalized.e023, p7.Normalized.e023,
                    p8.Normalized.e023, p9.Normalized.e023,
                    p10.Normalized.e023, p11.Normalized.e023,
                    p12.Normalized.e023, p13.Normalized.e023,
                    p14.Normalized.e023, p15.Normalized.e023,
                    p16.Normalized.e023, p17.Normalized.e023,
                    p18.Normalized.e023, p19.Normalized.e023,
                    p20.Normalized.e023, p21.Normalized.e023,
                    p22.Normalized.e023, p23.Normalized.e023,
                    p24.Normalized.e023, p25.Normalized.e023,
                    p26.Normalized.e023, p27.Normalized.e023,
                    p28.Normalized.e023, p29.Normalized.e023,
                    p30.Normalized.e023, p31.Normalized.e023,
                    p32.Normalized.e023, p33.Normalized.e023,
                    p34.Normalized.e023, p35.Normalized.e023,
                    p36.Normalized.e023, p37.Normalized.e023
                ];
                for (let i = 0; i < X.length; i++) {
                    X[i] = X[i] * -1;
                }



                Y = [
                    p0.Normalized.e013, p1.Normalized.e013,
                    p2.Normalized.e013, p3.Normalized.e013,
                    p4.Normalized.e013, p5.Normalized.e013,
                    p6.Normalized.e013, p7.Normalized.e013,
                    p8.Normalized.e013, p9.Normalized.e013,
                    p10.Normalized.e013, p11.Normalized.e013,
                    p12.Normalized.e013, p13.Normalized.e013,
                    p14.Normalized.e013, p15.Normalized.e013,
                    p16.Normalized.e013, p17.Normalized.e013,
                    p18.Normalized.e013, p19.Normalized.e013,
                    p20.Normalized.e013, p21.Normalized.e013,
                    p22.Normalized.e013, p23.Normalized.e013,
                    p24.Normalized.e013, p25.Normalized.e013,
                    p26.Normalized.e013, p27.Normalized.e013,
                    p28.Normalized.e013, p29.Normalized.e013,
                    p30.Normalized.e013, p31.Normalized.e013,
                    p32.Normalized.e013, p33.Normalized.e013,
                    p34.Normalized.e013, p35.Normalized.e013,
                    p36.Normalized.e013, p37.Normalized.e013
                ];



                Z = [
                    p0.Normalized.e012, p1.Normalized.e012,
                    p2.Normalized.e012, p3.Normalized.e012,
                    p4.Normalized.e012, p5.Normalized.e012,
                    p6.Normalized.e012, p7.Normalized.e012,
                    p8.Normalized.e012, p9.Normalized.e012,
                    p10.Normalized.e012, p11.Normalized.e012,
                    p12.Normalized.e012, p13.Normalized.e012,
                    p14.Normalized.e012, p15.Normalized.e012,
                    p16.Normalized.e012, p17.Normalized.e012,
                    p18.Normalized.e012, p19.Normalized.e012,
                    p20.Normalized.e012, p21.Normalized.e012,
                    p22.Normalized.e012, p23.Normalized.e012,
                    p24.Normalized.e012, p25.Normalized.e012,
                    p26.Normalized.e012, p27.Normalized.e012,
                    p28.Normalized.e012, p29.Normalized.e012,
                    p30.Normalized.e012, p31.Normalized.e012,
                    p32.Normalized.e012, p33.Normalized.e012,
                    p34.Normalized.e012, p35.Normalized.e012,
                    p36.Normalized.e012, p37.Normalized.e012
                ];
                for (let i = 0; i < Z.length; i++) {
                    Z[i] = Z[i] * -1;
                }


                pontosXYZ.push([X, Y, Z]);
            }
        });
    
   
    }
    
    
    desenhar(ang, sca){
        

        stroke(250, 250, 250);
        strokeWeight(0.01 * sca);

        if (faces) {
            fill(0,0,255);//squareColor
        } else {
            noFill();
        }

        //pontosXYZ[angulo][x][ponto]; pontosXYZ[angulo][y][ponto]; pontosXYZ[angulo][z][ponto]
        beginShape();
        vertex(pontosXYZ[ang][0][0] * sca, pontosXYZ[ang][1][0] * sca, pontosXYZ[ang][2][0] * sca);
        vertex(pontosXYZ[ang][0][1] * sca, pontosXYZ[ang][1][1] * sca, pontosXYZ[ang][2][1] * sca);
        vertex(pontosXYZ[ang][0][2] * sca, pontosXYZ[ang][1][2] * sca, pontosXYZ[ang][2][2] * sca);
        vertex(pontosXYZ[ang][0][18] * sca, pontosXYZ[ang][1][18] * sca, pontosXYZ[ang][2][18] * sca);
        vertex(pontosXYZ[ang][0][19] * sca, pontosXYZ[ang][1][19] * sca, pontosXYZ[ang][2][19] * sca);
        endShape(CLOSE);

            
        beginShape();
        vertex(pontosXYZ[ang][0][2] * sca, pontosXYZ[ang][1][2] * sca, pontosXYZ[ang][2][2] * sca);
        vertex(pontosXYZ[ang][0][6] * sca, pontosXYZ[ang][1][6] * sca, pontosXYZ[ang][2][6] * sca);
        vertex(pontosXYZ[ang][0][10] * sca, pontosXYZ[ang][1][10] * sca, pontosXYZ[ang][2][10] * sca);
        vertex(pontosXYZ[ang][0][14] * sca, pontosXYZ[ang][1][14] * sca, pontosXYZ[ang][2][14] * sca);
        vertex(pontosXYZ[ang][0][18] * sca, pontosXYZ[ang][1][18] * sca, pontosXYZ[ang][2][18] * sca);
        endShape(CLOSE);

        
        beginShape();
        vertex(pontosXYZ[ang][0][2] * sca, pontosXYZ[ang][1][2] * sca, pontosXYZ[ang][2][2] * sca);
        vertex(pontosXYZ[ang][0][3] * sca, pontosXYZ[ang][1][3] * sca, pontosXYZ[ang][2][3] * sca);
        vertex(pontosXYZ[ang][0][4] * sca, pontosXYZ[ang][1][4] * sca, pontosXYZ[ang][2][4] * sca);
        vertex(pontosXYZ[ang][0][5] * sca, pontosXYZ[ang][1][5] * sca, pontosXYZ[ang][2][5] * sca);
        vertex(pontosXYZ[ang][0][6] * sca, pontosXYZ[ang][1][6] * sca, pontosXYZ[ang][2][6] * sca);
        endShape(CLOSE);

        beginShape();
        vertex(pontosXYZ[ang][0][6] * sca, pontosXYZ[ang][1][6] * sca, pontosXYZ[ang][2][6] * sca);
        vertex(pontosXYZ[ang][0][7] * sca, pontosXYZ[ang][1][7] * sca, pontosXYZ[ang][2][7] * sca);
        vertex(pontosXYZ[ang][0][8] * sca, pontosXYZ[ang][1][8] * sca, pontosXYZ[ang][2][8] * sca);
        vertex(pontosXYZ[ang][0][9] * sca, pontosXYZ[ang][1][9] * sca, pontosXYZ[ang][2][9] * sca);
        vertex(pontosXYZ[ang][0][10] * sca, pontosXYZ[ang][1][10] * sca, pontosXYZ[ang][2][10] * sca);
        endShape(CLOSE);

        beginShape();
        vertex(pontosXYZ[ang][0][10] * sca, pontosXYZ[ang][1][10] * sca, pontosXYZ[ang][2][10] * sca);
        vertex(pontosXYZ[ang][0][11] * sca, pontosXYZ[ang][1][11] * sca, pontosXYZ[ang][2][11] * sca);
        vertex(pontosXYZ[ang][0][12] * sca, pontosXYZ[ang][1][12] * sca, pontosXYZ[ang][2][12] * sca);
        vertex(pontosXYZ[ang][0][13] * sca, pontosXYZ[ang][1][13] * sca, pontosXYZ[ang][2][13] * sca);
        vertex(pontosXYZ[ang][0][14] * sca, pontosXYZ[ang][1][14] * sca, pontosXYZ[ang][2][14] * sca);
        endShape(CLOSE);

        beginShape();
        vertex(pontosXYZ[ang][0][14] * sca, pontosXYZ[ang][1][14] * sca, pontosXYZ[ang][2][14] * sca);
        vertex(pontosXYZ[ang][0][15] * sca, pontosXYZ[ang][1][15] * sca, pontosXYZ[ang][2][15] * sca);
        vertex(pontosXYZ[ang][0][16] * sca, pontosXYZ[ang][1][16] * sca, pontosXYZ[ang][2][16] * sca);
        vertex(pontosXYZ[ang][0][17] * sca, pontosXYZ[ang][1][17] * sca, pontosXYZ[ang][2][17] * sca);
        vertex(pontosXYZ[ang][0][18] * sca, pontosXYZ[ang][1][18] * sca, pontosXYZ[ang][2][18] * sca);
        endShape(CLOSE);

        beginShape();
        vertex(pontosXYZ[ang][0][15] * sca, pontosXYZ[ang][1][15] * sca, pontosXYZ[ang][2][15] * sca);
        vertex(pontosXYZ[ang][0][16] * sca, pontosXYZ[ang][1][16] * sca, pontosXYZ[ang][2][16] * sca);
        vertex(pontosXYZ[ang][0][20] * sca, pontosXYZ[ang][1][20] * sca, pontosXYZ[ang][2][20] * sca);
        vertex(pontosXYZ[ang][0][36] * sca, pontosXYZ[ang][1][36] * sca, pontosXYZ[ang][2][36] * sca);
        vertex(pontosXYZ[ang][0][37] * sca, pontosXYZ[ang][1][37] * sca, pontosXYZ[ang][2][37] * sca);
        endShape(CLOSE);

        beginShape();
        vertex(pontosXYZ[ang][0][20] * sca, pontosXYZ[ang][1][20] * sca, pontosXYZ[ang][2][20] * sca);
        vertex(pontosXYZ[ang][0][24] * sca, pontosXYZ[ang][1][24] * sca, pontosXYZ[ang][2][24] * sca);
        vertex(pontosXYZ[ang][0][28] * sca, pontosXYZ[ang][1][28] * sca, pontosXYZ[ang][2][28] * sca);
        vertex(pontosXYZ[ang][0][32] * sca, pontosXYZ[ang][1][32] * sca, pontosXYZ[ang][2][32] * sca);
        vertex(pontosXYZ[ang][0][36] * sca, pontosXYZ[ang][1][36] * sca, pontosXYZ[ang][2][36] * sca);
        endShape(CLOSE);

        beginShape();
        vertex(pontosXYZ[ang][0][20] * sca, pontosXYZ[ang][1][20] * sca, pontosXYZ[ang][2][20] * sca);
        vertex(pontosXYZ[ang][0][21] * sca, pontosXYZ[ang][1][21] * sca, pontosXYZ[ang][2][21] * sca);
        vertex(pontosXYZ[ang][0][22] * sca, pontosXYZ[ang][1][22] * sca, pontosXYZ[ang][2][22] * sca);
        vertex(pontosXYZ[ang][0][23] * sca, pontosXYZ[ang][1][23] * sca, pontosXYZ[ang][2][23] * sca);
        vertex(pontosXYZ[ang][0][24] * sca, pontosXYZ[ang][1][24] * sca, pontosXYZ[ang][2][24] * sca);
        endShape(CLOSE);

        beginShape();
        vertex(pontosXYZ[ang][0][24] * sca, pontosXYZ[ang][1][24] * sca, pontosXYZ[ang][2][24] * sca);
        vertex(pontosXYZ[ang][0][25] * sca, pontosXYZ[ang][1][25] * sca, pontosXYZ[ang][2][25] * sca);
        vertex(pontosXYZ[ang][0][26] * sca, pontosXYZ[ang][1][26] * sca, pontosXYZ[ang][2][26] * sca);
        vertex(pontosXYZ[ang][0][27] * sca, pontosXYZ[ang][1][27] * sca, pontosXYZ[ang][2][27] * sca);
        vertex(pontosXYZ[ang][0][28] * sca, pontosXYZ[ang][1][28] * sca, pontosXYZ[ang][2][28] * sca);
        endShape(CLOSE);

        beginShape();
        vertex(pontosXYZ[ang][0][28] * sca, pontosXYZ[ang][1][28] * sca, pontosXYZ[ang][2][28] * sca);
        vertex(pontosXYZ[ang][0][29] * sca, pontosXYZ[ang][1][29] * sca, pontosXYZ[ang][2][29] * sca);
        vertex(pontosXYZ[ang][0][30] * sca, pontosXYZ[ang][1][30] * sca, pontosXYZ[ang][2][30] * sca);
        vertex(pontosXYZ[ang][0][31] * sca, pontosXYZ[ang][1][31] * sca, pontosXYZ[ang][2][31] * sca);
        vertex(pontosXYZ[ang][0][32] * sca, pontosXYZ[ang][1][32] * sca, pontosXYZ[ang][2][32] * sca);
        endShape(CLOSE);

        beginShape();
        vertex(pontosXYZ[ang][0][32] * sca, pontosXYZ[ang][1][32] * sca, pontosXYZ[ang][2][32] * sca);
        vertex(pontosXYZ[ang][0][33] * sca, pontosXYZ[ang][1][33] * sca, pontosXYZ[ang][2][33] * sca);
        vertex(pontosXYZ[ang][0][34] * sca, pontosXYZ[ang][1][34] * sca, pontosXYZ[ang][2][34] * sca);
        vertex(pontosXYZ[ang][0][35] * sca, pontosXYZ[ang][1][35] * sca, pontosXYZ[ang][2][35] * sca);
        vertex(pontosXYZ[ang][0][36] * sca, pontosXYZ[ang][1][36] * sca, pontosXYZ[ang][2][36] * sca);
        endShape(CLOSE);  
        
    }
}