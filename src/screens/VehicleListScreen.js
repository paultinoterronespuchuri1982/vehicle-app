import React, { useEffect, useMemo, useState } from "react";
import { View, FlatList, Button, Text, Alert } from "react-native";
import api from "../api/api";
import VehicleItem from "../components/VehicleItem";
import FilterBar from "../components/FilterBar";

export default function VehicleListScreen({ navigation }) {
  const [vehicles, setVehicles] = useState([]);
  const [brandFilter, setBrandFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");

  const loadVehicles = async () => {
    try {
      const response = await api.get("/vehicles");
      setVehicles(response.data);
    } catch (err) {
      Alert.alert("Erro", "Não foi possível carregar os veículos.");
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", loadVehicles);
    return unsubscribe;
  }, [navigation]);

  // Filters run on the list already loaded, so they work offline from the server too.
  const visible = useMemo(() => {
    const brand = brandFilter.trim().toLowerCase();
    const year = yearFilter.trim();
    return vehicles.filter(
      (v) =>
        (!brand || v.marca.toLowerCase().includes(brand)) &&
        (!year || String(v.ano) === year)
    );
  }, [vehicles, brandFilter, yearFilter]);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="Adicionar Veículo" onPress={() => navigation.navigate("VehicleForm")} />
      <FilterBar
        brandFilter={brandFilter}
        setBrandFilter={setBrandFilter}
        yearFilter={yearFilter}
        setYearFilter={setYearFilter}
      />
      <FlatList
        data={visible}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text>Nenhum veículo encontrado.</Text>}
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
