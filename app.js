    let listaDeNumerosSorteados = []
    let numeroLimite = 10;
    let numeroSecreto = gerarNumeroSecreto();
    let tentativas = 1;
    function ExibirTextoNaTela(tag,texto) {
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
        responsiveVoice.speak ( texto , 'Brazilian Portuguese Female' , {rate:1.2});
    }
    function exibirMensagemInicial(){
        ExibirTextoNaTela('h1','Bem-vindo ao jogo do numero secreto');
        ExibirTextoNaTela('p','Escolha um numero de 1 a 10');
    }
        exibirMensagemInicial();
         function verificarChute () {
        let chute = document.querySelector('input').value
            if (chute == numeroSecreto){
                let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
                let mensagemTentativa = (`Parabens!, voce acertou o numero secreto com ${tentativas} ${palavraTentativa}`);
                ExibirTextoNaTela('h1', mensagemTentativa);
                ExibirTextoNaTela('p','Jogue novamente');
                document.getElementById('reiniciar').removeAttribute
                ('disabled');
            }else
                
                if(chute > numeroSecreto){
                    ExibirTextoNaTela('p','o numero secreto é menor');
                }else
                    ExibirTextoNaTela('p','o numero secreto é maior');
                tentativas++
                limparCampo(chute);
    } 
    function gerarNumeroSecreto() {
        let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
        let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length
        if(quantidadeDeElementosNaLista = numeroLimite) {
            listaDeNumerosSorteados = [];
        }
            

        if (listaDeNumerosSorteados.includes(numeroEscolhido)){
            return gerarNumeroSecreto();
        }else
            listaDeNumerosSorteados.push(numeroEscolhido);
            console.log(listaDeNumerosSorteados);
            return numeroEscolhido;

       
    }
        function limparCampo(){
            chute = document.querySelector('input');
            chute.value = '';
        }
        function reiniciarJogo(){
            numeroSecreto = gerarNumeroSecreto();
            tentativas = 1 ;
            exibirMensagemInicial();
             limparCampo();
             document.ElementById('reiniciar').setAttribute('disabled',true);
        }

            