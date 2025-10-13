import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function FilterBar({ brandFilter, setBrandFilter, yearFilter, setYearFilter }) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Filtrar por marca"
        value={brandFilter}
        onChangeText={setBrandFilter}
        style={styles.input}
      />
      <TextInput
        placeholder="Filtrar por ano"
        value={yearFilter}
        onChangeText={setYearFilter}
        style={styles.input}
        keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', gap: 8, marginBottom: 10 },
  input: { flex: 1, borderWidth: 1, borderColor: '#ddd', padding: 8, borderRadius: 6, marginRight: 8 }
});
