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
        href="https://www.google.com/maps/place/The+Shop+At+the+CAC/@29.9435272,-90.0707523,17z/data=!3m1!4b1!4m6!3m5!1s0x8620a676c8155555:0xb336121282dc7834!8m2!3d29.9435272!4d-90.0707523!16s%2Fg%2F11f3hcp872?hl=en&entry=ttu"
        target="_blank"
        rel="noopener noreferrer"
        className="link-delay rainbow-text"
        ><strong>The Shop at the CAC</strong></a>.
    </p>
  </header>
);

export default Header;