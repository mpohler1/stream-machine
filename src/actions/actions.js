import {SET_APP_IS_READY} from "./actionTypes";

export const setAppIsReady = (appIsReady) => (
    {
        type: SET_APP_IS_READY,
        payload: {
            appIsReady: appIsReady
        }
    }
);
