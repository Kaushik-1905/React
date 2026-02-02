import React, { useRef, useState } from 'react'

const Timer = () => {

    const [second, setSeconds] = useState(0)
    const id = useRef(null)


    function start() {
        id.current = setInterval(() => {
            setSeconds((p) => p + 1)
        }, 1000)
    }

    function stop() {
        clearInterval(id.current)
    }

    
    return (
        <div>
            <h1>Timer</h1>
            <h2>{second}</h2>

            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
        </div>
    )
}

export default Timer
