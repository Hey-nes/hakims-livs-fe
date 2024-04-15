import React from "react";
import { useNavigate } from 'react-router-dom'


function CartHeader() {
    const navigate = useNavigate();

    return(
        <nav className="header">
            <h1>Hakims Livs</h1>
            <button className="cart-btn-back" onClick={() => {
            navigate("/")
            }}>Fortsätt handla</button>
        </nav>
    )
}

export default CartHeader;