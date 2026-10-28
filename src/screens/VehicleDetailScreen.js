import React, { useEffect, useState } from "react";
import { View, Text, Button, Alert, StyleSheet } from "react-native";
import api from "../api/api";

export default function VehicleDetailScreen({ route, navigation }) {
  const { id } = route.params;
  const [vehicle, setVehicle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get(`/vehicles/${id}`)
      .then((res) => setVehicle(res.data))
      .catch(() => setError("Não foi possível carregar o veículo."));
  }, [id]);

  const confirmDelete = () => {
    Alert.alert("Excluir veículo", "Tem certeza que deseja excluir este veículo?", [
      { text: "Cancelar", style: "cancel" },
      { text: "Excluir", style: "destructive", onPress: handleDelete },
    ]);
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/vehicles/${id}`);
      navigation.goBack();
    } catch (err) {
      Alert.alert("Erro", "Não foi possível excluir. Tente de novo.");
    }
  };

  if (error) return <View style={styles.container}><Text>{error}</Text></View>;
  if (!vehicle) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{vehicle.marca} - {vehicle.modelo}</Text>
      <Text>Placa: {vehicle.placa}</Text>
      <Text>Ano: {vehicle.ano}</Text>
      <Text>Cor: {vehicle.cor}</Text>
      <Button title="Editar" onPress={() => navigation.navigate("VehicleForm", { id })} />
      <Button title="Excluir" onPress={confirmDelete} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 15 },
});
