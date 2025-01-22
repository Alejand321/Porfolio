import React from "react";
import { FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <h4>AV &copy; {year} | Todos los Derechos Reservados.</h4>
      <div className="footerLinks">

      <a href="https://www.linkedin.com/in/alejandro-velloso-56674b2b8/" target="_blank">
          <FaLinkedin />
        </a>

        <a href="https://github.com/Alejand321" target="_blank">
          <FaGithub />
        </a>


        <a href="mailTo:work.vellosoalejandro02@gmail.com" target="_blank">
          <GrMail />
        </a>

        <a href="https://wa.me/595984337057" target="_blank" rel="noopener noreferrer"> 
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;