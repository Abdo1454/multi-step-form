import { Routes, Route } from 'react-router-dom'
import SideBar from './components/SideBar/SideBar'
import YourInfo from './components/YourInfo/YourInfo'
import SelectPlan from './components/SelectPlan/SelectPlan'
import AddOns from './components/AddOns/AddOns'

function App() {
  return (
    <div className="d-flex justify-content-start align-items-center gap-5">
      <SideBar  />

      <Routes>
        <Route path="/" element={<YourInfo />} />
        <Route path="/plan" element={<SelectPlan />} />
        <Route path="/addons" element={<AddOns />} />
        {/* <Route path="/summary" element={<h1>Summary</h1>} /> */}
      </Routes>
    </div>
  )
}

export default App

