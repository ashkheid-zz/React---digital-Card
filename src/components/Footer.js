import React from 'react';
import Twitter from '../images/icons/Twitter.png';
import Facebook from '../images/icons/Facebook.png';
import Instagram from '../images/icons/Instagram.png';
import GitHub from '../images/icons/GitHub.png';

export default function Footer() {
  return (
    <footer className="card__footer">
      <a className="card__footer--link" href="https://twitter.com/AshkHeid">
        <img
          src={Twitter}
          alt="twitter"
          title="Twitter Account"
          className="card_footer--icon"
        />
      </a>
      <a className="card__footer--link" href="https://www.facebook.com/ashkan.heidaryfazel.75">
        <img
          src={Facebook}
          alt="facebook"
          title="Facebook Account"
          className="card_footer--icon"
        />
      </a>
      <a className="card__footer--link" href="https://www.instagram.com/ashk.heid/">
        <img
          src={Instagram}
          alt="instagram"
          title="Instagram Account"
          className="card_footer--icon"
        />
      </a>
      <a className="card__footer--link" href="https://github.com/ashkheid">
        <img
          src={GitHub}
          alt="github"
          title="Github Account"
          className="card_footer--icon"
        />
      </a>
    </footer>
  );
}
