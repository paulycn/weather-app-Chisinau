import { PiSunDim, PiMoon } from 'react-icons/pi';
import { useState } from 'react';

function Mode(props) {
    const [isDarkMode, setDarkMode] = useState(false)
    const toggleMode = ()=> {
        props.onToggle(!isDarkMode ? 'dark' : 'light')
        setDarkMode(!isDarkMode)
    }

    return (
        <>
        <div className="mode" onClick={toggleMode}>
            <div className="sun"> <PiSunDim/></div>
            <div className="moon"><PiMoon/></div>
        </div>
        </>
    )
}

export default Mode