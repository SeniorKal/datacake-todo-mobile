# Registro de Desenvolvimento — Mobile

Este documento registra, em ordem cronológica, as etapas realizadas no desenvolvimento do aplicativo mobile DataCake Todo, as decisões técnicas tomadas e a utilização de ferramentas de Inteligência Artificial durante o processo.

Algumas etapas iniciais foram documentadas retroativamente com base no histórico de commits, nos arquivos criados e no processo realizado durante o desenvolvimento.

---

## 1. Criação inicial do projeto React Native

Foi criada a estrutura inicial do aplicativo mobile utilizando React Native.

O projeto foi preparado com os arquivos e pastas padrão necessários para iniciar o desenvolvimento da aplicação.

Entre os arquivos principais estão:

```text
App.js
app.json
index.js
package.json
package-lock.json
```

Também foram mantidas pastas como:

```text
assets/
src/
```

### Decisão técnica

Foi escolhida uma estrutura baseada em React Native por ser a tecnologia exigida no desafio e permitir o desenvolvimento de uma aplicação mobile utilizando JavaScript e componentes reutilizáveis.

### Uso de IA

A IA foi utilizada para explicar a estrutura inicial do projeto, a função dos arquivos principais e orientar os primeiros passos sem substituir a análise manual do código.

---

## 2. Organização inicial das pastas

O código da aplicação passou a ser organizado dentro da pasta:

```text
src/
```

Foram criadas pastas com responsabilidades específicas, como:

```text
src/screens/
src/navigation/
src/components/
```

A pasta `screens` foi utilizada para armazenar as telas principais.

A pasta `navigation` foi reservada para a configuração da navegação entre as telas.

A pasta `components` foi criada para receber componentes reutilizáveis da interface.

### Decisão técnica

A organização foi feita para evitar que todo o código permanecesse concentrado no arquivo `App.js`.

Separar as responsabilidades facilita a leitura, manutenção e expansão do aplicativo.

### Uso de IA

A IA foi utilizada para sugerir uma estrutura organizada de pastas e explicar a diferença entre telas, componentes e arquivos de navegação.

---

## 3. Criação da tela de boas-vindas

Foi criada a tela:

```text
WelcomeScreen.js
```

A tela de boas-vindas funciona como ponto inicial do aplicativo.

Ela apresenta a identidade inicial da aplicação e opções para o usuário seguir para login ou cadastro.

Durante o processo, a tela que inicialmente estava concentrada no arquivo principal foi movida para um arquivo próprio.

### Decisão técnica

A tela foi separada em um arquivo dedicado para manter o `App.js` mais simples e deixar cada tela responsável apenas por sua própria interface.

### Uso de IA

A IA foi utilizada para explicar a criação de componentes funcionais e orientar a separação da tela em um arquivo específico.

---

## 4. Refatoração da tela inicial

A implementação inicial da tela de boas-vindas foi reorganizada.

O código visual da tela foi removido do arquivo principal e transferido para:

```text
src/screens/WelcomeScreen.js
```

O arquivo `App.js` passou a ter uma responsabilidade menor, ficando mais próximo de um ponto de entrada e configuração da aplicação.

### Decisão técnica

A refatoração foi realizada para melhorar a separação de responsabilidades e preparar o projeto para receber novas telas.

### Uso de IA

A IA foi utilizada para explicar o conceito de refatoração e a importância de evitar arquivos muito grandes ou com funções diferentes misturadas.

---

## 5. Instalação e configuração da navegação

Foi configurado o React Navigation para permitir a troca entre as telas da aplicação.

Foram instaladas as dependências necessárias e criada a estrutura de navegação dentro da pasta:

```text
src/navigation/
```

O aplicativo passou a utilizar um navegador responsável por controlar o fluxo entre as telas.

As telas foram registradas na navegação para que pudessem ser acessadas por nome.

### Decisão técnica

Foi utilizado o React Navigation por ser uma solução consolidada para navegação em aplicativos React Native.

A navegação foi isolada em uma pasta própria para evitar que a configuração ficasse misturada com a interface das telas.

### Uso de IA

A IA foi utilizada para explicar o funcionamento do `NavigationContainer`, dos navegadores e do método `navigate`.

Os comandos de instalação e a configuração foram analisados antes da aplicação.

---

## 6. Integração da navegação no `App.js`

O arquivo:

```text
App.js
```

foi ajustado para carregar a estrutura de navegação da aplicação.

Com isso, o aplicativo deixou de renderizar uma única tela diretamente e passou a utilizar o fluxo configurado no navegador.

