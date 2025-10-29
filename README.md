<!DOCTYPE html>
<html lang="pt">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Casa Confiável MZ - Administrador</title>
<style>
  body { font-family: Arial, sans-serif; padding: 20px; background: #f5f5f5; }
  button { padding: 10px 20px; margin: 5px; }
  input { padding: 5px; margin: 5px 0; }
</style>
</head>
<body>
<h1>Painel Administrador</h1>

<h3>Aprovação de Pagamentos</h3>
<label>PIN da transferência:</label>
<input type="text" id="pinAdmin" placeholder="PIN"><br>
<button onclick="aprovarPagamento()">Aprovar Pagamento</button>
<div id="statusAdmin"></div>

<h3>Monitoramento de Jogadores</h3>
<div id="alertasJogadores">Aqui aparecerão alertas de perdas e derrotas consecutivas.</div>

<script>
function aprovarPagamento() {
  let pin = document.getElementById("pinAdmin").value;
  if(pin) {
    document.getElementById("statusAdmin").innerText = "Pagamento aprovado com sucesso!";
  } else {
    alert("Digite o PIN corretamente.");
  }
}

// Aqui você pode adicionar funcionalidades para monitorar os jogadores
</script>
</body>
</html>