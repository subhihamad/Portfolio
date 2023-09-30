import React, { useEffect, useState } from 'react'
import logoTitle from '../../assets/images/logo-s.png'
import './home.scss'
import { Link } from 'react-router-dom'
import {AnimitedLetters , Logo} from '../../components'
import Loader from 'react-loaders'
const Home = () => {
  const [letterClass , setLetterClass]=useState("text-animate");
  const nameArray=['u','b','h','i'];
  const jobArray=['w','e','b',' ','d','e','v','e','l','o','p','e','r'];

  useEffect(()=>{
    setTimeout(()=>{
      setLetterClass('text-animate-hover')
    },4000)
  },[])

  return (
    <>
    <div className='container home-page'>
        <div className='text-zone'>
            <h1> 
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>'i</span>
              <br/>
              <span className={`${letterClass} _12`}>I</span>
              <span className={`${letterClass} _12`}>'m</span>
            <img src={logoTitle} alt='logo' />
            <AnimitedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
            <br />
            <AnimitedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
            </h1>
            <br />
            <h2>Frontend Developer / ReactJs</h2>
            <Link  to='/contact' className='flat-button' >CONTACT ME</Link>
        </div>
        <Logo />
    </div>
    </>
  )
}

export default Home