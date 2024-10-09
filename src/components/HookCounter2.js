import React, {useState} from "react";

function Hookcounter2() {
    const [name, setName] = useState({firstname : '', lastname : ''}) // default value is an object
    return(
        <div>
            <input type="text"
            value = {name.firstname}
            onChange={e => setName({...name, firstname: e.target.value})} />
            <input type = "text"
            value={name.lastname}
            onChange={e => setName({...name, lastname: e.target.value})} />
            <h3>First Name: {name.firstname}</h3> <br></br>
            <h3>Lastname Name: {name.lastname}</h3> <br></br>
            </div>
    )
}

export default Hookcounter2