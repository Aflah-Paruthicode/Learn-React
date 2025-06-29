import { foodLogo } from "../utils/constants"
import { useState } from "react"

const Header = () => {
    let [buttonName,setButtonName] = useState('Login')

    return (
        <div className="header">
            <div className="logo-container">
              
                <img className="logo" src={foodLogo} alt="the logo here " />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
                <button onClick={() => {
                        buttonName == 'Login' ? setButtonName('Logout') : setButtonName('Login');
                    }}>
                        {buttonName}
                        </button>
            </div>
        </div>
    )
}

export default Header