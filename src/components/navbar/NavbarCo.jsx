import "./navbar.css";
import logo from "../../assets/img/logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram, GrLinkedinOption } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
function NavbarCo() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#logo">
            <img src={logo} alt="..." />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#project">
                  Projects
                </a>
              </li>

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
            <div className="d-flex">
              <button
                className="btn btn-outline-light p-3 ps-4 pe-4"
                type="submit"
              >
                <a href="#contact">Let’s Connect</a>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarCo;
