import React, { useState } from 'react'
import '../css/contact.css'

export default function Contact() {
  const[inputValue,setInutValue] = useState();
  const[isError,setIsError] = useState(false)
  const[errorMessage,setErrorMessage] = useState();

  function isValidEmail(email) {
    // Regular expression pattern for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  function handleChange(e){
    setInutValue(e.target.value)
    isValidEmail(e.target.value)
  }
  function handleSubmit(event){
    event.preventDefault();
    if(inputValue === undefined || inputValue === ''){
      setIsError(true)
      setErrorMessage('please enter your email')
      return;
    }
    else if(!isValidEmail(inputValue)){
      setIsError(true)
      setErrorMessage('whoops! make sure it is email')
      return;
    }
    setIsError(false)
    setInutValue('')
    
  }
  return (
    <div className='contactContainer' id='contact'>
        <div className='contactMinCon'>
            <p>35,000+ already joined</p>
            <h2>Stay up-to-date with what we’re doing</h2>
            <form className='form' onSubmit={handleSubmit}>
                <div className='a'>
                   <input className={isError? 'errorInput': ''} type="text" placeholder='Enter your email address' onChange={handleChange} value={inputValue}/>
                    <p className='errorText' style={{display: isError? 'block': 'none'}}>{errorMessage}</p> 
                </div>
                
                <button type='submit'>contact us</button>
            </form>
        </div>
      
    </div>
  )
}
