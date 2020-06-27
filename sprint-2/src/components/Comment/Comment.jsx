import React from "react";
import "./Comment.scss";

export default function Comment({ commentData }) {
  console.log(commentData);
  return (
    commentData.comments === null && commentData.comments.map(comments => {
      return (
        <div className="comment">
          <div className="comment__img"></div>
          <div className="comment__description">
            <div className="comment__name-date">
              <p className="comment__name">{comments.name}</p>
              <p className="comment__date">{comments.timestamp}</p>
            </div>
            <p className="comment__text">{comments.comment}</p>
          </div>
        </div>
      );
    })
  );
}
