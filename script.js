/* =========================================================================
   tema escuro x tema claro
========================================================================= */

/* variavel q guarda a info do tema. começa false pq o site liga no escuro */
let sc_rafael_isClaro = false;

/* funçao q roda sempre q a gnt aperta la no botao "alternar pra modo claro" */
function sc_rafael_muda_tema() {
  // acha o elemento body e o botao no html pra gnt poder mexer neles
  const body = document.body;
  const btnTema = document.getElementById("btn-tema");

  // se o tema NÃO (!) ta claro, ou seja, ta escuro, a gnt roda isso aqui:
  if (!sc_rafael_isClaro) {
    // bota a classe sc_rafael_tema_claro la no body, ai o css q fiz puxa as variaveis claras e o site fica branco
    body.classList.add("sc_rafael_tema_claro");

    // muda o texto do botao pras pessoas saberem q da pra voltar
    btnTema.innerText = "Alternar para Modo Escuro 🌙";

    // muda a variavel pra true, pq agr tamo no modo claro mesmo
    sc_rafael_isClaro = true;
  } else {
    // se o isClaro ja tava true (alguem quer voltar pro escuro)

    // remove a classe do claro, ai o site cai dnv nas cores padrao (escuro)
    body.classList.remove("sc_rafael_tema_claro");

    // volta o texto do botao pra claro de novo
    btnTema.innerText = "Alternar para Modo Claro ☀️";

    // atualiza falando q o modo claro acabo
    sc_rafael_isClaro = false;
  }
}

/* =========================================================================
   logica da tabela de pesos q abre e fecha
========================================================================= */

// mesma logica do tema. começa false pq as medidas extras estao escondidas
let sc_rafael_tabelaExpandida = false;

// funçao de qnd clica no "ver tabela completa"
function sc_rafael_muda_tabela() {
  // pega a div escondida e o botao la da seção de infografico
  const itensExtras = document.getElementById("itens-extras");
  const btn = document.getElementById("btn-tabela");

  // se nao ta expandida...
  if (!sc_rafael_tabelaExpandida) {
    // display block faz o item voltar a aparecer e ocupar o espaço na tela
    itensExtras.style.display = "block";
    btn.innerText = "Ocultar Tabela";
    sc_rafael_tabelaExpandida = true;
  } else {
    // se clicar dnv, display none some com o bagulho da tela
    itensExtras.style.display = "none";
    btn.innerText = "Ver Tabela Completa";
    sc_rafael_tabelaExpandida = false;
  }
}
