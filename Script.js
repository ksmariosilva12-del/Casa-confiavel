let saldo = 0;
let tempo = '';
let casa = '';
let perdas = 0;

function pagamento(tipo) {
  alert(`Você escolheu ${tipo}. Faça o pagamento manualmente.`);
}

function selecionarTempo(valor, periodo) {
  saldo = valor;
  tempo = periodo;
  alert(`Tempo selecionado: ${tempo} / Saldo: ${saldo}`);
}

function selecionarCasa(nome) {
  casa = nome;
  alert(`Você escolheu a casa: ${casa}`);
}

// Simulação do gráfico do Aviator
function atualizarGrafico() {
  const mensagem = document.getElementById('mensagem');
  const rand = Math.random();

  if (rand > 0.8) {
    mensagem.textContent = 'Bora fazer dinheiro!';
    mensagem.style.backgroundColor = 'green';
  } else if (rand > 0.6) {
    mensagem.textContent = 'Diminuir a banca imediatamente';
    mensagem.style.backgroundColor = 'red';
  } else if (rand > 0.4) {
    mensagem.textContent = 'Proteção 2x';
    mensagem.style.backgroundColor = 'yellow';
    mensagem.style.color = '#000';
  } else if (rand > 0.2) {
    mensagem.textContent = 'Xadrez';
    mensagem.style.backgroundColor = 'blue';
  } else {
    mensagem.textContent = 'Duas paradas e duas roxos';
    mensagem.style.backgroundColor = 'purple';
  }

  // Simula perdas
  perdas += rand * 10;
  if (perdas >= saldo * 0.7) {
    mensagem.textContent = 'Vai falar com o administrador imediatamente!';
    mensagem.style.backgroundColor = 'black';
    mensagem.style.color = '#fff';
  }
}

setInterval(atualizarGrafico, 5000);
