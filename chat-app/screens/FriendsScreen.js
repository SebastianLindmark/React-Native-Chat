import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import ProfileCard from '../components/ProfileCard';



const FriendsScreen = props => {

    const selectProfileHandler = (profileId) => {
        //navigate to chat screen
    }


    return <View style={styles.scroller}>
        <ProfileCard style={styles.profileCard} onSelect={() => selectProfileHandler("1")} name={"Sebastian Lindmark"} message={"What are you doing?"} />
        <ProfileCard style={styles.profileCard} onSelect={() => selectProfileHandler("2")} name={"Sebastian Lindmark"} message={"What are you doing?"} />
    </View>
}






const styles = StyleSheet.create({

    centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },

    profileCard: {
        width: '100%',
    },
    scroller: {
        width: '100%',
        height: '100%'
    }


});


FriendsScreen.navigationOptions = {
    headerTitle: "Chats"
}

export default FriendsScreen;


