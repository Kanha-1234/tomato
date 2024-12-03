import { createContext, useEffect, useState } from "react";
//import { food_list } from "../assets/assets";
import axios from "axios"
export const StoreContext = createContext(null);

const storeContextProvider = (props) => {
  const [cartitems, setCartItems] = useState({});
  const[food_list,setFoodList] = useState([])
   const url = "http://localhost:4000";
   const [token,setToken] = useState("")
  const addTOCart = (itemId) => {
    if (!cartitems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeCartItem = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

   const getTotalCartAmount = ()=>{
    let totalAmount = 0;
    for(const item in cartitems){
      if(cartitems[item]>0){
        let itemInfo = food_list.find((product)=>product._id === item);
      totalAmount += itemInfo.price*cartitems[item]
      }
    }
    return totalAmount
   }

   const fetchFoodList = async()=>{
    const response = await axios.get(url+"/api/food/list");
    setFoodList(response.data.data)
   }

   useEffect(()=>{
    
    async function loadData() {
      await fetchFoodList()
      if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"))
      }
    }
    loadData()
   },[])


  const contextValue = {
    food_list,
    cartitems,
    setCartItems,
    addTOCart,
    removeCartItem,
    getTotalCartAmount,
    url,
    token,setToken
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default storeContextProvider;
