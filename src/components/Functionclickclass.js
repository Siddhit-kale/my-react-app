import React, {Component} from 'react';

class Functionclickclass extends Component {
    btnclassclick() {
        console.log("Clicked - Class")
    }

    render(){
        return (
            <div>
                <button onClick={this.btnclassclick}>Click class</button>
            </div>
        )
    }
} 
export default Functionclickclass