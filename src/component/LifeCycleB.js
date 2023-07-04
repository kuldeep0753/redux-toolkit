import React from "react";

class LifeCycleB extends React.Component{

    constructor(props){
        super(props);
        this.state={color:"red",}
        console.log("Constructor--->B");
    }

    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps--->B")
        return null;
    }
    componentDidMount(){
        console.log("componentDidMount-->B")
    }
    
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate--->B");
        return true;
    }
    getSnaphshotBeforeUpdate(prevProps,prevState){
        console.log("getSnaphshotBeforeUpdate-->B")
        return null;
    }

    componentDidUpdate(){
        console.log("componentDidUpdate-->B")
    }

    render(){
        console.log("Render-->B")

        return(<>
        <h3>Component--B</h3>
        </>)
    }
}

export default LifeCycleB;