### Decisão técnica

O `App.js` foi mantido simples, servindo principalmente como ponto de entrada da aplicação.

### Uso de IA

A IA foi utilizada para explicar por que a navegação deve envolver as telas e como o componente principal se conecta ao navegador.

---

## 7. Criação da tela de login

Foi criada a tela:

```text
LoginScreen.js
```

A interface passou a incluir campos para:

- e-mail;
- senha.

Também foi incluído um botão para realizar o login e opções de navegação para outras telas do fluxo de autenticação.

### Decisão técnica

A tela foi criada separadamente para manter o fluxo de autenticação organizado e facilitar a futura integração com a API Django.

### Uso de IA

A IA foi utilizada para orientar a construção da interface e explicar a responsabilidade de cada componente utilizado no formulário.

---

## 8. Correções na navegação e na tela de login

Durante a integração da tela de login, foram identificados e corrigidos problemas relacionados à navegação e à organização da tela.

As correções garantiram que:

- a tela fosse aberta corretamente;
- os nomes das rotas correspondessem aos registrados no navegador;
- os botões direcionassem para as telas esperadas.

### Decisão técnica

Os erros foram corrigidos antes da criação de novas funcionalidades para evitar que problemas de navegação se acumulassem.

### Uso de IA

A IA foi utilizada como apoio para analisar mensagens de erro e explicar a relação entre o nome registrado de uma rota e o nome utilizado no método `navigate`.

---

## 9. Controle de estado no formulário de login

Foi utilizado o hook:

```javascript
useState
```

para armazenar os valores digitados nos campos do formulário.

Foram criados estados para informações como:

- e-mail;
- senha.

Os campos passaram a ser controlados pelo React.

Isso significa que o valor exibido em cada campo é armazenado no estado do componente e atualizado por meio de eventos de alteração.

### Decisão técnica

Foi utilizada a abordagem de componentes controlados para permitir futuras validações e o envio dos dados para a API.

### Uso de IA

A IA foi utilizada para explicar o funcionamento do `useState`, a atualização de estado e a relação entre `value` e `onChangeText`.

---

## 10. Validação inicial do formulário de login

Foi adicionada uma validação inicial antes da ação de login.

A validação verifica se os campos obrigatórios foram preenchidos.

Quando os dados não estão válidos, o aplicativo apresenta uma mensagem ao usuário em vez de continuar com a operação.

### Decisão técnica

A validação foi adicionada no frontend para fornecer um retorno rápido ao usuário.

Mesmo assim, as validações também serão realizadas no backend, pois o aplicativo não deve ser a única camada responsável por proteger os dados.

### Uso de IA

A IA foi utilizada para explicar a diferença entre validação no frontend e validação no backend.

A lógica foi analisada para evitar depender apenas da interface.

---

## 11. Criação da tela de cadastro

Foi criada a tela:

```text
RegisterScreen.js
```

A interface de cadastro contém campos necessários para a criação de uma nova conta.

Entre os dados trabalhados estão:

- nome;
- e-mail;
- senha;
- confirmação de senha.

Também foram adicionadas opções para retornar ao fluxo de login.

### Decisão técnica

A tela foi mantida separada da tela de login para deixar cada fluxo com uma responsabilidade clara.

### Uso de IA

A IA foi utilizada para auxiliar na estrutura da tela e explicar a reutilização de padrões semelhantes aos utilizados no login.

---

## 12. Controle de estado no formulário de cadastro

O hook:

```javascript
useState
```

também foi utilizado na tela de cadastro.

Cada campo possui seu próprio estado, permitindo armazenar e validar os dados antes do envio.

### Decisão técnica

Foi mantido o mesmo padrão utilizado na tela de login para garantir consistência entre os formulários.

### Uso de IA

A IA foi utilizada para reforçar o funcionamento de estados independentes e a importância de nomes claros para cada variável.

---

## 13. Validação inicial do formulário de cadastro

Foram adicionadas validações iniciais para impedir o envio de informações inválidas.

Entre as verificações estão:

- campos obrigatórios não preenchidos;
- senha e confirmação de senha diferentes.

O usuário recebe uma mensagem quando existe algum problema antes da tentativa de cadastro.

### Decisão técnica

As validações foram adicionadas para melhorar a experiência do usuário e evitar requisições desnecessárias para o backend.

As regras também serão validadas novamente pela API.

### Uso de IA

A IA foi utilizada para explicar a importância de não confiar apenas nas validações do aplicativo e manter regras equivalentes no backend.

---

## 14. Criação da tela de lista de tarefas

