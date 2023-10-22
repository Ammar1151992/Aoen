import React, { useState } from 'react'

export const Form = ({addList}) => {
    const [value, setValue] = useState("")
    const submitForm = e => {
      e.preventDefault();

       if (value === '') {
        
       } else{

      
        addList(value);

        setValue("")
      }
    }
  return (
    <form className='form' onSubmit={submitForm}>
      <input type="text" className='form-input' value={value} placeholder='Text Your Idea' onChange={(e) => setValue(e.target.value)}/>
      <button type='submit' className='form-btn'>Add Idea</button>
    </form>
  )
}


