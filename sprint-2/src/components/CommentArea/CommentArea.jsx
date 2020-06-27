import React from "react";
import Comment from "../Comment/Comment";

export default function CommentArea({ commentData }) {
  return (
    <section className="commentArea">
      <Comment commentData={commentData} key={commentData.id} />
    </section>
  );
}
