import React from "react";

function Functionclick() {
    function clikcHandler(){
        console.log('Clicked!!')
    }

    return(
        <div>
            <button onClick={clikcHandler}>Click</button>
        </div>
    )


}

export default Functionclick