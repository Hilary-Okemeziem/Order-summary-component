import React from 'react'
import './Main.css'
import img from './images/illustration-hero.svg'
import Content from './Content'

const Main = () => {
  return (
    <div>
        <div className='box'>
            <img src={img} className='img-fluid img1' alt="" />
            <Content/>
        </div>
    </div>
  )
}

export default Main