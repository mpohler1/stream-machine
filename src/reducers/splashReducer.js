import {SET_APP_IS_READY} from "../actions/actionTypes";

function splashReducer(state={appIsReady: false}, action) {
    switch (action.type) {
        case SET_APP_IS_READY:
            return Object.assign({}, state, {
                appIsReady: action.payload.appIsReady
            });

        default:
            return state;
    }
}

export default splashReducer;
