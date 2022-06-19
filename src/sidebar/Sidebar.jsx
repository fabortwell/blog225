 import "./sidebar.css"
 
 export default function Sidebar() {
   return (
     <div className="sidebar">
     <div className="sidebarItem">
       <span className="sidebarTitle">ABOUT ME</span>
       <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt=""/>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero similique cupiditate soluta, deserunt cumque aliquam animi at? Voluptatibus quasi quisquam neque ex cum eos perferendis quos repellat velit, sint atque!</p>
     </div>
     <div className="sidebarItem">
     <span className="sidebarTitle">CATEGORIES</span>
     <ul className="sidebarList">
       <li className="sidebarListItem">Technology</li>
       <li className="sidebarListItem">Sports</li>
       <li className="sidebarListItem">Music</li>
       <li className="sidebarListItem">Travel</li>
       <li className="sidebarListItem">DIY</li>
       <li className="sidebarListItem">Fashion</li>
     </ul>
     </div>
     <div className="sidebarItem">
     <span className="sidebarTitle">FOLLOW US</span>
     <div className="sidebarSocial">
     <i className="topIcon fa-brands fa-facebook-square"></i>
    <i className="topIcon fa-brands fa-twitter-square"></i>
    <i className="topIcon fa-brands fa-pinterest-square"></i>
    <i className="topIcon fa-brands fa-instagram-square"></i>
     </div>
     </div>
     </div>
   )
 }
 