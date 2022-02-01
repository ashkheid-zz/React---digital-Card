import React from 'react';
import ashkanImage from '../images/ashkan-heidaryfazel.jpg';
import emailIcon from '../images/icons/Mail.png';
import linkedInIcon from '../images/icons/linkedin.png';

export default function Info() {
  return (
    <header className="card__header">
      <img
        className="card-header__image"
        src={ashkanImage}
        alt=""
      />
      <div className="card-header__content">
        <h1 className="card-header__title">Ashkan Heidary Fazel</h1>
        <p className="card-header__subtitle">FrontEnd Developer</p>
        <a
          className="card-header__website"
          href="http://ashkanheidary.ir/"
          target="_blank"
          rel="noreferrer"
        >
          <small>ashkanheidary.ir</small>
        </a>
        <div className="card-header__contacts">
          <a
            className="card-header__contact btn"
            href="mailto:ashkanheidaryfazel@gmail.com"
          >
            <img
              className="card-header__contact--icon"
              src={emailIcon}
              alt=""
            />
            <p className="card-header__contact--title">Email</p>
          </a>
          <a className="card-header__contact btn btn-linkedin" href="https://www.linkedin.com/in/ashkanheidary/">
            <img
              className="card-header__contact--icon"
              src={linkedInIcon}
              alt=""
            />
            <p className="card-header__contact--title">LinkedIn</p>
          </a>
        </div>
      </div>
    </header>
  );
}
