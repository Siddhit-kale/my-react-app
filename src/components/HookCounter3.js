import React, { useState } from "react";

function Hookcounter3() {
   const [items, setItems] = useState([]) // default value is an empty array
   const addItem = () => {
    setItems([...items, {
        id : items.length,
        value : Math.floor(Math.random() * 10) + 1
    }])
   }
   return(
    <div>
        <button onClick={addItem}>Add a Number</button>
        <ul>
            {
                items.map(item => <li key = {item.id}> {item.value} </li>)
            }
        </ul>
    </div>
   )
}

export default Hookcounter3;
