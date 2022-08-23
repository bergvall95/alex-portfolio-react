import * as React from "react";
import { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectTokenExpiryDate,
} from "../features/auth/authorizationSlice";
import {
  selectGithubEmail,
  selectGithubDisplayName,
} from "../features/auth/githubSlice";

interface GuestbookEntryProps {}

interface GuestbookEntryState {
  username: string;
  userEmail: string;
}

export default function GuestBookEntry() {
  const username = useSelector(selectGithubDisplayName);
  const userEmail = useSelector(selectGithubEmail);

  return (
    <div>
      {username}
      {userEmail}
    </div>
  );
}
