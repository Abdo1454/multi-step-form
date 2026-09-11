import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <div className="sidebar">
        <ul className="d-flex flex-column justify-content-center gap-5  align-items-start">
            <li className="d-flex  align-items-center">
                <Link to="/" className="text-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>1</Link>
                
                <div className='text-light'>
                <p>STEP 1</p>
                <h4 >YOUR INFO</h4>
                </div>
            </li>
            <li className="d-flex  align-items-center">
               <Link to="/plan" className="text-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>2</Link>
                <div className='text-light'>
                <p>STEP 2</p>
                <h4 >SELECT PLAN</h4>
                </div>
            </li>
            <li className="d-flex  align-items-center"   >
                <Link to="/addons" className="text-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>3</Link>
                <div className='text-light'>
                <p>STEP 3</p>
                <h4 >ADD-ONS</h4>
                </div>
            </li>
            <li className="d-flex  align-items-center">
                <Link to="/summary" className="text-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>4</Link>
                <div className='text-light'>
                <p>STEP 4</p>
                <h4 >SUMMARY</h4>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default SideBar