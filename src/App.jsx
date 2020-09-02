import React from 'react';
import {Provider} from "react-redux";
import store from "./store/store";
import registerRootComponent from "expo/build/launch/registerRootComponent";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import Login from "./components/Login";
import PlaylistSelector from "./components/PlaylistSelector";
import PlaylistBuilder from "./components/PlaylistBuilder";
import Playlist from "./components/Playlist";
import Player from "./components/Player";
import Splash from "./components/Splash";
import {
    SPLASH_ROUTE,
    LOGIN_ROUTE,
    PLAYLIST_SELECTOR_ROUTE,
    PLAYLIST_BUILDER_ROUTE,
    PLAYLIST_ROUTE,
    PLAYER_ROUTE} from "./resources/routes";

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={SPLASH_ROUTE}>
                    <Stack.Screen name={SPLASH_ROUTE} component={Splash} />
                    <Stack.Screen name={LOGIN_ROUTE} component={Login} />
                    <Stack.Screen name={PLAYLIST_SELECTOR_ROUTE} component={PlaylistSelector} />
                    <Stack.Screen name={PLAYLIST_BUILDER_ROUTE} component={PlaylistBuilder} />
                    <Stack.Screen name={PLAYLIST_ROUTE} component={Playlist} />
                    <Stack.Screen name={PLAYER_ROUTE} component={Player}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
  }
}

registerRootComponent(App);
