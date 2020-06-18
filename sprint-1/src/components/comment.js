import React from "react";
import '../styles/comment.scss'

export default function Comment() {
  return (
    <div className="comment">
      <div className="comment__img"></div>
      <div className="comment__description">
        <div className="comment__name-date">
          <p className="comment__name">Micheal Lyons</p>
          <p className="comment__date">12/18/2018</p>
        </div>
        <p className="comment__text">
          They BLEW the ROOF off at their last show, once everyone started
          figuring out they were going. This is still simply the greatest
          opening of a concert I have EVER witnessed.
        </p>
      </div>
    </div>
  );
}
