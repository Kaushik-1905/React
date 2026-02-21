import React, { useState } from 'react'

const TogglePassword = () => {

  const [showPassword, setShowPassword] = useState(false)

  const handleToggle = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div>
      <input 
        type={showPassword ? "text" : "password"} 
        placeholder="enter password" 
      />

      <button onClick={handleToggle}>
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
    </div>
  )
}

export default TogglePassword
