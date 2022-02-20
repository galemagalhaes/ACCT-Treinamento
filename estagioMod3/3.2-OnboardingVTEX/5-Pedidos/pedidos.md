# **Pedidos**
Um pedido é gerado quando o cliente final aperta o botão "Finalizar compra". A partir deste momento é possível rastrear o fluxo do pedido pelo gerenciador de pedidos, tendo acesso aos detalhes de cada etapa de seu andamento.

- Várias inofrmações fazem parte do pedido:
  - Itens do carrinho
  - Valor do pedido
  - Horário do pedido
  - Dados do cliente
  - Dados sobre promoções aplicadas ao pedido
  - Endereço de entrega
  - Método de pagamento
  - Política Comercial aplicada na compra
  - Responsável pela venda (marketplace) e pelo fulfillment (seller)

É possível usar filtro nos pedidos:
- Por período (6 meses): data de entrega, data de faturamento, data do pedido, data de autorização, etc.
- Por canais: UTM Source, seller, operador de televendas, política comercial.
- Por status

A venda de seus produtos no mercado livre por exemplo é definido como *fullfilment*. Já a venda de produtos na sua loja é *marketplace*

> Um pedido faturado não pode ser cancelado pelo admin, é necessário que o cancelamento seja solicitado diretamante com a VTEX. Ela trabalha com mensalidade + taxa sobre conversão, logo, um produto faturado é um produto vendido.
> 
> Pedidos com outros status podem ser cancelados pelo botão "cancelar".

A linha do tempo desde a criação do pedido até seu faturamento, permite comunicações internas dentro do próprio pedido.

### **Configurações**
Algumas opções de configuração de  pedido são:
- **Quantidade** mínima no carrinho - muito usado para vendas do tipo B2B onde é oferecido um preço melhor dependendo da quantidade de produtos.
- **Valor** mínimo no carrinho - usa a mesma lógica do item anterior.

### **Estratégias de envio**
São definidas:
- As políticas de envio de acordo com as dimensões do pacote:
  - limitações do tamanho do pacote
  - somas das dimensões
  - fator do peso cúbico, cuja fórmula é dada pela plataforma.
  - maior aresta
  - fator de peso mínimo

As dimensões são calculadas de acordo com os dados dos SKUs.

- Os modais: ativados nas configurações, vinculados a uma transportadora.
  - É possível delimitar valor mínimo e máximo, além do mínimo de itens para usar uma determinada transportadora. 
  > Pode haver mais de uma transportadora por modal.
  >
  > Cada transportadora poderá também fazer a entrega de produtos com modal indefinido, desde que essa opção esteja ativada na política de envio.

Podem ser relacionados pontos de retirada, configurado tempo, aceitar compra fora do horário de funcionamento, fazer upload de tarefas de envio como planilhas com valores por CEP, do frete, peso, tamanho, etc.

### **Docas**

É o ponto de origem de onde a trasportadora irá retirar os produtos para transporte até os clientes. Não necessariamente estão no mesmo lugar que os estoques.

A doca é criada com:
- Nome
- ID
- Políticas de envio
- Canais de venda
- Prioridade
- Adicional de tempo

O **tempo de entrega** é o *tempo na doca* (manuseio) + o *tempo na transportadora*.

**Overhead** é o tempo de prioridade da doca. Quando menor o número do overhead, maior é prioridade para usar aquela doca, significa que ela é "mais rápida".

**WMS** Warehouse Managment System. A integração usa essa rota contando o endereço da doca como origem do frete.

**Estoque**. É possível importar e exportar dados em massa. 

**Relação estoque-docas**. Quando houver mais de uma doca por estoque, será sempre priorizada aquela com dias de processamento menor.
> Se não tiver o produto buscado na doca de menor tempo, o sistema vai buscar na segunda doca e assim por diante.
> 
> Pode haver preço extra. 

**Estoque inStore** é o ponto de retirada de uma loja física.

**Tarifas de envio**: valores do frete filtrados por CEP e transportadora.

**Simulador de envio**: permite identificar problemas com o cálculo do frete.

**Gerenciar inventário**: colocar estoque nos produtos
> *infinito* é usado quando não há estoque físico de um produto, por exemplo, mídias digitais.

última atualização é a soma do "disponível" + "envios" + "reservado".
- Disponível é o produto no estoque.
- Reservado é um produto vendido que ainda está em processamento, foi comprado mais ainda não foi confirmado o pagamento.
- Envio é o produto cujo pagamento foi confirmado.

Quando um produto é faturado (emitida a nota fiscal), ele sai do estoque.
> O valor preenchido em *"atualizar contagem"* é uma atualização dos valores e não uma soma.

É possível colocar valores diferentes para estoques diferentes, todos eles devem estar associados a uma doca e uma transportadora.

> A parte de estoque e transporte é um ponto muito sensível para a loja, pois uma venda pode não ser finalizada por causa do preço do frete ou por um tempo de entrega maior.

### **Configurações gerais**
É possível:
- Colocar um adicional de frete como margem de segurança
- Agrupar produtos na mesma remessa
  > Um pedido com produtos em grupos diferentes pode ser entregue juntos, com apenas 1 frete em prazo mais longo, ou separados, com mais de um frete, um em tempo mais curto e outro em tempo mais longo. O ponto de atenção são intervalos de tempo muito grandes.
- Permitir modais
- Divisão de cargas no limite da transportadora
  > Não permitir a compra ou permitir com entregas e fretes separados
- Integração com Google Maps (serviço pago)
- Criar alertas de estoque
- Configurar ponto de retirada
  - instruções de retirada
  - tags para pontos de retirada
  - horário de funcionamento
  - excessões e feriados