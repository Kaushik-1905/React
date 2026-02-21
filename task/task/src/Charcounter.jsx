import { useState } from "react"


const Charcounter = () => {

    const [text,setText] = useState("");

    const handlechange = (event) => {
        setText(event.target.value);
    }
  return (
    <div>
      <input type="text" value={text} onChange={handlechange} placeholder="type somthing..."/>

      <p>Charcounter : {text.length}</p>
    </div>
  )
}

export default Charcounter
