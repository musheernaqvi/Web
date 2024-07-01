// import React, { useContext, useState } from 'react'
// import './Navbar.css'
// import { assets } from '../../assets/assets'
// import { Link } from 'react-router-dom'
// import { StoreContext } from './Header/ExploreMenu/Context/StoreContext'
// import { useAuth0 } from '@auth0/auth0-react'

// const Navbar = ({setShowLogin}) => {

//     const [menu, setMenu] = useState("Home")

//     const {getTotalCartAmount} = useContext(StoreContext);

//     const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

    
 
// //   return 
// //   (
// //       <>
// // <div className="navbar">
// //     <Link to='/'>
// //     <img src={assets.logo} alt="" className='logo'/>
// //     </Link>
// //     <ul className='navbar-menu'>
// //         <Link to='/' onClick ={() => setMenu("Home")}className={menu==="Home"?"active":""}>Home</Link>
// //         <a href='#explore-menu'  onClick ={() => setMenu("Menu")}className={menu==="Menu"?"active":""}>Menu</a> 
// //         <a href='#app-download' onClick ={() => setMenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>Mobile-app</a>
// //         <a href='#footer'  onClick ={() => setMenu("Contact-Us")}className={menu==="Contact-Us"?"active":""}>Contact Us</a>
// //     </ul>
// //     <div className="navbar-right">
// //         <img src={assets.search_icon} alt=""/>
// //         <div className="navbar-search-icon">
// //             <Link to='/cart'>
// //             <img src={assets.basket_icon}alt=""/>
// //             </Link>
// //             <div className={getTotalCartAmount()?"":"dot"}>
// //             </div>                
// //         </div>
// //             <button onClick={()=>setShowLogin(true)}>Sign In</button>

// //     </div>
// // </div>



// // </>  )
// return (
//     <div className="navbar">
//       <Link to='/'>
//         <img src={assets.logo} alt="" className='logo' />
//       </Link>
//       <ul className='navbar-menu'>
//         <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
//         <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
//         <a href='#app-download' onClick={() => setMenu("Mobile-app")} className={menu === "Mobile-app" ? "active" : ""}>Mobile-app</a>
//         <a href='#footer' onClick={() => setMenu("Contact-Us")} className={menu === "Contact-Us" ? "active" : ""}>Contact Us</a>
//       </ul>
//       <div className="navbar-right">
//         <img src={assets.search_icon} alt="" />
//         <div className="navbar-search-icon">
//           <Link to='/cart'>
//             <img src={assets.basket_icon} alt="" />
//           </Link>
//           <div className={getTotalCartAmount() ? "" : "dot"}></div>
//         </div>
//         {isAuthenticated ? (
//           <div>
//             <span>Welcome, {user.name}</span>
//             <button onClick={() => logout({ returnTo: window.location.origin })}>Sign Out</button>
//           </div>
//         ) : (
//           <button onClick={loginWithRedirect}>Sign In</button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Navbar

import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from './Header/ExploreMenu/Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to='/'>
        <img src={assets.logo} alt="" className='logo' />
      </Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("Mobile-app")} className={menu === "Mobile-app" ? "active" : ""}>Mobile-app</a>
        <a href='#footer' onClick={() => setMenu("Contact-Us")} className={menu === "Contact-Us" ? "active" : ""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'>
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;
