import { useState } from "react";

const App = () => {

  const [time, settime] = useState(new Date().toLocaleDateString());
  // setInterval(() => {
  //   settime(new Date().toLocaleTimeString())
  // }, 1000);
 
  const [username,setUsername]= useState('sajjan');
//  const updateUsername = (x)=>{
//    setUsername(x);
//  }
  return (
    <>
      <h1>{time}</h1>
      <h1>{username}</h1>
      <button onClick={()=> setUsername('max')}>fhfhfh</button>
      <div>App</div>
    </>
  )
}

export default App