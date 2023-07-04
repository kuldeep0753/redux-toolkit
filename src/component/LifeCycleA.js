import React from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends React.Component{

    constructor(props){
        super(props);
        this.state={color:"red",}
        console.log("Constructor--->A");
    }

    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps--->A")
        return null;
    }
    componentDidMount(){
        console.log("componentDidMount-->A")
    }
    
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate--->A");
        return true;
    }
    getSnaphshotBeforeUpdate(prevProps,prevState){
        console.log("getSnaphshotBeforeUpdate-->A")
        return null;
    }

    componentDidUpdate(){
        console.log("componentDidUpdate-->A")
    }

    changeState=()=>{
        this.setState({
            name:"ksks",
        })
    }

    render(){
        console.log("Render-->A")

        return(<>
        <h3>Component--A</h3>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB/>
        </>)
    }
}
export default LifeCycleA;