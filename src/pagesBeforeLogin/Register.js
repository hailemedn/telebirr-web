import PhoneNumberInput from "./PhoneNumberInput"
import VerificationInput from "./VerificationInput"
import './style.css'
export default function Register() {
    return (
        <div className="container">
            <h1 className="login-text">Register</h1>
            <PhoneNumberInput />
            <VerificationInput />
        </div>
        
    )
}