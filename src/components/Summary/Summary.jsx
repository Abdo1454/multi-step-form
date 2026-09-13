import React from 'react';
import { Link } from 'react-router-dom';

function Summary() {
    const [timeframe] = React.useState(() => {
        const savedTimeframe = localStorage.getItem('timeframe');
        return savedTimeframe ? savedTimeframe : 'Monthly';
    });
    const [selectedPlan] = React.useState(() => {
        const savedPlan = localStorage.getItem('selectedPlan');
        return savedPlan ? JSON.parse(savedPlan) : '';
    });
    const [selectedAddOns] = React.useState(() => {
        const savedAddOns = localStorage.getItem("selectedAddOns");
        return savedAddOns ? JSON.parse(savedAddOns) : [];
    });

    // plan price
    if (timeframe === 'Yearly') {
        var planPrice = selectedPlan.price * 10;
    } else {
        var planPrice = selectedPlan.price;
    }
    // add-ons total price
    var addOnsTotal = selectedAddOns.reduce((total, addOn) => {
        return total + Number(addOn.price);
    }, 0);
    if (timeframe === 'Yearly') {
        addOnsTotal = addOnsTotal * 10;
    } else {
        addOnsTotal = addOnsTotal;
    }
    const totalPrice = planPrice + addOnsTotal;
    console.log("Selected Plan:", planPrice);
    console.log("Total Price:", totalPrice);
    console.log("Selected Add-Ons:", addOnsTotal);
    return (
        <div>
            <h2 className='fs-1' style={{ color: "#07255b" }}>Finishing Up</h2>

            <p className="text-muted fs-3">
                Double-check everything looks OK before confirming.
            </p>

            <div className="d-flex flex-column gap-1 border p-3  fs-3 rounded bg-body-secondary">
                {selectedPlan && (
                    <div className="d-flex justify-content-between align-items-center  px-5  rounded p-1 mb-1">
                        <span style={{ color: "#07255b" }}>{selectedPlan.name} ({timeframe}) </span>
                        <span style={{ color: "#07255b" }}> +${selectedPlan.price}/{ (timeframe === 'Yearly' ? "yr" : "mo")}</span>
                    </div>
                )}
                <hr />

              {selectedAddOns.map((addOn) => {
    const addOnPrice =
        timeframe === 'Yearly'
            ? Number(addOn.price) * 10
            : Number(addOn.price);

    return (
        <div
            className="d-flex justify-content-between align-items-center px-5 rounded p-1 mb-1"
            key={addOn.name}
        >
            <span className="text-muted">{addOn.name}</span>
            <span>
                +${addOnPrice}/{timeframe === 'Yearly' ? "yr" : "mo"}
            </span>
        </div>
    );
})}
            </div>

            <div className="d-flex justify-content-between align-items-center  px-5  rounded p-1 mb-1 mt-3">
                <h5>
                    Total (per {timeframe === 'Monthly' ? 'month' : 'year'})
                </h5>
                <span style={{ color: "#07255b" }}>
                    ${totalPrice}/{timeframe === 'Yearly' ? 'yr' : 'mo'}
                </span>
            </div>
            <div className="d-flex justify-content-between align-items-center  px-5  rounded p-1 mb-1 mt-3">
                <Link to="/addons" className="btn  mt-3 text-start" >
                    Go Back
                </Link>
                <button className="btn  fs-4  mt-3 ms-auto" style={{ backgroundColor: "hsl(243.68deg 98.28% 77.25%)", color: "white" }}>Confirm</button>
            </div>

        </div>
    );
}


export default Summary;