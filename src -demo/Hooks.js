import React from "react";
import { useState,useEffect,createContext} from "react";
import MainComponent from './MainComponent';
export const HelloContext=createContext();
const Hooks = () => {
  return(
    <HelloContext.Provider value={"Hello"}>
      <div>
        <MainComponent></MainComponent>
      </div>
      </HelloContext.Provider>
  );
}
//     const [counter, setCounter] = useState(0);
//     const [name, setName] = useState("");
//     function increaseCounter() {
//       setCounter(counter + 1);
//     }
//     function decreaseCounter() {
//       setCounter(counter - 1);
//     }
//   return (
//     <div>
//     <input type="text" onChange={e=>setName(e.target.value)}/>
//       <h1>Counter:{counter}</h1>
//       <h1>{name} has clicked{counter} times</h1>
//       <button onClick={increaseCounter}>Increased</button>
//       <button onClick={decreaseCounter}>Decreased</button>
//     </div>
//   );




// const[details,setDetails]=useState({counter:0,name:""});
// function increaseCounter()
// {
//     setDetails((prev)=>({
//         ...prev,
//         counter:prev.counter+1
//     }));
// }
// function decreaseCounter()
// {
//     setDetails((prev)=>({
//         ...prev,
//         counter:prev.counter-1
//     }));
// }
// return(
//     <div>
//         <h1>Counter:{details.counter}</h1>
//         <h1>Clicked {details.counter} times</h1>
//         <button onClick={increaseCounter}>Increased</button>
//         <button onClick={decreaseCounter}>Decreased</button>
//     </div>
// );


// const[counter,setCounter]=useState(0);
// const [name, setName] = useState("");
// useEffect(()=>{
//     document.title=counter+" times clicked"
// })
// function increaseCounter() {
//           setCounter(counter + 1);
//         }
//         function decreaseCounter() {
//           setCounter(counter - 1);
//         }
//       return (
//         <div>
//         <input type="text" onChange={e=>setName(e.target.value)}/>
//           <h1>Counter:{counter}</h1>
//           <h1>{name} has clicked{counter} times</h1>
//           <button onClick={increaseCounter}>Increased</button>
//           <button onClick={decreaseCounter}>Decreased</button>
//         </div>
//       );


//useEffect with an empty array(runs only once at time of rendering)

// const[counter,setCounter]=useState(0);
// const [name, setName] = useState("");
// useEffect(()=>{
//     document.title=counter+" times clicked"
// },[]);
// function increaseCounter() {
//           setCounter(counter + 1);
//         }
//         function decreaseCounter() {
//           setCounter(counter - 1);
//         }
//       return (
//         <div>
//         <input type="text" onChange={e=>setName(e.target.value)}/>
//           <h1>Counter:{counter}</h1>
//           <h1>{name} has clicked{counter} times</h1>
//           <button onClick={increaseCounter}>Increased</button>
//           <button onClick={decreaseCounter}>Decreased</button>
//         </div>
//       );

      //use effect with variable
      // const[counter,setCounter]=useState(0);
      // const [name, setName] = useState("");
      // const [countten,setCountten]=useState(0);
      // useEffect(()=>{
      //     document.title=countten+" times clicked"
      // },[setCountten]);
      // function increaseCounter() {
      //           setCountten(countten + 10);
      //           setCounter(counter+1);
      //         }
      //         function decreaseCounter() {
      //           setCountten(countten - 10);
      //           setCounter(counter-1);
      //         }
      //       return (
      //         <div>
      //         <input type="text" onChange={e=>setName(e.target.value)}/>
      //           <h1>Counter:{counter}</h1>
      //           <h1>{name} has clicked{countten} times</h1>
      //           <button onClick={increaseCounter}>Increased</button>
      //           <button onClick={decreaseCounter}>Decreased</button>
      //         </div>
      //       );
      
//useContext

  export default Hooks
