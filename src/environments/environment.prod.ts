export const environment = {
  production: true,
  authEndpoint: "https://accounts.spotify.com/authorize",

  // Replace with your app's client ID, redirect URI and desired scopes
  clientId: "a6b05adbc74643d8ae5522ad0826d099",
  redirectUri: "http://musify.spothop.in/dashboard",
  // export const redirectUri = "http://musify.spothop.in/dashboard";
  scopes: [
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-read-email",
    "playlist-read-private",
    "user-library-read"
  ],
  apiBaseUrl: "http://spothop.in/musify/public"
};