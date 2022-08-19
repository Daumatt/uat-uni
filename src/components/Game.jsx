import React from 'react'
import './Game.css';
import logo from '../pix/Logo.jpeg'


function Game() {
  return (
    
    <div> 
      <div className='rit'>
        <div>
            <img className='logo' src={logo} alt="logo" />
        </div>
        <h1>
          ITF NECA TRAINING
        </h1>
        <h4>Students Log In Portal</h4>
        <p>Please fill in your correct details</p>
        <p>Username:<input type="text" placeholder='Ebitare@gmail.com' /></p>
        <p>Password:<input type="text" placeholder='' /></p>
      </div>
      <div>
        <a href="https://www.google.com"><button input type='text' > Submit</button></a>
         &nbsp; &nbsp;
         <a href="https://www.gmail.com"><button input type='text'>Register</button></a>
        </div>
        <hr />
        <footer>
            <div>
                &copy; <span> Copyright; Martins Daubry</span>
            </div>
            <div>
                <span>Yedimatt Online Services</span>
            </div>
            <div>
                <span>Advertisments   Products   Services   Terms and Condition</span>
            </div>
        </footer>
    </div> 
  )
}

export default Game