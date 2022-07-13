import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './resume.pdf'
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from 'framer-motion';
const Services = () => {
  const transition = {duration : 2, type: 'spring'}
  const theme = useContext(themeContext);
  const darkMode =theme.state.darkMode;
  return (
    <div className="services" id='Services'>
        {/* left */}
        <div className="awesome">
            <span style={{color: darkMode? 'white': ''}}>My</span>
            <span>Services</span>
            <spane>To earn the respect (and eventually love) of your customers,
                <br /> you first have to respect those customers</spane>
            <a href={Resume} download>
            <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
        </div>
        {/* right */}
        <div className="cards">
          <motion.div
          whileInView = {{left: '23rem'}}
          initial={{left: '29rem'}}
          transition={transition}
          style={{left:'23rem'}}>
            <Card
            emoji = {HeartEmoji}
            heading = {'Design'}
            detail = {"Figma, Sketch, photoshop,adobe,adobe xd"}
           />
          </motion.div>
          
          <motion.div 
          whileInView = {{left: '4rem'}}
          initial={{left: '29rem'}}
          transition={transition}
          style={{top:"12rem" , left:'4rem'}}>
            <Card
            emoji = {Glasses}
            heading = {'Developer'}
            detail = {"Html, Css , JavScript, React"}
           />
          </motion.div>
          
          <motion.div 
          whileInView = {{left: '20rem'}}
          initial={{left: '29rem'}}
          transition={transition}
          style={{top:"19rem" , left:'20rem'}}>
            <Card
            emoji = {Humble}
            heading = {'UI/UX'}
            detail = {"tbgahsgdasdjhabsjdbasdb"}
           />
          </motion.div>

          <div className="blur s-blur2" style={{background: "var(--purple)"}}>
            
          </div>
        </div>
    </div>
  )
}

export default Services