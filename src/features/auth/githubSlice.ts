import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import { setGithubLoggedIn } from './githubAuthSlice';




interface GithubState {
  githubDisplayName: string,
  githubEmail: string
}

const initialState: GithubState = {
  githubDisplayName: '',
  githubEmail: '',
};

export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    setGithubDisplayName: (state, action: PayloadAction<string>) => {
      state.githubDisplayName = action.payload;
    },
    setGithubEmail: (state, action: PayloadAction<string>) => {
      state.githubEmail = action.payload;
    },
  },
});

export const { setGithubDisplayName, setGithubEmail } = githubSlice.actions;

export const selectGithubDisplayName = (state: RootState) => state.github.githubDisplayName;
export const selectGithubEmail = (state: RootState) => state.github.githubEmail;

export const setGithubProfileAsync = (accessToken: string): AppThunk => dispatch  => {
  const myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer ' + accessToken);

  fetch('https://api.spotify.com/v1/me', {
    method: 'GET',
    headers: myHeaders,
  }).then(response => response.json())
    .then((data) => {
      console.log(data);
      dispatch(setGithubDisplayName(data.display_name ? data.display_name : data.id));
      dispatch(setGithubEmail(data.product));
    }).catch((error) => {
      console.log(error);
      if (error instanceof XMLHttpRequest) {
        if (error.status === 401) {
          dispatch(setGithubLoggedIn(false));
        }
      }
    });
};

export default githubSlice.reducer;