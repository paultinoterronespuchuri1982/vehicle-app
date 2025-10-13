import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function VehicleItem({ vehicle, onPress }) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Text style={styles.title}>{vehicle.marca} - {vehicle.modelo}</Text>
      <Text>Placa: {vehicle.placa}</Text>
      <Text>Ano: {vehicle.ano} | Cor: {vehicle.cor}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});


