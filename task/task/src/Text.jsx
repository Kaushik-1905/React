import React,{useState} from 'react'

const text = () => {

    const [message, setMessage] = useState("Hello")

    function changeText() {
        setMessage("Welcome to React")
    }

    return (
        <div>

            <h1>{message}</h1>

            <button onClick={changeText}>Click Me</button>
        </div>
    )
}

export default text
