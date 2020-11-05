import OBJETOConstantesAntoine from "../clases/constantesAntoine";

const OBJETO = sitemaIdeal();
var nombreSis1, nombreSis2, nombreVar, nombreConst, nombreGrado;
const n = 11;
let t,
  p,
  peb1,
  peb2,
  xa,
  xb,
  psup,
  tSup,
  x1 = x1function(11),
  x2 = x2function(11),
  T_general = t_general(x1, x2, 11),
  respuesta;

function orquestador(
  tipo,
  nombreSistema1,
  nombreSistema2,
  variable,
  constante,
  grado
) {
  if (nombreSis1 === undefined) {
    //~EVALUA EL PRIMER MOMENTO DEL CODIGO CUANDO SE ABRE LA APLICACION
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
    name1: nombreSis1,
    name2: nombreSis2,
    variable: nombreVar,
    nic: nombreGrado,
    n: 11,
    c_antoine1: OBJETOConstantesAntoine.acetona, //!!!!CAMBIAR VALORES
    c_antoine2: OBJETOConstantesAntoine.cloroformo,
    x1: function () {
      var arreglo = [0],
        valorInicio = 0;
      while (valorInicio < 1) {
        arreglo.push((valorInicio += 1 / this.n || 1));
      }
      return arreglo;
    },
    x2: function () {
      var arreglo = [1],
        valorInicio = 1;
      while (valorInicio > 0) {
        arreglo.push((valorInicio -= 1 / this.n || 0));
      }
      arreglo.pop();
      arreglo.push(0);
      return arreglo;
    },
    t_general: function () {
      var matrix = [0];
      for (let i = 0; i < this.n; i++) {
        matrix[i] = [0, 0, 0, 0, 0, 0, 0, 0];
      }
      for (let i = 0; i < this.n; i++) {
        matrix[i][1] = this.x1[i];
        matrix[i][4] = this.x2[i];
      }
      matrix[0][3] = 0;
      matrix[this.n - 1][3] = 1;
      matrix[0][8] = 1;
      matrix[this.n - 1][8] = 0;
      return matrix;
    },
    //*ASI INVOCAS METODOS EN JAVASCRIPT -> NICOLE
    orquestador: orquestador,
  };

  //& SISTEMA IDEAL PRESION CONSTANTE
  if (nombreConst === "Presion") {
    let j;
    t = nombreGrado;
    //~ CALCULO DE LAS PRESIONES DE LAS SOLUCIONES
    //^ PRESION DE LA ESPECIE 1
    peb1 = Math.pow(
      10,
      (OBJETO.c_antoine1[0] - OBJETO.c_antonie1[1]) / (OBJETO.c_antonie1[2] + t)
    );
    //^ PRESION DE LA ESPECIE 2
    peb2 = Math.pow(
      10,
      (OBJETO.c_antonie2[0] - OBJETO.c_antonie2[1]) / (OBJETO.c_antonie2[2] + t)
    );
    for (j = 0; j < n; j++) {
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

  ////& SISTEMA IDEAL TEMPERATURA CONSTANTE
  if (nombreConst === "Temperatura") {
    p = nombreGrado;
    console.log("hola 1");
    T_general[11][0] =
      OBJETO.c_antoine1[1] / OBJETO.c_antoine1[0] -
      Math.log10(p) -
      OBJETO.c_antoine1[2];
    T_general[0][0] =
      OBJETO.c_antoine2[1] / OBJETO.c_antoine2[0] -
      Math.log10(p) -
      OBJETO.c_antoine2[2];
    for (var i = 0; i < n; i++) {
      console.log("hola for");
      //^ PARA QUE LA TEMPERATURA SE AJUSTE
      xa = T_general[n][0] * 0.2; //^TEMPERATURA BAJA
      xb = T_general[0][0] * 1.8; //^TEMPERATURA ALTA
      tSup = xa / xb / 2;
      T_general[i][7] = 0;
      while (Math.abs(T_general[i][7] - 1) > 0.001) {
        tSup = (xa + xb) / 2; //Temperatura de suposicion del sisteme en °C
        T_general[i][2] = Math.pow(
          10,
          OBJETO.c_antoine1[0] -
            OBJETO.c_antoine1[1] / OBJETO.c_antoine1[2] +
            tSup
        ); //Presiones de saturación especie 1
        console.log(OBJETO.c_antoine1[0]);
        console.log(OBJETO.c_antoine1[1]);
        console.log(OBJETO.c_antoine1[2]);
        console.log(tSup);
        console.log(T_general[i][2]);
        T_general[i][2] = Math.pow(
          10,
          OBJETO.c_antoine1[0] -
            OBJETO.c_antoine1[1] / OBJETO.c_antoine1[2] +
            tSup
        ); //*Presiones de saturación especie 2

        console.log("1,2,4,5");
        console.log(T_general[i][1]);
        console.log(T_general[i][2]);
        console.log(T_general[i][4]);
        console.log(T_general[i][5]);
        console.log("fin");
        T_general[i][3] = (T_general[i][1] * T_general[i][2]) / p; //*Calculo de y1
        T_general[i][6] = (T_general[i][4] * T_general[i][5]) / p; //*Calculo de y2
        console.log(T_general[i][3]); // Son 0
        console.log(T_general[i][6]); // Son 0
        T_general[i][7] = T_general[i][3] + T_general[i][6];
        console.log(T_general[i][7]);
        if (T_general[i][3] > 1) {
          xb = tSup;
        } else {
          xa = tSup;
        }
      }
      T_general[1][0] = tSup;
    }
  }

  return OBJETO;
}

function x1function(n) {
  let arreglo = [0],
    valorInicio = 0;
  while (valorInicio < 1) {
    let tF = (valorInicio += 1 / n || 1);
    arreglo.push(tF.toFixed(1));
  }
  return arreglo;
}

function x2function(n) {
  let arreglo = [1],
    valorInicio = 1;
  while (valorInicio > 0) {
    let tF = (valorInicio -= 1 / n || 1);
    arreglo.push(tF.toFixed(1));
  }
  arreglo.pop();
  arreglo.push(0);
  return arreglo;
}

function t_general() {
  let matrix = [0];
  for (let i = 0; i <= n; i++) {
    matrix[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  }
  for (let i = 0; i <= n; i++) {
    matrix[i][1] = x1[i];
    matrix[i][4] = x2[i];
  }
  matrix[0][3] = 0;
  matrix[n - 1][3] = 1;
  matrix[0][8] = 1;
  matrix[n - 1][8] = 0;
  return matrix;
}

export default OBJETO;
