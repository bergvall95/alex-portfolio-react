import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectGithubIsLoggedIn,
  selectGithubTokenExpiryDate,
  setGithubAccessToken,
  setGithubLoggedIn,
  setGithubTokenExpiryDate,
} from "./githubAuthSlice";
import { setGithubProfileAsync } from "./githubSlice";
import { getAuthorizeHref, getGithubAuthHref } from "../../oauthConfig";
import { getHashParams, removeHashParamsFromUrl } from "../../utils/hashUtils";

const hashParams = getHashParams();
const access_token = hashParams.access_token;
const expires_in = hashParams.expires_in;
removeHashParamsFromUrl();

export function GitHubAuth() {
  const isLoggedIn = useSelector(selectGithubIsLoggedIn);
  const tokenExpiryDate = useSelector(selectGithubTokenExpiryDate);
  const dispatch = useDispatch();

  useEffect(() => {
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
