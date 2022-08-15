import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import {
  setAccessToken,
  setLoggedIn
} from '../auth/authorizationSlice';

interface GithubAuthState{
    username:string;
    userEmail:string;
}

const initialState: GithubAuthState = {
    username: '',
    userEmail:'',
}

export const githubSlice = createSlice({
    name: 'githubSlice',
    initialState,
    reducers:{
        setUsername: (state, action: PayloadAction<string>)=>{
            state.username = action.payload;
        },
        setUserEmail:(state,action:PayloadAction<string>)=>{
            state.userEmail= action.payload;
        },
    },
});

export const {setUsername, setUserEmail} = githubSlice.actions;

export const selectUsername = (state: RootState) => state.github.username;
export const selectUserEmail = (state: RootState) => state.github.userEmail;

export const setUserProfile = (accessToken: string): AppThunk => dispatch =>{
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + accessToken);

    fetch("https://api.github.com/user",{
        method: 'GET',
        headers: myHeaders,
    }).then(response => response.json())
    .then((data) => {
        console.log(data);
    })
}

export default githubSlice.reducer;