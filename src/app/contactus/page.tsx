import React from 'react'
import "../contactus/contact.css"
const page = () => {
  return (
    <div className='contact'>
      <h1>Contact us </h1>
      <h3>For contacting us you can give details below</h3>
      <br />
      <fieldset className='personal'>
        <legend className='info'>personal information</legend>
        <label htmlFor="name" className='tex'>name:</label>
        <input type="text" />
        <br />
        <label htmlFor="phone" className='tex'>phone:</label>
        <input type='text'/>
        <br />
        <label htmlFor='email' className='tex'>e-mail:</label>
        <input type="text" />
      </fieldset>
      <fieldset className='personal'>
        <legend className='info'>How may I help you?</legend>
        <label htmlFor="work" className='tex'>what work can I do for you? </label>
        <input type="text" /> <br />
        <button className='but'><a href="https://www.facebook.com/ana.asghar.9"></a> contact here</button>
      </fieldset>
    </div>
  )
}

export default page
