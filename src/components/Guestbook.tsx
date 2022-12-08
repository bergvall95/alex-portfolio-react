import { sectionFooterPrimaryContent } from "aws-amplify";
import * as React from "react";
import { connect, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { DataService } from "../data/dataService";
import { Comment } from "../data/interfaces/comment";
import { GitHubAuth } from "../features/auth/githubAuth";
import { selectGithubIsLoggedIn } from "../features/auth/githubAuthSlice";
import GuestbookEntry from "./GuestbookEntry";
import Hero from "./Hero";

// TODO: connect to redux store to get user info and login status
export const Guestbook = (props: any) => {
  const [comments, setComments] = React.useState<Comment[]>([]);
  const [deleted, setDeleted] = React.useState<boolean>(false);
  const isLoggedIn = useSelector(selectGithubIsLoggedIn);
  const displayName = useSelector(
    (state: RootState) => state.github.githubDisplayName
  );
  const userEmail = useSelector((state: RootState) => state.github.githubEmail);
  const avatarUrl = useSelector((state: RootState) => state.github.avatarUrl);
  const profileUrl = useSelector((state: RootState) => state.github.profileUrl);
  const [value, setValue] = React.useState<string>("");

  React.useEffect(() => {
    DataService.getAllComments().then((comments) => {
      setComments(comments);
    });
  }, [deleted]);

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent) => {
    setValue("");
    let comment: Comment = {
      id: DataService.generateGuid(),
      text: value,
      timestamp: new Date().toISOString(),
      user: {
        id: DataService.generateGuid(),
        displayName: displayName,
        email: userEmail,
        avatarUrl: avatarUrl,
        profileUrl: profileUrl,
      },
    };
    console.log(comment);
    DataService.createComment(comment);
    setComments([comment, ...comments]);
  };

  const deleteComment = (id: string, userId: string) => {
    setDeleted(!deleted);
    console.log("Deleted here");
    console.log(comments.filter((comment) => comment.id !== id));
    setComments(comments.filter((comment) => comment.id !== id));
    DataService.deleteComment(id, userId);
  };

  return (
    <div className="is-desktop">
      <div className="section">
        <Hero>
          <p className="title">Guestbook</p>
          <p className="content">
            Leave a message. I like music recommendations, advice, video games,
            and chess!
          </p>
        </Hero>
      </div>
      <div className="box mb-6">
        <GitHubAuth></GitHubAuth>

        {isLoggedIn && (
          <div>
            <textarea
              className="textarea mb-1"
              value={value}
              maxLength={140}
              placeholder="Start typing here..."
              onChange={handleOnChange}
              onSubmit={(e) => {}}
              rows={2}
              style={{ resize: "none" }}
            />

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                onClick={(e) => handleSubmit(e)}
                className="button is-link mt-1"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="comments">
        {comments ? (
          comments.map((comment) => (
            <GuestbookEntry deleteComment={deleteComment} comment={comment} />
          ))
        ) : (
          <div>Failed to fetch comments :/ </div>
        )}
      </div>
    </div>
  );
};
