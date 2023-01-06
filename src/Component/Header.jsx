import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='containerMain'>

            <Link to='/home'> HOME </Link>

        </div>
    )
}

export default Header
