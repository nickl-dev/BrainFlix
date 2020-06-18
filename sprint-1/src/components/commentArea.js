import React from "react";
import Comment from "./comment";

export default function CommentArea() {
  return (
    <section className="commentArea">
      <Comment
        name="Micheal Lyons"
        date="12/18/2018"
        commentText="They BLEW the ROOF off at their
        last show, once everyone started
        figuring out they were going. This is
        still simply the greatest opening of a
        concert I have EVER witnessed."
      />
      <Comment
        name="Gary Wong"
        date="12/18/2018
"
        commentText="Every time I see him shred I feel so
motivated to get off my couch and
hop on my board. He’s so talented! I
wish I can ride like him one day so I
can really enjoy myself!"
      />
      <Comment
        name="Theodore Duncan"
        date="11/15/2018"
        commentText="How can someone be so good!!!
You can tell he lives for this and
loves to do it every day. Everytime I
see him I feel instantly happy! He’s
definitely my favorite ever!"
      />
    </section>
  );
}
