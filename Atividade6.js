// 6) Escreva um programa que leia um valor (N) inteiro, digitado pelo usuário teclado e imprima os N primeiros números ímpares. Exemplo: ditando 5, o programa deverá exibir os 5 primeiros ímpares (1,3,5,7,9).


var numInt = parseInt (prompt("Digíte um número inteiro: "));

var quantImpares = numInt + numInt;

for (let i = 1; i <= Infinity; i++){
    
         if(i % 2 != 0){
            console.log(i);
        }
            if(i == quantImpares){
                break;
            }     

}

