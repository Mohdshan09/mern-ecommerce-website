import { createContext, useEffect, useState } from "react";
import React from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//creating context
export const ShopContext = createContext();

//creating context-provider
export const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const deliveryFee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [productsItem, setProductItem] = useState([]);
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const addToCart = async (itemsId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    let cartData = structuredClone(cartItems);

    if (cartData[itemsId]) {
      if (cartData[itemsId][size]) {
        cartData[itemsId][size] += 1;
      } else {
        cartData[itemsId][size] = 1;
      }
    } else {
      cartData[itemsId] = {};
      cartData[itemsId][size] = 1;
    }

    setCartItems(cartData);
  };

  const getcartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (err) {
          console.log("Error occured !");
        }
      }
    }

    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;

    setCartItems(cartData);
  };

  const totalcartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((products) => products._id === items);

      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (err) {
          console.log("error !");
        }
      }
    }

    return totalAmount;
  };

  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if(response.data.success) {
        setProductItem(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  const value = {
    products,
    deliveryFee,
    currency,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getcartCount,
    updateQuantity,
    totalcartAmount,
    navigate,
    token,
    setToken,
    backendUrl,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
