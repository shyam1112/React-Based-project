
import { Link } from "react-router-dom";
function DynamicRouting(){

    const users=[
        {id:'1',name:'A',contact:'2232'},
        {id:'2',name:'B',contact:'2232'},
        {id:'3',name:'C',contact:'2232'},
        {id:'4',name:'D',contact:'2232'},
        {id:'5',name:'E',contact:'2232'},

    ]
     return(
        <div>
            <h2>This is DynamicRouting</h2>  
  
            {
                users.map((i)=>
                    <h2><Link to={'/user/'+i.id} >{i.name}</Link></h2>
                )
            }
            
        </div>
    )
}
export  default   DynamicRouting;