import { useState } from "react"
import './App.css'


function App() {
  const [backgroundColor, setBackgroundColor] = useState('')

  const handleChange = (event) => {
    // console.log(event.target.value);
    setBackgroundColor(event.target.value)
  }


  return (
    <div className="app" style={{backgroundColor}}>
      <span>Selecciona un color:</span>
      <input 
      type="text"
      onChange = {handleChange}
      placeholder="#FF000" />
    </div>
  )
}

export default App


