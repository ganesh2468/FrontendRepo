import { useEffect,useState } from "react";
import axios from 'axios';
const Products=()=>{
//     const [users, setUsers] = useState({ hits: [] });
   
//   useEffect(() => {
//     const fetchData = async () => {
//       const { data } = await axios(
//         "https://hub.dummyapis.com/products?noofRecords=20&idStarts=1&currency=usd"
//       );
//       setUsers({ hits: data });
//     };
//     fetchData();
//   }, [setUsers]);
//   return (
//     <div className="Clients">
//       <ol className="myUl">
//         {users.hits &&
//           users.hits.map(item => (
//             <>
//             <li key={item.id}>
//               <span>{item.name}-{item.price}</span>
//             </li>
//             </>
//           ))}
//       </ol>
//     </div>
//   );
const totalp=()=>{
    var liList = document.getElementsByClassName("lis");
    var largo = liList.length;
    //document.write("Count:"+largo);
    alert("count:"+largo);
    //document.getElementsByClassName("co").innerHTML = largo;
}
return(
    <>   
    <div className="Clients">
        <ul className="myUl">
            <li className="lis">Mouse</li>
                <li className="lis">Keyboard</li>
                <li className="lis">Joystick</li>
                <li className="lis">CPU</li>
                <li className="lis">Monitor</li>
                <li className="lis">RAM</li>
                <li className="lis">ROM</li>
                <li className="lis">Laptop</li>
                <li className="lis">Camera</li>
                <li className="lis">HeadPhones</li>
                <li className="lis">Router</li>
                <li className="lis">Speaker</li>
                <li className="lis">MotherBoard</li>
                <li className="lis">Projector</li>
                <li className="lis">Tape drive</li>
                <li className="lis">Printer</li>
                <li className="lis">Plotter</li>
                <li className="lis">Scanner</li>
                <li className="lis">Sound card</li>
                <li className="lis">GAMEPAD</li>
        </ul>
        </div>
        <button onClick={totalp}>Count</button>
 <h1>Most Popular Products</h1>
 <div className="Clients">
        <ol className="myUl">
            <li >Mouse</li>
                <li >Keyboard</li>
                <li >Joystick</li>
                <li >CPU</li>
                <li >Monitor</li>
                </ol>
        </div>
    </>
);
}
export default Products;

