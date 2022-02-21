# **React**
### **Tópico 2.1:**
*O que é esperado:*
- [x] Entender o funcionamento básico do React por usando este [Tutorial](https://pt-br.reactjs.org/tutorial/tutorial.html)
  * Tópicos avançados serão abordados em módulos mais a frente no programa de estágio.

*O que é recomendado:*
- [x] Fazer o desafio prático disponibilizado
- [x] Criar uma pasta no repositório de treino com os arquivos para a solução do desafio e enviar o link do repositório.

### **Desafio**

Criar um app que exiba a frase `Hello World!` em 10 formas diferentes e também a data atual em cada uma das formas, usando Javascript.
- Para iniciar o projeto executar o comando `create-react-app <nome-do-projeto>`.
  > Esse comando cria as pastas e arquivos base necessários.
- Reescrever o arquivo `App.js` para que tenha até 10 textos diferentes. 
  > Poderá ser utilizado *CSS* ou métodos *JavaScript* que alterem o texto.
- Para rodar, usar o comando `npm run start`
  > Isso fará com que o App continue o build sempre que atualizar os arquivos
- Fazer *commits* para cada forma diferente do texto
####  **Plus do desafio**
- Utilizar `props` e apenas 1 componente para exibir o texto
- Personalizar a página com **CSS**

### Coamandos
**Para npm versões abaixo de 5.2**
- `npm i -g create-react-app`
- `create-react-app <nome-do-projeto>`

**Para versões npm acima de 5.2**
- `npx create-react-app <nome-do-projeto>`

#### Para saber qual é a versão do npm 
`npm --version` ou `npm -v`

Mais informações podem ser consultadas [neste link](https://create-react-app.dev/docs/getting-started/)


Foi usado um trecho de código pronto para resetar o css que é entregue na criação do projeto e permitir que o css do `App.js` não sofra interferência do css principal. O código disponível no site da [alura](https://www.alura.com.br/artigos/o-que-e-reset-css?gclid=CjwKCAiA6seQBhAfEiwAvPqu12yQxMp-6kURdf1Ka3TGeWDv6Yu9CqZe1uEteX3IXpHxxLrvwmiDQBoC4qUQAvD_BwE) foi colocado no documento `index.css` 

[Aqui](https://pt-br.reactjs.org/docs/introducing-jsx.html) há informações sobre a sintaxe JSX.