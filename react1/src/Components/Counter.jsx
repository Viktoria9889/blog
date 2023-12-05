import React from "react"
import { useState } from "react"

const Counter = function () {
    const [likes, setLikes] = useState(5)
    //likes значення, setLikes = функція що міняє значення
  
    const increment = () => {
      setLikes(likes + 1)
    }
    const dicrement = () => {
      setLikes(likes - 1)
    }
  
    return (
      <div>
        <h1>{likes}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={dicrement}>Increment</button>
      </div>
    );
}

export default Counter;