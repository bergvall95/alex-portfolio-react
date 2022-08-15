import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setLoggedIn,
  setAccessToken,
  setTokenExpiryDate,
  selectIsLoggedIn,
  selectTokenExpiryDate,
} from "./authorizationSlice";
import { setUserProfileAsync } from "../spotify/spotifySlice";
import { getAuthorizeHref } from "../../oauthConfig";
import { getHashParams, removeHashParamsFromUrl } from "../../utils/hashUtils";

const hashParams = getHashParams();
const access_token = hashParams.access_token;
const expires_in = hashParams.expires_in;
removeHashParamsFromUrl();

export function GitHubAuth() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const tokenExpiryDate = useSelector(selectTokenExpiryDate);
  const dispatch = useDispatch();

  useEffect(() => {
    if (access_token) {
      dispatch(setLoggedIn(true));
      dispatch(setAccessToken(access_token));
      dispatch(setTokenExpiryDate(Number(expires_in)));
      dispatch<any>(setUserProfileAsync(access_token));
    }
  }, []);

  return (
    <div className="box">
      {!isLoggedIn && (
        <button
          className="button"
          aria-label="Log in via GitHub"
          onClick={() => window.open(getAuthorizeHref(), "_self")}
        >
          Log in to GitHub
        </button>
      )}
      {isLoggedIn && <div> welcome</div>}
    </div>
  );
}
