import React from "react";
import "../styles/commentForm.scss";

export default function CommentForm() {
  return (
    <section className="commentForm">
      <h3 className="commentForm__count">3 Comments</h3>
      <form action="POST" className="commentForm__form">
        <div className="commentForm__subContainer">
          <div className="commentForm__img"></div>
          <div className="commentForm__join">
            <div className="commentForm__heading-text">
              <h4 className="commentForm__heading">JOIN THE CONVERSATION</h4>
              <input
                type="text"
                name="commentText"
                className="commentForm__text"
              ></input>
            </div>
            <button className="commentForm__btn">COMMENT</button>
          </div>
        </div>
      </form>
    </section>
  );
}
