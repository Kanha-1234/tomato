import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/storeContext";
import axios from "axios"
const LoginPopup = ({setShowLogin}) => {

const {url,setToken} = useContext(StoreContext)

  const [currState, setCurrState] = useState("sign up");
  const[data,setData] = useState({
    name:"",
    email:"",
    password:""
  })

 const onChangrHandler = (e)=>{
  const {name,value} = e.target;
  setData((prev)=>{
    return {...prev,[name]:value}
  })
 }

 const onLogin = async(e)=>{
   e.preventDefault();
    let newUrl = url;
    if(currState === "Login"){
      newUrl += "/api/user/login"
    }
    else{
      newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl,data)

    if(response.data.success){
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false)
    }
    else{
      alert(response.data.message)
    }
 }

console.log(data)
  return (
    <div className="login-popup">
      <form onSubmit={onLogin} action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
            {currState ==="Login" ? <></> :  <input type="text" name="name" onChange={onChangrHandler}  value={data.name}  placeholder="your name" required/>
          }
         <input type="email"  placeholder="your email" required name="email" onChange={onChangrHandler}  value={data.email}/>
          <input type="password"  placeholder="password" required name="password" onChange={onChangrHandler}  value={data.password} />
          
        </div>
        <button type="Submit">{currState === "sign up" ? "create account" : "Login" }</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By continuing , i agree to the terms of use & privacy policy</p>
        </div>
        {currState === "Login" ? <p>create a new account ? <span onClick={()=>setCurrState("sign up")}>click here</span></p> :
         <p>Already have an account <span onClick={()=>setCurrState("Login")}>login here</span></p>
          }
        
        
      </form>
    </div>
  );
};

export default LoginPopup;
