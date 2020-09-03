import * as React from 'react';
import * as SplashScreen from "expo-splash-screen";
import {connect} from "react-redux";
import {
    setAppIsReady
} from "../actions/actions";

class Splash extends React.Component {

    prepareResources = async () => {
        this.props.setAppIsReady(true);
        await SplashScreen.hideAsync();
    };

    async componentDidMount() {
        try {
            await SplashScreen.preventAutoHideAsync();
        } catch (e) {
            console.warn(e);
        }
        this.prepareResources();
    }

    render() {
        return (
            null
        );
    }
}

const mapStateToProps = state => {
    return {
        appIsReady: state.splash.appIsReady
    };
};

export default connect(mapStateToProps, {
    setAppIsReady
})(Splash);
