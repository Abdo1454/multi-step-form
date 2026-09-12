import React from 'react'
import { NavLink } from 'react-router-dom'

function SideBar() {
    const steps = [
        { step: 1, label: 'YOUR INFO', path: '/' },
        { step: 2, label: 'SELECT PLAN', path: '/plan' },
        { step: 3, label: 'ADD-ONS', path: '/addons' },
        { step: 4, label: 'SUMMARY', path: '/summary' },
    ]
  return (
    <div className="sidebar">
        <ul className="d-flex flex-column justify-content-center list-unstyled gap-5  align-items-start">
            {
                steps.map((step)=>{
                    return (
                        <li className="d-flex gap-3 align-items-center text-light" key={step.step}>
                            <NavLink to={step.path} className={
                                ({isActive}) => isActive ? "d-flex align-items-center justify-content-center border border-light rounded-circle p-2 px-3 text-light text-decoration-none fs-2 bg-primary" :
                                "d-flex align-items-center justify-content-center border border-light rounded-circle p-2 px-3  text-light text-decoration-none fs-2"
                            }>
                                {step.step}
                            </NavLink>
                            <div>
                                <p>STEP {step.step}</p>
                                <h4>{step.label}</h4>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default SideBar