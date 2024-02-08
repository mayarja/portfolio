import "./skills.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../assets/img/meter1.svg";
import img2 from "../../assets/img/meter2.svg";
import img3 from "../../assets/img/meter3.svg";
import colorsharp1 from "../../assets/img/color-sharp.png";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="skill text-center" id="skills">
      <div className="container">
        <h2>Skills</h2>
        <p>
          I have acquired these experiences and a plethora of skills through my
          work experiences in various companies.<br></br>
          These are the most important skills I have acquired
        </p>
        <div className="bib-slider">
          <div className="img-box">
            <Carousel
              responsive={responsive}
              infinite={true}
              transitionDuration={500}
              className="owl-carousel owl-theme skill-slider"
            >
              <div className="img-div">
                <img src={img1} alt="..." />
                <h5>Html</h5>
              </div>
              <div className="img-div">
                <img src={img2} alt="..." />
                <h5>Css</h5>
              </div>
              <div className="img-div">
                <img src={img3} alt="..." />
                <h5>React</h5>
              </div>
              <div className="img-div">
                <img src={img1} alt="..." />
                <h5>Javascript</h5>
              </div>
              <div className="img-div">
                <img src={img2} alt="..." />
                <h5>TypeScript</h5>
              </div>
              <div className="img-div">
                <img src={img2} alt="..." />
                <h5>Redux</h5>
              </div>
              <div className="img-div">
                <img src={img2} alt="..." />
                <h5>MUI</h5>
              </div>
              <div className="img-div">
                <img src={img2} alt="..." />
                <h5>Redux Toolkit</h5>
              </div>
              <div className="img-div">
                <img src={img3} alt="..." />
                <h5>Bootstrap</h5>
              </div>
              <div className="img-div">
                <img src={img3} alt="..." />
                <h5>Jquery</h5>
              </div>
              <div className="img-div">
                <img src={img2} alt="..." />
                <h5>Odoo 16</h5>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorsharp1} alt="..." />
    </div>
  );
}

export default Skills;
