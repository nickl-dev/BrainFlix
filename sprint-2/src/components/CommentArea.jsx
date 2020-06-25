import React, { Component } from "react";
import Comment from "./Comment";
import commentData from "../BrainFlixData/Comments.json";

export default class CommentArea extends Component {
  state = {
    commentContent: commentData,
  };

  render() {
    return (
      <section className="commentArea">
        {this.state.commentContent.reverse().map((comment) => (
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
