import React from "react"
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useState } from "react"
import PostItem from "./PostItem"

//index number={index + 1} це присвоєння нумерації постам
const Postlist = ({ posts, title, delate }) => {

  if (!posts.length) {
    return (
      <h1 style={{ textAlign: 'center' }}>
        Пости не найдені!
      </h1>
    )
  }

  return (
    <div>
      <h1>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) =>
                    <CSSTransition
                    timeout={500}
                    classNames="post"
                  >
          <PostItem delate={delate} number={index + 1} post={post} key={post.id} />
        </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}

export default Postlist;