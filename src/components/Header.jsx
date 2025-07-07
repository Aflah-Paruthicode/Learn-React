import { foodLogo } from "../utils/constants"
import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
    let [buttonName,setButtonName] = useState('Login')

    return (
        <div className="header">
            <div className="logo-container">
              
                <img className="logo" src={foodLogo} alt="the logo here " />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About Us</Link></li>
                    <li><Link to={'/contact'}>Contact Us</Link></li>
                    <li><Link to={'/cart'}>Cart</Link></li>
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