import { useState } from "react"
import PhoneNumberInput from "./PhoneNumberInput";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Register from "./Register";


export default function LogIn() {
    const [num, setNum] = useState("");
    const validNum = () => {
        return(
          num.length === 9
        )
    }

    const handleChange = e => setNum(e.target.value)
    
    return (
      <> 
            <h2 className="login-text">Login</h2>
            <form>
              <label className="mobile">Mobile Number</label>
              <PhoneNumberInput num={num} handleChange = {handleChange}/>
              <button className="btn-primary" type="submit" disabled={!validNum()}>Next</button>
              <p>Don't have an Account? <Link className="link" to='/register'>Create an Account</Link></p>
              <Routes>
                <Route path='/register' element={Register} />
              </Routes>
              </form>
      </>
        
    )
}