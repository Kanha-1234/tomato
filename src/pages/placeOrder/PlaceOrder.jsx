import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/storeContext'
const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
      <p className="title">Delivery information</p>
      <div className="multi-fields">
        <input type="text" placeholder='first name'/>
        <input type="text" placeholder='lastname'/>
      </div>
      <input type="text" placeholder='email address'/>
      <input type="text" placeholder='street'/>
      <div className="multi-fields">
        <input type="text" placeholder='city'/>
        <input type="text" placeholder='state'/>
      </div>
      <div className="multi-fields">
        <input type="text" placeholder='zip code'/>
        <input type="text" placeholder='country'/>
      </div>
      <input type="text" placeholder='phone' />
      </div>
      <div className="place-order-right">
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
                <p>{2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
                 <b>Total</b>
                 <b>{getTotalCartAmount()+2}</b>
            </div>
            <hr />
          </div>
          <button >proceed to payment</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
