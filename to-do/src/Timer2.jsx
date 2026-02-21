import React, { useRef, useState } from 'react'

const Timer2 = () => {

    const [second,setSeconds]=useState(0)
    const id = useRef(null)

    function start(){
        id.current = setInterval(() => {
            setSeconds((p)=>p+1)
        }, 1000);
    }

    function stop(){
         clearInterval(id.current)
    }
  return (
    <div>
      <h1>Timer</h1>
      <h2>{state}</h2>

      <button onClick={start}>Srart</button>
      <button onClick={stop}>stop</button>
    </div>
  )
}

export default Timer2
