// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/


// https://developer.spotify.com/documentation/general/guides/authorization/code-flow/
export const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "30ceb2bdd2994f8d854021bb209f2793";
const redirectUri = "http://localhost:3000/";


// Authorization Scopes
// https://developer.spotify.com/documentation/general/guides/authorization/scopes/

const scope = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];


export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
                let parts = item.split('=')
                initial[parts[0]] = decodeURIComponent(parts[1])
                return initial;
        }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope.join("%20")}&response_type=token&show_dialog=true`;



