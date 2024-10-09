import React, {Component} from "react";
import LifecycleB from "./LifecycleB";
class Lifecycle extends Component{
    constructor(props){
        super(props)

        this.state = {
            dept : "CSE"
        }
        console.log("LifecycleA Constructor")
    }

    // static getDerivedStateFromProps(props,state){
    //     console.log("LifecycleA getDerviedStateFromProps")
    //     return null
    // }

    componentDidMount() {
        console.log("LifecycleA ComponentDid mount")
    }

    getSnapshotBeforeUpdate(prevProps, prevstate) {
        console.log("LifecycleA getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate() {
        console.log("LifecycleA ComponentDid mount")
    }

    changestate() {
        this.setState({
            dept : "CSPIT"
        })
    }

    render() {
        console.log("Render Method") 
        return (
            <div>
                LifecycleA - {this.state.dept} <br></br>
                <button onClick={() => this.changestate()}>change state</button>
            </div>
        )
    }
}

export default Lifecycle