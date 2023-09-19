import logo1 from './Assets/ethiotelecom-logo.png'
import logo2 from './Assets/Telebirr-logo.png'
import Switch from './switch/index.js'

export default function Header() {
    return (
        <div className='header-container'>
            <img src={logo1} alt="ethiotelecom-logo"></img>
            <img src={logo2} alt="telebirr-logo"></img>
            <Switch></Switch>
        </div>
    )
}