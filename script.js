/* 
  1. DECLARAÇÃO DE VARIÁVEL DE ESTADO 
  Criamos uma variável global para o navegador lembrar qual é o estado atual da tabela.
  Ela começa como 'false' porque, quando o site carrega, os itens extras estão escondidos.
*/
let sc_rafael_tabelaExpandida = false;

/*
  2. A FUNÇÃO PRINCIPAL
  Essa função é ativada APENAS quando o usuário clica no botão "Ver Tabela Completa" no HTML.
  Lá no HTML tem um código assim: <button onclick="sc_rafael_muda_tabela()">
*/
function sc_rafael_muda_tabela() {
  // 3. CAPTURANDO ELEMENTOS DO HTML
  // Pedimos pro Javascript buscar lá na tela os dois elementos que vamos manipular:
  // - A <div> que guarda as medidas extras (identificada pelo ID 'itens-extras')
  // - O <button> que foi clicado (identificado pelo ID 'btn-tabela')
  const itensExtras = document.getElementById("itens-extras");
  const btn = document.getElementById("btn-tabela");

  /* 
    4. A LÓGICA DE DECISÃO (IF / ELSE)
    Verificamos como a variável de estado está no momento do clique.
    A exclamação (!) significa "NÃO". Ou seja, se a tabela NÃO estiver expandida (false):
  */
  if (!sc_rafael_tabelaExpandida) {
    // Altera o CSS do elemento HTML, mudando o display de 'none' para 'block'. Isso faz a lista aparecer na tela.
    itensExtras.style.display = "block";

    // Troca o texto de dentro do botão para indicar a nova ação disponível para o usuário.
    btn.innerText = "Ocultar Tabela";

    // Avisa o sistema que a tabela agora ESTÁ expandida. No próximo clique, ele vai cair no 'else' abaixo.
    sc_rafael_tabelaExpandida = true;
  } else {
    /* 
      5. O CAMINHO INVERSO
      Se a tabela JÁ estava expandida (true), o código cai aqui.
    */

    // Muda o CSS novamente para esconder a lista ('none' remove o elemento do fluxo visual)
    itensExtras.style.display = "none";

    // Volta o texto do botão para o formato original
    btn.innerText = "Ver Tabela Completa";

    // Avisa o sistema que a tabela voltou a estar oculta.
    sc_rafael_tabelaExpandida = false;
  }
}
