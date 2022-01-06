# **Configurações da conta**
É a parte onde é feito o gerenciamento da conta.
- Perfis e times envolvidos nos projetos
- Permissões de acesso de acordo com perfis
  
> É muito importante ter cuidado com as permissões e dar acesso apenas a quem vai atuar no projeto, bem como para a ACCT como consultoria/agência.

A conta se refere à conta do ambiente. Dentro dela as lojas funcionam como mundos separados. O ambiente é multiloja, cada uma com seu layout, mas elas podem compartilhar o mesmo catálogo.

Cada loja tem uma URL onde aparece o nome dela. O nome fantasia é um "H1" na página da loja. 

Os hosts são sites que podem ser usados como acesso.

### **Segurança**
Apenas o usuário mestre tem acesso às chaves de segurança, e só ele também pode realizar a limpeza na base de dados ou reindexação pelo lado da loja.

Cada chave gerada tem um access key que fica salva e um token que só aparece uma vez. Essas duas chaves são necessárias para fazer integrações, ERP por exemplo, e para ter acesso a APIs privadas.
> É importante frisar para o cliente que por questões de segurança é recomendado dar esse acesso de forma restrita, ou seja, apenas permitir acesso apenas de quem vai mexer com as permissões e liberações, pois nesse módulo é permitido ser alterado inclusive o usuário mestre. É um ponto muito sensível.

### **Autenticação**
É bastante recomendado usar autenticação via Google ou Facebook. Isso facilita e agiliza o cadastro, além de poder aumentar a taxa de conversão.

Há uma série de passos que precisam ser seguidos para configurar as autenticações. É necessário gerar um client ID e um Client Secret. Após configurado, o sitema terá acesso a um pré cadastro do cliente via Google ou facebook.

### **Aplicativos**
São apps auxiliares que podem ser instalados na plataforma para facilitar os processos. Por exemplo, Google Drive Import ou Google Tag Manager, além de apps desenvolvidos pela própria VTEX e pela ACCT.
> O tema/layout da loja VTEX IO é considerado um aplicativo.