let numeroSecreto = gerarNumero();
let quantidadeTentativas = 0;
telaInicial();

function informaParametro(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function telaInicial() {
    informaParametro('h1', 'Jogo do Número Secreto');
    informaParametro('p', 'Escolha um Número entre 1 e 100');
}

function gerarNumero(){
    return parseInt(Math.random() * 100 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function verificarChute() {
    quantidadeTentativas++
    let grafiaTentativas = quantidadeTentativas > 1? 'tentativas' : 'tentativa';
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        informaParametro('h1', 'Parabéns!');
        informaParametro('p', `Você acertou o Número Secreto em ${quantidadeTentativas} ${grafiaTentativas}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto) {
            informaParametro('h1', 'Você errou!');
            informaParametro('p', `O Número Secreto é menor que ${chute}. Tente novamente!`);
        } else if (chute < numeroSecreto) {
            informaParametro('h1', 'Você errou!');
            informaParametro('p', `O Número Secreto é maior que ${chute}. Tente novamente!`);
        }
    limparCampo();
}

function reiniciarJogo() {
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    telaInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}