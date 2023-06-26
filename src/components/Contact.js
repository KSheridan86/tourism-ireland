import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div class="contact-page d-flex flex-column p-3">
      <div className="contact border rounded p-2">
        <p>
          This site was built by ChimpTech Web Design. 
          If you would like to get in touch with us, please email us 
          <a className="email" href="mailto: kensheridan86@gmail.com"> HERE</a>
        </p>  
        <div>You can check out our other work on our website 
          <a href="https://www.chimptech.ie" target="_blank" rel="noreferrer"> ChimpTech.ie</a>

          <FontAwesomeIcon icon={faCoffee} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faGithub} />

        </div>

      </div>
    </div>
  );
};

export default Contact;