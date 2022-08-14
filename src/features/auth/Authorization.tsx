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
import { createSlice } from "@reduxjs/toolkit";

const hashParams = getHashParams();
const access_token = hashParams.access_token;
const expires_in = hashParams.expires_in;
removeHashParamsFromUrl();

export function Authorization() {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>
        {!isLoggedIn && (
          <button
            className="button"
            aria-label="Log in using OAuth 2.0"
            onClick={() => window.open(getAuthorizeHref(), "_self")}
          >
            Log in with Spotify
          </button>
        )}
        {isLoggedIn && <div>Token expiry date: {tokenExpiryDate}</div>}
      </div>
    </div>
  );
}
