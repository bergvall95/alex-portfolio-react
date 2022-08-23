const authEndpoint = 'https://accounts.spotify.com/authorize';

const scopes = [
  'user-read-private',
];

export const getAuthorizeHref = (): string => {
  const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_REDIRECT_URI;
  return `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token`;
}

const githubAuthEndpoint = "https://github.com/login/oauth/authorize";
const githubScopes=[
  'user',
];

export const getGithubAuthHref = (): string => {
  const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_GITHUB_REDIRECT_URI;
  
  return `${githubAuthEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${githubScopes.join("%20")}&response_type=token`;
}

const githubAccessEndpoint = "https://github.com/login/oauth/access_token"

export const getGithubAccessTokenHref = (code:string) : string => {
  const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_GITHUB_REDIRECT_URI;
  const clientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
  return `${githubAccessEndpoint}?client_id=${clientId}&code=${code}&client_secret=${clientSecret}&redirect_uri=${redirectUri}`;
}