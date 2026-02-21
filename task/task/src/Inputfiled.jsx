import React, { useState } from 'react'

const InputField = () => {

  const [inputValue, setInputValue] = useState("")
  const [displayText, setDisplayText] = useState("")

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleClick = () => {
    setDisplayText(inputValue)
  }

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="name" 
      />

      <button onClick={handleClick}>Show</button>

      <p>{displayText}</p>
    </div>
  )
}

export default InputField
