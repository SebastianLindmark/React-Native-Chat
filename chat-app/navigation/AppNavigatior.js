import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import FriendsScreen from '../screens/FriendsScreen';
import ChatScreen from '../screens/ChatScreen';



const StackNavigator = createStackNavigator({
    splash: {
        screen: FriendsScreen
    },
    load: {
        screen: ChatScreen
    }
},
    {
        initialRouteName: 'splash'
    }
)


export default createAppContainer(StackNavigator)