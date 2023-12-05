import React from "react"
import { useState } from "react"
import MyButton from "./UI/button/MyButton";
import {useNavigate} from 'react-router-dom'

const PostItem = (props) => {
  const router = useNavigate()
console.log(router)
  return (
    <div>
      <h4>{props.post.id}</h4>
      <h1>{props.post.title}</h1>
      <h4>{props.post.body}</h4>
      <div>
        <MyButton onClick={() => router(`/posts/${props.post.id}`)}>
          Відкрити
        </MyButton>
        <MyButton onClick={() => props.delate(props.post)}>
          Видалити
        </MyButton>
      </div>
    </div>
  );
}

export default PostItem