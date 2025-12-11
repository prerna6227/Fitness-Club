
import React, { useState } from 'react';


const Navbar = () => {
  const [Mobile, setMobile] = useState(false);

  return (
    <nav className="navbar">
      <h3 className="logo">Yogalife</h3>
      <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
        <li><a href="/">Home</a></li>
        <li><a href="/">Yoga Classes</a></li>
        <li><a href="/">Events</a></li>
        <li><a href="/">About Studio</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
        {Mobile ? <>&#x2715;</> : <>&#9776;</>}
      </button>
    </nav>
  );
};

export default Navbar;
