import React from "react"
import { useState } from "react"

const Input = function () {
  const [inputValue, setInputValue] = useState('text')
  
    return (
      <div>
      <h1>{inputValue}</h1>
      <input
        type='text'
        value={inputValue}
        onChange={ev => setInputValue(ev.target.value)} />
      </div>
    );
}

export default Input;