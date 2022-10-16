import './App.css';
import Login from './Login.js/Login';
import ClientList from './Dashboard.js/ClientList';
import Products from './Dashboard.js/Products';
import Revenue from './Dashboard.js/Revenue';
import SalesStats from './Dashboard.js/SalesStats';
import Logout from './Dashboard.js/Logout';
import Protected from './Dashboard.js/Protected';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <nav >
        <ul className='list'>
        <li className="items"><Link className='link' to="/ClientList">ClientList</Link></li>
        <li className="items"><Link className='link' to="/Products">Products</Link></li>
        <li className="items"><Link className='link' to="/Revenue">Revenue</Link></li>
        <li className="items"><Link className='link' to="/SalesStats">Sales Stats</Link></li>
        <li className="items"><Link className='link'to="/Logout">Logout</Link></li>
        </ul>
      </nav>
  
      <Routes>
      
        <Route path="/ClientList" element={<Protected Component={ClientList} />} />
        <Route path="/Products" element={<Protected Component={Products} />} />
        <Route path="/Revenue" element={<Protected Component={Revenue} />} />
        <Route path="/SalesStats" element={<Protected Component={SalesStats} />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Logout" element={<Protected Component={Logout} />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
