import React from 'react';
import { Link } from 'react-router-dom';
import arcadeIcon from '../../assets/images/icon-arcade.svg';
import advancedIcon from '../../assets/images/icon-advanced.svg';
import proIcon from '../../assets/images/icon-pro.svg';
// import YourInfo from '../YourInfo/YourInfo';
function SelectPlan() {
    const [selectedPlan, setSelectedPlan] = React.useState(()=>{
        const savedPlan = localStorage.getItem('selectedPlan');
        return savedPlan ? savedPlan : '';
    });
    React.useEffect(()=>{
        localStorage.setItem('selectedPlan', JSON.stringify(selectedPlan));
    }, [selectedPlan]);
    const plans = [
        { name: 'Arcade', price: '9', icon: arcadeIcon },
        { name: 'Advanced', price: '12', icon: advancedIcon },
        { name: 'Pro', price: '15', icon: proIcon }
    ]
    const [timeframe, setTimeframe] = React.useState(()=>{
        const savedTimeframe = localStorage.getItem('timeframe');
        return savedTimeframe ? savedTimeframe : 'Monthly';
    });
    React.useEffect(()=>{
        localStorage.setItem('timeframe', timeframe);
    }, [timeframe]);
        return (
            <div className="d-flex flex-column gap-3 mb-5">
                <h2 className="fs-1" style={{color: "#07255b"}}>Select your plan</h2>
                <p className="text-muted fs-3">You have the option of monthly or yearly billing.</p>
                <div className="d-flex flex-column gap-3 ">
                <div className="d-flex  gap-3 m-5">
                    {plans.map(
                        (plan) => {
                            return (
                                <div style={{cursor: "pointer" , width: "200px"}}
                                    className=
                                    {selectedPlan === plan ? "d-flex flex-column align-items-center justify-content-center gap-3 border border-primary rounded p-3  text-dark" 
                                        : "d-flex flex-column align-items-center justify-content-center gap-3 border border-light rounded p-3 bg-light text-dark"}
                                    key={plan.name}
                                    onClick={() => setSelectedPlan(plan)}
                                >
                                    <img src={plan.icon} alt={plan.name} />
                                    <div>
                                        <h4 style={{color: "#07255b"}}>{plan.name}</h4>
                                        <p className="text-muted">+${plan.price} / { (timeframe === 'Yearly' ? "yr" : "mo")}</p>
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
          <div className="d-flex align-items-center justify-content-center gap-3 bg-light p-2 rounded-pill">
  <h5 className={timeframe === 'Monthly' ? 'text-primary fw-bold' : 'text-muted'}>Monthly</h5>

  <label className="switch">
    <input type="checkbox" 
    checked={timeframe === 'Yearly'}
    onChange={(e)=>{
        setTimeframe(e.target.checked ? "Yearly" : "Monthly");
    }}    />
    <span className="slider"></span>
  </label>

  <h5 className={timeframe === 'Yearly' ? 'text-primary fw-bold' : 'text-muted'}>Yearly</h5>
</div>
        <div className="d-flex justify-content-between mt-5">
            <Link    to="/"  className="border-0 bg-light  fw-bold p-3 rounded-3 border-4 text-decoration-none" style={{cursor: "pointer" , color: "#07255b"}}>
                Go Back
            </Link>
            <Link    to="/addons"  className="border-0  text-white fw-bold p-3 rounded-3 border-4" style={{cursor: "pointer" , backgroundColor: "#07255b"}}>
                Next Step
            </Link>
        </div>
                 </div>
            </div>
  )
}

export default SelectPlan