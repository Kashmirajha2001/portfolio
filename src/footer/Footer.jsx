import React from 'react'
import "./footer.css";
import Social from './Social';

const Footer = () => {
  return (
    <section className='footer' id='footer'>
        <h2>_Kashmira Jha_</h2>
        <Social/>
        <p className='copywrite'>&copy;Copyright 2023</p>
    </section>

  )
}

export default Footer