import { useTheme } from "../ThemeContext";
import './Styles.css'
const Switch = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <label className="switch">
            <input 
                type="checkbox" 
                checked={theme==="dark"} 
                onChange={toggleTheme}>
            
            </input>
            <span className="slider round"/>
        </label>
    )
}

export default Switch;