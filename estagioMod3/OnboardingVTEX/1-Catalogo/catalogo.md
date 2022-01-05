# **Catálogo**
O catálogo é a área onde é possível configurar as funcionalidades relativas a variedade de produtos do e-commerce. Ele é composto por:

### **Produtos e SKUs** 
- Seção onde são adicionados novos produtos e SKUs à loja. São inseridas informações como nome do produto, descrição e imagens.
- Produto é o que será vendido n loja, SKUs são as variações desse produto, por exemplo, cores e tamanhos diferentes.
- Um SKU sempre está atrelado ao um produto, e todo produto precisa de pelo menos 1 SKU associado a ele.
> As **especificações** (propriedades dos produtos) são compos obrigatórios para adicionar um SKU. São usadas para criar filtro ou exibir informações adicionais.
> 
### **Categorias** 
- Aba que permite criar seções para facilitar a busca pelos produtos na loja e deixá-los mais organizados, funcionam como níveis hierárquicos de classificação de produtos. 
- Os níveis principais são: departamento, categoria e subcategoria.  
> É importante que a árvore de categorias seja definida no inicio do projeto.
> 
> Como boa prática é recomendado não exceder 3 níveis de hierarquia.
> 
### **Marcas** 
- Local onde são adicionadas as marcas dos produtos disponíveis na loja, é uma forma de agrupar os itens. 
> É obrigatório a criação de uma marca, mesmo que o lojista venda apenas os próprios produtos, pois a marca é largamente utilizada como filtro nos mecanismos de busca.
> 
> A marca deve ser criada de forma independente. Quando for criado um produto ele deve ser associado a uma marca ja cadastrada.
> 
### **Coleções** 
- Recurso para agrupar produtos, usado para criar ações comerciais. 
- Dois ou mais SKUs são agrupados por determinado critério como data comemorativa, lançamentos ou mais vendidos, por exemplo.
> Para criar uma coleção é necessário ter autorização e um perfil de acesso com o recurso "write collections".
> 
### **Importar e exportar** 
- Possibilita a importação e exportação de planilhas de produtos. 
- Uma planilha exportada pode ser alterada manualmente e depois importada de volta para a plataforma onde as novas informações serão atualizadas.
> Recurso muito utilizado no inicio de um projeto.
> 
> Útil para especificações em massa, imagens e reviews de produtos.
  
### **Tipos de listas** 
- Agrupamento de produtos que podem ser de vários tipos e estar associados a eventos que o cliente queira criar como por exemplo, casamento.
> O principal objetivo das listas de compras é agrupar os produtos nos quais o cliente tem interesse, depois de criada o cliente pode compartilhar a lista com quem ele quiser.
  
### **Anexos** 
- Customizações de ofertas que podem ser feitas para diversos cenários.
- Personalização de produtos, diferentes combinações, quantidades, itens adicionais, etc.
> É nessa parte que são definidas as combinações "comprar junto"
>
> Disponível apenas no VTEX IO.
> 
> Para aparecer na página do produto, deve ser criado em uma conta de marketplace.
> 
### **Integração XML** 
- Possibilita combinar diferentes padrões de dados.

> As alterações XML levam 2 horas para ser atualizadas. Para construir uma estrutura é necessário saber o nome das tags usadas. 
> 
> Se o canal de vendas tiver alguma restrição de acesso, o XML não será gerado
> 
> Produtos inativos não aparecem no XML e os esgotados precisam estar com a opção "exibir SKUs sem saldo..." habilitada para aparecerem

  Alguns parceiros são integrados por XML na plataforma, mas há a alternativa de conectores nativos como por exemplo, Google Shopping.

### **Relatórios** 
- Dá acesso a relatórios sobre análise de produtos feitas pelos clientes, relatórios de pesquisa (VTEX search e VTEX Intelligent Search), relatórios de índice que mostra o status de indexação de todos os produtos e relatório de segurança que é onde ficam registradas as mudanças que afetam o registro dos produtos.
> É possivel ainda fazer a exportação dos dados de clientes que se cadastraram para ser avisados sobre nova disponibilidade de produto antes esgotado.
> 
> O VTEX Intelligent Search está disponível apenas para VTEX IO.

### **Condições comerciais** 
- Um agrupador de SKUs que serve para criar diferentes cenários de pagamento. 
- A configuração é feita em 3 partes: criar condição, associar SKU e associar condição de pagamento.
> As condições comerciais podem ser atualizadas sempre que o cliente achar necessário, porém, pode ser que o contrato atual seja ainda o mais adequado para o cenário da empresa.