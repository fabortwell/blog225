import {Link} from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
  const user = true;
  return (
    <div className="top">
    <div className="topLeft">
    <li className="topListItem"> 
            TECH-CONVO
           </li>
    </div>
    <div className="topCenter">
        <ul className="topList">
         <li className="topListItem"> 
           <Link className="link" to="/home">HOME</Link>
           </li>
         <li className="topListItem">
         <Link className="link" to="/sidebar">ABOUT</Link>
         </li>
         <li className="topListItem">
         <Link className="link" to="/sidebar">CONTACT</Link>
         </li>
         <li className="topListItem">
         <Link className="link" to="/write">Write</Link>
         </li>
         <li className="topListItem">
         <Link className="link" to="/login">LOGIN</Link>
         </li>

         <li className="topListItem">
         <Link className="link" to="/register">REGISTER</Link>
         </li>
        </ul>
      </div>
      <div className="topRight">
       
      </div>
    </div>
  );
}
 