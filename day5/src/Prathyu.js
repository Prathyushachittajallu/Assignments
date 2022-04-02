import React, { Component } from 'react'
import './Prathyu.css'

class Prathyu extends Component {
  render() {
    return (
      <div>
        <div class="card">

            <h2>CONTACT US</h2>
            <div className='move'>
              <lable>FirstName</lable>
              <label className='move1'>LastName</label>
                </div>
                <input placeholder='FirstName'></input>
              
              
                <input className='move2' placeholder='LastName'></input> 
              
              <br/>

              <div className='move'>
              <label>E-Mail</label> 
              <label className='move3'>BusinessPhone</label>
              </div>
               <input placeholder='E-Mail'></input>
                <input className='move2' placeholder='BussinessPhone'></input>

              <br/> 

                <div className='move'>
                <label>Company Name</label>
              <label className='move4'>Job title</label>
              </div>
               <input placeholder='Company Name'></input>
               <input className='move2' placeholder='Job title'></input> 

              <br/>


              <label>Street1</label><br/>
                <input className='move5' placeholder='Street1'></input> 

              <br/>

                 <div className='move'>         
                      <label>City</label> 
              <label className='move6'>State/Province</label>
              </div> 
               <input placeholder='City'></input> 
            <input className='move2' placeholder='State/Province'></input> 

              <br/>


                <div className='move'>
              <label>Zip/Postal Code</label>
              <label className='move7'>Country/Region</label>
              </div>
                <input placeholder='Zip/Postal Code'></input> 
            
                 <input className='move2' placeholder='Country/Region'></input> 

              <br/>
              <label>Topic</label><br/>
              
                <input className='move5' placeholder='Topic'></input> 
                </div>
             </div>
      
    )
  }
}

export default Prathyu