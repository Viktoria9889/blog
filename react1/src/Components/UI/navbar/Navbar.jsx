import React from "react"
import '../../../App.css'
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom'


const Navbar = () => {

    return (
        <div>
            <div className='navbar'>
                <div className='navbar__links'>
                    <Link to='/posts'>Posts</Link>
                    <Link to='/main'>Головна сторінка</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar