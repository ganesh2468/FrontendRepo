import { useEffect,useState } from "react";
import axios from 'axios';
const ClientList=()=>{
const [users, setUsers] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers({ hits: data });
    };
    fetchData();
  }, [setUsers]);

  return (
    <div  className="Clients">
      <ul className="myUl">
        {users.hits &&
          users.hits.map(item => (
            <li key={item.id}>
              <span>{item.name}</span>
            </li>
          ))}
      </ul>
    </div>
  );
// return(
//     <>   
//     <div className="Clients">
//         <ul className="myUl">
//             <li>Ervin Howell</li>
//                 <li>Clementine Bauch</li>
//                 <li>Patricia Lebsack</li>
//                 <li>Chelsey Dietrich</li>
//                 <li>Mrs. Dennis Schulist</li>
//                 <li>Kurtis Weissnat</li>
//                 <li>Nicholas Runolfsdottir V</li>
//                 <li>Glenna Reichert</li>
//                 <li>Clementina DuBuque</li>
//                 <li>Deborah Cameron</li>
//                 <li>Sidney Shaw</li>
//                 <li>Collin Klein</li>
//                 <li>Charlotte Arnold</li>
//                 <li>Ruben Estes</li>
//                 <li>Caroline Knight</li>
//                 <li>Camden Oneal</li>
//                 <li>Lina Mendoza</li>
//                 <li>Keely Holt</li>
//                 <li>Kenya Hill</li>
//                 <li>Ethen Hood</li>
//                 <li>Tess Brock</li>
//         </ul>
//         </div>
//     </>
// );
}
export default ClientList;