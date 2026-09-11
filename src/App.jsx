import { Routes, Route } from 'react-router-dom'
import SideBar from './components/SideBar/SideBar'
import YourInfo from './components/YourInfo/YourInfo'

function App() {
  return (
    <div className="d-flex justify-content-start align-items-center gap-5">
      <SideBar  />

      <Routes>
        <Route path="/" element={<YourInfo />} />
        {/* <Route path="/plan" element={<h1>Select Plan</h1>} />
        <Route path="/addons" element={<h1>Add-ons</h1>} />
        <Route path="/summary" element={<h1>Summary</h1>} /> */}
      </Routes>
    </div>
  )
}

export default App

