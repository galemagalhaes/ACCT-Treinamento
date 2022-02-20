# **Preço**
***Pricing*** é o sistema para criação, edição e armazenamento dos dados relativos aos preços.
O módulo é composto por :
- [ ] **Lista de preços**: seção onde os preços são cadastrados, consultados e inseridos para cada tabela da loja.
- [ ] **Regras de preços**: funções que modificam os preços base.
- [ ] **Arredondamento de preços**: área para criar regras de arredondamento de preços, com o objetivo de a exibição dos preços seja feita de forma mais atrativa.
- [ ] **Configurações**: parte onde se pode cadastrar travas para mudanças de preços. É possível também acessar outras funções no contexto vendedor, marketplace ou franquia.

A arquitetura é baseada em 3 conceitos principais:
- Preços
- Tabela de preços
- Contextos de aplicação da tabela de preços que podem ser:
  - uma política comercial
  - um grupo de clientes autenticado na loja
  - de origem do tráfego (UTMs)
  - condições de uma promoção
  
O **preço computado** é o preço de venda formado seguindo os critérios:
- **preço base**: preço de custo + markup
- **regra de preço**: opcional, permite mudar o preço de 1 SKU para apenas 1 tabela, sem alterar o preço base das demais
- **arredondamento**: preços não terminados em 0 (zero) são mais atrativos por dar a impressão de que se paga menos por um produto
- **preço fixo**: se sobrepõe a todas as outras configurações, inclusive preço base. Pode ser agendado, atrelado a uma quantidade mínima de itens no carrinho, ou preços "de / por". 
> Se o SKU tiver cadastrado apenas o preço base, este será o preço computado.
> 
> Quando há concorrência de preços fixos, a condição com o preço menor vence.

O cálculo é feito com base nos critérios disponíveis:

1. só preço base = preço computado
2. preço base * regra = preço computado 
3. preço base * regra * arredondamento = preço computado
4. só preço fixo = preço computado
