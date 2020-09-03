import {clientId} from "./clientId";

export const LOGIN_URL = (
    "https://www.twitch.tv/login"
    + "?client_id="
    + clientId
    + "&redirect_params=client_id="
    + clientId
    + "&redirect_url=https%3A%2F%2Flocalhost&response_type=token&scope="
);
