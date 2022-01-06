# **Pagamentos**
O módulo de Pagamentos é o sistema que gerencia as ações do fluxo financeiro da loja.

### **Conceitos principais**:
- **Gatway**: sistema que faz a transmissão dos dados de pagamento e em seguida obtem um retorno sobre sua aprovação ou não, seguindo o fluxo de compra ou cancelamento.
  > Exemplos de gateway: Braspag e Mundipagg.
- **Adquirente**: empresa que faz o processamento dos pagamentos e repassar os valores para a loja.
  > Exemplos de aquirente: Rede, Cielo, GetNet e Stone.
- **Subadquirente**: uma espécie de intermediador entre adquirente e loja.
  >Exemplos de subadquirente: Paypal e PagSeguro
- **Bandeira de cartão**: são empresas responsáveis por definir as regras de negócio para compras realizadas com cartão de crédito.
  - como a quantidade de parcelas 
  - número de estabelecimentos em que ele é aceito
  > Exemplos de bandeiras de cartão: Mastercard, American Express e Visa.
- **Banco emissor**: instituição financeira responsável pelos meios de pagamento.
  > Exemplos de bancos emissores: Itaú, Santander, Bradesco e Citibank.
- **Antifraude**: sistema especializado em análise das compras para identificar fraudes.
  > Exemplos de antifraudes: ClearSale e a Konduto.
- **Certificação PCI SSC**: PCI Security Standards Council, fórum global aberto para o contínuo desenvolvimento, aprimoramento, armazenamento, disseminação e implementação de padrões de segurança para a proteção de dados.
  > A VTEX twm um gateway próprio com certificação PCI, os dados de todos os pagamentos estão protegidos com os mais altos padrões de segurança.

### **Outros tópicos importantes nesse módulo são**:
- **Transações**: o filtro ajuda a identificar falhas
- **Vale-compra**: código usado no checkout para desconto de até 100% ou como opção de devolução.
  - reutilizavel: permite usar uma parte do valor por vez
  - restrito: associado a CPF/CNPJ
  - recarregável: o saldo do cartão pode ser alterado dentro do seu prazo de validade.