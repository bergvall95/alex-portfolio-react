import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authorizationReducer from '../features/auth/authorizationSlice';
import spotifyReducer from '../features/spotify/spotifySlice';

export const store = configureStore({
  reducer: {
    authorization: authorizationReducer,
    spotify: spotifyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;