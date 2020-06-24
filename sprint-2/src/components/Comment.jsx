import React from "react";
import "../styles/comment.scss";

export default function Comment(props) {
  return (
    <div className="comment">
      <div className="comment__img"></div>
      <div className="comment__description">
        <div className="comment__name-date">
          <p className="comment__name">{props.name}</p>
          <p className="comment__date">{props.date}</p>
        </div>
        <p className="comment__text">{props.commentText}</p>
      </div>
    </div>
  );
}
