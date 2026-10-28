import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Alert, StyleSheet } from "react-native";
import api from "../api/api";
import { isPlateValid, isYearValid } from "../utils/validators";

export default function VehicleFormScreen({ route, navigation }) {
  const [placa, setPlaca] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [cor, setCor] = useState("");
  const [saving, setSaving] = useState(false);
  const { id } = route.params || {};

  useEffect(() => {
    if (!id) return;
    api
      .get(`/vehicles/${id}`)
      .then((res) => {
        setPlaca(res.data.placa);
        setMarca(res.data.marca);
        setModelo(res.data.modelo);
        setAno(String(res.data.ano));
        setCor(res.data.cor);
      })
      .catch(() => Alert.alert("Erro", "Não foi possível carregar o veículo."));
  }, [id]);

  const handleSave = async () => {
    const plate = placa.trim().toUpperCase();
    if (!plate || !marca.trim() || !modelo.trim() || !ano || !cor.trim()) {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return;
    }
    if (!isPlateValid(plate)) {
      Alert.alert("Erro", "Placa inválida. Use de 4 a 10 letras, números ou hífen.");
      return;
    }
    if (!isYearValid(ano)) {
      Alert.alert("Erro", "Ano inválido.");
      return;
    }

    // The year is a number in the API, not a string.
    const vehicle = {
      placa: plate,
      marca: marca.trim(),
      modelo: modelo.trim(),
      ano: Number(ano),
      cor: cor.trim(),
    };

    setSaving(true);
    try {
      if (id) {
        await api.put(`/vehicles/${id}`, vehicle);
      } else {
        await api.post("/vehicles", vehicle);
      }
      navigation.goBack();
    } catch (err) {
      Alert.alert("Erro", "Não foi possível salvar. Tente de novo.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Placa" value={placa} onChangeText={setPlaca} autoCapitalize="characters" style={styles.input} />
      <TextInput placeholder="Marca" value={marca} onChangeText={setMarca} style={styles.input} />
      <TextInput placeholder="Modelo" value={modelo} onChangeText={setModelo} style={styles.input} />
      <TextInput placeholder="Ano" value={ano} onChangeText={setAno} keyboardType="number-pad" maxLength={4} style={styles.input} />
      <TextInput placeholder="Cor" value={cor} onChangeText={setCor} style={styles.input} />
      <Button title={saving ? "Salvando..." : "Salvar"} onPress={handleSave} disabled={saving} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderBottomWidth: 1, borderBottomColor: "#ccc", marginBottom: 15, padding: 10 },
});
