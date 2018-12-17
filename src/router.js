import React from 'react';
import {
    Image,
    Text
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import AuthLoadingScreen from './screen/AuthLoadingScreen';
import AuthScreen from './screen/AuthScreen';
import MessagesScreen from './screen/MessagesScreen';
import DialogueScreen from './screen/DialogueScreen';
import ProfileScreen from './screen/ProfileScreen';
import SettingsScreen from './screen/SettingsScreen';

const AppStack = createBottomTabNavigator({
    Messages: MessagesScreen, Dialogue: DialogueScreen
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                
                if (routeName === 'Messages') {
                    if(focused) {
                        return <Image source={require('./images/Message_icon_active.png')} />
                    } else {
                        return <Image source={require('./images/Message_icon.png')} />
                    }
                } else if (routeName === 'Dialogue') {
                    if(focused) {
                        return <Image source={require('./images/Envelope_icon_active.png')} />
                    } else {
                        return <Image source={require('./images/Envelope_icon.png')} />
                    }
                }
            },
            tabBarLabel: () => {
                const { routeName } = navigation.state;
                if(routeName === 'Messages') {
                    return <Text style={{ textAlign: 'center' }}>Сообщения</Text>
                } else if (routeName === 'Dialogue') {
                    return <Text style={{ textAlign: 'center' }}>Диалог</Text>
                }
            }
        })
    });

AppStack.navigationOptions = {
    header: null,
};

const OtherStack = createStackNavigator({ App: AppStack, Profile: ProfileScreen, Settings: SettingsScreen })


const RootStack = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    Auth: AuthScreen,
    Other: OtherStack
},
    {
        initialRouteName: 'AuthLoading',
    });

export default createAppContainer(RootStack);