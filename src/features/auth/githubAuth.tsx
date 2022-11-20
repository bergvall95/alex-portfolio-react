import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectGithubDisplayName, setGithubProfileAsync } from "./githubSlice";
import { getHashParams, removeHashParamsFromUrl } from "../../utils/hashUtils";
import { request } from "https";
import { Http2ServerRequest } from "http2";
import {
  selectGithubAccessToken,
  selectGithubIsLoggedIn,
  selectGithubTokenExpiryDate,
  setGithubAccessToken,
  setGithubLoggedIn,
  setGithubTokenExpiryDate,
} from "./githubAuthSlice";
import {
  getAuthorizeHref,
  getGithubAccessTokenHref,
  getGithubAuthHref,
} from "../../oauthConfig";
import { $CombinedState } from "redux";
import { access } from "fs";
import { selectAccessToken } from "./authorizationSlice";

async function getAccessToken(code: string) {
  const authHref = getGithubAccessTokenHref(code);
  let data = await fetch(authHref)
    .then((response) => response.json())
    .then((data) => data);

  return data;
}

export function GitHubAuth() {
  const isLoggedIn = useSelector(selectGithubIsLoggedIn);
  const tokenExpiryDate = useSelector(selectGithubTokenExpiryDate);
  const access_token = useSelector(selectGithubAccessToken);
  const username = useSelector(selectGithubDisplayName);
  const dispatch = useDispatch();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const code = urlParams.get("code");
  
  removeHashParamsFromUrl();

  useEffect(() => {
    if (code) {
      const authHref = getGithubAccessTokenHref(code);
      let tokenData = getAccessToken(code);
      tokenData.then((token) => {
        if (token.token) {
          dispatch(setGithubAccessToken(token.token));
        }
      });
    }
    if (access_token) {
      dispatch(setGithubLoggedIn(true));
      dispatch<any>(setGithubProfileAsync(access_token));
    }
  }, [access_token]);

  return (
    <div className="box">
      {!isLoggedIn && (
        <button
          className="button"
          aria-label="Log in via GitHub"
          onClick={() => {
            window.open(getGithubAuthHref(), "_self");
          }}
        >
          Log in to GitHub
        </button>
      )}
      {isLoggedIn && <div> welcome Token Expiry Date: {tokenExpiryDate}</div>}
    </div>
  );
}
