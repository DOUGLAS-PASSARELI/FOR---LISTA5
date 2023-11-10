// 4) Faça um algoritmo que imprima a soma dos números multiplos de 11 em um intervalo digitado pelo usuário;


var numInicio = parseInt ( prompt ("Digite o Primeiro Número do Range: "));

var numFim = parseInt (prompt ("Digíte o último número do Range: "));

var numFat11 = 0;

for (let i = numInicio; i <= numFim; i++){

    if (i % 11 == 0){
        numFat11 = numFat11 + i;
    }
}

alert (numFat11);