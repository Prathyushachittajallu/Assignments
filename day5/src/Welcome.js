import React ,{ Component } from 'react'
import './Welcome.css'
class Welcome extends Component{
    render(){
        return(
            <div className='cs'>
                <h1><center>WELCOME!</center></h1>
                <br/>
                <div className='sa'>
                <h2>ALREADY REGISTERED</h2>
                <h2 className='tt'>NEW CUSTOMER</h2>
                </div>
               <br/>
               <div className='sa'>
                <input className='ss' placeholder='Email address'></input>
                <input className='ca' placeholder='Email address'></input>
              </div>
            <br/>
            <div className='sa'>
            <input className='ss'placeholder='Password'></input>
            <input className='ca' placeholder='Password'></input>
            </div>
            
            <label>I forgot password</label>
            <div className='sa'>
            
            <button className='cn'>SIGN IN</button>
            <button className='ps' >CREATE ACCOUNT</button>
            </div>
            <br/>
            <label class="container"><input type="radio" name="radio" checked></input>Remember</label>
           

            
            

            </div>
                
                
                
            
        )
    }
}
export default Welcome;