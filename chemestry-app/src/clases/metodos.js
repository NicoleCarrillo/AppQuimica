import OBJETOConstantesAntoine from "../clases/constantesAntoine";

const OBJETO = sitemaIdeal();
var nombreSis1, nombreSis2, nombreVar, nombreConst, nombreGrado;
const n = 11;
let t,p,peb1,peb2,xa,xb,psup,tSup,T_general,respuesta;

function orquestador(tipo,nombreSistema1,nombreSistema2,variable,constante,grado) {
  if (nombreSis1 === undefined) { //~EVALUA EL PRIMER MOMENTO DEL CODIGO CUANDO SE ABRE LA APLICACION
    nombreSis1 = "acetona"; //~ MODO DEFAULT
  } else {
    if (nombreSistema1 !== "") {
      nombreSis1 = nombreSistema1;
    }
  }

  if (nombreSis2 === undefined) {
    nombreSis2 = "cloroformo";
  } else {
    if (nombreSistema2 !== "") {
      nombreSis2 = nombreSistema2;
    }
  }

  if (nombreVar === undefined) {
    nombreVar = "Presion";
  } else {
    if (variable !== "") {
      nombreVar = variable;
    }
  }

  if (nombreConst === undefined) {
    nombreConst = "Temperatura";
  } else {
    if (constante !== "") {
      nombreConst = constante;
    }
  }

  if (nombreGrado === undefined) {
    nombreGrado = 20;
  } else {
    if (constante !== "") {
      nombreGrado = grado;
    }
  }

  if (tipo === 0) {
    return sitemaIdeal();
  } else {
    return sistemaReal();
  }
}

function sistemaReal() {
  return "hola";
}

function sitemaIdeal() {
  var OBJETO = {
    variable: nombreVar,
    gradoo: nombreGrado,
    n: 11,
    c_antonie1: OBJETOConstantesAntoine[nombreSis1], //!!!!CAMBIAR VALORES
    c_antonie2: OBJETOConstantesAntoine[nombreSis2],
    x1: x1(11),
    x2: x2(11),
    T_general: t_general(x1,x2,11),
    //*ASI INVOCAS METODOS EN JAVASCRIPT -> NICOLE
    orquestador: orquestador,
  };

  
  //& SISTEMA IDEAL TEMPERATURA CONSTANTE
  if (nombreConst === "Temperatura") {
    let j;
    t = nombreGrado;
    T_general=OBJETO.T_general;
    
    peb1 = Math.pow(10,(OBJETO.c_antonie1[0] - OBJETO.c_antonie1[1] / (OBJETO.c_antonie1[2] + t))); //^ PRESION DE LA ESPECIE 1
    peb2 = Math.pow(10,(OBJETO.c_antonie2[0] - OBJETO.c_antonie2[1] / (OBJETO.c_antonie2[2] + t))); //^ PRESION DE LA ESPECIE 2
    
    for (j = 0; j <= n; j++) {
      xa = peb1 * 0.2;
      xb = peb2 * 1.8;
      psup = (xa + xb) / 2;
      T_general[j][7] = 0;
      while (Math.abs(T_general[j][7] - 1) > 0.001) {
        psup = (xa + xb) / 2;
        T_general[j][3] = (T_general[j][1] * peb1) / psup; //*Calculo de y2
        T_general[j][6] = (T_general[j][4] * peb2) / psup; //*Calculo de y2
        T_general[j][7] = T_general[j][3] + T_general[j][6];
        if (T_general[j][7] > 1) {
          xa = psup;
        } else {
          xb = psup;
        }
      }
      T_general[j][0] = psup;
      T_general[j][2] = (OBJETO.c_antonie1[1] / (OBJETO.c_antonie1[0] - Math.log(T_general[j][0]))) -OBJETO.c_antonie1[2];
      T_general[j][5] = (OBJETO.c_antonie2[1] / (OBJETO.c_antonie2[0] - Math.log(T_general[j][0]))) -OBJETO.c_antonie2[2];
    }
    console.log(T_general[0][0]);
  }

  ////& SISTEMA IDEAL PRESION CONSTANTE
  if (nombreConst === "Presion") {
    p = nombreGrado;
    T_general=OBJETO.T_general;
    T_general[11][0] = (OBJETO.c_antonie1[1] / (OBJETO.c_antonie1[0] - Math.log10(p))) - OBJETO.c_antonie1[2];
    T_general[0][0] = (OBJETO.c_antonie2[1] / (OBJETO.c_antonie2[0] - Math.log10(p))) - OBJETO.c_antonie2[2];
    for (let i = 0; i <= 11; i++) {  //^ PARA QUE LA TEMPERATURA SE AJUSTE
      xa = T_general[11][0] * 0.2; //^TEMPERATURA BAJA
      xb = T_general[0][0] * 1.8; //^TEMPERATURA ALTA
      tSup = (xa + xb) / 2;
      T_general[i][7] = 0;
      while (Math.abs(T_general[i][7] - 1) > 0.001) {
        tSup = (xa + xb) / 2; //*Temperatura de suposicion del sisteme en °C
        T_general[i][2] = Math.pow(10,OBJETO.c_antonie1[0] - OBJETO.c_antonie1[1] / OBJETO.c_antonie1[2] + tSup); //*Presiones de saturación especie 1
        T_general[i][5] = Math.pow(10,OBJETO.c_antonie2[0] - OBJETO.c_antonie2[1] / OBJETO.c_antonie2[2] + tSup); //*Presiones de saturación especie 2
        T_general[i][3] = (T_general[i][1] * T_general[i][2]) / p; //*Calculo de y1
        T_general[i][6] = (T_general[i][4] * T_general[i][5]) / p; //*Calculo de y2
        T_general[i][7] = T_general[i][3] + T_general[i][6];
        
        if (T_general[i][7] > 1) {
          xb = tSup;
        } else {
          xa = tSup;
        }
      }
      T_general[i][0] = tSup;
    }
    console.log(T_general[0][0]);
  }

  return OBJETO;
}

function x1(n) {
  var arreglo = [0], valorInicio = 0;
  while(valorInicio < 1){
    var tF=valorInicio += 1/11 || 1;
      arreglo.push(tF.toFixed(1));
  }
  return arreglo;
}

function x2(n) {
  let arreglo = [1],valorInicio = 1;
  while (valorInicio > 0) {
    let tF = (valorInicio -= 1 / n || 1);
    arreglo.push(tF.toFixed(1));
  }
  arreglo.pop();
  arreglo.push(0);
  return arreglo;
}

function t_general(x1,x2,n) {
  let matrix = [0];
  for (let i = 0; i <= n; i++) {
    matrix[i] = [0,0,0,0,0,0,0,0];
  }
  for (let i = 0; i <= n; i++) {
    matrix[i][1] = x1[i];
    matrix[i][4] = x2[i];
  }
  matrix[0][3] = 0;
  matrix[n - 1][3] = 1;
  matrix[0][6] = 1;
  matrix[n - 1][6] = 0;
  return matrix;
}

export default OBJETO;
