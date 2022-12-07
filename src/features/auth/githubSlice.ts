import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";
import { setGithubLoggedIn } from "./githubAuthSlice";
import config from "../../aws-exports";
import { createUser } from "../../graphql/mutations";
import { graphqlOperation } from "aws-amplify";

interface GithubState {
  githubDisplayName: string;
  githubEmail: string;
  profileUrl: string;
  avatarUrl: string;
}

const initialState: GithubState = {
  githubDisplayName: "",
  githubEmail: "",
  profileUrl: "",
  avatarUrl: ""
};

export const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    setGithubDisplayName: (state, action: PayloadAction<string>) => {
      state.githubDisplayName = action.payload;
    },
    setGithubEmail: (state, action: PayloadAction<string>) => {
      state.githubEmail = action.payload;
    },
    setProfileUrl: (state, action: PayloadAction<string>) => {
      state.profileUrl = action.payload;
    },
    setAvatarUrl: (state, action: PayloadAction<string>) => {
      state.avatarUrl = action.payload;
    }
  }
});

export const {
  setGithubDisplayName,
  setGithubEmail,
  setAvatarUrl,
  setProfileUrl
} = githubSlice.actions;

export const selectGithubDisplayName = (state: RootState) =>
  state.github.githubDisplayName;
export const selectGithubEmail = (state: RootState) => state.github.githubEmail;

export const selectAvatarUrl = (state: RootState) => state.github.avatarUrl;
export const selectProfileUrl = (state: RootState) => state.github.profileUrl;

export const setGithubProfileAsync = (
  accessToken: string
): AppThunk => dispatch => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + accessToken);
  fetch("https://api.github.com/user", {
    method: "GET",
    headers: myHeaders
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);

      dispatch(setGithubDisplayName(data.login ? data.login : data.id));
      dispatch(setGithubEmail(data.email));
      dispatch(setAvatarUrl(data.avatar_url));
      dispatch(setProfileUrl(data.url));
    })
    .catch(error => {
      console.log(error);
      if (error instanceof XMLHttpRequest) {
        if (error.status === 401) {
          dispatch(setGithubLoggedIn(false));
        }
      }
    });
};

export default githubSlice.reducer;
