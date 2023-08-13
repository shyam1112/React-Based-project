import React,{Component} from "react";

class UserClass extends Component{
    constructor(){
        super();
        this.state={
            data:0,
        }
    }
    updatedata(){
        this.setState({data:this.state.data+1});
    }
    render(){
        return(
            <div>
                <h2>Hello this is userclass from class Component.</h2>
                <h2>{this.state.data}</h2>
                <button onClick={()=>this.updatedata()}>I'm userclass</button>
            </div>
        )
    }
}
export default UserClass;