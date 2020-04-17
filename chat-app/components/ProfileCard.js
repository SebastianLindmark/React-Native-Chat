import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import Card from './Card';


const ProfileCard = props => {

    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }


    return <Card style={styles.profile}>
        <TouchableCmp onPress={props.onSelect} useForeground>
            <View style={styles.container}>

                <Image style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text style={styles.message}>{props.message}</Text>

                </View>
            </View>
        </TouchableCmp>
    </Card>

}


const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: 100,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 10
    },

    image: {
        width: 75,
        height: 75,
        backgroundColor: '#900',
        borderRadius: 10,
    },

    profile: {
        marginBottom: 10,
        marginHorizontal: 8,
    },

    textContainer: {
        marginLeft: 15
    },

    name: {
        fontSize: 20,
        fontWeight: "bold"
    },

    message: {
        fontSize: 13,

    }


})


export default ProfileCard;