import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface ItemProps {
    item:{
    name:string,
    image_url:string
    }
}
export function VillagerCard({ item }:ItemProps) {
    return (
        <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Image
                style={styles.image}
                source={{ uri: item.image_url }}
                resizeMode="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#ffffff",
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: "#868186",
        padding: 20,
        width: 300,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    image: {
        height: 150,
        width: 150,
    },
    name: {
        fontFamily: 'FOT-RodinBokutohProEB',
        color:'#74664b',
        marginBottom: 10
    }
});
