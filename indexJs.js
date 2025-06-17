import React from "react"
import ReactDOM from 'react-dom/client'

const Header = () => {
    return <header>
        <div className="logo">
            <img id="logo" src="https://brandlogos.net/wp-content/uploads/2022/10/coca-cola-logo_brandlogos.net_8kh4z.png" />
        </div>
        <div id="Search">
            <input id="inp" />
            <a href="">Search</a>
        </div>
        <div id="user-icon">
            <img src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740" />
        </div>
    </header>
}

const text = React.createElement('h1', { id: 'jd' }, 'this message from react')
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Header />)