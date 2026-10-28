# vehicle-app

Aplicativo Expo (React Native) para cadastrar, listar e ver detalhes de veículos.
Os dados ficam em um servidor local json-server.

## Funcionalidades

- Listar veículos, com filtro por marca.
- Ver detalhes de um veículo.
- Cadastrar um veículo: placa, marca, modelo, ano e cor.
- Validação: placa com 4 a 10 caracteres (letras, números e hífen) e ano entre 1900 e o próximo ano.

## Como rodar

Requisitos: Node.js LTS e npm.

```bash
npm install
npm run json-server   # servidor de dados em http://localhost:3001
npm start             # abre o Expo (use o app Expo Go, ou web/android/ios)
```

A URL da API está em `src/api/api.js` (`http://localhost:3001`). Se usar um celular físico,
troque `localhost` pelo IP do seu computador na mesma rede.

## Estrutura

- `src/screens/`: telas de lista, detalhe e formulário.
- `src/components/`: `VehicleItem` e `FilterBar`.
- `src/api/api.js`: cliente HTTP (axios).
- `src/utils/validators.js`: regras de validação de placa e ano.
- `src/navigation/AppNavigator.js`: pilha de navegação do app.
- `json-server/db.json`: dados de exemplo usados pelo json-server.

## Pendências conhecidas

- **Duas entradas de app.** `package.json` aponta para `expo-router/entry`, então o app
  abre as telas de exemplo de `app/`, não as telas de veículos em `src/`. `App.js` só é usado
  se o ponto de entrada mudar.
- **Dados em dois formatos.** O código usa `placa`, `marca`, `modelo`, `ano`, `cor`.
  `json-server/db.json` usa `plate`, `brand`, `model`, `year`, `color`. A raiz tem outro `db.json`
  com os nomes em português, que não é usado pelo script.
- **Arquivos vazios sem uso:** `JSON` e `babel.config.js`.
- Não há testes automatizados.
