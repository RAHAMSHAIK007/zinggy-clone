
import './Loginpage.css'
import {Link} from 'react-router-dom'
const Loginpage=()=>{
    return(
        <>
            <div className='loginform-login-container'>
               
                <form >
                <h3><center>Login Page</center></h3>
                <fieldset className='form-control-container'>
                    <label for="name">Name:</label>
                    <input type="text" id="name" required placeholder='John'  />
                    <label for="sur">SurName:</label>
                    <input type="text" id="sur" required placeholder='Joe' />
                    <label for="email">Email:</label>
                    <input type="text" id="email"  placeholder='John@gmail.com'/>
                    <label for="password">Password</label>
                    <input type="password" id="password" required placeholder="John@123"/>
                    <div className='login-dob-contain'>
                    <label for="birthday">Date-Of-Birth:</label>
                    <input type="date" id="birthday" placeholder='00-00-0000' required/>
                    </div>
                    <label>Gender:</label>
                    <div className='gender-conntainer' > 
                    <input type="radio" id="male" name="gender" />
                    <label for="male">Male</label >
                    <input type="radio" name="gender" id="female" />
                    <label for="female">Female</label> 
                    </div>
                    <button className='login-btn' type='submit'>Submit</button>

                    <span style={{marginTop:"20px",fontSize:"15px" }}>If don't have account?
                    <Link to='/registerlink'>/Regisiter Here</Link></span>
                    </fieldset>
                </form>
                
            </div>
        </>
    )
}
export default Loginpage;