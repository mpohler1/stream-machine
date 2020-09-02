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
import {SPLASH, LOGIN, PLAYLIST_SELECTOR, PLAYLIST_BUILDER, PLAYLIST, PLAYER} from "./resources/routes";

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={SPLASH}>
                    <Stack.screen name={SPLASH} component={Splash} />
                    <Stack.screen name={LOGIN} component={Login} />
                    <Stack.screen name={PLAYLIST_SELECTOR} component={PlaylistSelector} />
                    <Stack.screen name={PLAYLIST_BUILDER} component={PlaylistBuilder} />
                    <Stack.screen name={PLAYLIST} component={Playlist} />
                    <Stack.screen name={PLAYER} component={Player}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
  }
}

registerRootComponent(App);
