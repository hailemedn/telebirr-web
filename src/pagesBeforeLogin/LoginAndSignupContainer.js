import LogIn from "./LogIn";
import Register from "./Register";
import { useState } from "react";



export default function LoginAndSignupContainer() {
    
    const [togglePages, setTogglePages] = useState(true)
    const toSignup = <p>Don't have an Account? <a onClick={()=> setTogglePages(!togglePages)}>Create an Account</a></p>
    
    
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

