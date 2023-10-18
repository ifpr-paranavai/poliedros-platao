var angR;

var X;
var Y;
var Z;
var pontosXYZ=[];


var maiorX;
var maiorY;
var maiorZ;
var menorX;
var menorY;
var menorZ;
var deslocamentoXYZ=[];


var squareColor;
    
class Icosaedro{

    constructor() {
		
        //blendMode(LIGHTEST);

        //squareColor = color(0, 0, 250);
        //squareColor.setAlpha(50);


        Algebra(3, 0, 1, () => {
            var point = (x, y, z) => !(1e0 + x * 1e1 + y * 1e2 + z * 1e3);
            var motor = (line, angle_or_distance) => Math.E ** (angle_or_distance / 2 * line);

            // Create some points (P).
            var p0  = point(-0.5, 0, 0), p11 = point(5, 0.86603, 0),
            p1  = point(0, 0.86603, 0),  p12 = point(0.5, 1.73205, 0),
            p2  = point(0.5, 0, 0),      p13 = point(1.5, 1.73205, 0), 
            p3  = point(1, 0.86603, 0),  p14 = point(2.5, 1.73205, 0),
            p4  = point(1.5, 0, 0),      p15 = point(3.5, 1.73205, 0),
            p5  = point(2, 0.86603, 0),  p16 = point(4.5, 1.73205, 0),
            p6  = point(2.5, 0, 0),      p17 = point(0, -0.86603, 0),
            p7  = point(3, 0.86603, 0),  p18 = point(1, -0.86603, 0),
            p8  = point(3.5, 0, 0),      p19 = point(2, -0.86603, 0),
            p9  = point(4, 0.86603, 0),  p20 = point(3, -0.86603, 0),
            p10 = point(4.5, 0, 0),      p21 = point(4, -0.86603, 0);

            var L1,L2,L3,L4,L5,L6,L7,L8,L9,L10,L11,L12,L13,L14,L15,L16,L17,L18,L19;
            var R1,R2,R3,R4,R5,R6,R7,R8,R9,R10,R11,R12,R13,R14,R15,R16,R17,R18,R19;



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
                p0  = point(-0.5, 0, 0),     p11 = point(5, 0.86603, 0),
                p1  = point(0, 0.86603, 0),  p12 = point(0.5, 1.73205, 0),
                p2  = point(0.5, 0, 0),      p13 = point(1.5, 1.73205, 0), 
                p3  = point(1, 0.86603, 0),  p14 = point(2.5, 1.73205, 0),
                p4  = point(1.5, 0, 0),      p15 = point(3.5, 1.73205, 0),
                p5  = point(2, 0.86603, 0),  p16 = point(4.5, 1.73205, 0),
                p6  = point(2.5, 0, 0),      p17 = point(0, -0.86603, 0),
                p7  = point(3, 0.86603, 0),  p18 = point(1, -0.86603, 0),
                p8  = point(3.5, 0, 0),      p19 = point(2, -0.86603, 0),
                p9  = point(4, 0.86603, 0),  p20 = point(3, -0.86603, 0),
                p10 = point(4.5, 0, 0),      p21 = point(4, -0.86603, 0);

                angR = radians(i);


                if (i == 360) {
                    angR = radians(180 - 138.190);//angulos diedros( entre as faces/planos) do poliedro "fechado",
                                                  //180 - x porque o poliedro já começa planificado( 180 entre as faces)
                }
                else if (i == 361) {
                    angR = radians(180 + 138.190);
                }


                L1 = (p1 & p2).Normalized;
                R1 = motor(L1, -angR);
                //
                //p0 = (R1 * p0 * R1.Conjugate);    
                //p1 = (R1 * p1 * R1.Conjugate); 
                //p2 = (R1 * p2 * R1.Conjugate); 
                p3 = (R1 * p3 * R1.Conjugate);
                p4 = (R1 * p4 * R1.Conjugate); 
                p5 = (R1 * p5 * R1.Conjugate); 
                p6 = (R1 * p6 * R1.Conjugate);
                p7 = (R1 * p7 * R1.Conjugate); 
                p8 = (R1 * p8 * R1.Conjugate); 
                p9 = (R1 * p9 * R1.Conjugate);
                p10 = (R1 * p10 * R1.Conjugate);
                p11 = (R1 * p11 * R1.Conjugate);
                p12 = (R1 * p12 * R1.Conjugate);
                p13 = (R1 * p13 * R1.Conjugate);
                p14 = (R1 * p14 * R1.Conjugate);
                p15 = (R1 * p15 * R1.Conjugate);
                p16 = (R1 * p16 * R1.Conjugate);
                //p17 = (R1 * p17 * R1.Conjugate);
                //p18 = (R1 * p18 * R1.Conjugate);
                p19 = (R1 * p19 * R1.Conjugate);
                p20 = (R1 * p20 * R1.Conjugate);
                p21 = (R1 * p21 * R1.Conjugate);



                L2 = (p2 & p3).Normalized;
                R2 = motor(L2, angR);
                //p0 = (R2 * p3 * R2.Conjugate);
                //p1 = (R2 * p4 * R2.Conjugate); 
                //p2 = (R2 * p5 * R2.Conjugate); 
                //p3 = (R2 * p3 * R2.Conjugate);
                p4 = (R2 * p4 * R2.Conjugate); 
                p5 = (R2 * p5 * R2.Conjugate); 
                p6 = (R2 * p6 * R2.Conjugate);
                p7 = (R2 * p7 * R2.Conjugate); 
                p8 = (R2 * p8 * R2.Conjugate); 
                p9 = (R2 * p9 * R2.Conjugate);
                p10 = (R2 * p10 * R2.Conjugate);
                p11 = (R2 * p11 * R2.Conjugate);
                //p12 = (R2 * p12 * R2.Conjugate);
                //p13 = (R2 * p13 * R2.Conjugate);
                p14 = (R2 * p14 * R2.Conjugate);
                p15 = (R2 * p15 * R2.Conjugate);
                p16 = (R2 * p16 * R2.Conjugate);
                //p17 = (R2 * p17 * R2.Conjugate);
                p18 = (R2 * p18 * R2.Conjugate);
                p19 = (R2 * p19 * R2.Conjugate);
                p20 = (R2 * p20 * R2.Conjugate);
                p21 = (R2 * p21 * R2.Conjugate);


                L3 = (p3 & p4).Normalized;
                R3 = motor(L3, -angR);
                //p0 = (R3 * p3 * R3.Conjugate);
                //p1 = (R3 * p4 * R3.Conjugate); 
                //p2 = (R3 * p2 * R2.Conjugate); 
                //p3 = (R3 * p3 * R3.Conjugate);
                //p4 = (R3 * p4 * R3.Conjugate); 
                p5 = (R3 * p5 * R3.Conjugate); 
                p6 = (R3 * p6 * R3.Conjugate);
                p7 = (R3 * p7 * R3.Conjugate); 
                p8 = (R3 * p8 * R3.Conjugate); 
                p9 = (R3 * p9 * R3.Conjugate);
                p10 = (R3 * p10 * R3.Conjugate);
                p11 = (R3 * p11 * R3.Conjugate);
                //p12 = (R3 * p12 * R3.Conjugate);
                p13 = (R3 * p13 * R3.Conjugate);
                p14 = (R3 * p14 * R3.Conjugate);
                p15 = (R3 * p15 * R3.Conjugate);
                p16 = (R3 * p16 * R3.Conjugate);
                //p17 = (R3 * p17 * R3.Conjugate);
                //p18 = (R3 * p18 * R3.Conjugate);
                //p19 = (R3 * p19 * R3.Conjugate);
                p20 = (R3 * p20 * R3.Conjugate);
                p21 = (R3 * p21 * R3.Conjugate);



                L4 = (p4 & p5).Normalized;
                R4 = motor(L4, angR);
                //p0 = (R4 * p3 * R4.Conjugate);
                //p1 = (R4 * p4 * R4.Conjugate); 
                //p2 = (R4 * p5 * R4.Conjugate); 
                //p3 = (R4 * p3 * R4.Conjugate);
                //p4 = (R4 * p4 * R4.Conjugate); 
                //p5 = (R4 * p5 * R4.Conjugate); 
                p6 = (R4 * p6 * R4.Conjugate);
                p7 = (R4 * p7 * R4.Conjugate); 
                p8 = (R4 * p8 * R4.Conjugate); 
                p9 = (R4 * p9 * R4.Conjugate);
                p10 = (R4 * p10 * R4.Conjugate);
                p11 = (R4 * p11 * R4.Conjugate);
                //p12 = (R4 * p12 * R4.Conjugate);
                //p13 = (R4 * p13 * R4.Conjugate);
                //p14 = (R4 * p14 * R4.Conjugate);
                p15 = (R4 * p15 * R4.Conjugate);
                p16 = (R4 * p16 * R4.Conjugate);
                //p17 = (R4 * p17 * R4.Conjugate);
                //p18 = (R4 * p18 * R4.Conjugate);
                p19 = (R4 * p19 * R4.Conjugate);
                p20 = (R4 * p20 * R4.Conjugate);
                p21 = (R4 * p21 * R4.Conjugate);


                L5 = (p5 & p6).Normalized;
                R5 = motor(L5, -angR);
                //p0 = (R5 * p3 * R5.Conjugate);
                //p1 = (R5 * p4 * R5.Conjugate);
                //p2 = (R5 * p5 * R5.Conjugate);
                //p3 = (R5 * p3 * R5.Conjugate);
                //p4 = (R5 * p4 * R5.Conjugate); 
                //p5 = (R5 * p5 * R5.Conjugate); 
                //p6 = (R5 * p6 * R5.Conjugate);
                p7 = (R5 * p7 * R5.Conjugate); 
                p8 = (R5 * p8 * R5.Conjugate); 
                p9 = (R5 * p9 * R5.Conjugate);
                p10 = (R5 * p10 * R5.Conjugate);
                p11 = (R5 * p11 * R5.Conjugate);
                //p12 = (R5 * p12 * R5.Conjugate);
                //p13 = (R5 * p13 * R5.Conjugate);
                p14 = (R5 * p14 * R5.Conjugate);
                p15 = (R5 * p15 * R5.Conjugate);
                p16 = (R5 * p16 * R5.Conjugate);
                //p17 = (R5 * p17 * R5.Conjugate);
                //p18 = (R5 * p18 * R5.Conjugate);
                //p19 = (R5 * p19 * R5.Conjugate);
                //p20 = (R5 * p20 * R5.Conjugate);
                p21 = (R5 * p21 * R5.Conjugate);


                L6 = (p6 & p7).Normalized;
                R6 = motor(L6, angR);
                //p0 = (R6 * p3 * R6.Conjugate);
                //p1 = (R6 * p4 * R6.Conjugate); 
                //p3 = (R6 * p3 * R6.Conjugate);
                //p4 = (R6 * p4 * R6.Conjugate); 
                //p5 = (R6 * p5 * R6.Conjugate); 
                //p6 = (R6 * p6 * R6.Conjugate);
                //p7 = (R6 * p7 * R6.Conjugate); 
                p8 = (R6 * p8 * R6.Conjugate); 
                p9 = (R6 * p9 * R6.Conjugate);
                p10 = (R6 * p10 * R6.Conjugate);
                p11 = (R6 * p11 * R6.Conjugate);
                //p12 = (R6 * p12 * R6.Conjugate);
                //p13 = (R6 * p13 * R6.Conjugate);
                //p14 = (R6 * p14 * R6.Conjugate);
                //p15 = (R6 * p15 * R6.Conjugate);
                p16 = (R6 * p16 * R6.Conjugate);
                //p17 = (R6 * p17 * R6.Conjugate);
                //p18 = (R6 * p18 * R6.Conjugate);
                //p19 = (R6 * p19 * R6.Conjugate);
                p20 = (R6 * p20 * R6.Conjugate);
                p21 = (R6 * p21 * R6.Conjugate);


                L7 = (p7 & p8).Normalized;
                R7 = motor(L7, -angR);
                //p0 = (R7 * p3 * R7.Conjugate);
                //p1 = (R7 * p4 * R7.Conjugate); 
                //p3 = (R7 * p3 * R7.Conjugate);
                //p4 = (R7 * p4 * R7.Conjugate); 
                //p5 = (R7 * p5 * R7.Conjugate); 
                //p6 = (R7 * p6 * R7.Conjugate);
                //p7 = (R7 * p7 * R7.Conjugate); 
                //p8 = (R7 * p8 * R7.Conjugate); 
                p9 = (R7 * p9 * R7.Conjugate);
                p10 = (R7 * p10 * R7.Conjugate);
                p11 = (R7 * p11 * R7.Conjugate);
                //p12 = (R7 * p12 * R7.Conjugate);
                //p13 = (R7 * p13 * R7.Conjugate);
                //p14 = (R7 * p14 * R7.Conjugate);
                p15 = (R7 * p15 * R7.Conjugate);
                p16 = (R7 * p16 * R7.Conjugate);
                //p17 = (R7 * p17 * R7.Conjugate);
                //p18 = (R7 * p18 * R7.Conjugate);
                //p19 = (R7 * p19 * R7.Conjugate);
                //p20 = (R7 * p20 * R7.Conjugate);
                //p21 = (R7 * p21 * R7.Conjugate);


                L8 = (p8 & p9).Normalized;
                R8 = motor(L8, angR);
                //p0 = (R8 * p3 * R8.Conjugate);
                //p1 = (R8 * p4 * R8.Conjugate); 
                //p3 = (R8 * p3 * R8.Conjugate);
                //p4 = (R8 * p4 * R8.Conjugate); 
                //p5 = (R8 * p5 * R8.Conjugate); 
                //p6 = (R8 * p6 * R8.Conjugate);
                //p7 = (R8 * p7 * R8.Conjugate); 
                //p8 = (R8 * p8 * R8.Conjugate); 
                //p9 = (R8 * p9 * R8.Conjugate);
                p10 = (R8 * p10 * R8.Conjugate);
                p11 = (R8 * p11 * R8.Conjugate);
                //p12 = (R8 * p12 * R8.Conjugate);
                //p13 = (R8 * p13 * R8.Conjugate);
                //p14 = (R8 * p14 * R8.Conjugate);
                //p15 = (R8 * p15 * R8.Conjugate);
                //p16 = (R8 * p16 * R8.Conjugate);
                //p17 = (R8 * p17 * R8.Conjugate);
                //p18 = (R8 * p18 * R8.Conjugate);
                //p19 = (R8 * p19 * R8.Conjugate);
                //p20 = (R8 * p20 * R8.Conjugate);
                p21 = (R8 * p21 * R8.Conjugate);


                L9 = (p9 & p10).Normalized;
                R9 = motor(L9, -angR);
                //p0 = (R9 * p3 * R9.Conjugate);
                //p1 = (R9 * p4 * R9.Conjugate); 
                //p3 = (R9 * p3 * R9.Conjugate);
                //p4 = (R9 * p4 * R9.Conjugate); 
                //p5 = (R9 * p5 * R9.Conjugate); 
                //p6 = (R9 * p6 * R9.Conjugate);
                //p7 = (R9 * p7 * R9.Conjugate); 
                //p8 = (R9 * p8 * R9.Conjugate); 
                //p9 = (R9 * p9 * R9.Conjugate);
                //p10 = (R9 * p10 * R9.Conjugate);
                p11 = (R9 * p11 * R9.Conjugate);
                //p12 = (R9 * p12 * R9.Conjugate);
                //p13 = (R9 * p13 * R9.Conjugate);
                //p14 = (R9 * p14 * R9.Conjugate);
                //p15 = (R9 * p15 * R9.Conjugate);
                p16 = (R9 * p16 * R9.Conjugate);
                //p17 = (R9 * p17 * R9.Conjugate);
                //p18 = (R9 * p18 * R9.Conjugate);
                //p19 = (R9 * p19 * R9.Conjugate);
                //p20 = (R9 * p20 * R9.Conjugate);
                //p21 = (R9 * p21 * R9.Conjugate);


                L10 = (p1 & p3).Normalized;
                R10 = motor(L10, -angR);
                p12 = (R10 * p12 * R10.Conjugate);


                L11 = (p3 & p5).Normalized;
                R11 = motor(L11, -angR);
                p13 = (R11 * p13 * R11.Conjugate);

                L12 = (p5 & p7).Normalized;
                R12 = motor(L12, -angR);
                p14 = (R12 * p14 * R12.Conjugate);

                L13 = (p7 & p9).Normalized;
                R13 = motor(L13, -angR);
                p15 = (R13 * p15 * R13.Conjugate);

                L14 = (p9 & p11).Normalized;
                R14 = motor(L14, -angR);
                p16 = (R14 * p16 * R14.Conjugate);

                L15 = (p0 & p2).Normalized;
                R15 = motor(L15, angR);
                p17 = (R15 * p17 * R15.Conjugate);

                L16 = (p2 & p4).Normalized;
                R16 = motor(L16, angR);
                p18 = (R16 * p18 * R16.Conjugate);

                L17 = (p4 & p6).Normalized;
                R17 = motor(L17, angR);
                p19 = (R17 * p19 * R17.Conjugate);

                L18 = (p6 & p8).Normalized;
                R18 = motor(L18, angR);
                p20 = (R18 * p20 * R18.Conjugate);

                L19 = (p8 & p10).Normalized;
                R19 = motor(L19, angR);
                p21 = (R19 * p21 * R19.Conjugate);



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
                    p20.Normalized.e023, p21.Normalized.e023
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
                    p20.Normalized.e013, p21.Normalized.e013
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
                    p20.Normalized.e012, p21.Normalized.e012
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
    //console.log(deslocamentoXYZ);
   
    }
    
    
    desenhar(ang, sca, faces){
        

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
        endShape(CLOSE);

        beginShape();
        vertex(pontosXYZ[ang][0][1] * sca, pontosXYZ[ang][1][1] * sca, pontosXYZ[ang][2][1] * sca);
        vertex(pontosXYZ[ang][0][2] * sca, pontosXYZ[ang][1][2] * sca, pontosXYZ[ang][2][2] * sca);
        vertex(pontosXYZ[ang][0][3] * sca, pontosXYZ[ang][1][3] * sca, pontosXYZ[ang][2][3] * sca);
        endShape(CLOSE);

        beginShape();
        vertex(pontosXYZ[ang][0][2] * sca, pontosXYZ[ang][1][2] * sca, pontosXYZ[ang][2][2] * sca);
        vertex(pontosXYZ[ang][0][3] * sca, pontosXYZ[ang][1][3] * sca, pontosXYZ[ang][2][3] * sca);
        vertex(pontosXYZ[ang][0][4] * sca, pontosXYZ[ang][1][4] * sca, pontosXYZ[ang][2][4] * sca);
        endShape(CLOSE);

        beginShape();
        vertex(pontosXYZ[ang][0][3] * sca, pontosXYZ[ang][1][3] * sca, pontosXYZ[ang][2][3] * sca);
        vertex(pontosXYZ[ang][0][4] * sca, pontosXYZ[ang][1][4] * sca, pontosXYZ[ang][2][4] * sca);
        vertex(pontosXYZ[ang][0][5] * sca, pontosXYZ[ang][1][5] * sca, pontosXYZ[ang][2][5] * sca);
        endShape(CLOSE);
//
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
        vertex(pontosXYZ[ang][0][8] * sca, pontosXYZ[ang][1][8] * sca, pontosXYZ[ang][2][8] * sca);
        endShape(CLOSE);

        beginShape();
        vertex(pontosXYZ[ang][0][7] * sca, pontosXYZ[ang][1][7] * sca, pontosXYZ[ang][2][7] * sca);
        vertex(pontosXYZ[ang][0][8] * sca, pontosXYZ[ang][1][8] * sca, pontosXYZ[ang][2][8] * sca);
        vertex(pontosXYZ[ang][0][9] * sca, pontosXYZ[ang][1][9] * sca, pontosXYZ[ang][2][9] * sca);
        endShape(CLOSE);

        beginShape();
        vertex(pontosXYZ[ang][0][8] * sca, pontosXYZ[ang][1][8] * sca, pontosXYZ[ang][2][8] * sca);
        vertex(pontosXYZ[ang][0][9] * sca, pontosXYZ[ang][1][9] * sca, pontosXYZ[ang][2][9] * sca);
        vertex(pontosXYZ[ang][0][10] * sca, pontosXYZ[ang][1][10] * sca, pontosXYZ[ang][2][10] * sca);
        endShape(CLOSE);

        beginShape();
        vertex(pontosXYZ[ang][0][9] * sca, pontosXYZ[ang][1][9] * sca, pontosXYZ[ang][2][9] * sca);
        vertex(pontosXYZ[ang][0][10] * sca, pontosXYZ[ang][1][10] * sca, pontosXYZ[ang][2][10] * sca);
        vertex(pontosXYZ[ang][0][11] * sca, pontosXYZ[ang][1][11] * sca, pontosXYZ[ang][2][11] * sca);
        endShape(CLOSE);

        //

        beginShape();
        vertex(pontosXYZ[ang][0][1] * sca, pontosXYZ[ang][1][1] * sca, pontosXYZ[ang][2][1] * sca);
        vertex(pontosXYZ[ang][0][3] * sca, pontosXYZ[ang][1][3] * sca, pontosXYZ[ang][2][3] * sca);
        vertex(pontosXYZ[ang][0][12] * sca, pontosXYZ[ang][1][12] * sca, pontosXYZ[ang][2][12] * sca);
        endShape(CLOSE);

        beginShape();
        vertex(pontosXYZ[ang][0][3] * sca, pontosXYZ[ang][1][3] * sca, pontosXYZ[ang][2][3] * sca);
        vertex(pontosXYZ[ang][0][5] * sca, pontosXYZ[ang][1][5] * sca, pontosXYZ[ang][2][5] * sca);
        vertex(pontosXYZ[ang][0][13] * sca, pontosXYZ[ang][1][13] * sca, pontosXYZ[ang][2][13] * sca);
        endShape(CLOSE);

        beginShape();
        vertex(pontosXYZ[ang][0][5] * sca, pontosXYZ[ang][1][5] * sca, pontosXYZ[ang][2][5] * sca);
        vertex(pontosXYZ[ang][0][7] * sca, pontosXYZ[ang][1][7] * sca, pontosXYZ[ang][2][7] * sca);
        vertex(pontosXYZ[ang][0][14] * sca, pontosXYZ[ang][1][14] * sca, pontosXYZ[ang][2][14] * sca);
        endShape(CLOSE);

        beginShape();
        vertex(pontosXYZ[ang][0][7] * sca, pontosXYZ[ang][1][7] * sca, pontosXYZ[ang][2][7] * sca);
        vertex(pontosXYZ[ang][0][9] * sca, pontosXYZ[ang][1][9] * sca, pontosXYZ[ang][2][9] * sca);
        vertex(pontosXYZ[ang][0][15] * sca, pontosXYZ[ang][1][15] * sca, pontosXYZ[ang][2][15] * sca);
        endShape(CLOSE);

        beginShape();
        vertex(pontosXYZ[ang][0][9] * sca, pontosXYZ[ang][1][9] * sca, pontosXYZ[ang][2][9] * sca);
        vertex(pontosXYZ[ang][0][11] * sca, pontosXYZ[ang][1][11] * sca, pontosXYZ[ang][2][11] * sca);
        vertex(pontosXYZ[ang][0][16] * sca, pontosXYZ[ang][1][16] * sca, pontosXYZ[ang][2][16] * sca);
        endShape(CLOSE);
        

        //

        beginShape();
        vertex(pontosXYZ[ang][0][0] * sca, pontosXYZ[ang][1][0] * sca, pontosXYZ[ang][2][0] * sca);
        vertex(pontosXYZ[ang][0][2] * sca, pontosXYZ[ang][1][2] * sca, pontosXYZ[ang][2][2] * sca);
        vertex(pontosXYZ[ang][0][17] * sca, pontosXYZ[ang][1][17] * sca, pontosXYZ[ang][2][17] * sca);
        endShape(CLOSE);

        beginShape();
        vertex(pontosXYZ[ang][0][2] * sca, pontosXYZ[ang][1][2] * sca, pontosXYZ[ang][2][2] * sca);
        vertex(pontosXYZ[ang][0][4] * sca, pontosXYZ[ang][1][4] * sca, pontosXYZ[ang][2][4] * sca);
        vertex(pontosXYZ[ang][0][18] * sca, pontosXYZ[ang][1][18] * sca, pontosXYZ[ang][2][18] * sca);
        endShape(CLOSE);

        beginShape();
        vertex(pontosXYZ[ang][0][4] * sca, pontosXYZ[ang][1][4] * sca, pontosXYZ[ang][2][4] * sca);
        vertex(pontosXYZ[ang][0][6] * sca, pontosXYZ[ang][1][6] * sca, pontosXYZ[ang][2][6] * sca);
        vertex(pontosXYZ[ang][0][19] * sca, pontosXYZ[ang][1][19] * sca, pontosXYZ[ang][2][19] * sca);
        endShape(CLOSE);

        beginShape();
        vertex(pontosXYZ[ang][0][6] * sca, pontosXYZ[ang][1][6] * sca, pontosXYZ[ang][2][6] * sca);
        vertex(pontosXYZ[ang][0][8] * sca, pontosXYZ[ang][1][8] * sca, pontosXYZ[ang][2][8] * sca);
        vertex(pontosXYZ[ang][0][20] * sca, pontosXYZ[ang][1][20] * sca, pontosXYZ[ang][2][20] * sca);
        endShape(CLOSE);

        beginShape();
        vertex(pontosXYZ[ang][0][8] * sca, pontosXYZ[ang][1][8] * sca, pontosXYZ[ang][2][8] * sca);
        vertex(pontosXYZ[ang][0][10] * sca, pontosXYZ[ang][1][10] * sca, pontosXYZ[ang][2][10] * sca);
        vertex(pontosXYZ[ang][0][21] * sca, pontosXYZ[ang][1][21] * sca, pontosXYZ[ang][2][21] * sca);
        endShape(CLOSE);
        
    }
}