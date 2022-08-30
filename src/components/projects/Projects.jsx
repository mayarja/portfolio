import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import blog from "../../assets/img/blogimage.png";
import socialimage from "../../assets/img/socialimage.png";
import hotelsimage from "../../assets/img/hotelsimage.png";
import milionimage from "../../assets/img/milionimage.png";
import eco1image from "../../assets/img/eco1image.png";
import weatherimage from "../../assets/img/weatherimage.png";
import "animate.css";
import "./Projects.css";
import Project from "./Project";
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";

function Projects() {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: eco1image,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: hotelsimage,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: socialimage,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: milionimage,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: weatherimage,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: blog,
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
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={"animate__animated animate__slideInUp"}
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <Project key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
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
