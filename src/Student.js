
import { Component } from "react";


// function Student(props){
//     return <div style={{backgroundColor:"skyblue"}}>
//         <h1>Hello {props.name}</h1>
//         <h2>Email : {props.email}</h2>
//         <h3>num : {props.other.num}</h3>
//     </div>
// }


class Student extends Component{
    render(){
        
        return(
            <div>
                <h1>Hello {this.props.name}</h1>
                <h2>Email : {this.props.email}</h2>
            </div>
        )
    }
}
export default Student;