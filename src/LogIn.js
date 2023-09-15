import { useState } from "react"


export default function LogIn() {
    const [num, setNum] = useState("");
    const validNum = () => {
        return(
          num.length == 9
        )
    }
    
    return (
      <>
        <div className="login-container">
          <div>
            <h1>Welcome to telebirr Web</h1>
            <p>All-in-One </p>
          </div>
          <div> 
            <h2 className="login-text">Login</h2>
            <form>
              <label className="mobile">Mobile Number</label>
              <div className="input-container">
                  <span className="prefix">+251</span>
                  <input  type="number" placeholder="Enter Phone Number"  value={num} onChange={e => setNum(e.target.value)}></input>
              </div>
              <button className="btn-primary" type="submit" disabled={!validNum()}>Next</button>
              <p>Don't have an Account? <a href="#">Create New Account</a></p>
              </form>
          </div>
        </div>
        
        <div className="footer"><p>©️2023 Ethio telecom. All rights reserved</p></div>
      </>
        
    )
}