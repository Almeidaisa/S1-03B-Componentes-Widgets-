import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Rodape = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}>rodapé </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        backgroundColor: "#FF66FF", // Rosa claro
        padding: 10,
        alignItems: "center",
    },
    text: {
        color: "#FFFF", // Rosa médio
        fontSize: 14,
    },
});

export default Rodape;