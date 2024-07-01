// import React, { useState } from 'react'
// import './LoginPopUp.css'
// import { assets } from '../../assets/assets'

// const LoginPopUp = ({ setShowLogin }) => {

//     // const [currState, setCurrState] = useState("Sign up")
//     const [currState, setCurrState] = useState("Sign up")
//     return (
//         <div className='login-popup'>
//             <form className='login-popup-container'>
//                 <div className='login-popup-title'>
//                     <h2>{currState}</h2>
//                     <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
//                 </div>
//                 <div className="login-popup-inputs">
//                     {currState==="Login" ? null : <input type="text" placeholder='Your name'required />}
//                     <input type="email"placeholder='Your email'required/>
//                     <input type="password" placeholder='Password'required/>
//                 </div>
//                 <button>{currState==="Sign up"? "Create Account": "Login"}</button>
//                 <div className="login-popup-condition">
//                     <input type="checkbox" required/>
//                     <p>By continuing, I am accepting the T&C and Privacy Policy</p>
//                 </div> 
//                 {currState==="Login" ?
//                 <p>Create a New Account? <span onClick={()=> setCurrState("Sign up")}>Click here!</span></p>:<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login</span></p>
//             }
               
//             </form>
//         </div>
//     )
// }

// export default LoginPopUp  

import React, { useState } from 'react';
import './LoginPopUp.css';
import { assets } from '../../assets/assets';

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign up");

  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? null : <input type="text" placeholder='Your name' required />}
          <input type="email" placeholder='Your email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button>{currState === "Sign up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I am accepting the T&C and Privacy Policy</p>
        </div>
        {currState === "Login" ? (
          <p>Create a New Account? <span onClick={() => setCurrState("Sign up")}>Click here!</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login</span></p>
        )}
      </form>
    </div>
  );
}

export default LoginPopUp;
