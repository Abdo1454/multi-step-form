import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <div className="sidebar">
        <ul className="d-flex flex-column justify-content-center gap-5  align-items-start">
            <li className="d-flex  align-items-center">
                <Link to="/">1</Link>
                
                <div>
                <p>Step 1</p>
                <h2>Your info</h2>
                </div>
            </li>
            <li className="d-flex  align-items-center">
               <Link to="/plan">2</Link>
                <div>
                <p>Step 2</p>
                <h2>Select plan</h2>
                </div>
            </li>
            <li className="d-flex  align-items-center"   >
                <Link to="/addons">3</Link>
                <div>
                <p>Step 3</p>
                <h2>Add-ons</h2>
                </div>
            </li>
            <li className="d-flex  align-items-center">
                <Link to="/summary">4</Link>
                <div>
                <p>Step 4</p>
                <h2>Summary</h2>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default SideBar