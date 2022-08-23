import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface GithubAuthState {
  githubLoggedIn: boolean;
  githubAccessToken: string;
  githubTokenExpiryDate: string;
}

const initialState: GithubAuthState = {
  githubLoggedIn: false,
  githubAccessToken: '',
  githubTokenExpiryDate: '',
};

export const githubAuthSlice = createSlice({
  name: 'githubAuth',
  initialState,
  reducers: {
    setGithubLoggedIn: (state , action: PayloadAction<boolean>) => {
      state.githubLoggedIn = action.payload;
    },
    setGithubAccessToken: (state, action: PayloadAction<string>) => {
      state.githubAccessToken = action.payload;
    },
    setGithubTokenExpiryDate: (state, action: PayloadAction<number>) => {
      const date = new Date()
      date.setSeconds(date.getSeconds() + action.payload);
      state.githubTokenExpiryDate = date.toISOString();
    },
  },
});

export const { setGithubLoggedIn, setGithubAccessToken, setGithubTokenExpiryDate } = githubAuthSlice.actions;

export const selectGithubIsLoggedIn = (state: RootState) => state.githubAuth.githubLoggedIn;
export const selectGithubAccessToken = (state: RootState) => state.githubAuth.githubAccessToken;
export const selectGithubTokenExpiryDate = (state: RootState) => state.githubAuth.githubTokenExpiryDate;

export default githubAuthSlice.reducer;