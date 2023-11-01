import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/academicbar.css';

const AcademicBar = () => {
  return (
    <div className="academic-bar">
      <a href="mailto:uhre123@gmail.com" target="_blank" rel="noopener noreferrer" className='email'>
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a href="https://www.linkedin.com/in/hyeon-yu-01942a1a1" target="_blank" rel="noopener noreferrer" className='linkedin'>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/hyeonyu1" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};

export default AcademicBar;
