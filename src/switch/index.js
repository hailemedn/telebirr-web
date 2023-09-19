import { useTheme } from "../ThemeContext";

const Switch = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <input type="checkbox" checked={theme==="dark"} onChange={toggleTheme}></input>
    )
}

export default Switch;