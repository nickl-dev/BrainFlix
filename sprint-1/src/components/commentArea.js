import React, { Component } from "react";
import Comment from "./comment";
import commentData from "../BrainFlixData/comments.json";

console.log(commentData);
export default class CommentArea extends Component {
  state = {
    commentContent: commentData,
  };


  render() {
    const date = new Date(commentData.timestamp);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const timeStamp = `${month}/${day}/${year}`;

    return (
      <section className="commentArea">
        {this.state.commentContent.map((comment) => (
          <Comment
            key={comment.id}
            name={comment.name}
            date={comment.timestamp}
            commentText={comment.comment}
          />
        ))}
      </section>
    );
  }
}

