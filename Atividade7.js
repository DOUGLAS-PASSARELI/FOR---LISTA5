// 7)Escreva um programa que leia um número inteiro N pelo teclado e:
// 	a) indique se N é um número primo;
// 	b) imprima os números primos até N;
// 	c) imprima os N primeiros números primos.

var n = parseInt(prompt("Digite o valor de N"));

var ehPrimo =  verficaPrimo(n);

// a
console.log("#### Letra A ####");
if(ehPrimo == true){
    console.log("É primo");
} else {
    console.log("Não é primo");
}


// b
console.log("#### Letra B ####");
for(var i = 1; i <= n; i++){
    if(verficaPrimo(i) == true){
        console.log(i);
    }
}


// c
console.log("#### Letra C ####");
var contPrimos = 0;
for(var i = 1; i <= Infinity; i++){
    if(verficaPrimo(i) == true){
        console.log(i);
        contPrimos++;
    }
    if (contPrimos == n) {
        break;
    }
}

function verficaPrimo(n) {
    var contDiv = 0;

    for(var i = 1; i <= n; i++){
        if(n % i == 0){
            contDiv++;
        }
    }

    if(contDiv == 2) {
        return true;
    } else {
        return false;
    }
}