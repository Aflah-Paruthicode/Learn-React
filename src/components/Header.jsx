import { foodLogo } from "../utils/constants"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import useIsOnline from "../utils/useIsOnline"
import userContext from "../utils/userContext"

const Header = () => {
    let [buttonName,setButtonName] = useState('Login')
    const {user} = useContext(userContext)
    console.log('the user context name here : ',user)
    
    return (
        <div className="header font-[poppins] justify-between items-center w-full px-28 py-2 flex fixed top-0 bg-white z-[100] shadow-2xl shadow-[#8888881f]">
            <div className="logo-container">
              
                <img className="logo w-32" src={foodLogo} alt="the logo here " />
            </div>
            <div className="nav-items flex items-center">
                <ul className="flex items-center list-none">
                    <li className="text-lg font-mono m-2.5 p-2.5 transition-all ease-in-out duration-[0.3s]">currenly : {useIsOnline() ? 'Online' : 'Offline'}</li>
                    <li className="text-lg font-mono m-2.5 p-2.5 transition-all ease-in-out duration-[0.3s] hover:bg-black hover:text-white hover:mx-3.5 hover:px-4 hover:rounded-lg"><Link className="decoration-[none]" to={'/'}>Home</Link></li>
                    <li className="text-lg font-mono m-2.5 p-2.5 transition-all ease-in-out duration-[0.3s] hover:bg-black hover:text-white hover:mx-3.5 hover:px-4 hover:rounded-lg"><Link className="decoration-[none]" to={'/about'}>About Us</Link></li>
                    <li className="text-lg font-mono m-2.5 p-2.5 transition-all ease-in-out duration-[0.3s] hover:bg-black hover:text-white hover:mx-3.5 hover:px-4 hover:rounded-lg"><Link className="decoration-[none]" to={'/contact'}>Contact Us</Link></li>
                    <li className="text-lg font-mono m-2.5 p-2.5 transition-all ease-in-out duration-[0.3s] hover:bg-black hover:text-white hover:mx-3.5 hover:px-4 hover:rounded-lg"><Link className="decoration-[none]" to={'/cart'}>Cart</Link></li>
                    <li className="text-lg font-mono m-2.5 p-2.5 transition-all ease-in-out duration-[0.3s] hover:bg-black hover:text-white hover:mx-3.5 hover:px-4 hover:rounded-lg"><Link className="decoration-[none]" to={'/cart'}>{user}</Link></li>
                </ul>
                <button className="bg-black border-none text-white py-2.5 px-5 rounded-lg font-[cursive]" onClick={() => {
                        buttonName == 'Login' ? setButtonName('Logout') : setButtonName('Login');
                    }}>
                        {buttonName}
                        </button>
            </div>
        </div>
    )
}

export default Header