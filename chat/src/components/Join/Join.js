import React, { useState } from 'react'
import "./join.css"
import logo from "../../images/logo.png"
import { NavLink } from 'react-router-dom'
let user;
const sendUser = () => {
    user = document.getElementById('joininput').value;
    document.getElementById('joininput').value="";
}
const Join = () => {
    const [name,setName] = useState("")
    
    return (
        <div className='JoinPage'>
            <div className='JoinContainer'>
                <img src={logo} alt="logo" />
                <h1>GEEK MATE</h1>
                <input onChange={(e)=> setName(e.target.value)} placeholder='Enter Your Name ' type="text" id="joininput" />
                <NavLink onClick={(e)=> !name ?e.preventDefault():null} to="chat/">
                    < button onClick={sendUser} className='joinbtn'> Login </button>
                </NavLink>

            </div>

        </div >
    )
}

export default Join
export {user}
