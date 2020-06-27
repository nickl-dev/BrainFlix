import React from "react";
import Comment from "../Comment/Comment";

export default function CommentArea({ commentData }) {
  console.log('hello')
  return (
    <section className="commentArea">
      <Comment commentData={commentData} />
    </section>
  );
}
