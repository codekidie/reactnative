import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import GalleryScreen from '../containers/GalleryScreen';

// To use this screens please see the full version at https://reactnativestarter.com
// import ProfileScreen from '../containers/ProfileScreen';
// import ArticleScreen from '../containers/ArticleScreen';
// import ChatScreen from '../containers/chat/ChatScreen';
// import MessagesScreen from '../containers/chat/MessagesScreen';
// import ChartsScreen from '../containers/ChartsScreen';

import ProfileScreen from '../screens/ProfileScreen';

import { Colors, Fonts } from '../constants';

const headerBackground = require('../../assets/images/topBarBg.png');

const stackNavigator = createStackNavigator(
    {
        Main: {
            screen: MainTabNavigator,
            navigationOptions: ({ navigation }) => {
                return {
                    title: 'Healthy Me',
                    headerLeft: null,
                    headerBackground: (
                        <Image
                            style={{ flex: 1 }}
                            source={headerBackground}
                            resizeMode="cover"
                        />
                    ),
                };
            },
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
              title: 'Profile',
            },
        },
        Gallery: {
            screen: GalleryScreen,
            navigationOptions: {
                title: 'Gallery',
            },
        },
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                titleStyle: {
                    fontFamily: Fonts.primaryLight,
                },
                headerStyle: {
                    backgroundColor: Colors.primary,
                    borderBottomWidth: 0,
                },
                headerBackground: (
                    <Image
                        style={{ flex: 1 }}
                        source={headerBackground}
                        resizeMode="cover"
                    />
                ),
                headerTitleStyle: {
                    color: Colors.white,
                    fontFamily: Fonts.primaryRegular,
                },
                headerTintColor: '#222222',
                headerLeft: props => (
                    <TouchableOpacity
                        onPress={props.onPress}
                        style={{
                            paddingLeft: 25,
                        }}
                    >
                        <Image
                            source={require('../../assets/images/icons/arrow-back.png')}
                            resizeMode="contain"
                            style={{
                                height: 20,
                            }}
                        />
                    </TouchableOpacity>
                ),
            };
        },
    },
);

export default createAppContainer(stackNavigator);