Foi criada a tela:

```text
TaskListScreen.js
```

Essa tela será responsável por exibir e gerenciar as tarefas do usuário.

Ela servirá de base para implementar posteriormente:

- listagem;
- criação;
- edição;
- conclusão;
- exclusão;
- filtros por status;
- filtros por data.

### Decisão técnica

A tela foi criada antecipadamente para completar o fluxo principal de navegação e preparar a futura integração com a API.

### Uso de IA

A IA foi utilizada para discutir a responsabilidade da tela e a organização futura das funções relacionadas às tarefas.

---

## 15. Estrutura atual de telas

Até esta etapa, o aplicativo possui as seguintes telas:

```text
src/screens/WelcomeScreen.js
src/screens/LoginScreen.js
src/screens/RegisterScreen.js
src/screens/TaskListScreen.js
```

A navegação entre elas já está preparada.

### Decisão técnica

A estrutura foi mantida simples nesta etapa, priorizando primeiro o fluxo visual e a organização antes da integração com o backend.

### Uso de IA

A IA foi utilizada para ajudar a planejar uma sequência de desenvolvimento incremental.

---

## 16. Organização do histórico de commits

As alterações do aplicativo foram separadas em commits de acordo com sua responsabilidade.

Entre as etapas registradas estão:

```text
Initial commit
feat: add welcome screen layout
refactor: move welcome screen to dedicated file
feat: implement app navigation
feat: create login screen layout
fix: resolve navigation and login screen issues
feat: add login form state validation
feat: create register screen layout and validation
```

### Decisão técnica

Foi evitado concentrar todo o desenvolvimento em um único commit.

Cada commit representa uma etapa lógica do projeto, facilitando a leitura do histórico e a revisão das alterações.

### Uso de IA

A IA foi utilizada para sugerir mensagens de commit mais claras e organizadas.

Antes dos commits, as alterações foram verificadas com:

```bash
git status
```

## 17. Integração do cadastro mobile com a API

Foi realizada a primeira integração funcional entre o aplicativo React Native e o backend Django.

Inicialmente, foi criado o arquivo:

```text
src/services/api.js
```

Esse arquivo centraliza o endereço do backend e as funções responsáveis pela comunicação HTTP com a API.

### Teste inicial de conexão

Foi criada uma função para acessar o endpoint:

```text
GET /api/health/
```

A função foi chamada temporariamente na `WelcomeScreen` utilizando o hook `useEffect`.

O teste confirmou que o aplicativo executado no Expo Go conseguia acessar o servidor Django pela rede local.

Para permitir o acesso pelo celular, o servidor foi iniciado com:

```bash
python manage.py runserver 0.0.0.0:8000
```

Também foi adicionado o endereço IP local do computador ao `ALLOWED_HOSTS` do Django.

A resposta recebida no aplicativo foi:

```json
{
  "status": "ok"
}
```

### Serviço de cadastro

Foi adicionada ao `api.js` uma função responsável por enviar os dados de cadastro ao endpoint:

```text
POST /api/register/
```

A função utiliza `fetch` para enviar os dados em formato JSON.

O objeto enviado contém:

```text
email
password
password_confirm
```

As respostas do backend também são convertidas de JSON para objetos JavaScript.

Quando a API retorna um erro, os dados da resposta são lançados para que a tela consiga apresentar a mensagem correspondente ao usuário.

### Refatoração da tela de cadastro

A lógica que anteriormente estava escrita diretamente dentro do botão foi movida para uma função assíncrona chamada:

```text
handleRegister
```

Essa função passou a ser responsável por:

- verificar campos vazios;
- comparar senha e confirmação;
- chamar o serviço de cadastro;
- mostrar mensagens de sucesso;
- apresentar erros retornados pela API;
- navegar para a tela de login após o cadastro.

Essa alteração deixou o componente visual mais simples e separou a interface da lógica da tela.

### Testes realizados

Foram testados os seguintes cenários pelo aplicativo no Expo Go:

- criação de uma conta válida;
- tentativa de utilizar um e-mail já cadastrado;
- envio de senhas diferentes;
- envio de campos vazios.

Foi criada com sucesso uma conta pelo aplicativo mobile, e sua existência foi confirmada no painel administrativo do Django.

### Decisão técnica

Foi decidido concentrar as requisições HTTP no arquivo `api.js`, evitando repetir URLs e configurações de `fetch` diretamente nas telas.

Essa organização facilitará a implementação futura de login, tarefas e renovação de tokens.

### Uso de IA

