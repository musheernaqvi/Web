import React, { useContext } from 'react'
import { StoreContext } from '../../Components/Navbar/Header/ExploreMenu/Context/StoreContext'
import './PlaceOrder.css'

const PlaceOrder = () => {

    const { getTotalCartAmount } = useContext(StoreContext)
    return (
        <form action="" className="place-order">
            <div className="place-order-left">
                <p className="title">Delivery information</p>
                <div className="multi-fields">
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                </div>
                <input type="text" placeholder='Email Address' />
                <input type="text" placeholder='Street' />
                <div className="multi-fields">
                    <input type="text" placeholder='City' />
                    <input type="text" placeholder='State' />
                    <div className="multi-fields">
                        <input type="text" placeholder='Zip Code' />
                        <input type="text" placeholder='Country' />
                    </div>
                    <input type="text" placeholder='Phone' />
                </div>
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>

                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>₹{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>₹{getTotalCartAmount() === 0 ? 0 : 20}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 20}</b>
                        </div>
                    </div>
                    <button onClick={() => navigate('/order')}>Proceed to Payment</button>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder