import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div class="container-fluid contact-page p-3">
      <div className="row justify-content-center">
        <div className="contact p-2 col-10 col-lg-6 text-center">
          <h1>This site was built by Chimp Tech Web Design.</h1>
          <img src="/images/chimp-tech.png" alt="Ireland" className="mb-4" />
          <h3>
            If you would like to get in touch with us, please email us 
            <a className="email" href="mailto: bobthewind420@gmail.com"> HERE</a>
          </h3>  
          <h4>You can check out our work on our website 
            <a className="email" href="https://www.chimptech.ie" target="_blank" rel="noreferrer"> ChimpTech.ie</a>
          </h4>
          <div className="mt-3">
            <h4 className="mb-3">Follow our socials here:</h4>
            <a className="m-3 fs-1" href="https://www.linkedin.com/in/kensheridan86/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a className="m-3 fs-1" href="https://github.com/KSheridan86/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className="m-3 fs-1" href="https://www.instagram.com/chimptechwebdev/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="m-3 fs-1" href="https://twitter.com/ChimpTechWebDev?s=03" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;