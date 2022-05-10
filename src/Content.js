import React from 'react'
import img2 from './images/icon-music.svg'
import './Content.css'
import { useState } from 'react'

const Content = () => {
  let [text1, setText1] = useState('Annual Plan')
  let [text2, setText2] = useState('$59.99/year')

  function textChanger() {
    setText1('Monthly Plan')
    setText2('$49.99/month')
}

  return (
    <div className='container'>
        <h4 className='mt-3'>Order Summary</h4>
        <small>You can now listen to millions of songs, audiobooks and podcasts on any device anywhere u like.</small>

        <div className='box2 row mt-3'>
            <div className='col-3 mt-3'>
            <img src={img2} alt="" width={30} />
            </div>
            <div className='col-5'>
              <small><b>{text1}</b></small>  
              <p><small>{text2}</small></p>
            </div>
            <div className='col-3 mt-3'>
            <a href="#" onClick={textChanger}>Change</a>
            </div>
        </div>

        {/* <div className='box2 grid'>
          <div><img src={img2} alt="" width={30} /></div>
          <div><p>Annual plan</p></div>
          <div><a href="">Change</a></div>
        </div> */}

        <div className='mt-3'>
          <a href="" className='btn btn-primary btn-size'>Proceed To Payment</a>
        </div>

        <div className='mt-4' ><a href="" className='text-decoration-none text-dark'>Cancel Order</a></div>
    </div>
  )
}

export default Content