import React from 'react';
import {Provider} from "react-redux";
import store from "./store/store";
import registerRootComponent from "expo/build/launch/registerRootComponent";

class App extends React.Component {
  render() {
    return (
        <Provider store={store}>

        </Provider>
    );
  }
}

registerRootComponent(App);
