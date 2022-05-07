import React from 'react';
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-div">
      <footer>
        <ul>
          <a href="https://github.com/carolpang17" target="blank">
            <li>
              <FaGithub />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/carolpang-222/" target="blank">
            <li>
              <FaLinkedin />
            </li>
          </a>
					<a href="https://twitter.com/carol82198406" target="blank">
            <li>
              <FaTwitterSquare />
            </li>
          </a>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;