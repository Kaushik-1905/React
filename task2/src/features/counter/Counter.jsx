import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";


function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (

    <>
      <style>{`
        button{
        color: black;
        padding: 8px 18px;
        border: none;
        background : pink;
        border-radius: 10px;
        text-align:center;
        font-size:18px;
        }

        button:hover{
          background-color: blue;
          color:white;
        }

        h1{
        font-size:34px;
        color:white;
        margin:0;
        padding:20px 0;
        }

      `}</style>

      <div style={{ textAlign: "center",background : "black", width:"100%", padding:"320px 0"}}>
        <h1>Counter: {count}</h1>

        <button onClick={() => dispatch(increment())}>+</button>

        <button
          onClick={() => dispatch(decrement())}
          style={{ margin: "0 10px" }}
        >
          -
        </button>

        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </>
  );
}

export default Counter;