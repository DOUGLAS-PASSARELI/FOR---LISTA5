// 3) Faça um algoritmo que imprima a quantidade de números pares e a quantidade de números ímpares em um intervalo digitado pelo usuário.



alert ("Conte quantos Números Pares e Quantos Números Impares possuem em um Range")

var numInicio = parseInt (prompt ("Digite o Primeiro Número do Range: "));

var numFim = parseInt (prompt ("Digite o ùltimo número do Range: "));

var quantPares = 0;

var quantImpares = 0;


for (let i = numInicio; i <= numFim; i++){

    if(i % 2 == 0){
        quantPares++;
    }

    else {
        quantImpares++
    }
}

alert ("Quantidade Pares = " + quantPares);
alert ("Quantidade de Impares = " + quantImpares);