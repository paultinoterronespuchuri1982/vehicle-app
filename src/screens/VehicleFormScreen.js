import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Alert, StyleSheet } from "react-native";
import api from "../api/api";

export default function VehicleFormScreen({ route, navigation }) {
  const [placa, setPlaca] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [cor, setCor] = useState("");
  const { id } = route.params || {};

  useEffect(() => {
    if (id) {
      api.get(`/vehicles/${id}`).then((res) => {
        setPlaca(res.data.placa);
        setMarca(res.data.marca);
        setModelo(res.data.modelo);
        setAno(res.data.ano.toString());
        setCor(res.data.cor);
      });
    }
  }, [id]);

  const handleSave = async () => {
    if (!placa || !marca || !modelo || !ano || !cor) {
      Alert.alert("Erro", "Todos os campos são obrigatórios!");
      return;
    }

    const vehicle = { placa, marca, modelo, ano, cor };

    if (id) {
      await api.put(`/vehicles/${id}`, vehicle);
    } else {
      await api.post("/vehicles", vehicle);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Placa" value={placa} onChangeText={setPlaca} style={styles.input} />
      <TextInput placeholder="Marca" value={marca} onChangeText={setMarca} style={styles.input} />
      <TextInput placeholder="Modelo" value={modelo} onChangeText={setModelo} style={styles.input} />
      <TextInput placeholder="Ano" value={ano} onChangeText={setAno} keyboardType="numeric" style={styles.input} />
      <TextInput placeholder="Cor" value={cor} onChangeText={setCor} style={styles.input} />
      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderBottomWidth: 1, borderBottomColor: "#ccc", marginBottom: 15, padding: 10 },
});
