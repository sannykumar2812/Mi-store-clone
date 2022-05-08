import React from 'react'
// import {a} from "react-router-dom"
import "../styles/HotAccessoriesMenu.css"

const HotAccessoriesMenu = () => {
    return (
        <div className="HotAccessoriesMenu">
            <a className="HotAccessoriesLink" href="/music">Music Store</a>
            <a className="HotAccessoriesLink" href="/smartDevice">Smart Devices</a>
            <a className="HotAccessoriesLink" href="/home">Home</a>
            <a className="HotAccessoriesLink" href="/lifestyle">Lifestyle</a>
            <a className="HotAccessoriesLink" href="/mobileAccessories">Mobile Accessories</a>
            
        </div>
    )
}

export default HotAccessoriesMenu
