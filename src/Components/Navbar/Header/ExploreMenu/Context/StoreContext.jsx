// import React, { createContext, useEffect, useState } from "react";
// import { food_list } from "../../../../../assets/assets";

// export const StoreContext = createContext(null)

// const StoreContextProvider = (props) => {

//     const [cartItems, setCartItems] = useState({});

//     const addToCart = (itemId) => {
//         if (!cartItems[itemId]) {
//             setCartItems((prev) => ({...prev, [itemId]:1 }));
//         } else {
//             setCartItems((prev) => ({...prev, [itemId]:prev[itemId] + 1 }));
//         }
//     }

//     const removeFromCart = (itemId) => {
//     setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
//     }

//     useEffect(()=>{
//          console.log(cartItems);},[cartItems])


//     const contextValue = {
//         food_list,
//         cartItems,
//         setCartItems,
//         addToCart,
//         removeFromCart
//     };
//     return (
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     )
// }

// export default StoreContextProvider

import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../../../../../assets/assets";

export const StoreContext = createContext("");

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        console.log("Adding to cart:", itemId);
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
    };

    const removeFromCart = (itemId) => {
        console.log("Removing from cart:", itemId);
        setCartItems((prev) => {
            if (prev[itemId] === 1) {
                const { [itemId]: _, ...rest } = prev;
                return rest;
            } else {
                return {
                    ...prev,
                    [itemId]: prev[itemId] - 1
                };
            }
        });
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {

                let itemInfo = food_list.find((product) => product.id === item);
                totalAmount += itemInfo.price + 100 * cartItems[item];
            }
        }
        return totalAmount;
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
