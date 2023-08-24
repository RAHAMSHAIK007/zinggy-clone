import './Register.css'
import{Link} from'react-router-dom'

const RegisterPage=()=>{
    return(
        <div className='register-container'>
            <div className='Register-main-div-container'>
            
            <form >
               <fieldset className='Register-form-control'>
                <legend>Sign Up</legend>
                <label>Enter Mobile Number:</label>
                <input type="text" pattern="[6-9]{1}[0-9]{9}" required/>
                <label>Enter OTP:</label>
                <input type='text' placeholder='Enter Here'/>
                <button className='rig-btn-container' type='submit'>Submit</button>
                <span>If you already registered?/ <Link to="/loginlink">Login Here</Link></span>
                </fieldset>
            </form>
           
            
        </div>
        </div>
    )
}
export default RegisterPage;