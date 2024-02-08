import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import blog from "../../assets/img/blogimage.png";
import socialimage from "../../assets/img/socialimage.png";
import hotelsimage from "../../assets/img/hotelsimage.png";
import ihc from "../../assets/img/ihc.png";
import farmy from "../../assets/img/farmy.png";
import Aratok from "../../assets/img/aratook.png";
import esmile from "../../assets/img/e-smile.png";
import ApoDienst from "../../assets/img/ApoDienst.png";
import halalAca from "../../assets/img/halal-acdemy.png";
import Sela from "../../assets/img/sela.png";
import Modern from "../../assets/img/modern-arc.png";
import fatehclub from "../../assets/img/fateh.png";
import Miamed from "../../assets/img/miamed.png";
import milionimage from "../../assets/img/milionimage.png";
import eco1image from "../../assets/img/eco1image.png";
import weatherimage from "../../assets/img/weatherimage.png";
import kitchenimage from "../../assets/img/kitchenimage.png";
import "animate.css";
import "./Projects.css";
import Project from "./Project";
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";

function Projects() {
  const projects1 = [
    {
      title: "Halal Academy Project",
      description:
        "A React.js project for an educational academy focused on teaching halal slaughtering techniques and providing certificates upon completion. The admin has full control over the process from start to finish. Technologies used include React.js, Redux, and others",
      imgUrl: halalAca,
      page: "http://test-halal-academy.org.hqc.eu/",
      code: "",
      company: "Peak Link",
    },
    {
      title: "Miamed Project",
      description:
        "A React.js project tailored for a pharmaceutical manufacturing company. It enables the addition of products, assignment of responsible representatives for distribution, and manages various operational aspects. Technologies used include React.js, Redux, and others",
      imgUrl: Miamed,
      page: "",
      code: "",
      company: "Peak Link",
    },
    {
      title: "International Halal Center Project",
      description:
        "A React.js project serving as an introductory website for Hilal International Academy, aimed at promoting the company's services and offerings. Technologies used include React.js, Redux, and others",
      imgUrl: ihc,
      page: "https://halalcenter.global/",
      code: "",
      company: "Peak Link",
    },
    {
      title: "Farmy Project",
      description:
        "A React js  specialized project focused on selling vegetables. The system empowers the manager to add new products, monitor the status of orders, track delivery personnel, and manage various aspects of the sales process. Technologies used include React.js, Redux, and others",
      imgUrl: farmy,
      page: "",
      code: "",
      company: "Peak Link",
    },
    {
      title: "E-Smile Project",
      description:
        "(A  React js Freelance specialized project) designed for managing dental clinics in Dubai. The system enables the manager to schedule appointments, add staff members, and automate various calculations to streamline clinic operations. Technologies used include React.js, Redux, and others",
      imgUrl: esmile,
      page: "",
      code: "",
      company: "E-Smile",
    },
    {
      title: "Aratok Project",
      description:
        "An innovative project Freelance that offers online and recorded competitions where participants can earn points by solving questions. I had a role in implementing some of the tasks on this site.",
      imgUrl: Aratok,
      page: "https://aratok.com/",
      code: "",
      company: "Progam",
    },
    {
      title: "ApoDienst Project",
      description:
        "(A  React js Freelance specialized project)  tailored for managing health organizations in Germany. The system empowers managers to oversee multiple pharmacies efficiently and manage members within them across all aspects, including operations, staff, and inventory. Technologies used include React.js, Redux, and others",
      imgUrl: ApoDienst,
      page: "",
      code: "",
      company: "ApoDienst",
    },
  ];

  const projects2 = [
    {
      title: "Sela Project",
      description:
        "A wave project for the National Union of Syrian Students. I had a role in completing a number of tasks for this huge project by Odoo16 technology.",
      imgUrl: Sela,
      page: "https://selanuss.org/",
      code: "",
      company: "AL Tanmya",
    },
    {
      title: "Al-Fateh Club Project",
      description:
        "A wave project for Al-Fateh Club to manage all financial and accounting operations, display players, book tickets, and many more functionalities using Odoo 16 technology.",
      imgUrl: fatehclub,
      page: "https://fatehclub.com/en",
      code: "",
      company: "AL Tanmya",
    },
    {
      title: "Modern Architecture Project",
      description:
        "A special system developed for the Jumpsenborg Company. I played a key role in implementing various tasks, including organizing financial operations and addressing regulatory matters using Odoo 16 technology.",
      imgUrl: Modern,
      page: "",
      code: "",
      company: "AL Tanmya",
    },
  ];

  const projects3 = [
    {
      title: "E-commerce Project",
      description: "React js : Training project",
      imgUrl: eco1image,
      page: "https://mayarja.github.io/E-commerce/",
      code: "https://github.com/mayarja/E-commerce/tree/master",
    },
    {
      title: "Hotels Project",
      description: "React js : Training project",
      imgUrl: hotelsimage,
      page: "https://mayarja.github.io/Hotels/",
      code: "https://github.com/mayarja/Hotels/tree/master",
    },
    {
      title: "Social Project",
      description: "React js : Training project",
      imgUrl: socialimage,
      page: "https://mayarja.github.io/Social/",
      code: "https://github.com/mayarja/Social/tree/master",
    },
    {
      title: "E-commerce Project",
      description: "React js : Training project",
      imgUrl: kitchenimage,
      page: "https://mayarja.github.io/milano-react/",
      code: "https://github.com/mayarja/milano-react/tree/master",
    },
    {
      title: "Milion Project",
      description: "React js : Training project",
      imgUrl: milionimage,
      page: "https://mayarja.github.io/Milion/",
      code: "https://github.com/mayarja/Milion/tree/master",
    },
    {
      title: "Weather Project",
      description: "React js : Training project",
      imgUrl: weatherimage,
      page: "https://mayarja.github.io/Weather/",
      code: "https://github.com/mayarja/Weather/tree/master",
    },
    {
      title: "Blogs Project",
      description: "React js : Training project",
      imgUrl: blog,
      page: "https://mayarja.github.io/Blogs/",
      code: "https://github.com/mayarja/Blogs",
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    These are the most important projects that I have done that
                    focused on diversity and put the most important things
                    related to the react within the projects Modern and diverse
                    technologies
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">React Js Project</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Odoo Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          React js : Training project
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={"animate__animated animate__slideInUp"}
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects1.map((project, index) => {
                            return <Project key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => {
                            return <Project key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects3.map((project, index) => {
                            return <Project key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="..."></img>
    </section>
  );
}

export default Projects;
