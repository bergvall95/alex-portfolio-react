import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authorizationReducer from '../features/auth/authorizationSlice';
import spotifyReducer from '../features/spotify/spotifySlice';
import githubReducer from '../features/auth/githubSlice';
import githubAuthReducer from '../features/auth/githubAuthSlice';

export const store = configureStore({
  reducer: {
    authorization: authorizationReducer,
    spotify: spotifyReducer,
    github: githubReducer,
    githubAuth:githubAuthReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;