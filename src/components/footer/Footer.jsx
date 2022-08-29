import "./footer.css";
import logo from "../../assets/img/logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram, GrLinkedinOption } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <div className="box-footer">
      <div className="footer container">
        <div className="logo">
          <a className="navbar-brand" href="#logo">
            <img src={logo} alt="..." />
          </a>
        </div>
        <div className="copyright">
          <ul className="list-unstyled">
            <li className="nav-item">
              <a
                className="nav-link icon"
                href="https://www.facebook.com/mayar.ja.58/"
              >
                <FaFacebookF />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link icon" href="https://github.com/mayarja">
                <AiFillGithub />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link icon" href="Projects">
                <GrLinkedinOption />
              </a>
            </li>
          </ul>
          <p>Copyright 2022.All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
