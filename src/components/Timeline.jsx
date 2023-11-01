import React from 'react';
import { Chrono } from 'react-chrono';
// import amity from '../assets/timeline/amity_logo.png';
import isi from '../assets/timeline/isi_logo.png';
import ipcv from '../assets/timeline/ipcv_logo.jpeg';
import tcs from '../assets/timeline/tcs_logo.jpg';
import ppcu from '../assets/timeline/ppcu_logo.png';
import uam from '../assets/timeline/uam_logo.jpg';
import ubx from '../assets/timeline/ubx_logo.png';
import mlv from '../assets/timeline/mlv.png'
import uofa from '../assets/timeline/uofa.png'
import basbai from '../assets/timeline/basbai.png'

import '../styles/timeline.css';



const entries = [
  {
    cardTitle: "IPCV Master Program Third Semester (UBx)",
    cardSubtitle: "Third semester of IPCV Masters program at the University of Bordeaux, France",
    cardDetailedText: "Deeper exploration of computer vision and programming.",
    date: "Fall 2023"
  },
  {
    cardTitle: "IPCV Master Program Second Semester (UAM)",
    cardSubtitle: "Second semester of IPCV Masters program at the Autonomous University of Madrid, Spain",
    cardDetailedText: "Exploration of various applications and theories of deep vision models and algorithms",
    date: "Winter 2023"
  },
  {
    cardTitle: "IPCV Master Program First Semester (PPCU)",
    cardSubtitle: "Start of the Masters program at Pazmany Peter Catholic University, Budapest, Hungary",
    cardDetailedText: "Exploration of various basic image processing and computer vision techniques and methods",
    date: "Fall 2022"
  },
  {
    cardTitle: "Research Lab Intern",
    cardSubtitle: "Internship at Korea University MLV Lab",
    cardDetailedText: "Worked closely with mentors to assist in their projects and recreated ViT",
    date: "Winter 2022"
  },
  {
    cardTitle: "AI Developeer Intern",
    cardSubtitle: "Internship desigining and implementing an auto labelling ankle fracture application at BasBai, Seoul, Korea",
    cardDetailedText: "Designed and implemented Dr. Ankle, an autolabelling ankle fracture application with Faster RCNN and Grad-CAM",
    date: "Summer 2021"
  },
  {
    cardTitle: "Introduction to Image Processing and Computer Vision",
    cardSubtitle: "Introduction to image processing and computer vision courses",
    cardDetailedText: "Ventured into the realms of computer vision, image processing, and AI",
    date: "Winter 2019"
  },
  {
    cardTitle: "BSc with Spcialization in Computing Science at UofA",
    cardSubtitle: "Start of undergraduate studies in computing science at University of Alberta, Canada",
    cardDetailedText: "Gained insight into programming languages, sofrware dvelopment, artificial intelligent, etc.",
    date: "Fall 2016"
  }
];


const Timeline = () => {
  return (
    <Chrono items={entries} 
    mode="VERTICAL_ALTERNATING" 
    slideShow={true} 
    hideControls={true} 
    slideItemDuration={4500}
    slideShowType="slide_from_sides" 
    // disableClickOnCircle={true} 
    allowDynamicUpdate={true}
    activeItemIndex={null}
    titleDateFormat='MMMM YYYY'
    scrollable
    // timelinePointShape={null}
    >
      <div className="chrono-icons">
        <img src={ubx} alt='UBx' />
        <img src={uam} alt='UAM' />
        <img src={ppcu} alt='PPCU' />
        <img src={mlv} alt='mlv' />
        <img src={basbai} alt='IPCV' />
        <img src={uofa} alt='UofA' />
        <img src={uofa} alt='UofA' />
      </div>
    </Chrono>
  );
};

export default Timeline;
