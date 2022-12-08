/* TODO: Create a dataservice to handle all the data calls to backend at localhost:9999

1. Add a function to get a user from backend 
2. Add a function to update a user in backend
3. Add a function to delete a user in backend
4. Add a function to create a user in backend if they don't exist
5. add a function to get all comments from backend
6. add a function to get all comments from backend for a specific user
7. add a function to create a comment in backend
8. add a function to update a comment in backend
9. add a function to delete a comment in backend
10. add a function to get all posts from backend
*/

import { Comment } from "./interfaces/comment";
import { User } from "./interfaces/user";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

export namespace DataService {
  //create a way to generate guids for the user id and comment id
  export const generateGuid = (): string => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  };
  export const createUser = (user: User): Promise<User> => {
    return fetch(baseUrl + "/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((response) => response.json());
  };

  export const getUser = (id: number): Promise<User> => {
    return fetch(baseUrl + "/users/" + id).then((response) => response.json());
  };

  export const updateUser = (user: User): Promise<User> => {
    return fetch(baseUrl + "/users/" + user.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((response) => response.json());
  };

  export const deleteUser = (id: string): Promise<User> => {
    return fetch(baseUrl + "/users/" + id, {
      method: "DELETE",
    }).then((response) => response.json());
  };

  export const getAllComments = (): Promise<Comment[]> => {
    return fetch(baseUrl + "/comments")
      .then((response) => response.json())
      .catch((error) => console.log(error));
  };

  export const getCommentsByUserId = (id: number): Promise<Comment[]> => {
    return fetch(baseUrl + "/comments/user/" + id).then((response) =>
      response.json()
    );
  };
  // add a way to get the error from the backend and display it to the user
  export const createComment = (comment: Comment): Promise<Comment> => {
    return fetch(baseUrl + "/comments/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.log(error.message);
        console.log(error);
      });
  };

  export const deleteComment = (
    id: string,
    userId: string
  ): Promise<Comment> => {
    return fetch(baseUrl + "/comments/delete/" + id + "/" + userId, {
      method: "DELETE",
    }).then((response) => response.json());
  };
}
