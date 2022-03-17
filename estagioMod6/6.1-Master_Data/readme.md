### **O que é o Master Data**

O Mastre Data é um módulo VTEX que ajuda na criação da arquitetura de banco de dados para uma loja.
Serve por padrão para armazenar e organizar os dados de clientes, mas pode ser usado também para customizar regras de negócios e criar aplicações para loja virtual.

É um sistema muito flexível, capaz de atender necessidades específicas que possam, eventualmente, não ser encontradas na plataforma VTEX, por ser muito segmentadas ao um tipo de comércio.

Pode ser usado configurando uma aplicação para utilizar o Master Data como repositório, criando um sistema a partir dele, apenas modelando uma nova entidade. Assim, um programa externo pode ser desenvolvido sobre a plataforma VTEX, mas dando ao usuário a impressão de navegar em uma funcionalidade nativa.

É um sistema distribuído, podendo ser acessado e gerido em todo o mundo de forma rápida

### **Como o Master Data funciona**

#### **Principais componentes**

- Data Entity (entidade de dados) 
- Document (documento) 
- Field (campo) 
- Index (índice)

**Entidade de dados**: é como uma tabela onde são armazenados os documentos e campos

O Master Data possui 2 versões (v1 e v2), em cada uma a Entidade é referida de um jeito. Na *V1* a referência é uma **sigla com 2 letras maiúsculas**, já na *V2* a referência é o **nome da Entidade** 

**Documento**: é um registro dentro da Entidade, ou uma linha na tabela, e possui um identificador, um campo ID

**Campo**: é um atributo que especifica uma característica do registro. São as colunas da tabela

Os dados têm formas diferentes, por isso os tipos (string, inteiro, etc) precisam ser configurados para garantir a consistência dos dados. Cada **campo** possui um tipo.

**Indice**: é um atalho para localizar Documentos quando o usuário não os conhece. Pode ser configurado para cada campo, é usado para recuperar um documento por vez usando o valor de um campo indexado. Por exemplo, uma busca pelo e-mail, cujo campo tem um índice nativo
- No **Master Data V1**, a configuração do índice é feita pelo ***Admin***
- No **Master Data V2**, a configuração do índice é feita por ***API***

Um índice é gerado quando um documento é criado ou modificado, mas apenas se isso ocorrer após a configuração do índice. Para que um documento sem índice possa recebê-lo, é preciso que este documento seja atualizado.

Quando um documento tem índice ele pode ser recuperado na Search API passando o nome do campo como parâmentro de consulta e o valor do campo como valor do parâmetro.
> Exemplo: `/dataentities/CL/search?email=my@email.com`

#### **Arquitetura**
Serviço - executa tarefas automatizadas e responde a eventos (hardware ou software). O Master Data é composto pelos seguintes serviços:
- API
- Worker
- Storage
- Search Engine

**API**: responsável pelas requisições HTTP, por endpoints que dão acesso a outros serviços

**Worker**: responsável pelo envio de documentação para o *search engine*, pela execução dos triggers, por importar e exportar arquivos csv

**Storage**: responsável por armazenar os dados

**Search Engine**: responsável por fazer as buscas, permite que os documentos sejam pesquisáveis

Quandos os dados armzenados recebem algum tipo de atualização, o Master Data Worker recebe uma mensagem para executar triggers e enviar para o Search Engine a versão mais recente do documento tronando-a assim, pesquisável

#### **Master Data API**
A Master Data API é dividida em duas categorias - *Data Plane* (Plano de dados) para a gestão dos registros e *Control Plane* (Plano de controle) para definir sua estrutura e acesso

**Data Plane**: para armazenar e recuperar documentos, acesso rápido e com alta disponibilidade

Um campo é pesquisável quando é configurado para isso por meio das propriedades: `Is Filter` para o Master Data V1, e `v -indexed` para o Master Data V2

**Control Plane**: permite gerenciar o comportamento do *Data Plane*, é onde são configurados gatilhos, validações e pesquisas para a *Data Entity*, tem menor volume de acesso comparado ao volume do Plano de Dados.

