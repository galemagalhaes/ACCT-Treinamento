# **Promoções e Taxas**
Antes de definir uma promoção é necessário definir qual será a **audiência de campanha**.

**Campanhas** são conteiners de promoção onde são colocados todas as condições para a ativação da promoção.

### Os tipos de promoção são:
- **Regular**: desconto no produto e/ou frete. É o tipo principal, mais usado.
- **Compre junto**: desconto é dado na compra de 2 ou mais produtos juntos.
- **Levar mais por menos**: desconto dado de acordo com a quantidade comprada de um mesmo produto (na mesma variação).
- **Desconto progressivo**: desconto feito de acordo com a quantidade, cada produto tem desconto conforme aumenta a quantidade.
- **Compre e ganhe**: brindes por comprar determinado produto.
- **Promoções de campanha**: promoções por um determinado período relacionadas a um determinado evento ou data comemorativa, por exemplo, black friday.

### Tipos de desconto:
- **Nominal**: valor especificado em dinheiro sobre o produto ou frete.
- **Percentual**: uma porcentagem sobre preço do produto ou frete.
- **Brinde**: é oferecido um brinde na compra de um determinado produto.
- **Fórmula**: desconto dado seguindo uma fórmula aplicada ao valor do produto.
- **Tabela de preços promocionais**: desconto dado seguindo uma tabela definida anteriormente.

> É obrigatório que toda promoção tenha data de início e de final. Caso a promoção tenha longa duração, a data final pode ser definida como muitos anos a frente.
> 
> Podem haver restrições de acordo com a política comercial aplicada.
> 
> Pode ser delimitado um preço máximo.
> 
> Para destaque de selos é obrigatório que o desconto seja do tipo percentual (%).
> 
> Se um desconto for aplicado a um produto específico, esse deve ser sinalizado, caso contrário, o desconto pode ser aplicado a qualquer coisa na loja.

### Condições
As condições são ativadas apenas no checkout e podem ser por:
- Valor mínimo e máximo
- Valor acumulado em compras
- Faixa de preços
- Preço "de:" "por:"
- Marketing tags
- Afiliados
- Cluster de clientes
- Países de entrega
- Faixa de CEP
- Tipo de frete
- Meio de pagamento
- Número de parcelas
- UTM Source Campaign
- UTMI
- Apenas na primeira compra
- Pedido de assinatura

### Restrições - limites
- A promoção será aplicada a um número específico de compras **por loja**
- A promoção será aplicada a um número específico de compras **por cliente**
- **Quantidade máxima** de produtos afetados no carrinho, dando prioridade sempre para os mais caros
- **Acumular promoções**. Se não for permitido acumular, o desconto maior será o aplicado.
  > Exceto se for desconto no produto e desconto no frete. O sistema cosidera que as duas promoções são diferentes e as aplica ao mesmo produto, mesmo que não haja permissão para acúmulo de promoções

- **Acumular com preços manuais**, usado para televendas.

### Cupom
É um código adicionado ao carrinho de compras que ativa uma promoção.
> Obrigatório ter UTM Source Campaign

Na criação do cupom será gerada uma URL associada ao cupom. Quando o cliente usar esse cupom ele usará essa URL.
> Há a possibilidade de colocar limitações no cupom, como por exemplo, produto por cliente ou se é ilimitado.
> 
> Um cupom sempre estará trelado a uma promoção.

### Taxas
Aparece para o cliente no front-end e no checkout, refere-se a impostos ou a qualquer outro tipo de acréscimo no preço
> terá nome, descrição do que trata o acréscimo, data de validade e tipo de valor.