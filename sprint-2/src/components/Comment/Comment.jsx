import React from "react";
import "./Comment.scss";

export default function Comment({ commentData }) {
  console.log(commentData);
  const date = new Date(commentData.timestamp);
    const month = date.getMonth() + 1
    const day = date.getDate()
    const year = date.getFullYear()
    const timeStamp = `${month}/${day}/${year}`
  return (
    <div>
      {commentData.comments &&
        commentData.comments.map((comments) => {
          return (
            <div className="comment">
              <div className="comment__img"></div>
              <div className="comment__description">
                <div className="comment__name-date">
                  <p className="comment__name">{comments.name}</p>
                  <p className="comment__date">{timeStamp}</p>
                </div>
                <p className="comment__text">{comments.comment}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
