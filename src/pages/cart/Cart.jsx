import {useContext} from 'react'
import { StoreContext } from '../../context/storeContext'
import './Cart.css'
import { useNavigate } from 'react-router-dom'
const Cart = () => {

const {food_list,
  cartitems,
  
  getTotalCartAmount,
  removeCartItem,url} = useContext(StoreContext)

   const navigate = useNavigate()
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {
          food_list.map((item,index)=>{
            if(cartitems[item._id]>0)
            {
              return (
               <div key={index}>
                <div  className="cart-items-title cart-items-item">
                      <img src={url+"/images/"+item.image}></img>
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                      <p>{cartitems[item._id]}</p>
                      <p>${item.price*cartitems[item._id]}</p>
                      <p onClick={()=>removeCartItem(item._id)} className='cross'>X</p>    
                </div>
                <hr/>
               </div>
              )
            }
          })
        }
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>cart total</h2>
          <div>
            <div className="cart-total-details">
               <p>sub total</p>
               <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
                <p>delivary fee</p>
                <p>{getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
                 <b>Total</b>
                 <b>{getTotalCartAmount()+2}</b>
            </div>
            <hr />
          </div>
          <button onClick={()=>navigate('/order')}>proceed to check out</button>
        </div>
        <div className="cart-promo-code">
          <div>
            <p>if you have a promo code enter it here</p>
            <div className="cart-promo-code-input">
              <input type="text" placeholder='promo code' />
              <button>submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
