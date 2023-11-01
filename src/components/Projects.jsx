import React, { useState }  from 'react';
import ProjectCard from './ProjectCard';
import '../styles/projects.css';

import deepfake from '../assets/projects/deepfake.png';
import hubble from '../assets/projects/hubble.png';
import murmur from '../assets/projects/murmur.png';
import mwd from '../assets/projects/mwd.png';
import opticdisc1 from '../assets/projects/opticdisc1.png';
import scania from '../assets/projects/scania.png';
import sdss from '../assets/projects/sdss.png';
import signature from '../assets/projects/signature.png';
import ahsl from '../assets/projects/ahsl.png';
import drankle from '../assets/projects/drankle.png'
import omni from '../assets/projects/omni.png'
import VA from '../assets/projects/VA.png'


const Projects = () => {
    const projectsData = [
        {
          title: "Vision Assitance",
          description: "Winner of  Vision Assistance Cybathlon ETH Zurich",
          image: VA,
          buttonLabel: "Link",
          buttonLink: "https://itk.ppke.hu/news-97/pazmany-itk-s-team-won-the-cybathlon-vis-challenge"
        },
        {
          title: "Dr. Ankle",
          description: "An auto labelling ankle fracture application with Faster RCNN and Grad-CAM",
          image: drankle, 
          buttonLabel: "No Link",
          buttonLink: ""
        },
        {
          title: "Deepfake Detection",
          description: "School group project of detecting deep fake images using various ensemble classifiers",
          image: deepfake, 
          buttonLabel: "GitHub",
          buttonLink: "https://github.com/subhamshome/deepfake-detection"
        },
        {
          title: "Signature Recognition",
          description: "School group project of recognising signatures and measuring the truth behind every one of them using feature analysis",
          image: signature, 
          buttonLabel: "GitHub",
          buttonLink: "https://github.com/subhamshome/signature-recognition"
        },
        {
          title: "Heart Murmur Classification",
          description: "Normal or abnormal heard prediction using murmur signals",
          image: murmur, 
          buttonLabel: "GitHub",
          buttonLink: "https://github.com/hyeonyu1/Murmurs-Classification"
        },
        {
          title: "Scania Trucks - Air Pressure Failure Prediction",
          description: "A classical machine learning algorithm based binary classification on the famous Scania APS dataset",
          image: scania, 
          buttonLabel: "GitHub",
          buttonLink: "https://github.com/hyeonyu1/Scania-Trucks---APS-Failure-Prediction"
        },
        {
          title: "Edmonton Housing Affordability Dashboard",
          description: "Dashboard made for University of Alberta's Affordable Housing Solutions Team using React and Django",
          image: ahsl, 
          buttonLabel: "Demo",
          buttonLink: "https://www.youtube.com/watch?v=v5cjcBJ-us4"
        },
        {
          title: "Omnifit Brain Force",
          description: "Mobile game using TypeScript and Angulaar CLI to help enhance concentraion by using EEG from Omnifit Brain.",
          image: omni, 
          buttonLabel: "GitHub",
          buttonLink: "https://github.com/hyeonyu1/omnifit_brain_force"
        },
 
    ];
      
    const [visibleProjects, setVisibleProjects] = useState(3);

    // const showMoreProjects = () => {
    //     setVisibleProjects(visibleProjects + 3);
    // };

    const showLessProjects = () => {
        setVisibleProjects(3);
    };

    const showAllProjects = () => {
        setVisibleProjects(projectsData.length);
      };


    return (
        <div>
          <div className='project-cards'>
            {projectsData.slice(0, visibleProjects).map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                buttonLabel={project.buttonLabel}
                buttonLink={project.buttonLink}
              />
            ))}
          </div>
          <div className='view-buttons'>
            {visibleProjects < projectsData.length ? (
              <button onClick={showAllProjects} className="view-more-button">
                Show All {projectsData.length} projects
              </button>
            ) : (
              <button onClick={showLessProjects} className="view-more-button">
                Show Less
              </button>
            )}
          </div>
        </div>
      );
}

export default Projects;