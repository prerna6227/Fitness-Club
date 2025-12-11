
import React from "react";
import "./Style.css";

const Footer = ({ year, author }) => {
  return (
    <footer className="footer">
      <p>
        Copyright © {year} All Rights Reserved | This template is made with ❤️
        by <span className="author">{author}</span>
      </p>
    </footer>
  );
};

export default Footer;

