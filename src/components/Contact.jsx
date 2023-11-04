import React from 'react';
import '../styles/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

   const phone = [<p>+33 605908479</p>];

   const address = [<p>351 Cr de la Libération, 33400 Talence, France</p>];
   
   const email = [<a href="mailto:uhre123@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-links">
      <p>uhre123@gmail.com</p>
   </a>];
   

   const linkedin = [<a href="https://linkedin.com/in/subhamshome" target="_blank" rel="noopener noreferrer" className="contact-links">
      <p>LinkedIn</p>
   </a>];

   return(
      <div className='contact-div-main'>
            <div className='contact-grid'>
               <div className='contact-text'>
                  <div>
                     <div className='contact-item'>
                        <FontAwesomeIcon icon={faLocationDot} />{address}
                     </div>
                     <div className='contact-item'>
                        <FontAwesomeIcon icon={faPhone} />{phone}
                     </div>
                     <div className='contact-item'>
                        <FontAwesomeIcon icon={faEnvelope} />{email}
                     </div>
                     <div className='contact-item'>
                        <FontAwesomeIcon icon={faLinkedin} />{linkedin}
                     </div>
                     
                  </div>
               </div>
               <div className='contact-grid-2'>
                  <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1203.859302909952!2d-0.5977977917209456!3d44.8076819614409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527da47d49b75%3A0x156b085bab276ab9!2sColl%C3%A8ge%20Sciences%20et%20Technologies%20-%20Universit%C3%A9%20de%20Bordeaux!5e0!3m2!1sen!2sfr!4v1698165473822!5m2!1sen!2sfr" 
                  width="600" 
                  height="450" 
                  style={{border:'2px solid black', margin: '5%'}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  title="Google Maps UBx Science & Technology"
                  referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                  
               </div>
               

            </div>

     </div>
   )
};
   
export default Contact;