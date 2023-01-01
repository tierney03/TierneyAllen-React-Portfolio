import React, { useState } from "react";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { RiMailLine } from "react-icons/ri";

function Footer() {
  return (
    <div id="footer">
      <h3>
        <a href="https://github.com/tierney03" target="_blank">
          <SiGithub />
        </a>
      </h3>
      <h3>
        <a href="https://www.linkedin.com/in/tierney-allen/" target="_blank">
          <SiLinkedin />
        </a>
      </h3>
      <h3>
        <a href="mailto:tierney_03@mac.com" target="_blank">
          <RiMailLine />
        </a>
      </h3>
    </div>
  );
}

export default Footer;
