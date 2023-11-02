import { useState } from 'react'
import './App.scss'
import Mode from './components/Mode'
import WeatherApp from './components/Weather'


function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = (value) => {
    setMode(value)
  }

  return (
    <div className={mode}>
      <Mode onToggle={toggleMode}/>
      <WeatherApp/>
    </div>
  )
}

export default App

