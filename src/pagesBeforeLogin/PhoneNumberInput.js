export default function PhoneNumberInput(props) {
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