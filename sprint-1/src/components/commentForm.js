import React from "react";
import '../styles/commentForm.scss'

export default function CommentForm() {
  return (
    <section className="commentForm">
      <h3 className="commentForm__count">3 Comments</h3>
      <form action="POST" className="commentForm__form">
        <h4 className="commentForm__title">JOIN THE CONVERSATION</h4>
        <div className="commentForm__subContainer">
          <div className="commentForm__img"></div>
          <textarea
            name="commentText"
            className="commentForm__text"
            cols="30"
            rows="10"
          ></textarea>
        </div>
      <button className="commentForm__btn">COMMENT</button>
      </form>
    </section>
  );
}
