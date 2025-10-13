# Vehicle App (React Native + JSON Server)

## Requisitos
- Node.js
- Expo CLI (`npm install -g expo-cli`)
- json-server (puedes instalar global: `npm i -g json-server` o usar el script npm)

## Instalar dependencias
npm install
npm install axios @react-navigation/native @react-navigation/native-stack
expo install react-native-screens react-native-safe-area-context
# opcional:
npm install formik yup
# json-server como dev dependency (opcional)
npm install --save-dev json-server

## Scripts útiles
- `npm run json-server` -> levanta JSON Server en http://localhost:3001
- `npm start` -> inicia Expo

## Nota sobre IP
- Si usas un emulador Android: usa `http://10.0.2.2:3001` en src/api/api.js
- Si usas un dispositivo físico: reemplaza baseURL por `http://TU_IP_LOCAL:3001`

## Estructura
(la estructura de archivos está en el repo)

