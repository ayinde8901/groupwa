import React from 'react'

const Contact = () => {
  return (
    <div style={{display:'grid', justifyContent:'center', alignItems:'center', margin:'15px 0 '}}>
      <h2>Contact Support</h2>
      <div className='border'>
        <h3>Messages</h3>
        <hr/>
        <h6 style={{marginTop:'2px'}}>Help</h6>
      </div>
      <div className='border'>
        <h6>Contact Support</h6>
        <h6>we typically reply in under a minute</h6>
      </div>
    </div>
  )
}

export default Contact
