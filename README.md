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

## Notas

- **Entrada do app:** `package.json` usa `expo/AppEntry`, que carrega `App.js` e as telas de `src/`.
  A pasta `app/` é da plantilla do Expo (expo-router) e não é usada. Pode ser removida, mas não o fiz.
- **Dados:** `json-server/db.json` usa os mesmos nomes do código (`placa`, `marca`, `modelo`, `ano`, `cor`).
- **Testes:** o projeto ainda não tem testes automatizados.
