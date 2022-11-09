import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import firstProjectImage from "./images/programming-1.png";
import secondProjectImage from "./images/programming-2.png";
import thirdProjectImage from "./images/programming-3.png";
import fourthProjectImage from "./images/programming-4.png";
import fifthProjectImage from "./images/programming-5.png";
import sixthProjectImage from "./images/programming-6.png";

const projects = [
  {
    photo: firstProjectImage,
    alt: "Comic Zen Garden",
    projectName: "Comic Zen Garden",
    projectDesc: "This was developed using HTML, SCSS, and JavaScript",
  },
  {
    photo: secondProjectImage,
    alt: "Pride, LA Chamber of Commerce",
    projectName: "Pride, LA Chamber of Commerce",
    projectDesc:
      "This was developed using HTML, CSS, and JavaScript while also using a weather API",
  },
  {
    photo: thirdProjectImage,
    alt: "Idaho Weather Site",
    projectName: "Idaho Weather Site",
    projectDesc:
      "This was developed using HTML, CSS, and JavaScript while also using a weather API",
  },
  {
    photo: fourthProjectImage,
    alt: "Asteroids Game",
    projectName: "Asteroids Game",
    projectDesc: "This was developed using Python with the Pygame library",
  },
  {
    photo: fifthProjectImage,
    alt: "Motor Dealership Site",
    projectName: "Motor Dealership Site",
    projectDesc: "This was developed using HTML, CSS, JavaScript, PHP, and SQL",
  },
  {
    photo: sixthProjectImage,
    alt: "Party Chat App",
    projectName: "Party Chat App",
    projectDesc:
      "This was developed using Dart, Flutter, and Firebase Cloud Storage",
  },
];

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <h4>{props.project.projectName}</h4>
        <img src={props.project.photo} alt={props.project.alt} className="modal-image"/>
        <p>{props.project.projectDesc}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


function ProjectsList() {
  const [modalShow, setModalShow] = React.useState(false);
  const [currenProject, setCurrentProject] = React.useState(projects[0])
  return (
    <>
      <Row>
        {projects.map((project) => (
          <Col xs={12} md={6} lg={4} className="mb-3">
            <Card
              key={project.photo}
              className="projectCard"
              onClick={() => {
                  setCurrentProject(project)
                  setModalShow(true)
                }}
            >
              <Card.Img
                variant="top"
                src={project.photo}
                className="projectPhoto"
              />
              <Card.Body>
                <Card.Title className="projectName">
                  {project.projectName}
                </Card.Title>
                <p className="card-click">Click for More Info</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <MyVerticallyCenteredModal
        project={currenProject}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ProjectsList;