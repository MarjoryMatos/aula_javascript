//função

function botao(){
    document.getElementById("agradecimento");
    console.log(document.getElementById("agradecimento").innerHTML="Obrigado por clicar");

}; //botão que realiza alteração quando é clicado.

/*para fazer a manipualção no elemento HTML ou CSS podemos utilizar o getElementby e identificamos o elemento desejado pelo ID definido no HTML */

function trocar(){
    document.getElementById("mousemove").innerHTML="Obrigado por passar";

    alert("trocar texto");
} //função em que altera texto quando o mouser é passado por cima.

function funcaochange(elemento){
    console.log(elementovalue) //é utilizado para que seja realizada determinada ação após alguma mudança.
}

function validaidade (idade){
    if (idade >=18){
    validar= true
}else{
    validar=false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaidade(idade));//prompt recebemos algo do usurário


function soma(n1,n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(3,10));
alert(setReplace ("Vai Japão", "Japão", "Brasil"));//Replace realiza a troca de Japão p/ Brasi.

//date
var d = new Date();
alert(d); //informa data


//laço de repetição Para
var count = 0;
for(count=0; count <= 5; count ++){
    alert(count);
};//realiza a contagem de um número até o outro. Determina um termino para que a contagem não vire um loop



//laço de repetição enquanto
var count = 0;
while(count < 5){
    console.log(count);
    count = count + 1;
};//enquanto o valor não for maior que cinco o programa realizar a contagem acrescentando mais um numero


//condicionais IF (se)
var idade = prompt("Qual sua idade?")
var idade = 18;
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}; //retorna valor verdadeiro ou falso


var nome=" Marjory Matos";
var idade="26";
alert(nome + "tem " + idade + " anos"); 
// variavel var recebe string com o nome e idade, a contatenação é realizada pelo sinal de +

//dicionário
var fruta = {nome: "maçã", cor:"vermelho"};
console.log(fruta); 

//array
var lista=["maçã","pêra","Laranja"];
lista.push("uva"); //insere elemento "uva" na ultima posição
lista.pop(); //eleminação do ultimo elemento
console.log(lista);//irá mostrar a lista inteira e serve para identificar quantos arrays temos
console.log(lista.toString());//transforma em string
console.log(lista.join(" - "))//separa os conteudos pelo simbolo desejado