import { Component } from "react";

class Mount extends Component{
    constructor(){
        super();
        this.state={
            name:"Shyam"
        }
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    render(){
        console.warn("rendore");
        return(
            <div>
                <h1>Hello {this.state.name}</h1>
                <button onClick={()=>this.setState({name:"Sardhara"})}>Click</button>
            </div>
        )
    }
}
export default Mount;