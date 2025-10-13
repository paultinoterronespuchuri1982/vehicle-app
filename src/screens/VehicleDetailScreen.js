import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import api from "../api/api";

export default function VehicleDetailScreen({ route, navigation }) {
  const { id } = route.params;
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    api.get(`/vehicles/${id}`).then((res) => setVehicle(res.data));
  }, [id]);

  const handleDelete = async () => {
    await api.delete(`/vehicles/${id}`);
    navigation.goBack();
  };

  if (!vehicle) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{vehicle.marca} - {vehicle.modelo}</Text>
      <Text>Placa: {vehicle.placa}</Text>
      <Text>Ano: {vehicle.ano}</Text>
      <Text>Cor: {vehicle.cor}</Text>
      <Button title="Editar" onPress={() => navigation.navigate("VehicleForm", { id })} />
      <Button title="Excluir" onPress={handleDelete} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 15 },
});
