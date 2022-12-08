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
} from "./githubAuthSlice";
import { getGithubAccessTokenHref, getGithubAuthHref } from "../../oauthConfig";

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
    <div>
      {!isLoggedIn && (
        <div>
          <div className="mb-2"> Please log in to leave a comment. </div>
          <button
            className="button"
            aria-label="Log in via GitHub"
            onClick={() => {
              window.open(getGithubAuthHref(), "_self");
            }}
          >
            Log in via GitHub
          </button>
          {/* insert a small message about only using information for the picture and  */}
          {/* name, and that it will not be shared with anyone else */}

          <div className="mt-2">
            <small>
              <i>
                Your information will only be used to display your comment below{" "}
              </i>{" "}
            </small>
          </div>
        </div>
      )}
      {isLoggedIn && (
        <div className="mb-2"> Welcome {username}, thanks for logging in! </div>
      )}
    </div>
  );
}
