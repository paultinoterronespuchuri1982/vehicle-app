import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VehicleListScreen from "../screens/VehicleListScreen";
import VehicleFormScreen from "../screens/VehicleFormScreen";
import VehicleDetailScreen from "../screens/VehicleDetailScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="VehicleList" component={VehicleListScreen} options={{ title: "Veículos" }} />
      <Stack.Screen name="VehicleForm" component={VehicleFormScreen} options={{ title: "Cadastro de Veículo" }} />
      <Stack.Screen name="VehicleDetail" component={VehicleDetailScreen} options={{ title: "Detalhes do Veículo" }} />
    </Stack.Navigator>
  );
}

