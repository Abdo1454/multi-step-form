import React from 'react'

function YourInfo() {
  return (
    <div>
        <h1 className="fw-bold w-100 fs-1 " style={{ color: 'hsl(213, 96%, 18%)' }}>Personal info</h1>
        <p className="text-muted fs-5 ">Please provide your name, email address, and phone number.</p>
        <form>
            <div className="mb-3 d-flex flex-column">
                <label style={{color:"hsl(243, 100%, 62%)"}} htmlFor="name">Name</label>
                <input className="form-control p-3" type="text" id="name" placeholder="e.g. Stephen King" />
            </div>
            <div className="mb-3 d-flex flex-column">
                <label style={{color:"hsl(243, 100%, 62%)"}} htmlFor="email">Email</label>
                <input className="form-control p-3" type="email" id="email" placeholder="e.g. stephen.king@writers.com" />
            </div>
            <div className="mb-3 d-flex flex-column">
                <label style={{color:"hsl(243, 100%, 62%)"}} htmlFor="phone">Phone</label>
                <input className="form-control p-3" type="tel" id="phone" placeholder="e.g. +1 234 567 890" />
            </div>
<div className="text-end">
  <input
    className="btn"
    style={{
      backgroundColor: 'hsl(213, 96%, 18%)',
      border: 'none',
      color: 'white'
    }}
    type="submit"value="Next Step" />
</div>        </form>
    </div>
  )
}

export default YourInfo