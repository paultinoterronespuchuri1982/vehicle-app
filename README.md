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

A URL da API vem de `EXPO_PUBLIC_API_URL` (padrão: `http://localhost:3001`). Copie `.env.example`
para `.env` para configurar. Em um celular físico, use o IP do computador na mesma rede no lugar de
`localhost`.

## Estrutura

- `src/screens/`: telas de lista, detalhe e formulário.
- `src/components/`: `VehicleItem` e `FilterBar`.
- `src/api/api.js`: cliente HTTP (axios), com a URL vinda de `EXPO_PUBLIC_API_URL`.
- `src/utils/validators.js`: regras de validação de placa e ano.
- `src/navigation/AppNavigator.js`: pilha de navegação do app.
- `json-server/db.json`: dados de exemplo usados pelo json-server.

## Segurança

- O `json-server` é um mock para desenvolvimento. Não tem login nem validação no servidor. Não o exponha
  na internet nem o use como backend de produção.
- Variáveis `EXPO_PUBLIC_*` vão para o bundle do app e ficam visíveis para qualquer um. Nunca coloque
  segredos nelas.
- A validação da placa e do ano acontece no app, mas o servidor também precisa validar.

## Notas

- **Entrada do app:** `package.json` usa `expo/AppEntry`, que carrega `App.js` e as telas de `src/`.
  A pasta `app/` é da plantilla do Expo (expo-router) e não é usada. Pode ser removida, mas não o fiz.
- **Dados:** `json-server/db.json` usa os mesmos nomes do código (`placa`, `marca`, `modelo`, `ano`, `cor`).
- **Testes:** o projeto ainda não tem testes automatizados. Os validadores em `src/utils/validators.js`
  são o primeiro candidato.
