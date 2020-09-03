import * as React from 'react';
import {WebView} from 'react-native-webview';
import {connect} from "react-redux";
import {LOGIN_URL} from "../resources/loginUrl";

class Login extends React.Component {

    render() {
        return (
            <WebView source={{uri: LOGIN_URL}}/>
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};

export default connect(mapStateToProps, {})(Login);
