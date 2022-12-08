import { processCompositeKeys } from "@aws-amplify/datastore/lib-esm/util";
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
>({ comment, deleteComment }: GuestbookEntryProps) {
  const username = useSelector(selectGithubDisplayName);
  const userEmail = useSelector(selectGithubEmail);
  const isLoggedIn = useSelector(selectGithubIsLoggedIn);
  const date = new Date(comment.timestamp);

  return (
    <div className="guestbook-entry-container">
      <article className="media">
        <figure
          className="media-left"
          style={{ marginLeft: "auto", marginTop: "5px" }}
        >
          <p className="image is-32x32">
            <img style={{ borderRadius: "5px" }} src={comment.user.avatarUrl} />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <p
                  style={{
                    display: "block",
                    whiteSpace: "normal",
                    wordBreak: "break-all",
                  }}
                >
                  <strong>{comment.user.displayName}</strong>

                  <span style={{ display: "inline-block", width: "1em" }} />
                  <small>
                    {date.toLocaleDateString() +
                      " " +
                      date.toLocaleTimeString()}
                  </small>
                  <br />
                  <p style={{ display: "block", wordWrap: "break-word" }}>
                    {comment.text}
                  </p>
                </p>
              </div>
              <div>
                {" "}
                {(username === comment.user.displayName ||
                  username === "bergvall95") && (
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <button
                      style={{ border: "none" }}
                      className="button is-small is-danger is-outlined"
                      onClick={() => deleteComment(comment.id, comment.user.id)}
                    >
                      <span className="icon is-small">
                        <FontAwesomeIcon icon={solid("x")} size="sm" />
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            marginTop: "10px",
            borderBottom: "1px solid lightgray",
            width: "90%",
          }}
        ></div>
      </div>
    </div>
  );
}
