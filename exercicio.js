/*
* Arthur Felipe Acauan
*
*/

//exercicio1
//resposta=10, 10 5

//let a = 10
//let b = 10

//console.log(b);
//b = 5
//console.log(a, b);

//exercicio2
//resposta=10 10 10

//let A = 10
//let B = 20
//C = A
//B = C
//A = B
//console.log(A, B, C);

//exercicio3
//resposta=let horasTrabalhadas = prompt("Quantas horas voce...");
//let valorDia = prompt("quanto voce recebe por...");

//exercicio escrita de codigo
//1a
let nome;
//1b
let idade;
//1c
console.log(typeof nome);
console.log(typeof idade);
//1d=criamos uma variavel indefinida, mas que pode se atribuir um valor.
//1e
nome = prompt("Qual é o seu nome?");
idade = prompt("Qual a sua idade?");
//1f
console.log(typeof nome);
console.log(typeof idade);
//1g
console.log("Olá", nome, "você tem", idade, "anos");

//2a
prompt("Você está usando uma roupa azul hoje?");
prompt("você tem mais de 20 anos?");
prompt("você gosta de programar?");
let respostaA = prompt("Você está usando uma roupa azul hoje?");
let respostaB = prompt("você tem mais de 20 anos");
let respostaC = prompt("você gosta de programar?");
console.log("voce esta usando uma roupa azul hoje?", respostaA);
console.log("voce tem mais de 20 anos?", respostaB);
console.log("voce gosta de programar?", respostaC);

//3 inverter valores
let a = 10
let b = 25
let C
C = a
a = b
b = C
console.log("o valor de a é", a, "o valor de b é", b);

//desafio extra
prompt("digite um valor");
prompt("digite outro valor");
const valor1 = Number(prompt("digite um valor"));
const valor2 = Number(prompt("digite outro valor"));
const resultado1 = valor1 + valor2;
console.log(resultado1);
const resultado2 = valor1 * valor2;
console.log(resultado2);
