import React from 'react';
import { Link } from 'react-router-dom';
import links from '../archive/links';

const Header = () => (
  <header className="header">
    <h1 className="emoji-lg">
      <span role="img" aria-label="Party Popper">
        &#127881;
      </span>
    </h1>
    <h2>
      <Link to="/" className="title title-2 rainbow-text link-delay">
        <span className="title-piece">#FrontEnd</span>
        <span className="title-piece">Party</span>
      </Link>
    </h2>
    <p className="title-4">
      A monthly&nbsp;
      <a
        href={links.meetup}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Check out our Meetup page"
        className="link-delay rainbow-text"
      >
        meetup
      </a>
      &nbsp;in <strong>New Orleans</strong>
      <br />
      for <strong>front-end developers</strong> and{' '}
      <strong>designer professionals</strong>
    </p>
    <p className="title-4">
      Every <strong>second Tuesday</strong> hosted at&nbsp;<a
        href="https://www.google.com/maps?client=firefox-b-1-d&output=search&q=scale+new+orleans&entry=mc&sa=X&ved=2ahUKEwiwl-y_5M__AhUAm2oFHSY_Aq4Q0pQJegQIBBAB"
        target="_blank"
        rel="noopener noreferrer"
        className="link-delay rainbow-text"
        ><strong>Scale New Orleans</strong></a> inside the Taylor Education Center.
    </p>
  </header>
);

export default Header;