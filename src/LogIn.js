export default function LogIn() {
    return (
      <>
        <div className="login-container">
          <div>
            <h1>Welcome to telebirr Web</h1>
            <p>All-in-One</p>
          </div>
          <div>
            <h2 className="login-text">Login</h2>
            <form>
              <label className="mobile">Mobile Number</label>
              <div className="input-container">
                  <span className="prefix">+251</span>
                  <input  type="number" placeholder="Enter Phone Number"></input>
              </div>
              <button className="btn-primary" type="submit">Next</button>
              <p>Don't have an Account? <a href="#">Create New Account</a></p>
              </form>
          </div>
        </div>
        
        <div className="footer"><p>©️2023 Ethio telecom. All rights reserved</p></div>
      </>
        
    )
}