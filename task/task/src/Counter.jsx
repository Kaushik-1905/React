import React, { useRef, useState } from 'react'

const Counter = () => {

    const [seconds, setSeconds] = useState(0)
    const id = useRef(null)

    const Counters = ()=>{
        setSeconds(seconds + 1)
    }

    return (
        <div>
            <h1>Timer</h1>
            <h2>{seconds}</h2>

            <button onClick={Counters}>Start</button>
            
        </div>
    )
}

export default Counter
