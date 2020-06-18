<p align = "center">
<img src="img/radio-host.png" width=300>
</p>

# Estrutura de Dados :game_die: em Javascript ⌨

## Desafio Quarentana Covid-19
***********

* [Array](#array)
* [Pilha](#pilha)
* Fila
* Lista Ligada
* Lista Duplamente ligada
* Conjuntos
* Dicionarios
* Hashes 
* Arvores
* Grafos
  * Busca Profundidade
  * Busca Largura
* Ordenação
  * Bubble sort
  * Selection sort
  * Insertion sort
  * Merge sort
  * Quick sort
 
************
<div id='array'/> 

## O que array?
Array é um tipo de estrutura que representa um bloco de dados (números, objetos...) alocados na memória de modo censecutivo.

Por exemplo 
`[1,2,3,4,5]`

### Usando no JS

Declarando um novo array - forma literal </br>
`var arr = []`

Declarando um novo array - construtor embutido</br>
`var arr = new Array()`

Localizando e acessando um elemento</br>
`console.log(arr[0])  // 1`

Add novo elemento</br>
`arr.push(3)  //[1,2,3]`

Add novo elemento posicao antes</br>
`arr.unshift(3)  //[3,1,2,3]`

Removendo elemento </br>
`.pop()    //remove útimo elemento`

`.shift()     //remove e retorna o primeiro elemento`
</br>

***************
<div id='pilha'/> 
# Pilhas 

Uma stack (pilha) é uma estrutura de dados que contém uma array de elementos. Uma pilha finciona no príncioio de LIFO (last in, first out), ou seja 'último a entrar, primeiro a sair'.

## O que podemos fazer com nossa pilha: 
``` js
   Stack() => cria uma nova pilha
   push(elemets) => método que add novo item a pilha
   pop() => método que remove e retorna o item da pilha.
   peek() => método que devolve o elemento que está no topo da pilha. A pilha não é modificada.
   isEmpty() => método devolve true || false
   clear() => método remove todos os elementos da pilha
   size() => método retorna o tamanho da pilha
   toString() => métodon que imprime a pilha
```

## Arquivos

- 1: pilhas.js : Arquivo com nossa estrutura da Pilha que contém os métodos: push, pop, peek...
- 2: decimalToBinary.js : Arquivo contém função para converter decimal para binario. A função recebe um numero e retonar binario
- 3: conversorBase.js : Arquivo que contém função para converter a base
- 4: app.js : Aquivo para testar a pilha: new stack, push...
- 5: appDecBin.js : Arquivo usando para teste da função decimal => bin
- 6: appDecBase.js : Aquivo para teste conversão base e valor

## Como usar

- 1: Realiza o donwload deste repositorio.
- 2: Abre com vscode
- 3: Verifica se node.js está instalado na maquína
  - 3.1: Se não baixe node no site : [https://nodejs.org/pt-br/#home-downloadhead]
- 4: Abra o terminal do vscode:
  - 4.1: node nome_do_arquivo.js
  
***************