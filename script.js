// Variável global para rastrear se a tabela está expandida (mesma lógica da AV1)
let sc_rafael_tabelaExpandida = false;

/*
  Função sc_rafael_muda_tabela():
  Alterna a exibição dos itens extras na lista de Pesos e Medidas.
*/
function sc_rafael_muda_tabela() {
  // Captura os elementos do DOM
  const itensExtras = document.getElementById("itens-extras");
  const btn = document.getElementById("btn-tabela");

  if (!sc_rafael_tabelaExpandida) {
    // Mostra os itens extras
    itensExtras.style.display = "block";
    btn.innerText = "Ocultar Tabela";
    sc_rafael_tabelaExpandida = true;
  } else {
    // Esconde os itens extras
    itensExtras.style.display = "none";
    btn.innerText = "Ver Tabela Completa";
    sc_rafael_tabelaExpandida = false;
  }
}
