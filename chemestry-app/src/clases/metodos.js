import OBJETOConstantesAntoine from "../clases/constantesAntoine";

const OBJETO = sitemaIdeal();
var nombreSis1,nombreSis2,nombreVar,nombreConst;

function orquestador(tipo,nombreSistema1,nombreSistema2,variable,constante){
    
    if(nombreSis1 === undefined){       //~EVALUA EL PRIMER MOMENTO DEL CODIGO CUANDO SE ABRE LA APLICACION 
        nombreSis1 = "acetona";           //~ MODO DEFAULT
    }else{
        if(nombreSistema1 !== ""){
            nombreSis1 = nombreSistema1; 
        }
    }

    if(nombreSis2 === undefined){
        nombreSis2 = "cloroformo";
    }else{
        if(nombreSistema2 !== ""){
            nombreSis2 = nombreSistema2; 
        }
    }
    
    if(nombreVar === undefined){
        nombreVar = "presion";
    }else{
        if(variable != ""){
            nombreVar = variable; 
        }
    }
    
    if(nombreConst === undefined){
        nombreConst = "temperatura";
    }else{
        if(constante !== ""){
            nombreConst = constante; 
        }
    }
    
    if(tipo===0){
        return sitemaIdeal();
    }else{
        return sistemaReal();
    }
}

function sistemaReal(){
    return "hola";
}

function sitemaIdeal(){
    var OBJETO = {
        name1: nombreSis1,
        name2: nombreSis2,
        variable:nombreVar,
        c_antoine1: OBJETOConstantesAntoine.acetona, //!!!!CAMBIAR VALORES
        c_antoine2: OBJETOConstantesAntoine.cloroformo,
        n:11,
        x1: function(){
            var arreglo = [0], valorInicio = 0;
            while(valorInicio < 1){
                arreglo.push(valorInicio += 1/this.n || 1);
            }
            return arreglo;
        },
        x2: function(){
            var arreglo = [1], valorInicio = 1;
            while (valorInicio > 0) {
                arreglo.push(valorInicio -= 1/this.n || 0);
            }
            arreglo.pop();
            arreglo.push(0);
            return arreglo;
        },
        t_general: function(){
            var matrix=[0];
            for(let i=0; i<this.n; i++){
                matrix[i] = [0,0,0,0,0,0,0,0];
            }
            for(let i = 0; i < this.n; i++){
                matrix[i][1]=this.x1[i];
                matrix[i][4]=this.x2[i];   
            }
            matrix[0][3]=0;
            matrix[this.n-1][3]=1;
            matrix[0][8]=1;
            matrix[this.n-1][8]=0;
            return matrix
        },
        //*ASI INVOCAS METODOS EN JAVASCRIPT -> NICOLE
        orquestador: orquestador,
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
  T_general = OBJETO.t_general(),
  Respuesta;

if (tipo_solucion === 0) { //!ANALIZAR QUE SE VA A QUITAR 
  promt1 = "Con temperatura ctte = 1 o Presión ctte = 0";
  tipo_variable = prompt(promt1);//!!Modificar
}

//& SISTEMA IDEAL TEMPERATURA CONSTANTE
if (tipo_variable === 1) {
  let j;
  promt2 = "Introduce la temperatura °C";
  T = prompt(promt2);//!!! Modificar
  //~ CALCULO DE LAS PRESIONES DE LAS SOLUCIONES
  //^ PRESION DE LA ESPECIE 1
  Peb1 = Math.pow(10,(OBJETO.c_antoine1[0] - OBJETO.c_antonie1[1]) / (OBJETO.c_antonie1[2] + T));
  //^ PRESION DE LA ESPECIE 2
  Peb2 = Math.pow(10,(OBJETO.c_antonie2[0] - OBJETO.c_antonie2[1]) / (OBJETO.c_antonie2[2] + T));
  for(j = 0; j < OBJETO.n; j++){
    xa = Peb1 * 0.2;
    xb = Peb2 * 1.8;
    Psup = (xa + xb) / 2;
    T_general[j][7] = 0;
    while(Math.abs(T_general[j][7] - 1) > 0.001){
      Psup = (xa + xb) / 2;
      T_general[j][3] = (T_general[j][1] * Peb1) / Psup; //*Calculo de y2
      T_general[j][6] = (T_general[j][4] * Peb2) / Psup; //*Calculo de y2
      T_general[j][7] = T_general[j][3] + T_general[j][6];
      if (T_general[j][7] > 1) {
        xa = Psup;
      } else {
        xb = Psup;
      } 
    }
    T_general[j][0] = Psup;
    T_general[j][2] = OBJETO.c_antonie1[2] / OBJETO.c_antonie1[1] - Math.log(T_general[j][0]) - OBJETO.c_antonie1[3];
    T_general[j][5] = OBJETO.c_antonie2[2] / OBJETO.c_antonie2[1] - Math.log(T_general[j][0]) - OBJETO.c_antonie2[3];
  }
}

//& SISTEMA IDEAL PRESION CONSTANTE
if (tipo_variable === 0){
    promptPresion="Introduce la presion en mmHg";
    p=prompt(promptPresion);//!!Modificar
    
    //* CALCULO DE TEMPERATURAS
    T_general[OBJETO.n][0] = (OBJETO.c_antoine1[1] / OBJETO.c_antoine1[0] - Math.log10(p)) - OBJETO.c_antoine1[2];
    T_general[0][0] = (OBJETO.c_antoine2[1] / OBJETO.c_antoine2[0] - Math.log10(p)) - OBJETO.c_antoine2[2];
    for(var i=0; i<OBJETO.n;i++){
        //^ PARA QUE LA TEMPERATURA SE AJUSTE
        xa = T_general[OBJETO.n][0] * 0.2;        //^TEMPERATURA BAJA
        xb = T_general[0][0] * 1.8;               //^TEMPERATURA ALTA
        tSup = (xa/xb)/2;
        T_general[i][7]=0;
        while(Math.abs(T_general[i][7]-1)>0.001){
            tSup=(xa+xb)/2; //*Temperatura de suposicion del sisteme en °C
            T_general=[i][2]=Math.pow(10, OBJETO.c_antoine1[0] - OBJETO.c_antoine1[1] / (OBJETO.c_antoine1[2]) + tSup);//*Presiones de saturación especie 1
            T_general=[i][2]=Math.pow(10, OBJETO.c_antoine1[0] - OBJETO.c_antoine1[1] / (OBJETO.c_antoine1[2]) + tSup);//*Presiones de saturación especie 2
            T_general[i][3]=T_general[i][1] * T_general[i][2] / p;      //*Calculo de y1
            T_general[i][6]=T_general[i][4] * T_general[i][5] / p;      //*Calculo de y2
            T_general[i][7]=T_general[i][3] + T_general[i][6];
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

export default OBJETO;
