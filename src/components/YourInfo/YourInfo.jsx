import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function YourInfo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
    console.log(e.target.id, e.target.value)
  }
  const handleSubmit = (e) => {
  e.preventDefault();
  if (!formData.name || !formData.email || !formData.phone) {
    alert('Please fill in all fields');
    return;
  }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    alert('Please enter a valid email address');
    return;
  }else if (!/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(formData.phone)) {
    alert('Please enter a valid phone number');
    return;
  }
  console.log(formData);
  navigate('/plan');
  }
  return (
    <div>
      <h1 className="fw-bold w-100 fs-1 " style={{ color: 'hsl(213, 96%, 18%)' }}>Personal info</h1>
      <p className="text-muted fs-5 ">Please provide your name, email address, and phone number.</p>
      <form onSubmit={handleSubmit} className="mt-5 d-flex flex-column gap-5">
        <div className="mb-3 d-flex flex-column">
          <label style={{ color: "hsl(243, 100%, 62%)" }} htmlFor="name">Name</label>
          <input className="form-control p-3" type="text" id="name" value={formData.name} onChange={handleChange} placeholder="e.g. Stephen King" />
        </div>
        <div className="mb-3 d-flex flex-column">
          <label style={{ color: "hsl(243, 100%, 62%)" }} htmlFor="email">Email</label>
          <input className="form-control p-3" type="email" id="email" value={formData.email} onChange={handleChange} placeholder="e.g. stephen.king@writers.com" />
        </div>
        <div className="mb-3 d-flex flex-column">
          <label style={{ color: "hsl(243, 100%, 62%)" }} htmlFor="phone">Phone</label>
          <input className="form-control p-3" type="tel" id="phone" value={formData.phone} onChange={handleChange} placeholder="e.g. +1 234 567 890" />
        </div>
        <div className="text-end">
          <input
            className="btn"
            style={{
              backgroundColor: 'hsl(213, 96%, 18%)',
              border: 'none',
              color: 'white'
            }}
            type="submit" value="Next Step" />
        </div>
      </form>
    </div>
  )
}

export default YourInfo