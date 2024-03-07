import {View, Text, StyleSheet, Image, ImageBackground, Pressable} from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native";

export function VillagerScreen({route} : any) {

    const bgVillager = require('../../assets/bgVillager.png')
    const navigation = useNavigation();
    const item = route.params.item
    return (
        <View style={styles.container}>
            <ImageBackground source={bgVillager} resizeMode="cover" style={styles.bgVillager}>
            <View style={styles.containerImg}>

                    <Image style={styles.image} source={{ uri: item.image_url }} resizeMode="contain"/>

            </View>
            </ImageBackground>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.citation}>{item.quote}</Text>

            <View style={styles.infoContainer}>
                <View style={styles.infoItem}>
                    <Text>Espèces : {item.species}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text>Genre : {item.gender}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text>Anniversaire : {item.birthday_month} {item.birthday_day}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text>Signe : {item.sign}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text>Personnalité : {item.personality}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text>Phrase : {item.phrase}</Text>
                </View>
            </View>


                <Pressable style={styles.goBackButton}><Text style={styles.txtButton} onPress={() => navigation.goBack()}>Retourner à la liste</Text></Pressable>



        </View>


    )
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    containerImg: {
        borderBottomWidth: 1,
        borderColor: '#74664b',
        textAlign:'center',
        alignItems:'center',
        width:'100%',
        padding:20,
    },

    name: {
        fontSize:30,
        fontFamily: 'FOT-RodinBokutohProEB',
        color:'#74664b',
        marginBottom:20,
    },

    image: {

        justifyContent: 'flex-start',
        height:200,
        width:100,
        resizeMode: 'cover'
    },

    bgVillager: {
        width:'100%',
        alignItems: 'center',
        marginBottom:20
    },

    infoContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    infoItem: {
        margin: 5,
    },
    citation: {
        marginTop:-20,
        marginBottom:30,
        fontFamily: 'FOT-RodinBokutohProEB',
        color:'#74664b',
        paddingRight:10,
        paddingLeft:10,
        textAlign:'center'
    },


    txtButton: {
        fontFamily: 'FOT-RodinBokutohProEB',
        color:'white',
    },

    goBackButton: {
        backgroundColor:'#38c5c9',
        padding:15,
        borderRadius: 10,
        marginTop:20
    }



});
