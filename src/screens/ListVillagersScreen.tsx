import {View, StyleSheet, Dimensions, Text, FlatList, Image, ActivityIndicator, ImageBackground, TouchableOpacity} from "react-native";
import { useNookipedia} from "../hooks/useVillagers";
import {VillagerCard} from "../components/VillagerCard";


var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

interface ItemProps {
    item:{
        name:string,
        image_url:string,
    }
}
const bgImage = require('../../assets/bgList.png')

export function ListVillagersScreen({ navigation }) {

    const { isLoading, isError, data, error } = useNookipedia();

    if (isLoading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" color="black" />
            </View>
        )
    }
    if (isError) {
        return <Text>Error: {error.message}</Text>;
    }

    const acCharacters = data;

    const handlePress = (item : ItemProps) => {

        navigation.navigate("Villager", {item});
    };



    const renderItem = ({ item }:ItemProps) => (
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
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width:width
    },

    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    list: {
        flex:1,
        justifyContent: 'center',
        alignItems:"center"
    },

    image: {
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            resizeMode: 'cover'
    },

});

