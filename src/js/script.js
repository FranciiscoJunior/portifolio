/*
- Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html:

Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele;

Passo 2 - identificar o clique no botão;

Passo 3 - adicionar a classe "ativo" nos projetos escondidos.

- Objetivo 2 - esconder o botão de mostrar mais:

Passo 1 - pegar o botão e esconder ele.
*/

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-mais');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    //Passo 3 - adicionar a classe "ativo" nos projetos escondidos.
    projetosInativos.forEach(projetosInativos => {
        projetoInativo.classList.add('ativo');
        botaoMostrarProjetos();
        esconderBotao();
    });

    //- Objetivo 2 - esconder o botão de mostrar mais:
    //Passo 1 - pegar o botão e esconder ele.
    botaoMostrarProjetos.classList.add("remover");
})
