# DataCake Todo — Mobile

Aplicativo de lista de tarefas desenvolvido com React Native e Expo. Ele permite cadastrar e autenticar usuários, criar, listar, editar, concluir e excluir tarefas, filtrar por status e ordenar pela data de criação.

## Tecnologias

- Node.js 20 LTS ou superior
- npm
- Expo SDK 54
- React Native
- React Navigation
- Expo SecureStore

## Pré-requisitos

Instale:

- Node.js e npm;
- Expo Go em um dispositivo Android ou iOS, ou um emulador Android/iOS configurado;
- o backend DataCake Todo em execução.

Confirme o ambiente:

```powershell
node --version
npm --version
```

## Instalação

Clone o repositório e instale as dependências:

```powershell
git clone <URL_DO_REPOSITORIO_MOBILE>
cd <PASTA_DO_REPOSITORIO>
npm install
```

## Configuração da API

O arquivo `.env.example` registra o formato esperado para a URL da API. Copie-o para `.env` quando utilizar configuração por ambiente:

```powershell
Copy-Item .env.example .env
```

Na implementação atual, confirme também o valor de `API_URL` em `src/services/api.js`:

```javascript
const API_URL = "http://SEU_IP_LOCAL:8000/api";
```

- Dispositivo físico: use o IP local do computador, e mantenha ambos na mesma rede.
- Emulador Android padrão: normalmente use `http://10.0.2.2:8000/api`.
- Simulador iOS: normalmente `http://127.0.0.1:8000/api` funciona.

Inicie o backend com acesso à rede usando `python manage.py runserver 0.0.0.0:8000` e confira se o IP foi incluído em `ALLOWED_HOSTS`.

## Executando o aplicativo

Inicie o servidor do Expo:

```powershell
npm start
```

No terminal do Expo, leia o QR Code com o Expo Go ou escolha um emulador. Também estão disponíveis:

```powershell
npm run android
npm run ios
npm run web
```

O comando para iOS exige macOS e Xcode. A versão web pode exigir dependências adicionais do Expo para web.

## Fluxo de uso

1. Abra o aplicativo e selecione “Criar Conta”.
2. Informe e-mail, senha e confirmação.
3. Entre com a conta criada.
4. Adicione tarefas e use os controles para concluir, editar ou excluir.
5. Use os filtros de status e a ordenação por data conforme necessário.
6. Toque em “Sair” para remover os tokens armazenados no dispositivo.

Os tokens JWT são armazenados com `expo-secure-store`.

## Verificações

Confira a árvore de dependências instalada:

```powershell
npm ls --depth=0
```

Valide o projeto Expo:

```powershell
npx expo-doctor
```

A versão atual não possui uma suíte automatizada nem script `npm test` configurado. Faça pelo menos um teste manual dos fluxos de cadastro, login, CRUD, filtros, ordenação e logout antes da entrega.

## Estrutura principal

```text
App.js                         Entrada do aplicativo
src/navigation/AppNavigator.js Navegação entre telas
src/screens/                    Telas do aplicativo
src/services/api.js             Comunicação com a API Django
assets/                         Ícones e imagens do Expo
DEVELOPMENT_LOG.md              Registro cronológico do desenvolvimento
```

## Solução de problemas

- `Network request failed`: confirme a URL, a mesma rede, o firewall e se o backend está ouvindo em `0.0.0.0:8000`.
- Expo não encontra o dispositivo: tente iniciar com `npx expo start --tunnel`.
- Dependências inconsistentes: remova apenas a instalação local e execute `npm install` novamente.
- Resposta `401`: encerre a sessão e faça login novamente.

