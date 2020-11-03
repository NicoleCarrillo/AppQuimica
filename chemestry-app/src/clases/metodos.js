import OBJETOConstantesAntoine from "../clases/constantesAntoine";
/*var matrix=[];
var x1=[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1];
var x2=[1,0.9,0.8,0.7,0.6,0.5,0.4,0.3,0.2,0.1,0];

function tGeneral(n){
		var matrix=[0];
    for(var i=0; i<n; i++) {
        matrix[i] = [0,0,0,0,0,0,0,0];
    }
    for (var i = 0; i < n; i++) {
        matrix[i][2]=x1[i][1];
        matrix[i][5]=x2[i][1];   
    }
    matrix[0][3]=0;
    matrix[n][3]=1;
    matrix[0][8]=1;
    matrix[n][8]=0;
    return matrix

}
matrix=tGeneral(11);*/

 function imprimir(){
    return "Hola Mundo";
}

function orquestador(tipo){
    if(tipo===0){
        return sitemaIdeal();
    }else {

    }
}

function sistemaReal(){
    return "hola";
}

function sitemaIdeal(){
    const OBJETO = {
        //!!!!Cambiar valores
        name1:"acetona",
        name2:"cloroformo",
        c_antoine1: OBJETOConstantesAntoine.acetona,
        c_antoine2:OBJETOConstantesAntoine.cloroformo,
        n:11,
        x1:function(){
            var arreglo = [0], valorInicio = 0;
            while (valorInicio < 1) {
                arreglo.push(valorInicio += 1/this.n || 1);
            }
            return arreglo;
        },
        x2:function(){
            var arreglo = [1], valorInicio = 1;
            while (valorInicio > 0) {
                arreglo.push(valorInicio -= 1/this.n || 0);
            }
            arreglo.pop();
            arreglo.push(0);
            return arreglo;
        },
        t_general:function(){
            var matrix=[0];
            for(let i=0; i<this.n; i++) {
                matrix[i] = [0,0,0,0,0,0,0,0];
            }
            for (let i = 0; i < this.n; i++) {
                matrix[i][1]=this.x1[i];
                matrix[i][4]=this.x2[i];   
            }
            matrix[0][3]=0;
            matrix[this.n-1][3]=1;
            matrix[0][8]=1;
            matrix[this.n-1][8]=0;
            return matrix
        },
        imprimir:imprimir,//*ASI INVOCAS METODOS EN JAVASCRIPT -> NICOLE
        orquestador:orquestador,
    };
let promt1,
  promt2,
  promptPresion,
  tipo_variable,
  tipo_solucion,
  T,
  p,
  Peb1,
  Peb2,
  xa,
  xb,
  Psup,
  tSup,
  T_general=OBJETO.t_general(),
  Respuesta;

if (tipo_solucion == 0) {
  promt1 = "Con temperatura ctte = 1 o Presión ctte = 0";
  tipo_variable = prompt(promt1);//!!Modificar
}

//* Sistema ideal con temperatura constante

if (tipo_variable == 1) {
  let j;

  promt2 = "Introduce la temperatura °C";
  T = prompt(promt2);//!!! Modificar

  // Calculo de las presiones de las soluciones
  // Presión de la especie 1
  Peb1 = Math.pow(
    10,
    (OBJETO.c_antoine1[0] - OBJETO.c_antonie1[1]) / (OBJETO.c_antonie1[2] + T)
  );

  // Presión de la especie 2

  Peb2 = Math.pow(
    10,
    (OBJETO.c_antonie2[0] - OBJETO.c_antonie2[1]) / (OBJETO.c_antonie2[2] + T)
  );

  for (j = 0; j < OBJETO.n; j++) {
    xa = Peb1 * 0.2;
    xb = Peb2 * 1.8;
    Psup = (xa + xb) / 2;
    T_general[j][7] = 0;
    while (Math.abs(T_general[j][7] - 1) > 0.001) {
      Psup = (xa + xb) / 2;
      T_general[j][3] = (T_general[j][1] * Peb1) / Psup; //Calculo de y2
      T_general[j][6] = (T_general[j][4] * Peb2) / Psup; //Calculo de y2
      T_general[j][7] = T_general[j][3] + T_general[j][6];

      if (T_general[j][7] > 1) {
        xa = Psup;
      } else {
        xb = Psup;
      }
    }
    T_general[j][0] = Psup;

    T_general[j][2] =
      OBJETO.c_antonie1[2] / OBJETO.c_antonie1[1] -
      Math.log(T_general[j][0]) -
      OBJETO.c_antonie1[3];

    T_general[j][5] =
      OBJETO.c_antonie2[2] / OBJETO.c_antonie2[1] -
      Math.log(T_general[j][0]) -
      OBJETO.c_antonie2[3];
  }
}

//* Sistema ideal con presion constante

if (tipo_variable==0){
    promptPresion="Introduce la presion en mmHg";
    p=prompt(promptPresion);//!!Modificar
    //Calculo de las temperaturas
    T_general[OBJETO.n][0]=(OBJETO.c_antoine1[1]/OBJETO.c_antoine1[0]-Math.log10(p))-OBJETO.c_antoine1[2];
    T_general[0][0]=(OBJETO.c_antoine2[1]/OBJETO.c_antoine2[0]-Math.log10(p))-OBJETO.c_antoine2[2];

    for(var i=0; i<OBJETO.n;i++){
        //Para que la temperatura se ajuste
        xa=T_general[OBJETO.n][0]*0.2;//Temperatura baja
        xb=T_general[0][0]*1.8;//Temperatura alta
        tSup=(xa/xb)/2;
        T_general[i][7]=0;
        while(Math.abs(T_general[i][7]-1)>0.001){
            tSup=(xa+xb)/2; //Temperatura de suposicion del sisteme en °C
            T_general=[i][2]=Math.pow(10, OBJETO.c_antoine1[0]-OBJETO.c_antoine1[1]/(OBJETO.c_antoine1[2])+tSup);//Presiones de saturación especie 1
            T_general=[i][2]=Math.pow(10, OBJETO.c_antoine1[0]-OBJETO.c_antoine1[1]/(OBJETO.c_antoine1[2])+tSup);//Presiones de saturación especie 2
            T_general[i][3]=T_general[i][1]*T_general[i][2]/p;//Calculo de y1
            T_general[i][6]=T_general[i][4]*T_general[i][5]/p;//Calculo de y2
            T_general[i][7]=T_general[i][3]+T_general[i][6];
            if(T_general[i][3]>1){
                xb=tSup;
            } else {
                xa=tSup;
            }

        }
        T_general[1][0]=tSup;
    }
}


    return OBJETO;
}

const OBJETO=sitemaIdeal();



export default OBJETO;
