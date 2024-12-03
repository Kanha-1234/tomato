import "./FoodItem.css";
import { assets } from "../../assets/assets";
import {useContext } from "react";
import { StoreContext } from "../../context/storeContext";
const FoodItem = ({ id, name, price, description, image }) => {
  
  const {cartitems,addTOCart,removeCartItem,url} =useContext(StoreContext)
  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img className="food-item-image" src={url+"/images/"+image} alt="" />
        {!cartitems[id] ? (
          <img
            className="add"
            onClick={() => addTOCart(id)}
            src={assets.add_icon_white}
          ></img>
        ) : (
          <div className="food-item-counter">
            <img src={assets.remove_icon_red} onClick={()=>removeCartItem(id)}></img>
            <p>{cartitems[id]}</p>
            <img src={assets.add_icon_green} onClick={()=>addTOCart(id)}></img>
             </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
