import './App.css';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Notification from './Pages/Notification';
import OnlineStore from './Pages/OnlineStore';
import Home from './Pages/Home';
import Videos from './Pages/Videos';
import Help from './Pages/Help';
import fb_title from "./Pages/fb_title.jpg";
import Login from './Pages/Login';
import { Logout } from './Pages/Logout';
import Protected from './Pages/Protected';
function App(){
  return(
    <>
    <Router>
      <nav >
      <img src={fb_title} className="fb_title"/>
        <ul className='list'>
        <li className="items"><Link className='link' to="/">HOME</Link></li>
        <li className="items"><Link className='link' to="/Videos">VIDEOS</Link></li>
        <li className="items"><Link className='link' to="/OnlineStore">SHOPING</Link></li>
        <li className="items"><Link className='link' to="/Notification">NOTIFICATIONS</Link></li>
        <li className="items"><Link className='link'to="/Help">HELP</Link></li>
        <li className="items"><Link className='link'to="/Logout">Logout</Link></li>
        </ul>
      </nav>
  
      <Routes>
        <Route path="/" element={<Protected Component={Home} />} />
        <Route path="/Videos" element={<Protected Component={Videos} />} />
        <Route path="/OnlineStore" element={<Protected Component={OnlineStore} />} />
        <Route path="/Notification" element={<Protected Component={Notification} />} />
        <Route path="/Help" element={<Protected Component={Help} />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Logout" element={<Protected Component={Logout} />} />
      </Routes>
      <div className='footer'><center>Copyrights Reserved by Facebook @2022</center></div>
    </Router>
    </>
  );
}
export default App;

