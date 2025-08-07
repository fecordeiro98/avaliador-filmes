# Avaliador de Filmes

Este é um projeto de front-end simples, porém elegante, que cria uma página da web interativa para avaliar filmes ou narrativas com base em cinco critérios distintos. A aplicação calcula e exibe uma média em tempo real com base nas notas fornecidas pelo usuário através de controles deslizantes (sliders).

## Visão Geral do Projeto

O objetivo principal é fornecer uma interface de usuário intuitiva para que uma pessoa possa dar notas a diferentes partes de uma história (como um filme ou livro) e ver a pontuação média final instantaneamente. A aplicação tem um design minimalista e sombrio, com foco na usabilidade.

## Funcionalidades

*   **Avaliação por Critérios:** O usuário pode avaliar a obra em cinco categorias:
    *   Introdução
    *   Desenvolvimento
    *   Clímax
    *   Resolução
    *   Finalização
*   **Controles Deslizantes (Sliders):** Cada critério é avaliado usando um `input type="range"`, que permite ao usuário selecionar uma nota de 0 a 6, com incrementos de 0.5.
*   **Feedback Visual Imediato:** Ao lado de cada slider, o valor numérico da nota é exibido e atualizado em tempo real conforme o usuário move o controle.
*   **Cálculo Automático da Média:** A média geral das cinco notas é calculada e exibida automaticamente sempre que qualquer uma das avaliações é alterada.
*   **Interface Estilizada:** A página possui um tema escuro (fundo preto e texto branco) e um layout centralizado. Os sliders são customizados para uma aparência única, com um trilho vermelho translúcido e um polegar (thumb) em forma de estrela.

## Estrutura dos Arquivos

O projeto é composto por quatro arquivos principais:

### 1. `index.html`
*   **Propósito:** Define a estrutura principal da página.
*   **Conteúdo:**
    *   Configuração padrão do HTML5 (`<!DOCTYPE html>`, `<head>`, `<body>`).
    *   Inclusão dos arquivos de estilo (`style.css` e `add.css`) e do ícone da página.
    *   O corpo da página contém uma tabela (`<table>`) que organiza os cinco critérios de avaliação, seus respectivos sliders (`<input type="range">`), e os campos para exibir os valores numéricos.
    *   Uma linha final na tabela exibe a "MÉDIA" em um campo de texto desabilitado (`<input type="text" ... disabled>`).
    *   Um rodapé (`<footer>`) com informações de autoria e versão.
    *   Inclusão do arquivo de script (`script.js`) no final do corpo.

### 2. `style.css`
*   **Propósito:** Define o estilo visual geral da página.
*   **Conteúdo:**
    *   Estiliza o `html` e o `body` para criar um layout flexbox centralizado vertical e horizontalmente.
    *   Define um tema escuro com `background-color: black` e `color: white`.
    *   Define a fonte padrão e o alinhamento do texto.
    *   Estiliza o campo de texto da média para ter um fundo transparente e sem bordas.

### 3. `add.css`
*   **Propósito:** Contém os estilos específicos para customizar a aparência dos sliders (`input[type=range]`).
*   **Conteúdo:**
    *   Remove a aparência padrão do navegador para os sliders.
    *   **Trilha do Slider (`::-webkit-slider-runnable-track`, `::-moz-range-track`):** Estiliza a "pista" por onde o controle desliza, aplicando uma cor de fundo vermelha translúcida e bordas arredondadas.
    *   **Polegar do Slider (`::-webkit-slider-thumb`, `::-moz-range-thumb`):** Substitui o controle padrão por uma imagem de estrela (`stars_24dp...png`), define seu tamanho e remove as bordas.

### 4. `script.js`
*   **Propósito:** Controla toda a interatividade da página.
*   **Conteúdo:**
    *   **Função `update(slider, valor)`:** Adiciona um ouvinte de eventos (`input`) a cada slider. Quando o slider é movido, esta função atualiza o texto do elemento correspondente (ex: `valorIntro`) para exibir a nota atual, formatada com uma casa decimal.
    *   **Função `calcular()`:** Lê o valor de todos os cinco sliders, calcula a média aritmética e atualiza o campo de texto "total" com o resultado, também formatado com uma casa decimal.
    *   **Ouvintes de Eventos:** Um ouvinte de evento `change` é adicionado a todos os sliders. Este evento é acionado quando o usuário "solta" o controle do slider, garantindo que a função `calcular()` seja chamada para atualizar a média final.
    *   **Execução Inicial:** A função `calcular()` é chamada uma vez quando a página carrega (`onload`) para exibir a média inicial com base nos valores padrão definidos no HTML.

 Descrição gerada por inteligência artificial
