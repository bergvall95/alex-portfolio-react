import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectGithubIsLoggedIn,
  selectGithubTokenExpiryDate,
  setGithubAccessToken,
  setGithubLoggedIn,
  setGithubTokenExpiryDate
} from "./githubAuthSlice";
import { setGithubProfileAsync } from "./githubSlice";
import {
  getAuthorizeHref,
  getGithubAccessTokenHref,
  getGithubAuthHref
} from "../../oauthConfig";
import { getHashParams, removeHashParamsFromUrl } from "../../utils/hashUtils";
import { request } from "https";
import { Http2ServerRequest } from "http2";

const hashParams = getHashParams();
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const code = urlParams.get("code");
const access_token = hashParams.access_token;
const expires_in = hashParams.expires_in;
removeHashParamsFromUrl();

export function GitHubAuth() {
  const isLoggedIn = useSelector(selectGithubIsLoggedIn);
  const tokenExpiryDate = useSelector(selectGithubTokenExpiryDate);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("hello");
    console.log(code);

    if (code) {
      const authHref = getGithubAccessTokenHref(code);
      console.log(authHref);
      let data = fetch(authHref, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        mode: "no-cors",
        cache: "no-cache"
      })
        //.then(response => response.json())
        // .then(json => console.log(json))
        .catch(error => {
          console.log(error);
        });
      console.log(data);
    }

    if (access_token) {
      dispatch(setGithubLoggedIn(true));
      dispatch(setGithubAccessToken(access_token));
      dispatch(setGithubTokenExpiryDate(Number(expires_in)));
      dispatch<any>(setGithubProfileAsync(access_token));
    }
  }, []);

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
