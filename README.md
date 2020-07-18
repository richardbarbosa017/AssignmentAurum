# AssignmentAurum
## Descrição 
O presente projeto possui o intuito de solucionar as questões propostas pelo Teste prático da empresa Aurum.
## Tarefa 1
A lógica utilizada foi a transformação da string em array para podermos percorrer todas as letras até encontrarmos repetições consecutivas, caso aconteça, teremos uma variável auxiliar 'lim' que contará o numero de repetições. 

A quantidade de repetições da letra será definida pelo 'limit', portanto, caso exceda o 'limit', iremos retirar e retornar o array com, apenas, a quantidade estipulada.
## Tarefa 2
Inicialmente houve a conversão da string para um array, para que, posteriormente, possamos percorre-la ate encontrarmos '?', ao acharmos, caso esteja na primeira posicao da array, a letra a substituir '?' será buscada a partir das ultimas posições da array, caso isto não aconteça, teremos a busca a partir da atual letra de forma decrescente até encontrar a proxima letra diferente de '?'.

Quando encontrarmos substituiremos o valor encontrado na posição pela letra anterior diferente de '?' e repetiremos ela segundo o valor 'times' estipulado.
## Tarefa 3
Na questão 3 proposta pelo teste, inicialmente, houve a transformação das strings para arrays e ordenação pelo 'sort()', com isso, a menor letra estará na primeira posição ('0') e a última letra estará na última posição (correspondente ao tamanho da string -1, pois a array comeca no indice 0 e não 1).

Para a conversão da letra em decimal foi utilizado o 'charCodeAt' basicamente o método retorna um inteiro entre 0 e 65535 representando a unidade de código UTF-16 em seu dado índice, portanto, foi necessário encontrar em qual posição a primeira letra ('a'no caso) se encontrava (97) e excluir os valores anteriores (96) para a primeira letra possuir o valor igual a 1.

Posteriormente foi realizado as devidas operações matemáticas propostas e retornado o valor requisitado.
