# Vehicle App

Aplicativo móvel para cadastro e consulta de veículos. Permite listar, cadastrar, visualizar, editar e remover veículos, com validação dos dados de placa e ano antes do envio ao servidor.

## Tecnologias

- **React Native** com **Expo SDK 54**
- **React Navigation** (pilha de telas nativa)
- **Axios** para comunicação com a API REST
- **Formik** e **Yup** para formulários e validação
- **json-server** como API REST simulada para desenvolvimento

## Estrutura

```
App.js                          # Entrada do app e container de navegação
src/
├── navigation/AppNavigator.js  # Rotas: lista, cadastro e detalhes
├── screens/                    # Telas: VehicleList, VehicleForm, VehicleDetail
├── components/                 # VehicleItem e FilterBar
├── api/api.js                  # Cliente HTTP configurado com a URL da API
└── utils/validators.js         # Regras de validação de placa e ano
json-server/db.json             # Dados de exemplo para a API simulada
```

## Como executar

Requisitos: Node.js 18+, o app Expo Go no celular (ou um emulador).

```bash
npm install

# Terminal 1: API simulada em http://localhost:3001
npm run server

# Terminal 2: aplicativo
npm start
```

### Usando em celular físico

O celular não acessa `localhost` da sua máquina. Informe o IP da máquina na rede local:

```bash
EXPO_PUBLIC_API_URL=http://SEU_IP:3001 npm start
```

Veja o IP com `ipconfig` (Windows) ou `ifconfig` (macOS/Linux).

## Validações

- **Placa**: 4 a 10 caracteres, letras, números e hífen. Não diferencia maiúsculas.
- **Ano**: número inteiro entre 1901 e o ano atual + 1.

## Melhorias planejadas

- Tratamento de erros de rede nas telas (hoje as chamadas não mostram mensagem ao usuário).
- Testes unitários para `validators.js`.
- Remover a dependência `expo-router`, que não é mais usada.
