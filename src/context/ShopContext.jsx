import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    // list of different states used in this context
    const [data, setData] = useState([]);
    const [cartItem, setCartItem] = useState({});
    const [cartCount, setCartCount]= useState(0);
    const [loading, setLoading] = useState(false);

    // fetched data from fake store api
    useEffect(() => {
        setLoading(true);
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setCartItem(getDefaultCart(data));
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);  // Only keep this here
            });
    }, []);

    const getDefaultCart = (products) => {
        let cart = {};
        for (let index = 0; index < products.length; index++) {
            cart[index] = 0;
        }
        return cart;
    };

    // for adding to cart
    const addToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
        setCartCount(cartCount + 1);
        alert("Added successfully");
    };

    // for removing stuff from cart
    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) - 1 }));
        if (cartCount !== 0) {
            setCartCount(cartCount - 1);
        }
    };

    const contextValue = { data, loading, cartItem, cartCount, setCartCount, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
