import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  // alert("good mornig")
  return (
    <>
       <nav className="navbar">
            {/* <a href="/" className='navbar-brand'>Logo</a> */}
            <Link to="/">Logo</Link>
            <ul className="nav">
                <li className="nav-item">
                    <Link className='nav-link' to="/event">Event</Link>
                    {/* <a href="/event" className='nav-link'>Event</a>     */}
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to="/users">users</Link>
                    {/* <a href="/users" className='nav-link'>users</a>     */}
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to="/calculator">Calculator</Link>
                    {/* <a href="/users" className='nav-link'>users</a>     */}
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to="/morning">Morning</Link>
                    {/* <a href="/users" className='nav-link'>users</a>     */}
                </li>
            </ul>
        </nav> 
    </>
  )
}

export default Navbar