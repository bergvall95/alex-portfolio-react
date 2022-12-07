import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataService } from "../data/dataService";
import { Comment } from "../data/interfaces/comment";
import {
  selectIsLoggedIn,
  selectTokenExpiryDate,
} from "../features/auth/authorizationSlice";
import { selectGithubIsLoggedIn } from "../features/auth/githubAuthSlice";
import {
  selectGithubEmail,
  selectGithubDisplayName,
} from "../features/auth/githubSlice";

interface GuestbookEntryState {
  username: string;
  userEmail: string;
}

interface GuestbookEntryProps {
  comment: Comment;
  deleteComment: (id: string, userId: string) => void;
}

export default function GuestBookEntry<
  GuestBookEntryProps,
  GuestBookEntryState
>({ comment }: GuestbookEntryProps) {
  const username = useSelector(selectGithubDisplayName);
  const userEmail = useSelector(selectGithubEmail);
  const isLoggedIn = useSelector(selectGithubIsLoggedIn);
  const date = new Date(comment.timestamp);
  const handleDelete = () => {
    console.log("Delete");
    DataService.deleteComment(comment.id, comment.user.id);
  };

  return (
    <div>
      <div className="box mb-2">
        <article className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <img
                style={{ borderRadius: "5px" }}
                src={comment.user.avatarUrl}
              />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p
                style={{
                  display: "block",
                  whiteSpace: "normal",
                  wordBreak: "break-all",
                }}
              >
                <strong>{comment.user.displayName}</strong>{" "}
                <small>
                  {date.toLocaleDateString() + " " + date.toLocaleTimeString()}
                </small>
                <br />
                <p style={{ display: "block", wordWrap: "break-word" }}>
                  {comment.text}
                </p>
              </p>
            </div>
          </div>
        </article>
        {isLoggedIn && "bergvall95" === username && (
          <button
            className="button is-small is-danger is-outlined mt-1"
            onClick={handleDelete}
          >
            <span className="icon is-small">
              <FontAwesomeIcon icon={solid("trash")} size="lg" />
            </span>
            <span>Delete</span>
          </button>
        )}
      </div>
    </div>
  );
}
