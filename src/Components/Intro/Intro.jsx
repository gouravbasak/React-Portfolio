import React from "react"
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy2 from '../../img/boy2.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Intro = () =>{
    const transition = {duration : 2, type: 'spring'}
    const theme = useContext(themeContext);
    const darkMode =theme.state.darkMode;
    return(
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{color: darkMode? 'white' :''}}>Hey! I am</span>
                    <span>Gourav Basak</span>
                    <span>A Pro-grammer with high level of  Problem solving knowledge </span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <a href="https://github.com/gouravbasak" target="blank"><img src={Github} alt=""/></a>

                    <a href="https://www.linkedin.com/in/gourav-basak-7728ba192/"target="blank"><img src={LinkedIn} alt=""/></a>
                    
                    <a href="https://www.instagram.com/gourav_06_/"target="blank"><img src={Instagram} alt=""/></a>
                    
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy2} alt="" />
                <motion.img
                initial = {{left: '-36%'}}
                whileInView = {{left: '-24%'}}
                transition = {transition}
                src={glassesimoji}
                alt="" />

                <motion.div
                initial={{top:"-4%",left:"74%"}}
                whileInView = {{left: '68%'}}
                transition = {transition}
                style={{top: '-4%', left: '68%'}}
                className='floating-div'
                >
                    <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
                </motion.div>

                <motion.div 
                initial={{top:"18rem",left:"9rem"}}
                whileInView = {{left: '0rem'}}
                transition = {transition}
                style={{top: '18rem', left: '0rem'}}
                className='floating-div'>
                    <FloatingDiv image={thumbup} txt1='Android' txt2='Developer'/>
                </motion.div>

                <div className="blur"style={{background: "rgb(238 210 255)"}}></div>
                <div className="blur"
                style={{
                    background: "#C1F5FF",
                    top:'17rem',
                    width: '21rem',
                    height:'11rem',
                    left: '-9rem'
                }}></div>
            </div>
        </div>
    )
}

export default Intro
