import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    FlatList,
    Image,
    ActivityIndicator,
    ImageBackground,
    TouchableOpacity,
    Button,
    Pressable
} from "react-native";
import { useNookipedia } from "../hooks/useVillagers";
import { VillagerCard } from "../components/VillagerCard";

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

interface ItemProps {
    name: string;
    image_url: string;
    species: string;
}

const bgImage = require('../../assets/bgList.png');

export function ListVillagersScreen({ navigation }) {
    const { isLoading, isError, data, error } = useNookipedia();
    const [filteredSpecies, setFilteredSpecies] = useState<string | null>(null);

    if (isLoading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" color="black" />
            </View>
        );
    }

    if (isError) {
        return <Text>Error: {error.message}</Text>;
    }

    const acCharacters = filteredSpecies ? data.filter((item: ItemProps) => item.species === filteredSpecies) : data;

    const handlePress = (item: ItemProps) => {
        navigation.navigate("Villager", { item });
    };

    const renderSpeciesButton = (species: string) => {
        return (
            <Pressable
                style={styles.filterOptions}
                key={species}
                onPress={() => setFilteredSpecies(species)}>
                <Text style={styles.txtButton}>{species}</Text>
            </Pressable>
        );
    };

    const resetFilter = () => {
        setFilteredSpecies(null);
    };

    const renderItem = ({ item }: { item: ItemProps }) => (
        <View style={styles.list}>
            <TouchableOpacity onPress={() => handlePress(item)}>
                <VillagerCard item={item} />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>

                <FlatList
                    data={acCharacters}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.name}
                />
                <View style={styles.filterButtons}>
                    {['Cat', 'Dog', 'Bird', 'Bear'].map(species => renderSpeciesButton(species))}
                    <Pressable  style={styles.filterOptions} onPress={resetFilter}> <Text style={styles.txtButton}> Tout </Text></Pressable>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
    },
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    image: {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    filterButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    filterOptions: {
        backgroundColor:'#38c5c9',
        padding:15,
        borderRadius: 10,
    },
    txtButton: {
        fontFamily: 'FOT-RodinBokutohProEB',
        color:'white'
    }
});