Essa categoria só faz parte do Master Data V2, no V1 a configuração é feita pelo *Admin* no *Dynamic Storage*
> `https://*nome-da-conta*.ds.vtexcrm.com.br`

Já o Master Data V2 permite a criação e a atualização do *JSON Schema* pelo usuário, através das APIs `/schema` e `/indices`

#### **Endpoints da API Master Data**
- **Schemas**: permite criar e ler *schemas*, fazer pesquisa com *Fields* personalizados e adicionar regras na gestão de *Documents* 
- **Indices**: atalhos de acesso rápido a *Documents* usando outros *Fields* além do *Id* do documento
- **Documents**: gestão direta dos *Documents* por meio de seu *Id*
- **Search**: recuperação de *Documents* por vários parâmetros, inclusive *schemas* e *indexed Fields*
- **Scroll**: recuperação de grandes quantidades de *Documents*
#### **Endpoints x categorias x versão MD**
Nome|Caminho|Categoria|Versão Master Data
----|-------|---------|------------------
Schemas|/schemas|Control Plane|V2
Indices|/indices|Control Plane|V2
Documents|/documents|Data Plane|V1 e V2
Search|/search|Data Plane|V1 e V2
Scroll|/scroll|Data Plane|V1 e V2
#### **Nível de Consistência**
Por ser um sistema distribuído, a consistência dos dados é um ponto de atenção. Isso significa que toda alteração nos dados deve ser replicada em todas as instâncias. Isso pode acontecer com **Consistência forte** ou **Consistência eventual**

- **Consistência forte**: permite o acesso imediato à mudança, após essa ter ocorrido. Para realizar isso, o acesso será bloqueado pelas outras instâncias até que todas estejam atualizadas
- **Consistência eventual**: leva um tempo para que a mudança esteja disponível. A alteração entra em uma fila e eventualmente será replicada para as demais instâncias. A API `/search` é eventualmente consistente, levando algum tempo para mostrar a atualização dos dados, diferentemente da API `/documents` que vai diretamente para o *Storege*, a `/search` vai para o *Search Engine*

O caminho dos dados atualizados é:
> dado persistido no Master Data ---> Storage atualizado por operação atômica ---> mensagem enviada ao worker ---> worker executa triggers ---> worker envia document para search engine 
> 
Só depois da atualização do serach engine, os dados estarão disponíveis pela API /search. A indexação de Documents no Search Engine é custosa, assim, com a consistencia eventual essa idexação é feita de maneira assíncrona

#### **Níveis de consistência**

Nome|Caminho|Nível
----|-------|-----
Documents|/documents|forte
Indices|/indices|forte
Schemas|/schemas|forte
Search|/search|eventual
Scroll|/scroll|eventual

### **Schema Lifecycle**
*JSON Schema* é uma ferramena para validar estruturas de dados JSON, com base em regras, permite que o usuário faça a configuração da estrutura de uma entidade.

> Sem schema ---> criação do schema ---> modificação do schema ---> remoção do schema


O Master Data pode funcionar sem um schema, mas isso tem um limite para salvar e pesquisar documentos

Cada fase do ciclo tem três áreas:
- **Saving Data**: com o armazenamento sem um schema, a validação afetará somente o campo *Id*  
- **Searching**: é possível pesquisar todos os documentos armazenados, mas para aplicar filtros à pesquisa, haverá uma limitação
- **Background process**: sem schema não haverá nada processando em segundo plano, porque não foram criados os gatilhos necessários, bem como campos personalizads pesquisáveis.

### **Criando um Schema**
Pode ser criado antes ou depois dos dumentos serem persistidos, via *Schemas API*. Se for feito depois, o processo será adicionado em segundo plano

- Background process: os documentos ja existentes serão todos revalidados, com o documento valido, o campo... recebe o nome do schema. Os documentos não validados continuam no banco de dados, mas o campo schema não será atualizado