A IA foi utilizada para explicar o funcionamento de `fetch`, `async`, `await`, `try`, `catch`, validações com valores falsos, transformação de objetos em JSON e separação entre lógica de interface e comunicação com a API.

O fluxo completo foi testado e compreendido antes do registro da etapa.

## 18. Integração do login/registro aplicativo com a API Django

### Objetivo

Conectar o aplicativo React Native ao backend Django REST Framework para permitir cadastro e autenticação de usuários.

### Alterações realizadas

- Criado o serviço `src/services/api.js` para centralizar as chamadas HTTP.
- Configurada a URL base da API utilizando o IP da máquina local.
- Implementada a função de verificação de conexão (`checkApiHealth`).
- Implementada a função de cadastro (`register`).
- Implementada a função de login (`loginUser`).

### Integração das telas

#### WelcomeScreen

- Teste automático de conexão com a API utilizando `useEffect`.
- Validação de comunicação entre aplicativo e backend.

#### RegisterScreen

- Refatoração da lógica do botão para a função `handleRegister`.
- Integração com o endpoint `/api/register/`.
- Tratamento de erros enviados pela API.
- Exibição de mensagens de sucesso e erro para o usuário.

#### LoginScreen

- Refatoração da lógica do botão para a função `handleLogin`.
- Integração com o endpoint `/api/login/`.
- Recebimento dos tokens JWT (`access` e `refresh`).
- Navegação para a tela de tarefas após autenticação.

### Testes realizados

- Cadastro de múltiplos usuários.
- Validação de e-mail duplicado.
- Validação de confirmação de senha.
- Login com credenciais válidas.
- Login com credenciais inválidas.
- Navegação automática após autenticação.

### Observações

Nesta etapa os tokens JWT ainda são utilizados apenas durante a sessão do aplicativo.

O armazenamento seguro utilizando `expo-secure-store` será implementado posteriormente.

## 19. Integração da tela de tarefas com a API

### Objetivo

Integrar a tela de tarefas do aplicativo React Native ao backend Django, permitindo que as tarefas fossem armazenadas no banco de dados e sincronizadas entre diferentes sessões do aplicativo.

### Alterações realizadas

O arquivo:

```text
src/services/api.js
```

foi expandido para centralizar também as requisições relacionadas às tarefas.

Foram implementadas funções responsáveis por:

- listar tarefas;
- criar tarefas;
- atualizar tarefas;
- excluir tarefas.

Todas as requisições passaram a utilizar o token JWT armazenado no dispositivo para autenticação.

### Integração da TaskListScreen

A tela:

```text
TaskListScreen.js
```

foi integrada à API.

Foi criada a função:

```text
loadTasks()
```

Essa função é responsável por:

- recuperar o token salvo utilizando `expo-secure-store`;
- solicitar as tarefas do usuário para a API;
- atualizar o estado da aplicação com os dados recebidos.

A função passou a ser executada automaticamente através do hook:

```javascript
useEffect()
```

sempre que a tela é carregada.

### Criação de tarefas

A função responsável por adicionar tarefas foi adaptada para enviar os dados ao backend.

Após a criação de uma nova tarefa, a lista é carregada novamente para manter a interface sincronizada com o banco de dados.

### Atualização e exclusão de tarefas

As funcionalidades de concluir e excluir tarefas também passaram a utilizar a API.

Após cada operação, a lista de tarefas é atualizada automaticamente, garantindo que a interface represente exatamente os dados armazenados no servidor.

### Testes realizados

Foram realizados testes para verificar:

- carregamento das tarefas após o login;
- criação de novas tarefas;
- persistência das tarefas após fechar e abrir o aplicativo;
- atualização do status de conclusão;
- exclusão definitiva de tarefas;
- sincronização da lista após cada alteração.

Durante os testes foram identificados e corrigidos problemas relacionados à atualização da interface, sincronização das tarefas concluídas e remoção definitiva das tarefas excluídas.

### Decisão técnica

Foi decidido concentrar todas as requisições relacionadas às tarefas no arquivo `api.js`, deixando a tela responsável apenas pela interface e pelo gerenciamento de estado.

Após qualquer alteração (criação, atualização ou exclusão), a lista é carregada novamente a partir da API para evitar inconsistências entre o estado local e o banco de dados.

### Uso de IA

A IA foi utilizada para explicar o fluxo de comunicação entre o aplicativo e a API, o uso de `async/await`, `try/catch`, armazenamento seguro de tokens com `expo-secure-store`, organização das funções de serviço e sincronização entre o estado do React Native e os dados persistidos no backend.