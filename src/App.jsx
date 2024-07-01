import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import StoreContextProvider from './Components/Navbar/Header/ExploreMenu/Context/StoreContext'
import Footer from './Components/Footer/Footer'
import LoginPopUp from './Components/LoginPopUp/LoginPopUp'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'





const App = () => {

  // const { isAuthenticated } = useAuth0();
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>

    {showLogin ? <LoginPopUp setShowLogin={setShowLogin}/> : null} 
  <StoreContextProvider>
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />

      <Routes>
        <Route path='/' element={<Home />} />
         <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />}/> 
      </Routes>

      </div>
      <Footer/>
  </StoreContextProvider>
    </>
  )
}

export default App


 