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
  const isLoggedIn = useSelector(selectGithubIsLoggedIn);
  const displayName = useSelector(
    (state: RootState) => state.github.githubDisplayName
  );
  const userEmail = useSelector((state: RootState) => state.github.githubEmail);
  const avatarUrl = useSelector((state: RootState) => state.github.avatarUrl);
  const profileUrl = useSelector((state: RootState) => state.github.profileUrl);
  const [value, setValue] = React.useState<string>("");

  React.useEffect(() => {
    let newComment: Comment = {
      id: "0",
      text: "This is a test comment",
      timestamp: new Date().toISOString(),
      user: {
        id: "0",
        displayName: "bergvall95",
        email: "bergvall95@gmail.com",
        avatarUrl: "https://avatars.githubusercontent.com/u/10101138?v=4",
        profileUrl: "https://github.com/bergvall95",
      },
    };

    //DataService.createComment(newComment);
    DataService.getAllComments().then((comments) => {
      setComments(comments);
    });

    return () => {
      setComments([]);
    };
  }, [setComments]);

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent) => {
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
    setComments([...comments, comment]);
  };

  const deleteComment = (id: string, userId: string) => {
    DataService.deleteComment(id, userId);
    setComments(comments.filter((comment) => comment.id !== id));
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

      <GitHubAuth></GitHubAuth>
      {/* if the user is logged in, we display an input box to allow them to comment and a submit button to submit the comment*/}

      {isLoggedIn && (
        <div>
          <textarea
            className="textarea mb-1"
            maxLength={240}
            placeholder="Write anything!"
            onChange={handleOnChange}
            onSubmit={(e) => {}}
          />
          <button
            onClick={(e) => handleSubmit(e)}
            className="button is-primary m-1 mb-2"
          >
            Submit
          </button>
        </div>
      )}

      {comments.map((comment) => (
        <GuestbookEntry deleteComment={deleteComment} comment={comment} />
      ))}
    </div>
  );
};
