let display = $("#tela"); //tela da calculadora
var igual = $("#igual"); //botao de igual
var numeros = $(".numeros"); //lista os numeros possiveis
var operacao = $(".ops") // operadores matematicos
var numAtual = ""; //numero atual do calculo
var numVelho = ""; //numero anterior ao numero atual
var resultado = ""; //resultado final da conta



function resetaNumero() { // toda vez que clicado a calculadora ira resetar
    $(".apaga").click(function(){
        numAtual = 0;
        numVelho = "";
        display.html(numAtual);
    })
}
numeros.click(function(){ // ao clicar nos numeros, eles vao sendo adicionados ao display
    if(numAtual === 0){
        numAtual = $(this).html();
    }else{
        numAtual += $(this).html();
    }
    display.html(numAtual);
})
operacao.click(function(){
    numVelho = numAtual;
    numAtual = "";
    display.html(numAtual);
    if(operacao.html() === "+"){
        resultado = numAtual + numVelho;
    }
})
resetaNumero()