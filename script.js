var Num = Math.floor(Math.random() * 100)

    var  respostaBloco = document.getElementById("respostaBloco")
    var  resposta = document.createElement("p")
    respostaBloco.appendChild(resposta)
    var numerosJogados = 0

function verificarNumero(){
    var  numeroTentativa = document.getElementById("numeroTentativa")
    var  tentativaValor = numeroTentativa.value
    var  tentativa = parseInt(tentativaValor)
    if (tentativaValor === "") {
    resposta.textContent = "Digite um número válido entre 1 e 100."
    resposta.style.color = "#e61919"
    return
    }else{
    numerosJogados = numerosJogados + 1
    }
    


    var Tentativas = document.getElementById("Tentativas")
    Tentativas.textContent = `Tentativas: ${numerosJogados}`

    if (Num > tentativa){
        resposta.textContent = `O número é maior que ${tentativaValor}`
        resposta.style.color = "#e61919"
    }else{
        if(Num < tentativa){
            resposta.textContent = `O número é menor que ${tentativaValor}`
            resposta.style.color = "#e61919"
        }

        else{
            resposta.textContent = `O número é igual a ${tentativaValor}`
            resposta.style.color = "#0cbd0cff"


            document.getElementById("botaoEnviar").style.display = "none";


            var divRepetir = document.getElementById("repetir")
            var botaoRepetir = document.createElement("input")
            divRepetir.appendChild(botaoRepetir)
            botaoRepetir.type = "button"
            botaoRepetir.value = "Repetir"
            botaoRepetir.onclick = jogarNovamente
        }
    }
    numeroTentativa.value = ""
    
}

function jogarNovamente(){
    Num = Math.floor(Math.random() * 100); // novo número
    numerosJogados = 0;
    resposta.textContent = "";
    document.getElementById("Tentativas").textContent = "Tentativas: ";
    document.getElementById("numeroTentativa").value = "";
    document.getElementById("botaoEnviar").style.display = "inline";
    document.getElementById("repetir").innerHTML = "";
}
