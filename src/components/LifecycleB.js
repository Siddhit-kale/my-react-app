import React, {Component} from "react";
class LifecycleB extends Component{
    constructor(props){
        super(props)

        this.state = {
            dept : "CSPIT"
        }
        console.log("LifecycleB Constructor")
    }

    // static getDerivedStateFromProps(props,state){
    //     console.log("LifecycleA getDerviedStateFromProps")
    //     return null
    // }

    componentDidMount() {
        console.log("LifecycleB ComponentDid mount")
    }

    render() {
        console.log("Render Method") 
        return (
            <div>
                Lifecycle - {this.state.dept}
            </div>
        )
    }
}

export default LifecycleB