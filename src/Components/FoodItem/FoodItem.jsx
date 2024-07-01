// import React, { useContext } from 'react'
// import './FoodItem.css'
// import { assets } from '../../assets/assets'
// import { StoreContext } from '../Navbar/Header/ExploreMenu/Context/StoreContext'

// const FoodItem = ({ id, name, price, description, image }) => {


//     // const [itemCount, setItemCount] = useState(0)
//     const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
//     return (
//         <div className='food-item'>
//             <div className="food-item-img-container">
//                 <img className='food-item-image' src={image} alt="" />
//                 {!cartItems[id]
//                     ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} />
//                     : <div className="food-item-counter">
//                         <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
//                         <p>{cartItems[id]}</p>
//                     <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
//                     </div>
//                 }
//                 {/* {!itemCount
//                     ? <img className='add' onClick={() => setItemCount(prev=>prev+1)} src={assets.add_icon_white} />
//                     : <div className="food-item-counter">
//                         <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt="" />
//                         <p>{itemCount}</p>
//                     <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt="" />
//                     </div>
//                 } */}
//             </div>
//             <div className="food-item-info">
//                 <div className="food-item-name-rating">
//                     <p>{name}</p>
//                     <img src={assets.rating_starts} alt="" />
                    
//                 </div>
//                 <p className="food-item-desc">{description}</p>
//                 <p className="food-item-price">₹{price + 100}</p>
//             </div>
//         </div>
//     )
// }

// export default FoodItem

import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../Navbar/Header/ExploreMenu/Context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
    console.log('Received ID:', id);
    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt={name} />
                {!cartItems[id] 
                    ? <img className='add' onClick={() => { 
                        console.log("Adding item with ID:", id); 
                        addToCart(id);
                    }} src={assets.add_icon_white} alt="Add" />
                    : <div className="food-item-counter">
                        <img onClick={() => { 
                            console.log("Removing item with ID:", id); 
                            removeFromCart(id); 
                        }} src={assets.remove_icon_red} alt="Remove" />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => { 
                            console.log("Adding item with ID:", id); 
                            addToCart(id); 
                        }} src={assets.add_icon_green} alt="Add" />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">₹{price + 100}</p>
            </div>
        </div>
    );
};

export default FoodItem;
