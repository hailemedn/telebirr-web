
import { useState } from "react";


function PhoneNumberInput(props) {
  return (
      <div className="input-container">
                <span className="prefix">+251</span>
                <input  
                  type="number" 
                  placeholder="Enter Phone Number"  
                  value={props.num} 
                  onChange={props.handleChange}></input>
            </div>
  )
}

function LogIn() {
  const [num, setNum] = useState("");
  const validNum = () => {
      return(
        num.length === 9
      )
  }

  const handleChange = e => setNum(e.target.value)
  
  return (
    <div className="container">
          <h2 className="login-text">Login</h2>
          <form>
            <label className="mobile">Mobile Number</label>
            <PhoneNumberInput num={num} handleChange = {handleChange}/>
            <button className="btn-primary" type="submit" disabled={!validNum()}>Next</button>
          </form>
    </div>
      
  )
}

function Register() {
  return (
      <div className="container">
          <h1 className="login-text">Register</h1>
          <PhoneNumberInput />
          <VerificationInput />
      </div>
      
  )
}

function VerificationInput() {
  return (
    <div>
        <div className="input-container">
          <input  
                  type="number" 
                  placeholder="Enter Code"  
          >
  
          </input>
      </div>
      <button>Get Code</button>
    </div>
      
  )
}




export default function LoginAndSignupContainer() {
    
    const [togglePages, setTogglePages] = useState(true)
    const toSignup = <p>Don't have an Account? <a  onClick={()=> setTogglePages(!togglePages)}>Create an Account</a></p>
    
    
    const toLogin =  <p><a onClick={() => setTogglePages(!togglePages)}>Back to Login</a></p>
    
    return (
      <>
        <div className="login-container">
        
          <div> 
            <h1>Welcome to telebirr Web</h1>
            <p>All-in-One </p>
          </div>
          <div> 
            {togglePages ? <LogIn /> : <Register />}
            {togglePages ? toSignup : toLogin}
            
          </div>
        </div>
        
        <div className="footer"><p>©️2023 Ethio telecom. All rights reserved</p></div>
      </>
        
    )
}

