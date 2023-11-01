import React from 'react';
import '../styles/home.css';
import AcademicBar from './AcademicBar';
// import introImage from '../assets/introImage.png';
import introImage from '../assets/introImage.jpeg';

import Skills from './Skills';
import Projects from './Projects';
import Timeline from "./Timeline";
import Awards from './Awards';
import ResearchCard from './ResearchCard';
import Contact from './Contact';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {

        const heroText = [
                <div>
                        Image Processing and Computer Vision (M.S.) Student

                        <div >

                        <p> 

                        <TypeAnimation
                                sequence={[
                                // Same substring at the start will only be typed once, initially
                                'Hello! I am a developer 🖥',
                                2500,
                                'Hello! I am a data scientist 📊',
                                2500,
                                'Hello! I am comptuer vision enthusiast 👁️',
                                2500,
                                'Hello! I am a Masters student 🤓',
                                2500,
                                ]}
                                speed={50}
                                style={{ fontSize: '2em' }}
                                repeat={Infinity}
                        />
                        </p>

                        </div>
                                <div className='academic-hero'>
                                <AcademicBar className='academic-hero' />
                        </div>                        
                </div>
        ];

        const introText = [
                <p style={{marginLeft: '10%', marginRight: 0}}>
                        I am currently a 100% IPCV Excellence Scholarship holder in my second year of 
                        a Triple Master Image Processing and Computer Vision (IPCV). My interest in image processing 
                        and computer vision began with a course taken in my bachlor's degree. 
                        I was immediately captivated by the potential and the posibilities of making a positive impact on the world. 
                </p>
        ];

 return (
    <div className='main-div-home'>
        <div id='home'>
                <div className='hero'>
                        {/* <HeroImage /> */}
                        <h1>Hyeon Yu</h1>
                        {heroText}
                </div>
        </div>

        <div id='about' className='sections-home'/>                            
        <div className='about'>
                <h1 className='home-headers'>Introduction</h1>
                <div className='intro-grid'>
                        <div className='intro-img-container'>
                                <img src={introImage} alt='self-intro' className='intro-image'/>
                        </div>
                        <div className='intro-text-container'>
                                {introText}  
                        </div>
                </div>
                <h3>Research Interests</h3>
                <div className='research-card-section'>
                <ResearchCard title="Image Processing" />
                <ResearchCard title="Computer Vision" />
                <ResearchCard title="Deep Learning" />
                <ResearchCard title="Medical Imaging" />
                <ResearchCard title="Biometrics" />
                <ResearchCard title="AR and VR" />
                </div>
        </div>

        <div id='skills' className='sections-home'/>                            
        <div className='skills-main'>
                <h1 className='home-headers'>Technical Expertise</h1>
                <Skills />
        </div>

        <div id='timeline' className='sections-home'/>                            
        <div className='timeline-main'>
                
        <h1 className='home-headers'>My journey so far</h1>
        <Timeline
                mode="VERTICAL_ALTERNATING"
                theme={{
                primaryColor: "#000000",
                secondaryColor: "#ffffff",
                }}
        />
        </div>

        <div id='projects' className='sections-home'/>                            
        <div>
                <h1 className='home-headers'>Projects</h1>
                <div className='projects-main'>
                        <Projects />
                </div>
                
                
        </div>

        <div id='awards' className='sections-home'/>                            
        <div className='awards-main'>
                <h1 className='home-headers'>Honors and Awards</h1>
                <Awards />
        </div>

        <div id='contact' className='sections-home'/>                            
        <div className='contact-main'>
                <h1 className='home-headers'>Contact me</h1>
                <Contact />
        </div>
    </div>
 ) 
};

export default Home;