function getHistory(){ //Pega o valor do historico da conta...
    return document.getElementById("history-value").innerText;
}
function printHistory(num){//Mostra o historico da conta...
    document.getElementById("history-value").innerText=num;
}

function getOutput(){//Pega os valores digitados
    return document.getElementById("output-value").innerText;
}
function printOutput(num){//mostra os valores digitados 
    if(num==""){
        document.getElementById("output-value").innerText=num;//Sem formatação com ","
    }
    else{
        document.getElementById("output-value").innerText=formatedValue(num);//Com formatação.
    }
}

function formatedValue(num){//Formata os números com ","
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function reverseNumberFormat(num){//Tira a formatação do número para calculos.
    return Number(num.replace(/,/g,''));
}

//Valida o que cada botão deve fazer quando clicado...
var operator = document.getElementsByClassName("operator");
for( var i=0; i<operator.length; i++){
    operator[i].addEventListener('click', function(){
        if(this.id == "clear"){//Se o Botão clicado tiver o Id "clear" ele deve limpar a tela.
            printHistory("");
            printOutput("");
        }
        else if(this.id == "backspace"){//Limpa 1 valor da caixa de calculo.
            var output = reverseNumberFormat(getOutput()).toString();
            if(output){
                output = output.substr(0,output.length -1);
                printOutput(output);
            }
        }
        else{
            var output = getOutput();
            var history = getHistory();
            if(output!= ""){
                output = reverseNumberFormat(output);
                history = history+output;
               
                if(this.id=="="){
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history= history+this.id;
                    printHistory(history);
                    printOutput("");
                     
                }
            }
        }
        
    })
}

var number = document.getElementsByClassName("number");
for(var i=0; i<number.length; i++){
    number[i].addEventListener('click', function(){
        var output = reverseNumberFormat(getOutput());
        output = output+this.id;
        printOutput(output);
        
    })
}




