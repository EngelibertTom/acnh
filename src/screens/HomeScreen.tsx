import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    FlatList,
    Image,
    ActivityIndicator,
    Button,
    ImageBackground, Pressable
} from "react-native";
import {useNookipedia} from "../hooks/useVillagers";
import {VillagerCard} from "../components/VillagerCard";

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;


// @ts-ignore
export function HomeScreen({navigation}) {

    const bgImage = require('../../assets/nookphonebg.jpg')
    const handlePress = () => {
        navigation.navigate('ListVillagers');
    };
    return (
        <View style={styles.container}>
            <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
                <View style={styles.buttonContainer}>
                    <Pressable onPress={handlePress}>
                        <View style={styles.button}>
                        <Image style={styles.icon} source={require('../../assets/passport.png')}></Image>
                        <Text style={styles.text}>Liste des habitants</Text>
                        </View>
                    </Pressable>
                </View>
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
        },

        image: {
            flex: 1,
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            resizeMode: 'cover'
        },

        buttonContainer: {
            alignItems: 'center',
        },

        button: {

            padding: 15,
            backgroundColor: 'white',
            borderRadius: 10,
            textAlign: 'center',
            borderColor:'black',
            borderWidth:0.5,
            flexDirection:"row",
            alignItems:"center",
            gap:10
        },

        text: {
            fontFamily: 'FOT-RodinBokutohProEB',
            color:'#74664b'
        },

        icon: {
            width:50,
            height:50,
        }
    });



