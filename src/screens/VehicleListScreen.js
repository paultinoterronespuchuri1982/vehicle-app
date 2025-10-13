import React, { useEffect, useState } from "react";
import { View, FlatList, Button } from "react-native";
import api from "../api/api";
import VehicleItem from "../components/VehicleItem";

export default function VehicleListScreen({ navigation }) {
  const [vehicles, setVehicles] = useState([]);

  const loadVehicles = async () => {
    const response = await api.get("/vehicles");
    setVehicles(response.data);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", loadVehicles);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button
        title="Adicionar Veículo"
        onPress={() => navigation.navigate("VehicleForm")}
      />
      <FlatList
        data={vehicles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <VehicleItem
            vehicle={item}
            onPress={() => navigation.navigate("VehicleDetail", { id: item.id })}
          />
        )}
      />
    </View>
  );
}

