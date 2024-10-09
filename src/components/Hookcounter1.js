import React,{useState} from "react";

function Hookcounter1() {
    const [count, setCount] = useState(0)
    const inc5 = () => {
        for(let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }
        return(
            <div>
                <button onClick={() => setCount(count+1)}>Increment</button>
                <button onClick={() => setCount(count-1)}>Decrement</button>
                <button onClick={inc5}>inc5</button>
                <button onClick={() => setCount(0)}>Reset</button>
                <h2>{count}</h2>
            </div>
        )
}

export default Hookcounter1