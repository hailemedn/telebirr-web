import LogIn from "./LogIn";
import Register from "./Register";

export default function LoginAndSignupContainer() {
    
    
    return (
      <>
        <div className="login-container">
        
          <div> 
            <h1>Welcome to telebirr Web</h1>
            <p>All-in-One </p>
          </div>
          <div> 
            <LogIn />
            {/* <Register /> */}
          </div>
        </div>
        
        <div className="footer"><p>©️2023 Ethio telecom. All rights reserved</p></div>
      </>
        
    )
}

