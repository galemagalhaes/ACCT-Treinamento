# **Módulo 6: Master Data v1 e v2**

### **Tópico 6.1: Master Data v1**


#### *O que é esperado:*
- [ ] Entender o que é o [Master Data](https://help.vtex.com/pt/tutorial/o-que-e-o-master-data--4otjBnR27u4WUIciQsmkAw)
- [ ] Entender como o Master Data [funciona](https://developers.vtex.com/vtex-rest-api/docs/master-data-how-it-works)
- [ ] Entender como são feitas as [consultas](https://help.vtex.com/pt/tutorial/entendendo-o-funcionamento-das-consultas-no-master-data--tutorials_4629)
- [ ] Entender como criar uma [entidade](https://help.vtex.com/pt/tutorial/criando-entidade-de-dados--tutorials_1265)
- [ ] Entender como criar uma [trigger](https://help.vtex.com/pt/tutorial/criando-trigger-no-master-data--tutorials_1270)
- [ ] Saber como criar [relacionamentos](https://help.vtex.com/pt/tutorial/criar-relacionamentos-entre-entidades-do-master-data-usando-o-admin--1qzbCit8SYXbKwrT5x2FfA)


#### *O que é recomendado:*
- Fazer consultas via API de documentos do master data


Conteúdo de apoio:
- [Overview](https://developers.vtex.com/vtex-rest-api/reference/master-data-api-v1-overview) de APIs do Master Data 
- Funcionamento de Banco de Dados Relacional e Não Relacional



### **Tópico 6.1.1: Master Data v1 - Criando Entidades**


#### *O que é esperado:*
- [ ] Estruturar no Master Data uma **Entidade** que corresponda a um cenário
- [ ] Fazer um **formulário** do Master Data para que seja possível consultar os registros inseridos
- [ ] Fazer uma **trigger** que envie um email para o seu email profissional sempre que uma condição nessa entidade for cumprida
- [ ] Inserir, Listar e excluir registros **via API**


**Cenário A - Blog de receitas**
Eu
como lojista de um supermercado
quero efetuar o cadastro de posts do meu blog de receitas culinárias no masterdata
para exibir o conteúdo dele dentro do meu ecommerce e ofertar os produtos presentes das receitas


**Critérios de aceite**
Salvar no MasterData
Título do post
Data da postagem
Conteúdo do postagem
SKUs da receita
PS: Como esse conteúdo vai ser estruturado fica a critério de vocês (ex: se a lista de SKUs vai ser uma outra entidade ou não)



**Cenário B - Rattings reviews**
Eu
como lojista
quero ter um app próprio para gerenciar as avaliações e comentários dos meus produtos
para oferecer mais transparência para meus consumidores


**Critérios de aceite**
Salvar no MasterData
Produto (SKU) avaliado
Data da avaliação
Usuário avaliador
Nota da avaliação
Comentário do usuário
PS: Como esse conteúdo vai ser estruturado fica a critério de vocês (ex: se o usuário avaliador vai ter uma relacionamento com CL ou não)

### **Tópico 6.2 - Master Data v2**

#### *O que é esperado:*
- [ ] Entender o que é o [Master Data v2](https://help.vtex.com/pt/tutorial/master-data-v2--3JJ1mlzuo88w22gO0gy0QS)
- [ ] Entender o que é [JSON Schema](https://json-schema.org/understanding-json-schema/index.html)
- [ ] [Master Data com JSON Schema:](https://help.vtex.com/tutorial/comecando-a-trabalhar-no-master-data-com-json-schema--6uLbweaMBGqOm44cESMkEQ)
- [ ] Entender como criar uma [trigger no Master Data v2](https://help.vtex.com/pt/tutorial/configurar-triggers--54eVOFGhS0EWyAUieoqKWo)

#### *O que é recomendado:*
- Replicar a entidade criada em 6.1.1 no Master Data v2

**Conteúdo de apoio:**
- [Overview de APIs do Master Data v2](https://developers.vtex.com/vtex-rest-api/reference/master-data-api-v2-overview)
- Documentação de Vtable - link notion ACCT
- Documentação interna de triggers no MD v2 - link notion ACCT
- Documentação sobre como criar store form com MD v2 e Vtable - link notion ACCT