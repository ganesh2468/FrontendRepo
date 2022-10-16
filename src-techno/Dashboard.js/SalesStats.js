import { useEffect,useState } from "react";
import axios from 'axios';
const SalesStats=()=>{
    const [users, setUsers] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(
        "https://hub.dummyapis.com/products?noofRecords=20&idStarts=1&currency=usd"
      );
      setUsers({ hits: data });
    };
    fetchData();
  }, [setUsers]);

  return (
    <div className="Clients">
      <ol className="myUl">
        {users.hits &&
          users.hits.map(item => (
            <li key={item.id}>
              <span>{item.name}-{item.price}</span>
              {/* <span>{item.name}></span> */}
            </li>
            
          ))}
      </ol>
    </div>
  );
// return(
//     <>
//     <div className="Clients">
//     <table className="myUl">
//         <tr>
//             <th>Products</th>
//             <th>Revenue</th>
//         </tr>
//         <tr>
//             <td>Mouse</td>
//             <td>2000</td>
//         </tr>
//         <tr>
//             <td>Keyboard</td>
//             <td>4000</td>
//         </tr>
//         <tr>
//             <td>Joystick</td>
//             <td>8000</td>
//         </tr>
//         <tr>
//             <td>CPU</td>
//             <td>8327</td>
//         </tr>
//         <tr>
//             <td>Monitor</td>
//             <td>9799</td>
//         </tr>
//         <tr>
//             <td>RAM</td>
//             <td>9083</td>
//         </tr>
//         <tr>
//             <td>ROM</td>
//             <td>9839</td>
//         </tr>
//         <tr>
//             <td>Laptop</td>
//             <td>8738</td>
//         </tr>
//         <tr>
//             <td>Camera</td>
//             <td>8937</td>
//         </tr>
//         <tr>
//             <td>HeadPhones</td>
//             <td>8378</td>
//         </tr>
//         <tr>
//             <td>Router</td>
//             <td>8373</td>
//         </tr>
//         <tr>
//             <td>Speaker</td>
//             <td>9873</td>
//         </tr>
//         <tr>
//             <td>MotherBoard</td>
//             <td>9823</td>
//         </tr>
//         <tr>
//             <td>Projector</td>
//             <td>9283</td>
//         </tr>
//         <tr>
//             <td>Tape drive</td>
//             <td>9384</td>
//         </tr>
//         <tr>
//             <td>Printer</td>
//             <td>9282</td>
//         </tr>
//         <tr>
//             <td>Plotter</td>
//             <td>2098</td>
//         </tr>
//         <tr>
//             <td>Scanner</td>
//             <td>9822</td>
//         </tr>
//         <tr>
//             <td>Sound card</td>
//             <td>9827</td>
//         </tr>
//         <tr>
//             <td>GAMEPAD</td>
//             <td>8733</td>
//         </tr>
//     </table>
//     </div>
//     </>
// );
}
export default SalesStats;