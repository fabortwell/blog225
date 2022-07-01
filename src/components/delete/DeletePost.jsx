import React, { useState } from "react";
import EditPost from "../pages/edit/EditPost";
import "./deletepost.css"

function Message({ message, currentUser, onPostDelete, onUpdatePost }) {
  const [isEditing, setIsEditing] = useState(false);

  const { id, username, content, created_at: createdAt } = post;

  const timestamp = new Date(createdAt).toLocaleTimeString();

  const isCurrentUser = currentAuthor.username === username;

  function handleDeleteClick() {
    fetch(`http://localhost:9292/posts/${id}`, {
      method: "DELETE",
    });

    onPostDelete(id);
  }

  function handleUpdatePost(updatedPost) {
    setIsEditing(false);
    onUpdatePost(updatedPost);
  }

  return (
    <li>
      <span className="singlePostEdit">{username}</span>
      <span className="singlePostEdit">{timestamp}</span>
      {isEditing ? (
        <EditPost
          id={id}
          body={body}
          onUpdateMessage={handleUpdateMessage}
        />
      ) : (
        <p>{content}</p>
      )}
      {isCurrentUser ? (
        <div className="singlePostEdit">
          <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
          <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
          </button>
          <button onClick={handleDeleteClick}>
          <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </button>
        </div>
      ) : null}
    </li>
  );
}

export default Message;
