import objetoConstantesAntoine from "../clases/constantesAntoine";
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
        console.log(objeto);
    }else {

    }
}


const objeto = {
    //!!!!Cambiar valores
    name1:"acetona",
    name2:"cloroformo",
    c_antoine1: objetoConstantesAntoine.acetona,
    c_antoine2:objetoConstantesAntoine.cloroformo,
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
        for(var i=0; i<this.n; i++) {
            matrix[i] = [0,0,0,0,0,0,0,0];
        }
        for (var i = 0; i < this.n; i++) {
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
};

export default orquestador;
