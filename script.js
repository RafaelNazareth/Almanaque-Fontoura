/* =========================================================================
   LÓGICA DO MODO CLARO / ESCURO (THEME TOGGLE)
========================================================================= */

/* 1. Variável para rastrear em qual tema estamos (começa Falso, pois iniciamos no Escuro) */
let sc_rafael_isClaro = false;

/* 
   2. Função que troca as cores ativada pelo botão "Alternar para Modo Claro"
*/
function sc_rafael_muda_tema() {
  // Captura o corpo da página (body) e o botão que foi clicado
  const body = document.body;
  const btnTema = document.getElementById("btn-tema");

  // Se o tema atual NÃO for claro (ou seja, se for escuro):
  if (!sc_rafael_isClaro) {
    // Adiciona a classe "sc_rafael_tema_claro" no <body>
    // Isso vai forçar o CSS a ler as novas cores e deixar o site claro
    body.classList.add("sc_rafael_tema_claro");

    // Altera o texto do botão para a pessoa poder voltar para o modo noturno
    btnTema.innerText = "Alternar para Modo Escuro 🌙";

    // Avisa o sistema que agora estamos no modo claro
    sc_rafael_isClaro = true;
  } else {
    // Se o tema JÁ ERA claro, e o usuário clicou de novo:

    // Remove a classe do claro, o que faz o CSS voltar às variáveis originais (escuro)
    body.classList.remove("sc_rafael_tema_claro");

    // Volta o texto do botão para o original
    btnTema.innerText = "Alternar para Modo Claro ☀️";

    // Avisa o sistema que voltamos para o modo escuro
    sc_rafael_isClaro = false;
  }
}

/* =========================================================================
   LÓGICA DA TABELA DE PESOS E MEDIDAS
========================================================================= */

let sc_rafael_tabelaExpandida = false;

function sc_rafael_muda_tabela() {
  const itensExtras = document.getElementById("itens-extras");
  const btn = document.getElementById("btn-tabela");

  if (!sc_rafael_tabelaExpandida) {
    itensExtras.style.display = "block";
    btn.innerText = "Ocultar Tabela";
    sc_rafael_tabelaExpandida = true;
  } else {
    itensExtras.style.display = "none";
    btn.innerText = "Ver Tabela Completa";
    sc_rafael_tabelaExpandida = false;
  }
}
