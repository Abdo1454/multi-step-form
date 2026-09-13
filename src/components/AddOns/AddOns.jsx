import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function AddOns() {
    const [selectedAddOns, setSelectedAddOns] = useState(() => {
        const savedAddOns = localStorage.getItem("selectedAddOns");

        return savedAddOns ? JSON.parse(savedAddOns) : [];
    });

    const PickAddOns = [
        {
            name: "Online Service",
            description: "Access to multiplayer games",
            price: "1"
        },
        {
            name: "Large Storage",
            description: "Extra cloud storage for your games",
            price: "2"
        },
        {
            name: "Customizable Profile",
            description: "Personalize your gaming experience",
            price: "2"
        }
    ];
    const handleAddOnChange = (addOn) => {
        setSelectedAddOns((prev) => {
            const exists = prev.some(
                (item) => item.name === addOn.name
            );

            if (exists) {
                 return prev.filter(
                (item) => item.name !== addOn.name
            ); // موجود → لا تضيفه مرة ثانية
            }

            return [...prev, addOn]; // مش موجود → أضفه
        });
    };
    const handleNextStep = (e) => {

        if (selectedAddOns.length === 0) {
            e.preventDefault();
            alert("Please select at least one add-on before proceeding.");
        } else {
            localStorage.setItem("selectedAddOns", JSON.stringify(selectedAddOns));
        }

    }
    return (
        <div>
            <h2 style={{ color: "#07255b" }}>Pick add-ons</h2>
            <p className="text-muted">Add-ons help enhance your gaming experience.</p>
            <form>
                {PickAddOns.map((addOn, index) => {
                    return (
                        <div key={index} className="form-check d-flex align-items-center border px-5 border-primary rounded p-3 mb-3 gap-3">
                            <input
                                className="form-check-input"
                                checked={selectedAddOns.some(
                                    (item) => item.name === addOn.name
                                )}
                                onChange={() => handleAddOnChange(addOn)}
                                id={`add-on-${index}`}
                                type="checkbox"
                            />
                            <div>
                                <label className="form-check-label fs-4" htmlFor={`add-on-${index}`}>{addOn.name}</label>
                                <p>{addOn.description}</p>
                            </div>
                            <span className="text-primary ms-auto">+${addOn.price}/mo</span>
                        </div>
                    )
                })}
                <div className="form-check  border-primary rounded-pill rounded p-3 mb-3 d-flex align-items-center gap-5">
                    <Link to="/plan" className="btn text-muted text-start">Go Back</Link>
                    <Link to="/summary" onClick={handleNextStep} className="btn  ms-auto text-light" style={{ cursor: "pointer", backgroundColor: "#07255b" }}>Next Step</Link>
                </div>
                {/* <p>
                    selected Add-Ons: {selectedAddOns.map((addOn) => addOn.price).join(", ")}
                </p> */}
            </form>
        </div>
    )
}

export default AddOns