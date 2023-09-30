import React, { useEffect } from 'react'
import './about.scss'
import { useState } from 'react'
import AnimitedLetters from '../AnimitedLetters/AnimitedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faSass } from '@fortawesome/free-brands-svg-icons'
const About = () => {
    const [letterClass , setLetterClass]=useState("text-animate");
    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass("text-animate-hover");
        },3000)
    })
  return (
    <>
    <div className='conatiner about-page'>
        <div className='text-zone'>
            <h1>
                <AnimitedLetters letterClass={letterClass} strArray={['A','b','o','u','t',' ','M','e']} idx={15}  />
            </h1>
            <p> I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
            </p>
            <p>I'm quiet confident, naturally curious, and perpetually working on
            improving my Self</p>
            <p> If I need to define myself in one sentence that would be a family person ,
            Popular , a sports fanatic,and tech-obsessed!!</p>
        </div>
        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faSass} color='#cc6699' />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About