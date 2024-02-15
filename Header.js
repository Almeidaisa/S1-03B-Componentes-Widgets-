import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const PinkHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>baratas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF66FF', // Rosa claro
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    color: '#FFFF', // Rosa médio
    fontWeight: 'bold',
  },
});

export default PinkHeader;