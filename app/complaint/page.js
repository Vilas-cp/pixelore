import React from 'react'
import  "../complaint/hello.css"
import Header from '../components/Header'

function Page() {

  return (
    <div>
        <Header/>
        <div className="containery">
        <h4 className='text-white'>Whistleblower Report Form</h4>
        <form id="reportForm">
            <label for="name" className='text-white '>Name:</label>
            <input type="text" id="name" name="name" required className='text-black'/>

            <label for="complaint" className='text-white'>Complaint:</label>
            <textarea id="complaint" name="complaint" rows="4" required className='text-black'></textarea>

            <button type="submit" className='howdy'>Submit Report</button>
        </form>
    </div>

    </div>
  )
}

export default Page;