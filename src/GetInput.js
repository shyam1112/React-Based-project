import { useState } from "react";
function GetInput() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  function getvalue(val) {
    setData(val.target.value)
    // setPrint(false);
  }

  return (
    <div>
      <input type='text' onChange={getvalue} />
      <button onClick={() => setPrint(!print)}>Toggel</button>
      {
        print ?
          <h2>{data}</h2>
          : null
      }
 
    </div>
  )
}
export default GetInput;